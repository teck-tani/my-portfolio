"use client";

import { useState } from "react";
import { careers } from "@/data/career";
import CareerCard from "./CareerCard";

const TURNING_POINT_YEAR = 2012;

export default function Career() {
  const [showEarly, setShowEarly] = useState(false);

  const sorted = [...careers].reverse();
  const devEntries = sorted.filter((e) => {
    const year = parseInt(e.period.start.split(".")[0]);
    return year >= TURNING_POINT_YEAR;
  });
  const earlyEntries = sorted.filter((e) => {
    const year = parseInt(e.period.start.split(".")[0]);
    return year < TURNING_POINT_YEAR;
  });

  const devCareers = careers.filter((c) => c.category !== "production");
  const clients = new Set(
    careers.filter((c) => c.client).map((c) => c.client)
  );

  return (
    <section id="career" className="pt-28 pb-20 px-6 bg-stone-50 dark:bg-stone-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-sm font-mono text-stone-500 dark:text-stone-400">03</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">경력</h2>
        </div>

        {/* Stats — inline prose */}
        <p className="text-lg text-stone-500 dark:text-stone-400 mb-12 ml-8 leading-[1.7]">
          <span className="font-semibold text-stone-900 dark:text-stone-100">17년</span> 이상의 경력,{" "}
          <span className="font-semibold text-stone-900 dark:text-stone-100">{devCareers.length}개</span> 개발 프로젝트,{" "}
          <span className="font-semibold text-stone-900 dark:text-stone-100">{clients.size}곳</span> 주요 고객사
        </p>

        {/* Developer Timeline (2012~) */}
        <div className="relative border-l-2 border-stone-200 dark:border-stone-700 ml-2">
          {devEntries.map((entry) => (
            <CareerCard key={entry.id} entry={entry} />
          ))}
        </div>

        {/* Turning Point + Early Career */}
        <div className="ml-2 mt-2">
          {/* Turning Point Marker */}
          <div className="relative pl-8 py-4 border-l-2 border-stone-200 dark:border-stone-700">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-3 h-3 rounded-full bg-amber-400 border-2 border-white dark:border-stone-900 z-10" />
            <div className="border border-dashed border-amber-300 dark:border-amber-600 rounded-xl p-4 bg-amber-50/50 dark:bg-amber-900/10">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                2011 ~ 2012 KOSTA 부트캠프 수료 후 개발자로 전환
              </p>
            </div>
          </div>

          {/* Early Career Toggle */}
          <button
            onClick={() => setShowEarly(!showEarly)}
            aria-expanded={showEarly}
            className="mt-4 ml-5 py-2 px-3 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors cursor-pointer rounded-lg"
          >
            {showEarly
              ? "초기 경력 접기 \u2191"
              : `초기 경력 보기 (${earlyEntries.length}건) \u2193`}
          </button>

          {/* Early Career Timeline */}
          {showEarly && (
            <div className="relative border-l-2 border-stone-200 dark:border-stone-700 mt-4">
              {earlyEntries.map((entry) => (
                <CareerCard key={entry.id} entry={entry} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
