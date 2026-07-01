import { skills } from "@/data/skills";

const skillColor =
  "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-sm font-mono text-stone-500 dark:text-stone-400">03</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">기술 스택</h2>
        </div>

        {/* Main Skills — flat list, no cards */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200 uppercase tracking-wide mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 text-sm rounded-full ${skillColor}`}
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
