import { careers } from "@/data/career";
import CareerCard from "./CareerCard";

export default function Career() {
  const sorted = [...careers].reverse();

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

        {/* Career Timeline */}
        <div className="relative border-l-2 border-stone-200 dark:border-stone-700 ml-2">
          {sorted.map((entry) => (
            <CareerCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
