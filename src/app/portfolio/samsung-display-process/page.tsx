import Link from "next/link";

export default function SamsungDisplayProcessPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-display-process"
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
            삼성반도체 공정관리 시스템 내재화 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            에이치투텍 · 2016.04 ~ 2016.06 · 프론트엔드 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성디스플레이
          </p>
          <div className="flex flex-wrap gap-2">
            {["JavaScript"].map((tech) => (
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
            처음 접하는 자체 JS 프레임워크 환경에서 반도체 공정관리 CRUD 화면을 개발한 프로젝트.
            낯선 기술 스택에 빠르게 적응하며 주어진 기간 내 성과를 낸 경험이었습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성반도체에서는 반도체 공정관리를 위한 기존 시스템을 내재화하는 프로젝트를 진행하고 있었습니다.
              외부 솔루션에 의존하던 공정관리 기능을 자체 시스템으로 전환하여
              유지보수 효율성과 보안을 강화하려는 목적이었습니다.
            </p>
            <p>
              개발 환경은 일반적인 웹 프레임워크가 아닌 삼성 내부에서 자체 개발한 JS 프레임워크를 사용해야 했으며,
              외부에 공개된 문서나 레퍼런스가 없는 상태에서 프레임워크를 학습하고 동시에 개발을 진행해야 하는 상황이었습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              프론트엔드 개발자로 투입되어 반도체 공정관리에 필요한 화면을 개발했습니다.
              약 3개 메뉴의 CRUD 기능 화면을 담당했습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "자체 JS 프레임워크 기반 공정관리 CRUD 화면 개발 (약 3개 메뉴)",
                "공정 데이터 등록·조회·수정·삭제 기능 구현",
                "자체 프레임워크 학습 및 개발 패턴 습득",
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

        {/* 3. 어려웠던 점 & 해결 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">어려웠던 점 &amp; 해결</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-4 leading-[1.8]">
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">문제: 처음 보는 자체 JS 프레임워크</h3>
              <p>
                일반적인 웹 개발과는 다른 동작 방식을 가진 자체 JS 프레임워크를 사용해야 했습니다.
                프레임워크 이름조차 외부에 알려져 있지 않을 정도로 내부 전용이었고,
                일반적인 웹 개발의 유연함과는 거리가 있어 익숙한 방식으로 접근하면 동작하지 않는 경우가 많았습니다.
              </p>
              <p className="mt-2">
                외부 문서나 커뮤니티 자료가 전혀 없었기 때문에
                기존 코드를 분석하고, 내부 문서를 참고하며 독학으로 프레임워크를 익혀야 했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">해결</h3>
              <ul className="space-y-2 ml-1">
                {[
                  "기존에 개발된 화면의 소스코드를 분석하여 프레임워크의 동작 패턴을 역으로 파악",
                  "내부 개발 가이드 문서와 팀원들의 도움을 통해 프레임워크 구조를 빠르게 학습",
                  "일반 웹과 다른 동작 방식(데이터 바인딩, 이벤트 처리 등)을 하나씩 정리하며 적응",
                  "짧은 기간이었지만 CRUD 3개 메뉴를 정상적으로 완성하여 납품",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-0.5 shrink-0">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. 성장 포인트 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">이 프로젝트에서 얻은 것</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              비록 짧은 기간의 프로젝트였지만, 낯선 기술 환경에 빠르게 적응하는 역량을 키운 경험이었습니다.
            </p>
            <ul className="space-y-2 ml-1">
              {[
                "문서가 부족한 환경에서 코드 분석을 통해 기술을 습득하는 자기 학습 능력 향상",
                "일반적인 웹 프레임워크와 다른 방식의 프레임워크를 경험하며 기술적 시야 확장",
                "어떤 기술 환경이든 빠르게 적응할 수 있다는 자신감을 얻음",
                "이후 다양한 자체 프레임워크 환경(SDP, Vue 기반 커스텀 등)에서의 적응력에 기반이 됨",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-teal-500 mt-0.5 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: "프로젝트 기간", value: "3개월" },
              { label: "개발 메뉴", value: "3개" },
              { label: "CRUD 화면", value: "완성" },
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
              "처음 접하는 자체 JS 프레임워크를 단기간에 학습하여 실무 개발에 적용",
              "공정관리 CRUD 3개 메뉴를 기간 내 정상 완성 및 납품",
              "낯선 기술 환경에서도 빠르게 적응하는 학습 능력과 유연성을 입증",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-blue-500 mt-0.5 shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
