import type { Metadata } from "next";
import Link from "next/link";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import { pilgrimsoftPortfolio } from "@/data/pilgrimsoft-projects";

const canonicalUrl =
  "https://dckwon-portfolio.vercel.app/portfolio/pilgrimsoft";

export const metadata: Metadata = {
  title: "필그림소프트 · 한국타이어 시스템",
  description:
    "한국타이어의 글로벌 영업, 설비 보전, 지게차 안전점검, 창고관리 시스템을 개발한 권득천의 Java/Spring 풀스택 프로젝트 사례입니다.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "필그림소프트 · 한국타이어 시스템 | 권득천 포트폴리오",
    description:
      "문제, 역할, 해결, 결과와 실제 구현 화면으로 살펴보는 한국타이어 운영 시스템 개발 사례",
    url: canonicalUrl,
    siteName: "권득천 포트폴리오",
    locale: "ko_KR",
    type: "article",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "권득천 Java·Spring B2B 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "필그림소프트 · 한국타이어 시스템 | 권득천 포트폴리오",
    description:
      "문제, 역할, 해결, 결과와 실제 구현 화면으로 살펴보는 한국타이어 운영 시스템 개발 사례",
    images: ["/opengraph-image"],
  },
};

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 ${direction === "left" ? "rotate-180" : ""}`}
    >
      <path
        d="M4 10h12m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CaseList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-[0.95rem] leading-7 text-stone-700 before:absolute before:left-0 before:top-[0.72rem] before:h-1 before:w-1 before:bg-teal-700 dark:text-stone-300 dark:before:bg-teal-400"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PilgrimsoftPage() {
  const data = pilgrimsoftPortfolio;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 dark:bg-stone-950 dark:text-stone-50">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-8 sm:pt-10 lg:px-10">
        <Link
          href="/#career-pilgrimsoft"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-stone-600 underline-offset-4 transition-colors hover:text-teal-800 hover:underline dark:text-stone-400 dark:hover:text-teal-300"
        >
          <ArrowIcon direction="left" />
          전체 경력으로 돌아가기
        </Link>

        <header className="grid gap-10 border-b border-stone-300 pb-12 pt-14 dark:border-stone-700 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16 lg:pb-16 lg:pt-20">
          <div>
            <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
              Selected work · 2025—Present
            </p>
            <h1 className="font-display text-[clamp(2.6rem,7vw,5.6rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-stone-950 dark:text-stone-50">
              한국타이어
              <span className="block text-stone-500 dark:text-stone-400">
                운영 시스템 개발
              </span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-700 dark:text-stone-300 sm:text-xl sm:leading-9">
              {data.summary} 인증과 지도 연동부터 설비 보전, 안전점검,
              창고 현장 업무까지 실제 운영 흐름을 웹과 모바일로 연결했습니다.
            </p>
          </div>

          <dl className="self-end border-t border-stone-400 text-sm dark:border-stone-600">
            <div className="grid grid-cols-[5rem_1fr] gap-4 border-b border-stone-300 py-4 dark:border-stone-700">
              <dt className="text-stone-500 dark:text-stone-400">소속</dt>
              <dd className="font-semibold">{data.companyName}</dd>
            </div>
            <div className="grid grid-cols-[5rem_1fr] gap-4 border-b border-stone-300 py-4 dark:border-stone-700">
              <dt className="text-stone-500 dark:text-stone-400">고객사</dt>
              <dd className="font-semibold">{data.client}</dd>
            </div>
            <div className="grid grid-cols-[5rem_1fr] gap-4 border-b border-stone-300 py-4 dark:border-stone-700">
              <dt className="text-stone-500 dark:text-stone-400">역할</dt>
              <dd className="font-semibold">{data.role}</dd>
            </div>
            <div className="grid grid-cols-[5rem_1fr] gap-4 border-b border-stone-300 py-4 dark:border-stone-700">
              <dt className="text-stone-500 dark:text-stone-400">기간</dt>
              <dd className="font-semibold tabular-nums">
                {data.period.start} — {data.period.end}
              </dd>
            </div>
            <div className="grid grid-cols-[5rem_1fr] gap-4 border-b border-stone-300 py-4 dark:border-stone-700">
              <dt className="text-stone-500 dark:text-stone-400">범위</dt>
              <dd className="font-semibold">4개 운영 시스템</dd>
            </div>
          </dl>

          <div className="lg:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
              Core environment
            </p>
            <p className="font-mono text-sm leading-7 text-stone-700 dark:text-stone-300">
              {data.techStack.join(" · ")}
            </p>
          </div>
        </header>

        <nav
          aria-label="필그림소프트 프로젝트 바로가기"
          className="sticky top-[4.5rem] z-30 -mx-5 border-b border-stone-300 bg-stone-50/95 px-5 py-3 shadow-[0_1px_0_rgba(28,25,23,0.03)] backdrop-blur-md dark:border-stone-700 dark:bg-stone-950/95 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
        >
          <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="mr-2 hidden shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-stone-500 sm:inline">
              Project index
            </span>
            {data.projects.map((project, index) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="inline-flex min-h-11 shrink-0 items-center border border-transparent px-3 text-sm font-semibold text-stone-600 transition-colors hover:border-stone-300 hover:bg-white hover:text-teal-800 dark:text-stone-400 dark:hover:border-stone-700 dark:hover:bg-stone-900 dark:hover:text-teal-300"
              >
                <span className="mr-2 font-mono text-[0.62rem] text-teal-700 dark:text-teal-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {project.title.split(" - ")[0]}
              </a>
            ))}
          </div>
        </nav>

        <div>
          {data.projects.map((project, projectIndex) => (
            <section
              key={project.id}
              id={project.id}
              aria-labelledby={`${project.id}-title`}
              className="scroll-mt-40 border-b border-stone-300 py-20 last:border-b-0 dark:border-stone-700 sm:py-24 lg:py-28"
            >
              <header className="grid gap-6 lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-10">
                <p className="font-mono text-sm tabular-nums text-teal-700 dark:text-teal-400">
                  / {String(projectIndex + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2
                    id={`${project.id}-title`}
                    className="font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-stone-950 dark:text-stone-50 sm:text-4xl lg:text-5xl"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400 sm:text-base">
                    {project.subtitle}
                  </p>
                  <p className="mt-6 max-w-3xl border-l-2 border-teal-700 pl-5 text-lg font-semibold leading-8 text-stone-800 dark:border-teal-400 dark:text-stone-200">
                    {project.summary}
                  </p>
                </div>
              </header>

              <div className="mt-14 grid gap-12 lg:grid-cols-[8rem_minmax(0,1fr)_18rem] lg:gap-10">
                <div aria-hidden="true" />

                <div className="space-y-12">
                  <section aria-labelledby={`${project.id}-problem`}>
                    <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                      Problem
                    </p>
                    <h3
                      id={`${project.id}-problem`}
                      className="mb-4 text-xl font-semibold tracking-tight"
                    >
                      해결해야 했던 문제
                    </h3>
                    <p className="text-[0.98rem] leading-8 text-stone-700 dark:text-stone-300">
                      {project.caseStudy.problem}
                    </p>
                  </section>

                  <section aria-labelledby={`${project.id}-role`}>
                    <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                      Role &amp; scope
                    </p>
                    <h3
                      id={`${project.id}-role`}
                      className="mb-4 text-xl font-semibold tracking-tight"
                    >
                      담당 역할과 범위
                    </h3>
                    <CaseList items={project.caseStudy.role} />
                  </section>

                  <section aria-labelledby={`${project.id}-solution`}>
                    <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                      Solution
                    </p>
                    <h3
                      id={`${project.id}-solution`}
                      className="mb-4 text-xl font-semibold tracking-tight"
                    >
                      구현한 해결 방식
                    </h3>
                    <CaseList items={project.caseStudy.solution} />
                  </section>

                  <section aria-labelledby={`${project.id}-result`}>
                    <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                      Result
                    </p>
                    <h3
                      id={`${project.id}-result`}
                      className="mb-4 text-xl font-semibold tracking-tight"
                    >
                      만들어낸 결과
                    </h3>
                    <CaseList items={project.caseStudy.result} />
                  </section>
                </div>

                <aside className="self-start border-t border-stone-400 pt-4 dark:border-stone-600 lg:sticky lg:top-24">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
                    기술 환경
                  </h3>
                  <ul className="mt-3 divide-y divide-stone-200 border-b border-stone-200 font-mono text-xs text-stone-700 dark:divide-stone-800 dark:border-stone-800 dark:text-stone-300">
                    {project.techStack.map((tech) => (
                      <li key={tech} className="py-2.5">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>

              <div className="lg:ml-[10.5rem]">
                <ProjectGallery
                  projectTitle={project.title}
                  screenshots={project.screenshots}
                />
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-8 flex flex-col gap-5 border-t border-stone-400 pt-8 dark:border-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">
              다른 경력도 이어서 살펴보세요.
            </p>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              전체 경력에서 Java/Spring 기반 B2B 프로젝트 흐름을 확인할 수 있습니다.
            </p>
          </div>
          <Link
            href="/#career"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 bg-teal-800 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-900 dark:bg-teal-500 dark:text-stone-950 dark:hover:bg-teal-400"
          >
            전체 경력 보기
            <ArrowIcon />
          </Link>
        </footer>
      </div>
    </div>
  );
}
