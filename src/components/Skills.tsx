import { skills } from "@/data/skills";

const levelColors = {
  expert:
    "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  advanced:
    "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  intermediate:
    "bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-300",
  learning:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
};

const levelLabels = {
  expert: "Expert (숙련)",
  advanced: "Advanced (상급)",
  intermediate: "Intermediate (중급)",
  learning: "Learning (학습 중)",
};

export default function Skills() {
  const mainSkills = skills.filter((g) => g.category !== "Learning");
  const learningGroup = skills.find((g) => g.category === "Learning");

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-sm font-mono text-stone-500 dark:text-stone-400">04</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">기술 스택</h2>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-10 ml-8">
          {(Object.keys(levelLabels) as Array<keyof typeof levelLabels>).map(
            (level) => (
              <span
                key={level}
                className={`text-xs px-3 py-1 rounded-full ${levelColors[level]}`}
              >
                {levelLabels[level]}
              </span>
            )
          )}
        </div>

        {/* Main Skills — flat list, no cards */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {mainSkills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200 uppercase tracking-wide mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 text-sm rounded-full ${levelColors[skill.level]}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning — separated aside */}
        {learningGroup && (
          <div className="mt-10 pt-8 border-t border-stone-200 dark:border-stone-700">
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">현재 학습 중</p>
            <div className="flex flex-wrap gap-2">
              {learningGroup.items.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 text-sm rounded-full ${levelColors[skill.level]}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
