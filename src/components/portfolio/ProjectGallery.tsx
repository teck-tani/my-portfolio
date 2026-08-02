"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { ProjectDetail } from "@/data/types";

type ProjectScreenshot = ProjectDetail["screenshots"][number];

interface ProjectGalleryProps {
  projectTitle: string;
  screenshots: ProjectScreenshot[];
}

const PREVIEW_COUNT = 2;

function SafeImage({
  screenshot,
  sizes,
  className,
}: {
  screenshot: ProjectScreenshot;
  sizes: string;
  className: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${screenshot.alt} 이미지를 불러오지 못했습니다.`}
        className="grid min-h-64 w-full place-items-center border border-dashed border-stone-300 bg-stone-100 px-6 text-center text-sm text-stone-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300"
        style={{ aspectRatio: `${screenshot.width} / ${screenshot.height}` }}
      >
        <span>
          이미지를 불러오지 못했습니다.
          <span className="mt-1 block text-xs text-stone-500 dark:text-stone-400">
            {screenshot.alt}
          </span>
        </span>
      </div>
    );
  }

  return (
    <Image
      src={screenshot.src}
      alt={screenshot.alt}
      width={screenshot.width}
      height={screenshot.height}
      sizes={sizes}
      loading="lazy"
      decoding="async"
      unoptimized
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default function ProjectGallery({
  projectTitle,
  screenshots,
}: ProjectGalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const galleryId = useId();
  const dialogTitleId = useId();
  const hasMore = screenshots.length > PREVIEW_COUNT;
  const visibleScreenshots = expanded
    ? screenshots
    : screenshots.slice(0, PREVIEW_COUNT);
  const activeScreenshot =
    activeIndex === null ? null : screenshots[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;

    if (activeScreenshot && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [activeScreenshot]);

  if (screenshots.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby={`${galleryId}-heading`} className="mt-12">
      <div className="mb-6 flex items-end justify-between gap-4 border-b border-stone-300 pb-3 dark:border-stone-700">
        <div>
          <p className="mb-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            Evidence
          </p>
          <h3
            id={`${galleryId}-heading`}
            className="text-xl font-semibold tracking-tight text-stone-950 dark:text-stone-50"
          >
            구현 화면
          </h3>
        </div>
        <p className="shrink-0 text-xs tabular-nums text-stone-500 dark:text-stone-400">
          {visibleScreenshots.length} / {screenshots.length}
        </p>
      </div>

      <div
        id={`${galleryId}-items`}
        className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2"
      >
        {visibleScreenshots.map((screenshot, index) => (
          <figure key={screenshot.src} className="min-w-0">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${screenshot.caption ?? screenshot.alt} 크게 보기`}
              className="group relative flex min-h-72 w-full cursor-zoom-in items-center justify-center overflow-hidden border border-stone-300 bg-white p-3 text-left shadow-[0_1px_0_rgba(28,25,23,0.08)] transition-colors hover:border-teal-700 focus-visible:border-teal-700 dark:border-stone-700 dark:bg-stone-950 dark:hover:border-teal-400 dark:focus-visible:border-teal-400"
            >
              <SafeImage
                screenshot={screenshot}
                sizes="(min-width: 1152px) 34rem, (min-width: 768px) 46vw, calc(100vw - 3rem)"
                className={
                  screenshot.type === "mobile"
                    ? "h-auto max-h-[36rem] w-auto max-w-full object-contain"
                    : "h-auto w-full object-contain"
                }
              />
              <span className="absolute bottom-3 right-3 border border-stone-300 bg-stone-50/95 px-2 py-1 text-[0.65rem] font-medium text-stone-700 opacity-100 shadow-sm backdrop-blur-sm transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 dark:border-stone-700 dark:bg-stone-900/95 dark:text-stone-200">
                크게 보기
              </span>
            </button>
            <figcaption className="mt-3 flex items-start gap-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
              <span className="mt-0.5 shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-teal-700 dark:text-teal-400">
                {screenshot.type === "web" ? "Web" : "Mobile"}
              </span>
              <span>{screenshot.caption ?? screenshot.alt}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 border-t border-stone-200 pt-6 text-center dark:border-stone-800">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={`${galleryId}-items`}
            onClick={() => setExpanded((current) => !current)}
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-stone-400 px-5 py-2 text-sm font-semibold text-stone-800 transition-colors hover:border-teal-700 hover:bg-teal-50 hover:text-teal-900 dark:border-stone-600 dark:text-stone-200 dark:hover:border-teal-400 dark:hover:bg-teal-950/40 dark:hover:text-teal-100"
          >
            {expanded
              ? "화면 접기"
              : `나머지 ${screenshots.length - PREVIEW_COUNT}개 화면 보기`}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            >
              <path
                d="m5 7.5 5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
        className="m-auto max-h-[94vh] w-[min(94vw,80rem)] max-w-none overflow-hidden border border-stone-300 bg-stone-50 p-0 text-stone-950 shadow-2xl backdrop:bg-stone-950/85 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50"
      >
        {activeScreenshot && (
          <div className="flex max-h-[94vh] flex-col">
            <div className="flex min-h-14 items-center justify-between gap-4 border-b border-stone-300 px-4 py-2 dark:border-stone-700 sm:px-6">
              <div className="min-w-0">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">
                  {projectTitle}
                </p>
                <h4
                  id={dialogTitleId}
                  className="truncate text-sm font-semibold sm:text-base"
                >
                  {activeScreenshot.caption ?? activeScreenshot.alt}
                </h4>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => dialogRef.current?.close()}
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 border border-stone-400 px-3 text-sm font-semibold transition-colors hover:border-teal-700 hover:text-teal-800 dark:border-stone-600 dark:hover:border-teal-400 dark:hover:text-teal-300"
              >
                닫기
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="m5 5 10 10M15 5 5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="overflow-auto bg-stone-200/70 p-3 dark:bg-black sm:p-6">
              <div className="mx-auto flex min-h-[50vh] items-center justify-center">
                <SafeImage
                  screenshot={activeScreenshot}
                  sizes="94vw"
                  className="h-auto max-h-[78vh] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
