import Link from "next/link";
import { careers } from "@/data/career";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioDetail({ params }: Props) {
  const { slug } = await params;
  const entry = careers.find((c) => c.portfolioSlug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-500">프로젝트를 찾을 수 없습니다.</p>
      </div>
    );
  }

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

        {/* 헤더 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {entry.description}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-2">
          {entry.company} · {entry.period.start} ~ {entry.period.end}
        </p>
        {entry.client && (
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-8">
            고객사: {entry.client}
          </p>
        )}

        {/* 기술스택 */}
        {entry.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {entry.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* 업무 상세 */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">업무 내용</h2>
          <ul className="space-y-3">
            {entry.details.map((detail, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
              >
                <span className="text-blue-500 mt-1 shrink-0">-</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 스크린샷 영역 (추후 이미지 추가) */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">스크린샷</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-video rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-600 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">이미지 준비 중</p>
              </div>
            </div>
            <div className="aspect-video rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-600 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">이미지 준비 중</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
