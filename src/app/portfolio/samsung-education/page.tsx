import Link from "next/link";

export default function SamsungEducationPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-education"
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
            삼성전자 사내 교육·평가 시스템 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            엔셀 · 2020.01 ~ 2021.02 · 풀스택 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성전자
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "SDP Framework", "JavaScript", "jQuery", "HTML", "CSS"].map((tech) => (
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
            삼성전자 DS2 Academy에서 직원들이 참여하는 경진대회 시스템의
            사용자 화면을 개발했습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성전자 DS2 Academy에서 운영하는 사내 교육·평가 관련 시스템 개발 프로젝트였습니다.
              크게 두 가지 시스템을 개발했습니다.
            </p>
            <p>
              <strong>경진대회 시스템</strong>으로, 삼성전자 직원들이 팀을 구성하고
              과제를 등록하여 경연을 진행하는 시스템이었습니다.
            </p>
            <p>
              기존에 운영 중이던 시스템에 새로운 메뉴를 추가하는 방식으로 진행되었기 때문에,
              기존 시스템의 아키텍처와 삼성 표준 프레임워크(SDP)를 따라 개발해야 했습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>팀 구성:</strong> 설계자 1명 + 개발자 2명
            </p>
            <p>
              개발자 2명 중 한 명은 Admin(관리자) 쪽 세팅 화면을 담당했고,
              저는 사용자들이 실제로 보고 사용하는 화면을 전담하여 개발했습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "DS2 Academy 경진대회 시스템 — 직원 팀 구성, 과제 등록, 경연 진행 등 사용자 화면 개발",
                "기존 운영 시스템에 신규 메뉴를 추가하는 방식으로 개발",
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
                탄탄한 설계 기반의 안정적 개발
              </h3>
              <p>
                설계자가 사전에 체계적으로 설계를 완료해 두었기 때문에,
                명확한 요구사항과 구조 위에서 개발을 진행할 수 있었습니다.
                설계 문서를 기반으로 화면과 기능을 구현하는 데 집중했으며,
                특별한 기술적 난관 없이 일정에 맞춰 안정적으로 개발을 완료했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                역할 분담을 통한 효율적 협업
              </h3>
              <p>
                Admin 세팅 영역과 사용자 화면 영역을 명확히 분리하여 개발했기 때문에,
                서로 간섭 없이 각자의 영역에 집중할 수 있었습니다.
                관리자가 경진대회나 시험을 세팅하면, 사용자들이 해당 화면에서
                참여·제출·조회할 수 있는 구조로 자연스럽게 연결되었습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 leading-[1.8]">
            {[
              "DS2 Academy 경진대회 시스템 사용자 화면 개발 완료 — 팀 구성, 과제 등록, 경연 진행 기능",
              "기존 운영 시스템에 안정적으로 신규 메뉴 추가, 일정 내 납품 완료",
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
