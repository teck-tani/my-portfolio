"use client";

import { useState } from "react";
import Link from "next/link";
import type { CareerEntry } from "@/data/types";

const categoryColors = {
  production: "border-zinc-300 dark:border-zinc-600",
  developer: "border-blue-400 dark:border-blue-500",
  lead: "border-cyan-400 dark:border-cyan-500",
};

const categoryDotColors = {
  production: "bg-zinc-400",
  developer: "bg-blue-500",
  lead: "bg-gradient-to-br from-blue-500 to-cyan-400",
};

const typeBadgeColors: Record<string, string> = {
  "프리랜서": "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  "정규직": "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  "스타트업": "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  "병역특례": "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  "실습": "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400",
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

  return (
    <div className="relative pl-8 pb-8 group">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-900 ${categoryDotColors[entry.category]} shadow-sm z-10`}
      />

      {/* Card */}
      <div
        className={`border-l-4 ${categoryColors[entry.category]} rounded-xl p-5 bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-shadow`}
      >
        <div className="flex gap-4">
          {/* 왼쪽: 기존 콘텐츠 */}
          <div
            className="flex-1 min-w-0 cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            {/* Header */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeBadgeColors[entry.type] ?? ""}`}>
                {entry.type}
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                {entry.period.start} ~ {entry.period.end} · {calcDuration(entry.period.start, entry.period.end)}
              </span>
            </div>

            {/* Company & Client */}
            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
              {entry.company}
              {entry.position && (
                <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                  {" "}· {entry.position}
                </span>
              )}
            </h3>
            {entry.client && (
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                고객사: {entry.client}
              </p>
            )}

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              {entry.description}
            </p>

            {/* Expanded Details */}
            {expanded && entry.details.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {entry.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-500 dark:text-zinc-400 flex items-start gap-2"
                  >
                    <span className="text-blue-500 mt-0.5 shrink-0">-</span>
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
                    className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Expand hint */}
            {entry.details.length > 0 && (
              <p className="text-xs text-zinc-400 mt-2">
                {expanded ? "접기" : "상세 보기"}
              </p>
            )}
          </div>

          {/* 오른쪽: 포트폴리오 버튼 */}
          {entry.portfolioSlug && (
            <Link
              href={`/portfolio/${entry.portfolioSlug}`}
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 flex flex-col items-center justify-center gap-2 w-24 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-200 dark:border-blue-700 hover:shadow-lg hover:scale-105 transition-all group/btn"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md group-hover/btn:scale-110 transition-transform animate-pulse">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                포트폴리오 보기 &rarr;
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
