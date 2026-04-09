import Link from "next/link";
import Image from "next/image";
import { pilgrimsoftPortfolio } from "@/data/pilgrimsoft-projects";

export default function PilgrimsoftPage() {
  const data = pilgrimsoftPortfolio;

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          경력으로 돌아가기
        </Link>

        {/* === 회사 헤더 === */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {data.companyName}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            {data.period.start} ~ {data.period.end} · {data.role}
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: {data.client}
          </p>
          <p className="text-zinc-600 dark:text-zinc-300 mb-6">
            {data.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* === 프로젝트 목록 === */}
        {data.projects.map((project) => {
          const mobileShots = project.screenshots.filter((s) => s.type === "mobile");
          const webShots = project.screenshots.filter((s) => s.type === "web");
          const hasScreenshots = project.screenshots.length > 0;

          return (
            <section key={project.id} className="mb-16">
              <div className="border-b border-zinc-200 dark:border-zinc-700 pb-4 mb-8">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                  {project.subtitle}
                </p>
              </div>

              {project.summary && (
                <div className="border-l-4 border-teal-600 dark:border-teal-500 pl-5 py-3 mb-8 bg-teal-50/50 dark:bg-teal-900/10 rounded-r-lg">
                  <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
                    {project.summary}
                  </p>
                </div>
              )}

              <p className="text-zinc-600 dark:text-zinc-300 mb-8">
                {project.description}
              </p>

              {/* 담당 기능 */}
              <div className={hasScreenshots ? "mb-10" : ""}>
                <h3 className="text-xl font-semibold mb-4">담당 기능</h3>
                <ul className="space-y-3">
                  {project.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="text-blue-500 mt-0.5 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 모바일 화면 */}
              {mobileShots.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-6">모바일 화면</h3>
                  <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {mobileShots.map((shot, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="relative w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm">
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            width={390}
                            height={844}
                            className="w-full h-auto"
                          />
                        </div>
                        {shot.caption && (
                          <p className="mt-3 text-xs md:text-sm text-center text-zinc-500 dark:text-zinc-400">
                            {shot.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 웹 화면 */}
              {webShots.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-6">웹 화면</h3>
                  <div className="space-y-6">
                    {webShots.map((shot, i) => (
                      <div key={i}>
                        <div className="relative w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm">
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            width={1920}
                            height={1080}
                            className="w-full h-auto"
                          />
                        </div>
                        {shot.caption && (
                          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                            {shot.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
