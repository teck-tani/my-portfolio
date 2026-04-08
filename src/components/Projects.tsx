import { projects } from "@/data/projects";

const statusLabels = {
  completed: "완료",
  "in-progress": "진행 중",
  planned: "예정",
};

const statusColors = {
  completed: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  "in-progress": "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  planned: "bg-stone-100 text-stone-500 dark:bg-stone-700 dark:text-stone-400",
};

export default function Projects() {
  return (
    <section id="projects" className="pt-16 pb-20 px-6 bg-stone-50 dark:bg-stone-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-sm font-mono text-stone-500 dark:text-stone-400">02</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">개인 프로젝트</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-stone-200 dark:border-stone-700 p-6 hover:shadow-md transition-shadow bg-white dark:bg-stone-800"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${statusColors[project.status]}`}
                >
                  {statusLabels[project.status]}
                </span>
              </div>

              <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 leading-[1.7] max-w-[60ch]">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.link || project.github) && (
                  <div className="flex gap-4 text-sm font-medium">
                    {project.link && (
                      <a href={project.link} className="text-teal-700 dark:text-teal-400 hover:underline">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} className="text-stone-500 hover:underline">
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-stone-500 dark:text-stone-400 mt-8 ml-1">
          AI 앱, Next.js 웹유틸 등 개인 프로젝트 추가 예정
        </p>
      </div>
    </section>
  );
}
