import Link from "next/link";

export default function SamsungDataCollectionPage() {
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
            삼성전자 외부 기관 데이터 수집·DB 구축 시스템 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            엔셀 · 2023.03 ~ 2023.12 · 백엔드 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성전자
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "GcExcel", "REST API", "Oracle"].map((tech) => (
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
            외부 API와 비정형 엑셀 데이터를 자동으로 수집·정규화하여 DB에 적재하는 파이프라인을 구축했습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성전자에서는 외부 정보기관으로부터 다양한 데이터를 수집하여 내부 DB에 축적해야 하는 니즈가 있었습니다.
              데이터는 크게 두 가지 경로로 들어왔습니다.
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-0.5 shrink-0 font-bold">1.</span>
                <span><strong>외부 API</strong> — 기관에서 제공하는 API를 호출하여 데이터를 수집</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-0.5 shrink-0 font-bold">2.</span>
                <span><strong>엑셀 문서</strong> — 정기적으로 발행되는 비정형 엑셀 파일을 파싱하여 DB에 적재</span>
              </li>
            </ul>
            <p>
              특히 엑셀 문서는 기관마다 양식이 제각각이고,
              같은 기관이라도 시기에 따라 포맷이 변경되는 경우가 빈번하여
              단순 파싱으로는 대응이 불가능한 상황이었습니다.
            </p>
            <p>
              또한 이 프로젝트는 <strong>2차 단계</strong>였는데,
              1차 담당자가 남긴 문서와 인수인계 자료가 부실하여
              기존 시스템의 구조와 의도를 파악하는 것부터 상당한 시간과 노력이 필요했습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>팀 구성:</strong> 백엔드 개발자 3명 (UI 없는 순수 백엔드 프로젝트)
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "외부 기관 API를 호출하여 데이터를 수집하고, 정규화하여 DB에 적재하는 파이프라인 개발",
                "비정형 엑셀 문서를 분석하여 기관별·양식별 파싱 룰을 정의하고, GcExcel을 활용한 자동 적재 시스템 개발",
                "엑셀 양식 변경에도 유연하게 대응할 수 있도록 룰 기반의 표준화 설계 적용",
                "1차 프로젝트의 부실한 문서를 역분석하여 기존 시스템 구조 파악 및 정리",
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
                문제 1: 1차 프로젝트 인수인계 부실
              </h3>
              <p>
                2차 프로젝트로 투입되었으나 1차 담당자의 산출물과 문서가 제대로 정리되어 있지 않았습니다.
                코드에 주석도 거의 없고, 데이터 흐름이나 비즈니스 로직에 대한 설명이 부족하여
                기존 시스템의 의도를 파악하는 데 많은 시간이 소요되었습니다.
              </p>
              <p className="mt-2">
                <strong>해결:</strong> 코드와 DB 구조를 역분석하여 데이터 흐름도를 직접 작성하고,
                팀 내 공유 문서로 정리하여 이후 개발 속도를 높였습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                문제 2: 비정형 엑셀 양식의 다양성
              </h3>
              <p>
                외부 기관에서 제공하는 엑셀 문서는 기관마다 양식이 다르고,
                같은 기관도 시기에 따라 컬럼 위치나 시트 구조가 변경되었습니다.
                하드코딩으로는 유지보수가 불가능한 수준이었습니다.
              </p>
              <p className="mt-2">
                <strong>해결:</strong> 엑셀 양식별 파싱 룰을 정의하는 규칙 엔진 방식을 설계하여,
                양식이 변경되더라도 룰만 수정하면 코드 변경 없이 대응할 수 있도록 구축했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 leading-[1.8]">
            {[
              "외부 API 데이터 수집·정규화·DB 적재 자동화 파이프라인 완성",
              "비정형 엑셀 문서의 룰 기반 자동 파싱 시스템 구축 — 양식 변경에도 유연하게 대응",
              "1차 프로젝트의 부실한 문서를 역분석·정리하여 팀 전체의 개발 효율성 향상",
              "보안상 UI가 없는 순수 백엔드 시스템으로, 안정적인 데이터 수집 체계 확립",
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
