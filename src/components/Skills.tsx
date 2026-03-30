const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "REST API", "GraphQL"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Skills
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
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
