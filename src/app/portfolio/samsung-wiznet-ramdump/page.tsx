import Link from "next/link";

export default function SamsungWiznetRamdumpPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-wiznet-ramdump"
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
            삼성전자 WizNet 이슈관리 시스템 추가 개발 (Ramdump 분석 모듈)
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            펜타크리드 · 2021.04 ~ 2021.11 · 풀스택 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성전자
          </p>
          <div className="flex flex-wrap gap-2">
            {["Vue.js", "Vuetify", "Jest", "Java", "Spring"].map((tech) => (
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
            기존 Java/JSP 기반 이슈관리 시스템에 Vue.js를 도입하여 Ramdump 분석 결과를 트리 구조로 시각화하는 모듈을 신규 개발했습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성전자 WizNet은 사내·사외 사용자를 대상으로 하는 이슈 관리 시스템으로,
              다양한 제품의 이슈를 추적하고 분석하는 역할을 하고 있었습니다.
            </p>
            <p>
              이번 프로젝트에서는 Ramdump 분석 결과를 시스템에 통합하는 것이 핵심 목표였습니다.
              Ramdump 데이터는 깊은 계층 구조의 파일 시스템 형태로 구성되어 있었고,
              이를 사용자가 직관적으로 탐색할 수 있는 UI가 필요했습니다.
            </p>
            <p>
              기존 시스템은 Java/JSP 기반이었지만,
              트리형 파일 탐색기처럼 동적인 인터랙션이 필요한 이 모듈은
              기존 기술만으로는 구현이 어려워 Vue.js를 부분 도입하기로 결정했습니다.
            </p>
            <p>
              또한 분석 룰(Rule)이 주기적으로 업데이트되어야 했기 때문에,
              수동 배포 없이 자동으로 최신 룰이 반영되는 체계도 함께 구축해야 했습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>팀 구성:</strong> 개발자 2명 (나 + 프론트엔드 개발자 1명)
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "Vue.js 기반 트리형 파일 시스템 UI 개발 — 서버에서 전달받은 JSON 데이터를 재귀적 트리 구조로 렌더링하고, 폴더 열기/닫기·파일 선택 등 인터랙션 구현",
                "기존 Java/JSP 시스템에 Vue.js를 부분 적용하기 위한 개발환경 세팅 및 빌드 파이프라인 구성",
                "Jest 기반 단위테스트 환경 도입 — 트리 데이터 파싱, 노드 검색 등 핵심 로직에 대한 테스트 코드 작성으로 안정성 확보",
                "Java 서버단에서 원본 Ramdump 데이터를 트리 UI에 맞는 JSON 구조로 재가공하는 API 개발",
                "일 1회 Rule 자동 업데이트 배치 개발 — 최신 분석 룰을 자동으로 가져와 시스템에 반영하는 스케줄러 구축",
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
              * 동료 개발자는 트리에서 항목 선택 시 우측에 표시되는 상세 정보 영역을 담당했으며,
              대용량 데이터 렌더링을 위해 Vue의 가상 스크롤(Virtual Scroll)을 적용하여 성능 문제를 해결했습니다.
            </p>
          </div>
        </section>

        {/* 3. 어려웠던 점 & 해결 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">어려웠던 점 &amp; 해결</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-6 leading-[1.8]">
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                문제 1: 기존 JSP 시스템에 Vue.js 부분 도입
              </h3>
              <p>
                WizNet은 Java/JSP 기반의 레거시 시스템이었기 때문에,
                Vue.js를 전체 적용하는 것은 불가능했습니다.
                특정 페이지의 특정 영역에만 Vue 컴포넌트를 마운트하는 하이브리드 구조가 필요했습니다.
              </p>
              <p className="mt-2">
                <strong>해결:</strong> JSP 페이지 내 특정 div 요소에 Vue 인스턴스를 마운트하는 방식으로
                기존 시스템을 건드리지 않으면서 Vue 컴포넌트를 독립적으로 동작시켰습니다.
                Webpack 빌드 설정을 커스터마이징하여 번들 파일을 JSP에서 로드할 수 있도록 구성했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                문제 2: 복잡한 트리 구조의 JSON 데이터 처리
              </h3>
              <p>
                Ramdump 데이터는 수십 단계의 깊은 계층 구조를 가지고 있었고,
                노드마다 파일/폴더 구분, 크기, 상태 등 다양한 메타정보가 포함되어 있었습니다.
                서버에서 내려주는 원본 데이터를 그대로 사용하기에는 구조가 맞지 않았습니다.
              </p>
              <p className="mt-2">
                <strong>해결:</strong> Java 서버단에서 원본 데이터를 트리 UI에 최적화된 JSON 구조로 재가공하는
                API를 개발했습니다. 각 노드에 필요한 메타정보만 선별하고,
                프론트엔드에서 재귀적으로 렌더링할 수 있는 표준화된 구조로 변환했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                문제 3: 테스트 문화 부재
              </h3>
              <p>
                기존 프로젝트에는 단위테스트가 전혀 없었고,
                새로 도입하는 Vue 컴포넌트와 트리 로직의 안정성을 보장할 방법이 필요했습니다.
              </p>
              <p className="mt-2">
                <strong>해결:</strong> Jest를 도입하여 트리 데이터 파싱, 노드 탐색, 폴더 열기/닫기 등
                핵심 비즈니스 로직에 대한 단위테스트를 작성했습니다.
                이를 통해 리팩토링 시에도 기존 기능이 깨지지 않음을 확인할 수 있었습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 leading-[1.8]">
            {[
              "기존 JSP 시스템에 Vue.js를 성공적으로 부분 도입하여 Ramdump 분석 트리 UI 구현 완료",
              "Jest 기반 단위테스트 환경 구축으로 핵심 로직의 안정성 확보 및 테스트 문화 도입",
              "일 1회 자동 배치를 통해 최신 분석 룰이 수동 개입 없이 시스템에 반영되는 체계 확립",
              "트리 선택 시 우측 상세 영역에 가상 스크롤 적용으로 대용량 데이터도 끊김 없이 렌더링",
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
