import Link from "next/link";
import Image from "next/image";
import { careers } from "@/data/career";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioDetail({ params }: Props) {
  const { slug } = await params;
  const entry = careers.find((c) => c.portfolioSlug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-500">프로젝트를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href={`/#career-${slug}`}
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          경력으로 돌아가기
        </Link>

        {/* 헤더 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {entry.description}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-2">
          {entry.company} · {entry.period.start} ~ {entry.period.end}
        </p>
        {entry.client && (
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-8">
            고객사: {entry.client}
          </p>
        )}

        {/* 기술스택 */}
        {entry.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {entry.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* 업무 상세 */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">업무 내용</h2>
          <ul className="space-y-3">
            {entry.details.map((detail, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
              >
                <span className="text-blue-500 mt-1 shrink-0">-</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 스크린샷 */}
        {entry.screenshots && entry.screenshots.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">스크린샷</h2>
            <div className="space-y-6">
              {entry.screenshots.map((shot, i) => (
                <div key={i}>
                  <div className="relative w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                  {shot.caption && (
                    <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                      {shot.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
