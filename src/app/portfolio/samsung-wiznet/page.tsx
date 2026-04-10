import Link from "next/link";

export default function SamsungWiznetPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-wiznet"
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
            삼성전자 WizNet(이슈관리 시스템) 리팩토링
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            펜타크리드 · 2018.12 ~ 2019.03 · 풀스택 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성전자
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "Spring", "MyBatis", "JavaScript", "jQuery", "HTML", "CSS"].map((tech) => (
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
            기존 개발자 1명이 유지보수하던 이슈 관리 시스템에 투입되어,
            웹 화면 중심의 코드 개선 및 기능 유지보수를 수행했습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성전자 WizNet은 사내·사외 사용자를 대상으로 하는 이슈 관리 시스템으로,
              제품 관련 이슈를 등록·추적·관리하는 웹 기반 플랫폼이었습니다.
            </p>
            <p>
              기존에 개발자 1명이 단독으로 유지보수를 담당하고 있었으며,
              시스템의 코드 품질 개선과 기능 고도화를 위해 추가 인력이 투입되었습니다.
            </p>
            <p>
              Jira 연동과 같은 외부 시스템 통합은 별도 개발자가 담당했고,
              저는 웹 화면 영역의 유지보수와 개선 작업을 맡았습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>팀 구성:</strong> 기존 유지보수 개발자 1명 + 추가 투입 개발자 (나 포함)
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "이슈 관리 웹 화면의 코드 리팩토링 및 기능 개선",
                "사내·사외 사용자 대상 UI/UX 유지보수 및 버그 수정",
                "기존 코드베이스 분석 후 개선 포인트 도출 및 적용",
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
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              * Jira 연동 기능은 별도 개발자가 담당했습니다.
            </p>
          </div>
        </section>

        {/* 3. 개발 과정 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">개발 과정</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-6 leading-[1.8]">
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                기존 시스템 파악 및 코드 개선
              </h3>
              <p>
                기존 개발자가 단독으로 운영하던 시스템이었기 때문에,
                먼저 전체 코드베이스를 파악하고 개선이 필요한 부분을 식별하는 것부터 시작했습니다.
                웹 화면 중심으로 코드 정리와 기능 개선을 진행했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                짧은 기간 내 안정적 유지보수
              </h3>
              <p>
                약 4개월이라는 비교적 짧은 기간의 프로젝트였기 때문에,
                큰 구조 변경보다는 실질적으로 필요한 부분의 코드 품질 개선과
                사용자 편의성 향상에 집중했습니다.
                기존 시스템의 안정성을 유지하면서 점진적으로 개선하는 방식으로 진행했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 leading-[1.8]">
            {[
              "이슈 관리 시스템 웹 화면의 코드 품질 개선 및 유지보수성 향상",
              "사내·사외 사용자 대상 기능 안정화 및 개선 완료",
              "기존 시스템 안정성을 유지하면서 점진적 리팩토링 수행",
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
