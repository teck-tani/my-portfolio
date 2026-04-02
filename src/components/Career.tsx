import { careers } from "@/data/career";
import CareerCard from "./CareerCard";

const TURNING_POINT_YEAR = 2012;

export default function Career() {
  const sorted = [...careers].reverse();

  const devCareers = careers.filter((c) => c.category !== "production");
  const clients = new Set(
    careers.filter((c) => c.client).map((c) => c.client)
  );

  return (
    <section id="career" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          경력
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="text-center p-4 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              17+
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              총 경력 연수
            </p>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {devCareers.length}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              개발 프로젝트
            </p>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm">
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {clients.size}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              주요 고객사
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-700 ml-2">
          {sorted.map((entry, index) => {
            const prevEntry = sorted[index - 1];
            const entryYear = parseInt(entry.period.start.split(".")[0]);
            const prevYear = prevEntry
              ? parseInt(prevEntry.period.start.split(".")[0])
              : null;

            const showTurningPoint =
              prevYear !== null &&
              prevYear >= TURNING_POINT_YEAR &&
              entryYear < TURNING_POINT_YEAR;

            return (
              <div key={entry.id}>
                {showTurningPoint && (
                  <div className="relative pl-8 py-6">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-3 h-3 rounded-full bg-amber-400 border-2 border-white dark:border-zinc-900 z-10" />
                    <div className="border border-dashed border-amber-300 dark:border-amber-600 rounded-xl p-4 bg-amber-50/50 dark:bg-amber-900/10 text-center">
                      <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                        2011 ~ 2012 KOSTA 부트캠프 수료 후 개발자로 전환
                      </p>
                    </div>
                  </div>
                )}
                <CareerCard entry={entry} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
