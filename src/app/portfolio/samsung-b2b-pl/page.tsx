import Link from "next/link";

export default function SamsungB2bPlPage() {
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
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            삼성전자 B2B 시스템 추가개발 PL 및 CPMS 마이그레이션
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            개발팀 · 2022.06 ~ 2023.02 · PL (프로젝트 리더)
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성전자
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "Spring", "JavaScript", "jQuery"].map((tech) => (
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
            B2B 추가개발 PL로 고객 요구사항을 직접 정의하고, CPMS 마이그레이션에서는 삼성 프로젝트 경험을 살려 핵심 기술 이슈를 해결했습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              이 프로젝트는 두 가지 과제를 동시에 수행하는 구조였습니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">B2B 시스템 추가개발</h3>
                <p className="text-sm">
                  기존에 운영 중인 B2B 시스템에 신규 메뉴를 추가하는 프로젝트.
                  고객이 원하는 기능의 컨셉이 명확하지 않아,
                  요구사항을 구체화하는 과정부터 시작해야 했습니다.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">CPMS 사급자재 마이그레이션</h3>
                <p className="text-sm">
                  외부에서 운영되던 사급자재 관리 시스템(CPMS)을 삼성 내부 시스템으로 전환하는 프로젝트.
                  권한 체계, 인증(로그인), 파일 처리 등 삼성 내부 환경에 맞게 재구축해야 했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-6 leading-[1.8]">
            {/* B2B */}
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                B2B 추가개발 — PL (개발자 3명 리딩)
              </h3>
              <ul className="space-y-3 ml-1">
                {[
                  "고객과 다수의 대면 미팅을 통해 요구사항을 직접 정의하고 기능 컨셉을 확립",
                  "고객이 명확히 잡지 못하는 기능 방향을 구체적으로 정리하여 제안",
                  "정의된 요구사항을 개발자들이 구현할 수 있도록 기술 설계 및 업무 분배",
                  "신규 메뉴 3개 추가 개발 총괄",
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

            {/* CPMS */}
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                CPMS 사급자재 마이그레이션 — 핵심 이슈 해결
              </h3>
              <ul className="space-y-3 ml-1">
                {[
                  "외부 시스템을 삼성 내부 환경으로 전환하기 위한 기술적 해결 방안 설계",
                  "권한 체계, 인증(로그인), 파일 마이그레이션 등 핵심 걸림돌에 대한 해결 포인트를 직접 잡고 진행",
                  "다수의 삼성 프로젝트 경험을 바탕으로, 삼성 내부 시스템 연동 방식과 보안 정책에 맞는 구현 방향을 주도",
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
          </div>
        </section>

        {/* 3. 어려웠던 점 & 해결 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">어려웠던 점 &amp; 해결</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-6 leading-[1.8]">
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                B2B: 고객의 불명확한 요구사항
              </h3>
              <p>
                고객이 원하는 기능의 컨셉을 명확히 잡지 못해,
                미팅을 해도 방향이 자주 바뀌는 상황이었습니다.
              </p>
              <p className="mt-2">
                <strong>해결:</strong> 반복적인 미팅에서 고객의 니즈를 분석하여 기능 컨셉을 직접 정리·제안했습니다.
                이해한 내용을 문서화하여 고객과 합의한 뒤 개발자에게 전달함으로써,
                개발 중 재작업을 최소화했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                CPMS: 삼성 내부 환경으로의 시스템 전환
              </h3>
              <p>
                외부 시스템을 삼성 내부로 옮기면서 권한 체계, 인증(로그인), 파일 처리 방식이
                삼성 내부 보안 정책과 맞지 않아 큰 걸림돌이 되었습니다.
              </p>
              <p className="mt-2">
                <strong>해결:</strong> 다년간의 삼성 프로젝트 경험을 바탕으로
                삼성 내부 인증 체계와 권한 구조, 파일 처리 방식에 대한 노하우를 활용하여
                해결 방안을 직접 설계하고 팀을 리드하여 성공적으로 전환했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 leading-[1.8]">
            {[
              "B2B 시스템 신규 메뉴 3건 정상 오픈 — 고객 요구사항 정의부터 개발 완료까지 PL로 총괄",
              "CPMS 사급자재 시스템의 삼성 내부 환경 마이그레이션 완료",
              "권한·인증·파일 처리 등 핵심 기술 이슈를 삼성 프로젝트 경험 기반으로 해결",
              "고객 대면 커뮤니케이션과 개발팀 리딩을 동시에 수행한 PL 역할 수행",
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
