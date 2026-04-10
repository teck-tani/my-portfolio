"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CareerEntry } from "@/data/types";

const categoryColors = {
  production: "border-stone-300 dark:border-stone-600",
  developer: "border-teal-600 dark:border-teal-500",
  lead: "border-teal-700 dark:border-teal-400",
};

const categoryDotColors = {
  production: "bg-stone-400",
  developer: "bg-teal-600",
  lead: "bg-teal-700",
};

const typeBadgeColors: Record<string, string> = {
  "프리랜서": "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  "정규직": "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  "스타트업": "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  "병역특례": "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  "실습": "bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-400",
};

function calcDuration(start: string, end: string): string {
  const [sy, sm] = start.split(".").map(Number);
  const isNow = end === "현재";
  const [ey, em] = isNow
    ? [new Date().getFullYear(), new Date().getMonth() + 1]
    : end.split(".").map(Number);
  const months = (ey - sy) * 12 + (em - sm);
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y > 0 && m > 0) return `${y}년 ${m}개월`;
  if (y > 0) return `${y}년`;
  return `${m}개월`;
}

export default function CareerCard({ entry }: { entry: CareerEntry }) {
  const [expanded, setExpanded] = useState(false);
  const isOngoing = entry.period.end === "현재";
  const [duration, setDuration] = useState(() =>
    isOngoing ? "" : calcDuration(entry.period.start, entry.period.end)
  );

  useEffect(() => {
    if (isOngoing) {
      setDuration(calcDuration(entry.period.start, entry.period.end));
    }
  }, [isOngoing, entry.period.start, entry.period.end]);

  return (
    <div id={entry.portfolioSlug ? `career-${entry.portfolioSlug}` : undefined} className="relative pl-8 pb-8 group">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white dark:border-stone-900 ${categoryDotColors[entry.category]} shadow-sm z-10`}
      />

      {/* Card */}
      <div
        className={`border-l-4 ${categoryColors[entry.category]} rounded-xl p-5 bg-white dark:bg-stone-800 shadow-sm hover:shadow-md transition-shadow`}
      >
        <div className="flex gap-4">
          {/* 왼쪽: 기존 콘텐츠 */}
          <div
            className="flex-1 min-w-0 cursor-pointer text-left"
            role="button"
            tabIndex={0}
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExpanded(!expanded);
              }
            }}
          >
            {/* Header */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeBadgeColors[entry.type] ?? ""}`}>
                {entry.type}
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400">
                {entry.period.start} ~ {entry.period.end}{duration && ` · ${duration}`}
              </span>
            </div>

            {/* Company & Client */}
            <h3 className="text-base font-semibold text-stone-800 dark:text-stone-200">
              {entry.company}
              {entry.position && (
                <span className="text-sm font-normal text-stone-500 dark:text-stone-400">
                  {" "}· {entry.position}
                </span>
              )}
            </h3>
            {entry.client && (
              <p className="text-sm text-teal-700 dark:text-teal-400 font-medium">
                고객사: {entry.client}
              </p>
            )}

            {/* Description */}
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed max-w-[60ch]">
              {entry.description}
            </p>

            {/* Expanded Details */}
            {expanded && entry.details.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {entry.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm text-stone-500 dark:text-stone-400 flex items-start gap-2"
                  >
                    <span className="text-teal-600 mt-0.5 shrink-0">-</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Stack */}
            {entry.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {entry.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Expand hint */}
            {entry.details.length > 0 && (
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                {expanded ? "접기" : "상세 보기"}
              </p>
            )}
          </div>

          {/* 오른쪽: 포트폴리오 버튼 */}
          {entry.portfolioSlug && (
            <Link
              href={`/portfolio/${entry.portfolioSlug}`}
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 flex flex-col items-center justify-center gap-2 w-24 rounded-xl bg-stone-50 dark:bg-stone-700/50 border border-stone-200 dark:border-stone-600 hover:shadow-md hover:border-teal-600 dark:hover:border-teal-500 transition-all group/btn"
            >
              <div className="w-10 h-10 rounded-full bg-teal-700 dark:bg-teal-600 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-stone-600 dark:text-stone-300 text-center">
                포트폴리오<br />상세보기
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
