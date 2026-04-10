import Link from "next/link";

export default function SamsungOhtMonitoringPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-oht-monitoring"
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
            삼성반도체 생산라인 모니터링 시스템 전환
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            노리시스템 · 2018.04 ~ 2018.11 · 프론트엔드 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성반도체
          </p>
          <div className="flex flex-wrap gap-2">
            {["D3.js", "JavaScript", "HTML5"].map((tech) => (
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
            Flash 기반 OHT(자동반송장치) 모니터링 시스템을 D3.js + HTML5로 전면 전환하고,
            DOM 최적화를 통해 대규모 실시간 모니터링의 성능 문제를 해결했습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성반도체 생산라인에서는 OHT(Overhead Hoist Transport, 자동반송장치)의
              실시간 운행 현황을 모니터링하는 시스템을 운영하고 있었습니다.
              기존 시스템은 Flash 기반으로 개발되어 있었으나,
              Flash 지원 종료에 따라 웹 표준 기술로의 전환이 필요했습니다.
            </p>
            <p>
              모니터링 화면에서는 반도체 생산라인의 각 구간을 시각화하고,
              OHT의 운행 상태를 실시간으로 표시했습니다.
              네비게이션처럼 각 구간의 정체 여부를 색상으로 구분하여
              <span className="text-blue-500 font-medium"> 파란색은 원활</span>,
              <span className="text-red-500 font-medium"> 빨간색은 정체 구간</span>으로
              한눈에 파악할 수 있도록 했습니다.
            </p>
            <p>
              그런데 HTML5로 전환하면서 심각한 성능 문제가 발생했습니다.
              반도체 라인의 수많은 구간과 OHT를 개별 DOM 요소로 생성하다 보니,
              DOM 수가 폭발적으로 늘어나 웹 화면이 심하게 버벅거리는 현상이 나타났습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>팀 구성:</strong> 프론트엔드 개발자 2명
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "Flash 기반 모니터링 시스템을 D3.js + HTML5 기반으로 전면 전환",
                "OHT 실시간 운행 현황 및 구간별 병목 모니터링 화면 개발",
                "라인 구간별 정체 상태 시각화 (색상 기반 실시간 표시)",
                "대규모 DOM 렌더링 성능 최적화",
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
          <div className="text-zinc-600 dark:text-zinc-300 space-y-6 leading-[1.8]">
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                문제 1: DOM 과다 생성으로 인한 심각한 성능 저하
              </h3>
              <p>
                반도체 생산라인의 각 구간, OHT 개체, 상태 표시 요소를 모두 개별 DOM으로 생성하다 보니
                화면에 수천 개의 DOM 요소가 동시에 존재하게 되었습니다.
                실시간으로 상태가 업데이트될 때마다 대량의 DOM 조작이 발생하여
                웹 브라우저가 심하게 버벅거리는 문제가 생겼습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">해결: DOM 통합 렌더링 방식 도입</h3>
              <p>
                개발자들과 논의하던 중, 각 요소를 개별 DOM으로 만들지 않고
                하나의 큰 요소로 통합하여 렌더링하는 아이디어가 떠올랐습니다.
                개별 DOM을 하나하나 생성하는 대신, D3.js의 SVG 또는 Canvas 기반으로
                여러 요소를 하나의 렌더링 단위로 묶어 처리함으로써
                DOM 개수를 획기적으로 줄였습니다.
              </p>
              <p className="mt-2">
                이 방식을 적용한 결과, 기존에 버벅거리던 화면이 완전히 매끄럽게 동작하게 되었고,
                실시간 모니터링에 적합한 수준의 성능을 확보할 수 있었습니다.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                문제 2: D3.js 학습 곡선
              </h3>
              <p>
                D3.js는 데이터 시각화에 강력한 라이브러리이지만,
                일반적인 DOM 조작 방식과 다른 데이터 바인딩 패턴(enter-update-exit)과
                복잡한 API 구조 때문에 학습 난이도가 상당히 높았습니다.
                실시간 데이터를 기반으로 복잡한 라인 구조를 시각화해야 했기 때문에
                D3.js의 깊은 이해가 필수적이었습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">해결</h3>
              <ul className="space-y-2 ml-1">
                {[
                  "D3.js의 데이터 바인딩 패턴을 집중적으로 학습하여 실시간 업데이트에 적용",
                  "팀원과 역할을 분담하여 각자 담당 영역의 시각화 구현에 집중",
                  "프로토타입을 먼저 만들어 성능을 검증한 뒤 본 개발에 반영하는 방식으로 리스크 관리",
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

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "기술 전환", value: "Flash→HTML5" },
              { label: "핵심 기술", value: "D3.js" },
              { label: "팀 규모", value: "2명" },
              { label: "프로젝트 기간", value: "8개월" },
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
              "Flash 기반 레거시 시스템을 D3.js + HTML5 기반 웹 표준 시스템으로 성공적 전환",
              "DOM 통합 렌더링 방식 도입으로 성능 문제를 근본적으로 해결",
              "OHT 실시간 운행 현황 및 구간별 정체 모니터링을 안정적으로 운영",
              "웹 표준 전환을 통해 브라우저 호환성 및 유지보수성 확보",
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
