const projects = [
  {
    title: "Project 1",
    description: "A brief description of the project and what it does.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of the project and what it does.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of the project and what it does.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projects
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-shadow bg-white dark:bg-zinc-800"
            >
              {/* Image placeholder */}
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 mb-4" />

              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm font-medium">
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-zinc-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
