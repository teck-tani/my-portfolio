import Link from "next/link";

export default function RollingStoryPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-rolling-story"
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
            북미향 웹툰 서비스 플랫폼 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            아르고테크놀리지 · 2015.02 ~ 2015.04 · 풀스택 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 롤링스토리
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "JSP", "JavaScript", "MyBatis"].map((tech) => (
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
            북미 시장을 겨냥한 웹툰 서비스 플랫폼의 사용자 화면을 개발했습니다.
            초기 기획 단계부터 고객과 직접 소통하며 기능을 정의하고,
            웹툰 뷰어·마일리지·PayPal 결제까지 핵심 기능을 구현한 프로젝트입니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              북미 시장을 대상으로 한 웹툰 서비스 플랫폼을 신규 개발하는 프로젝트였습니다.
              사용자가 회원가입·로그인 후 웹툰을 감상하고, 마일리지를 충전하여
              유료 콘텐츠를 결제할 수 있는 웹/앱 반응형 서비스를 구축해야 했습니다.
            </p>
            <p>
              북미 대상 서비스였기 때문에 결제 수단으로 PayPal 연동이 필수였고,
              마일리지 기반의 과금 체계를 설계·구현해야 했습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              사용자가 실제로 보고 사용하는 프론트엔드 화면 전반을 담당했습니다.
              퍼블리셔와 협업하여 웹/앱 반응형 UI를 구현했습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "초기 기획 단계에서 고객과 직접 미팅하며 기능 정의 및 화면 설계 주도",
                "웹툰 뷰어 화면 개발 — 이미지 순차 로딩 기반의 웹툰 감상 UI 구현",
                "마일리지 충전·차감·잔액 관리 등 복잡한 과금 로직 개발",
                "PayPal 결제 연동 — 북미 사용자 대상 결제 프로세스 구현",
                "회원가입·로그인 등 사용자 인증 화면 개발",
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
                기획자 부재 속 고객 직접 소통
              </h3>
              <p>
                프로젝트 초반에는 전문 기획자가 없었기 때문에,
                고객사와 직접 미팅하며 기능 요구사항을 정의하고 화면을 설계했습니다.
                개발자가 기획까지 겸해야 하는 상황에서 한계를 느끼던 중,
                PM이 전문 기획자를 투입해 주면서 이후에는 개발에만 집중할 수 있었습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                복잡한 마일리지 과금 체계 구현
              </h3>
              <p>
                이 프로젝트에서 기술적으로 가장 까다로웠던 부분은 마일리지 시스템이었습니다.
                충전·차감·잔액 계산은 물론, 다양한 조건에 따른 과금 규칙이 복잡하게 얽혀 있었습니다.
                정확한 금액 처리가 필수적인 결제 영역이었기 때문에 꼼꼼한 검증과 테스트를 거쳐 개발했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                PayPal 결제 연동
              </h3>
              <p>
                북미 사용자를 대상으로 한 서비스였기 때문에 PayPal을 결제 수단으로 연동했습니다.
                PayPal API를 통해 결제 요청·승인·완료 프로세스를 구현하고,
                결제 완료 시 마일리지가 자동으로 충전되는 흐름을 개발했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                퍼블리셔와의 협업
              </h3>
              <p>
                웹툰 뷰어는 이미지를 순차적으로 불러오는 구조로,
                퍼블리셔가 반응형 레이아웃과 UI 작업을 많이 담당해 주었고,
                저는 데이터 연동과 기능 로직에 집중하여 효율적으로 역할을 분담했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: "서비스 대상", value: "북미 시장" },
              { label: "결제 연동", value: "PayPal" },
              { label: "화면 대응", value: "웹/앱 반응형" },
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
              "북미향 웹툰 서비스 플랫폼 사용자 화면 전체 개발 완료",
              "복잡한 마일리지 과금 체계 설계 및 구현",
              "PayPal 결제 연동을 통한 북미 사용자 결제 프로세스 구축",
              "기획자 부재 상황에서 고객 직접 소통으로 초기 기능 정의 주도",
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
