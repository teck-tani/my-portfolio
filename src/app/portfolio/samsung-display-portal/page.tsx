import Link from "next/link";

export default function SamsungDisplayPortalPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-display-portal"
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
            삼성디스플레이 IT포털 시스템 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            혜성정보기술 · 2021.11 ~ 2022.02 · 프론트엔드 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성디스플레이
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "Vue.js", "삼성 자체 프레임워크", "HTML", "CSS"].map((tech) => (
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
            난항을 겪던 프로젝트에 중도 투입되어, IT 자산 관리 및 서비스 요청 화면을 빠르게 개발·안정화했습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성디스플레이에서 사내 IT 자산과 서비스를 통합 관리하는 포털 시스템을 구축하는 프로젝트였습니다.
              IT 장비 등록·조회·수정, 부서별 자산 트리 탐색, 서비스 요청 접수 및 처리현황 조회 등
              사내 IT 운영에 필요한 핵심 화면들을 개발해야 했습니다.
            </p>
            <p>
              그러나 프로젝트가 이미 일정 지연과 기술적 난항을 겪고 있는 상황에서 뒤늦게 투입되었고,
              프론트엔드는 삼성에서 자체 개발한 Vue.js 기반 프레임워크를 사용해야 했기 때문에
              일반적인 Vue.js 개발 방식과 달리 유연한 커스터마이징이 제한되는 환경이었습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>팀 구성:</strong> 개발자 약 6명 + 퍼블리셔
            </p>
            <p>
              기획서와 복잡한 DB 구조의 SQL을 전달받아, 프론트엔드 화면을 개발하는 역할을 담당했습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "IT 장비 등록·조회·수정 관리 화면 개발 — CRUD 전체 기능 구현",
                "부서별 IT 자산 트리 구조 탐색 화면 개발 — 계층형 데이터를 트리 UI로 시각화",
                "IT 서비스 요청 접수 및 처리현황 조회 화면 개발 — 요청 상태 추적 기능 포함",
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
                문제 1: 난항 중인 프로젝트에 중도 투입
              </h3>
              <p>
                프로젝트가 이미 일정이 밀리고 있는 상황에서 투입되었기 때문에,
                기존 코드와 업무 흐름을 빠르게 파악하고 즉시 개발에 착수해야 했습니다.
              </p>
              <p className="mt-2">
                <strong>해결:</strong> 기존 코드 구조와 프레임워크 패턴을 빠르게 분석하여
                단기간에 개발 속도를 끌어올렸고, 맡은 화면들을 일정 내에 완료했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                문제 2: 삼성 자체 프레임워크의 제약
              </h3>
              <p>
                Vue.js 기반이지만 삼성에서 자체 개발한 프레임워크를 사용해야 했습니다.
                표준 Vue.js와 달리 컴포넌트 구조나 상태 관리 방식에 제약이 많아
                유연한 개발이 어려웠고, 공식 문서도 부족한 상황이었습니다.
              </p>
              <p className="mt-2">
                <strong>해결:</strong> 프레임워크의 내부 동작을 직접 분석하여 가능한 범위 내에서
                최적의 구현 방식을 찾아 적용했습니다. 제약 조건 안에서도
                사용자 경험을 해치지 않는 화면을 구현하는 데 집중했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 leading-[1.8]">
            {[
              "IT 장비 관리, 자산 트리 탐색, 서비스 요청 조회 등 핵심 화면 3건 개발 완료",
              "난항 중인 프로젝트에 중도 투입되어 빠르게 적응하고 일정 내 산출물 납품",
              "삼성 자체 프레임워크 환경의 제약을 극복하며 안정적인 프론트엔드 구현",
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
