import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const sourceRoot = path.join(projectRoot, "src");
const publicRoot = path.join(projectRoot, "public");

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const JPEG_START_OF_FRAME_MARKERS = new Set([
  0xc0,
  0xc1,
  0xc2,
  0xc3,
  0xc5,
  0xc6,
  0xc7,
  0xc9,
  0xca,
  0xcb,
  0xcd,
  0xce,
  0xcf,
]);

async function walkFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(directory, entry.name);
      return entry.isDirectory() ? walkFiles(absolutePath) : [absolutePath];
    }),
  );

  return nestedFiles.flat();
}

function toPosixPath(value) {
  return value.split(path.sep).join("/");
}

function readPngDimensions(buffer) {
  if (buffer.length < 24 || !buffer.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error("유효한 PNG 시그니처 또는 IHDR 헤더가 없습니다.");
  }

  if (buffer.toString("ascii", 12, 16) !== "IHDR") {
    throw new Error("PNG의 첫 청크가 IHDR이 아닙니다.");
  }

  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  if (width === 0 || height === 0) {
    throw new Error("PNG 너비 또는 높이가 0입니다.");
  }

  return { width, height, format: "PNG" };
}

function readJpegDimensions(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    throw new Error("유효한 JPEG SOI 마커가 없습니다.");
  }

  let offset = 2;
  while (offset < buffer.length) {
    while (offset < buffer.length && buffer[offset] === 0xff) {
      offset += 1;
    }

    if (offset >= buffer.length) break;
    const marker = buffer[offset];
    offset += 1;

    if (marker === 0x00 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
      continue;
    }

    if (offset + 2 > buffer.length) {
      throw new Error("JPEG 세그먼트 길이를 읽을 수 없습니다.");
    }

    const segmentLength = buffer.readUInt16BE(offset);
    if (segmentLength < 2 || offset + segmentLength > buffer.length) {
      throw new Error("JPEG 세그먼트 길이가 올바르지 않습니다.");
    }

    if (JPEG_START_OF_FRAME_MARKERS.has(marker)) {
      if (segmentLength < 7) {
        throw new Error("JPEG SOF 세그먼트가 너무 짧습니다.");
      }

      const height = buffer.readUInt16BE(offset + 3);
      const width = buffer.readUInt16BE(offset + 5);
      if (width === 0 || height === 0) {
        throw new Error("JPEG 너비 또는 높이가 0입니다.");
      }

      return { width, height, format: "JPEG" };
    }

    offset += segmentLength;
  }

  throw new Error("JPEG SOF 마커를 찾지 못했습니다.");
}

function readImageDimensions(buffer, extension) {
  switch (extension.toLowerCase()) {
    case ".png":
      return readPngDimensions(buffer);
    case ".jpg":
    case ".jpeg":
      return readJpegDimensions(buffer);
    default:
      throw new Error(`지원하지 않는 이미지 형식입니다: ${extension || "확장자 없음"}`);
  }
}

async function collectImageReferences() {
  const sourceFiles = (await walkFiles(sourceRoot)).filter((file) => /\.tsx?$/.test(file));
  const references = new Map();
  const referencePattern = /(["'`])(\/(?:my\.jpg|img\/[^"'`\r\n?#]+)(?:[?#][^"'`\r\n]*)?)\1/g;
  const publicImportPattern =
    /from\s+(["'`])[^"'`\r\n]*\/public\/(my\.jpg|img\/[^"'`\r\n?#]+)\1/g;

  function addReference(publicPath, sourceFile, index, source) {
    const relativeSource = toPosixPath(path.relative(projectRoot, sourceFile));
    const line = source.slice(0, index).split("\n").length;
    const locations = references.get(publicPath) ?? [];
    locations.push(`${relativeSource}:${line}`);
    references.set(publicPath, locations);
  }

  for (const sourceFile of sourceFiles) {
    const source = await readFile(sourceFile, "utf8");
    let match;

    while ((match = referencePattern.exec(source)) !== null) {
      const publicPath = match[2].split(/[?#]/, 1)[0];
      addReference(publicPath, sourceFile, match.index, source);
    }

    while ((match = publicImportPattern.exec(source)) !== null) {
      addReference(`/${match[2]}`, sourceFile, match.index, source);
    }
  }

  return references;
}

async function main() {
  const references = await collectImageReferences();
  if (references.size === 0) {
    throw new Error("src의 TS/TSX 파일에서 /my.jpg 또는 /img/... 참조를 찾지 못했습니다.");
  }

  const publicFiles = await walkFiles(publicRoot);
  const exactPaths = new Map();
  const caseInsensitivePaths = new Map();

  for (const publicFile of publicFiles) {
    const relativePath = toPosixPath(path.relative(publicRoot, publicFile));
    exactPaths.set(relativePath, publicFile);
    caseInsensitivePaths.set(relativePath.toLocaleLowerCase("en-US"), relativePath);
  }

  const errors = [];
  const results = [];

  for (const [publicPath, locations] of [...references].sort(([left], [right]) => left.localeCompare(right))) {
    const relativePath = publicPath.slice(1);
    const exactFile = exactPaths.get(relativePath);

    if (!exactFile) {
      const actualCase = caseInsensitivePaths.get(relativePath.toLocaleLowerCase("en-US"));
      const problem = actualCase
        ? `대소문자 불일치: ${publicPath} -> /${actualCase}`
        : `파일 없음: ${publicPath}`;
      errors.push(`${problem} (${locations.join(", ")})`);
      continue;
    }

    try {
      const buffer = await readFile(exactFile);
      const dimensions = readImageDimensions(buffer, path.extname(relativePath));
      results.push({ publicPath, locations, ...dimensions });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push(`이미지 검사 실패: ${publicPath} — ${message} (${locations.join(", ")})`);
    }
  }

  for (const result of results) {
    console.log(
      `✓ ${result.publicPath} (${result.format} ${result.width}×${result.height}, 참조 ${result.locations.length}곳)`,
    );
  }

  if (errors.length > 0) {
    console.error(`\n자산 검사 실패 (${errors.length}건)`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  console.log(`\n자산 검사 통과: 이미지 ${results.length}개, 참조 ${[...references.values()].flat().length}곳`);
}

main().catch((error) => {
  console.error(`자산 검사를 실행하지 못했습니다: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
