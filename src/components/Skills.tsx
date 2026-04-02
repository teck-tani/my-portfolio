import { skills } from "@/data/skills";

const levelColors = {
  expert:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  advanced:
    "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
  intermediate:
    "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300",
  learning:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
};

const levelLabels = {
  expert: "Expert",
  advanced: "Advanced",
  intermediate: "Intermediate",
  learning: "Learning",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          기술 스택
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">{group.category}</h3>
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
      </div>
    </section>
  );
}
