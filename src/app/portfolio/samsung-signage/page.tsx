import Link from "next/link";

export default function SamsungSignagePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-signage"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          경력으로 돌아가기
        </Link>

        {/* 헤더 */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            삼성전자 디지털 사이니지 광고 관리 플랫폼 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            아르고테크놀리지 · 2014.09 ~ 2014.12 · 프론트엔드 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성전자
          </p>
          <div className="flex flex-wrap gap-2">
            {["JavaScript (Prototype.js)", "HTML", "CSS"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* 핵심 요약 */}
        <div className="border-l-4 border-teal-600 dark:border-teal-500 pl-5 py-3 mb-12 bg-teal-50/50 dark:bg-teal-900/10 rounded-r-lg">
          <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
            첫 프리랜서 프로젝트로, 약 100명 규모의 대규모 개발 조직에서
            디지털 사이니지 광고 콘텐츠 편집 에디터의 기능 개선 및 유지보수를 담당했습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성전자에서 운영하는 <strong>Managed Signage Services Platform</strong>은
              디지털 사이니지(전자 광고판)에 게시될 광고 콘텐츠를 제작·관리하는 플랫폼이었습니다.
            </p>
            <p>
              이 플랫폼의 핵심 기능 중 하나가 광고 콘텐츠 편집 에디터로,
              사용자가 웹 브라우저에서 직접 광고판에 표시될 내용을 편집할 수 있는
              일종의 비주얼 에디터였습니다.
            </p>
            <p>
              이미 만들어져 있던 에디터의 기능 개선과 버그 수정이 필요한 상황이었고,
              약 100명 규모의 개발자가 상주하는 대규모 프로젝트의 일원으로 투입되었습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>프로젝트 규모:</strong> 약 100명 상주 개발
            </p>
            <p>
              광고 콘텐츠 편집 에디터 파트를 담당하여 기능 개선 및 유지보수를 수행했습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "JavaScript(Prototype.js) 기반 광고 콘텐츠 비주얼 에디터 기능 개선",
                "사용자가 웹에서 광고판 게시 콘텐츠를 편집할 수 있는 에디터 UI 개선 및 버그 수정",
                "기존 에디터 코드 분석 및 유지보수",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
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
        </section>

        {/* 3. 개발 과정 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">개발 과정</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-6 leading-[1.8]">
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                첫 프리랜서 프로젝트, 대규모 현장 경험
              </h3>
              <p>
                이 프로젝트는 첫 번째 프리랜서 프로젝트였습니다.
                약 100명의 개발자가 상주하는 대규모 프로젝트 현장에서
                체계적인 개발 프로세스와 대규모 조직의 협업 방식을 경험할 수 있었습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                레거시 에디터 코드 분석 및 개선
              </h3>
              <p>
                이미 구축되어 있던 광고 콘텐츠 편집 에디터를 인수받아 코드를 분석하고,
                기능 개선 및 버그 수정 작업을 진행했습니다.
                Prototype.js 기반의 JavaScript 코드로 작성된 에디터였으며,
                광고판에 게시될 텍스트, 이미지, 레이아웃 등을 편집하는 기능을 담당했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                프로젝트의 갑작스러운 종료
              </h3>
              <p>
                짧은 기간 동안 진행되던 프로젝트였는데,
                삼성전자가 해당 사업을 접기로 결정하면서
                약 100명의 개발 인력이 한꺼번에 철수하게 되는 상황이 발생했습니다.
                프리랜서로서 프로젝트의 예기치 못한 종료를 처음 경험한 사례였으며,
                이를 통해 IT 프로젝트의 불확실성과 유연한 대응의 중요성을 체감했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "프로젝트 규모", value: "~100명" },
              { label: "프로젝트 기간", value: "4개월" },
              { label: "담당 파트", value: "에디터" },
              { label: "프로젝트 유형", value: "첫 프리랜서" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
              >
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 leading-[1.8]">
            {[
              "광고 콘텐츠 비주얼 에디터 기능 개선 및 안정화 수행",
              "약 100명 규모의 대규모 프로젝트에서 체계적인 개발 프로세스 경험",
              "첫 프리랜서 프로젝트로 독립적인 개발 커리어의 시작점",
              "사업 중단으로 인한 갑작스러운 프로젝트 철수 — IT 프로젝트의 불확실성을 체감",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-blue-500 mt-0.5 shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
            * 보안 프로젝트 특성상 스크린샷이 없습니다.
          </p>
        </section>
      </div>
    </div>
  );
}
