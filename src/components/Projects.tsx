import { projects } from "@/data/projects";

const statusLabels = {
  completed: "완료",
  "in-progress": "진행 중",
  planned: "예정",
};

const statusColors = {
  completed: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  "in-progress": "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  planned: "bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          사이드 프로젝트
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-shadow bg-white dark:bg-zinc-800"
            >
              {/* Status badge */}
              <span
                className={`inline-block text-xs px-2 py-0.5 rounded-full mb-3 ${statusColors[project.status]}`}
              >
                {statusLabels[project.status]}
              </span>

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

              {(project.link || project.github) && (
                <div className="flex gap-4 text-sm font-medium">
                  {project.link && (
                    <a href={project.link} className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="text-zinc-500 hover:underline">
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-600 p-6 flex flex-col items-center justify-center text-center">
            <p className="text-3xl mb-3">+</p>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              AI 앱, Next.js 웹유틸 등
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
              사이드 프로젝트 추가 예정
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
