import Link from "next/link";

export default function SamsungHpcPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-hpc"
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
            삼성전자 HPC 운영 지원 웹 시스템 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            세림아이엔에스 · 2012.03 ~ 2014.08 · 풀스택 개발자 · 대리(주임연구원)
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성전자 | 정규직
          </p>
          <div className="flex flex-wrap gap-2">
            {["HTML", "JavaScript", "jQuery", "Struts", "MyBatis", "FusionCharts"].map((tech) => (
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
            삼성전자 HPC(슈퍼컴퓨터) 운영을 위한 실시간 모니터링 대시보드, Job 모니터링, 사용률 분석 시스템을 개발한 프로젝트입니다.
            특히 SMS 시스템은 전체 개발을 담당하여 삼성전자 관제탑 대형 스크린에서 24시간 운영되는 성과를 이뤘습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성전자는 반도체 설계, AI 연구 등 대규모 연산 작업을 위해 HPC(High Performance Computing, 슈퍼컴퓨터)를
              운영하고 있었습니다. 수천 개의 노드로 구성된 슈퍼컴퓨터를 안정적으로 운영하려면
              시스템 상태를 실시간으로 파악하고, 연산 작업(Job)의 흐름을 모니터링하며,
              자원 사용률을 분석할 수 있는 웹 기반 시스템이 필수적이었습니다.
            </p>
            <p>
              이를 위해 세림아이엔에스에서 정규직으로 근무하며 웹 파트 개발자로서
              SMS, JMS, SANTA 세 가지 핵심 시스템 개발에 참여했습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>팀 구성:</strong> 웹 파트 개발자 3명
            </p>
            <p>
              세림아이엔에스 정규직으로 삼성전자 HPC 운영팀에 소속되어,
              슈퍼컴퓨터 운영을 지원하는 3가지 웹 시스템을 개발했습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "SMS 실시간 모니터링 대시보드 전체 개발 담당 (FusionCharts 기반 차트 시각화)",
                "JMS Job 모니터링 시스템 개발 참여",
                "SANTA HPC 사용률 분석 시스템 개발 참여",
                "Struts + MyBatis 기반 백엔드 API 및 프론트엔드 화면 개발",
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

        {/* 3. 주요 시스템 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">주요 시스템</h2>
          <div className="space-y-8">
            {/* SMS */}
            <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                  SMS
                </span>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
                  시스템 실시간 모니터링 대시보드
                </h3>
              </div>
              <div className="text-zinc-600 dark:text-zinc-300 space-y-2 leading-[1.8]">
                <p>
                  슈퍼컴퓨터의 전체 사용량, 디스크 사용량 등 핵심 지표를
                  실시간으로 시각화하는 대시보드 시스템입니다.
                  FusionCharts 라이브러리를 활용하여 다양한 차트를 구현했으며,
                  <strong> 이 시스템은 전체를 직접 개발</strong>했습니다.
                </p>
                <p>
                  완성된 대시보드는 삼성전자 관제탑의 대형 스크린에 띄워져
                  24시간 실시간으로 운영되었고, 직접 현장에서 가동되는 모습을 확인했습니다.
                </p>
              </div>
            </div>

            {/* JMS */}
            <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                  JMS
                </span>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Job 모니터링 시스템
                </h3>
              </div>
              <div className="text-zinc-600 dark:text-zinc-300 space-y-2 leading-[1.8]">
                <p>
                  HPC에서 실행되는 연산 작업(Job)의 상태를 모니터링하는 시스템입니다.
                  슈퍼컴퓨터에서는 수많은 연산 작업이 동시에 실행되는데,
                  각 Job의 실행 상태, 대기열, 완료 현황 등을 웹에서 한눈에 파악할 수 있도록 개발했습니다.
                </p>
              </div>
            </div>

            {/* SANTA */}
            <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                  SANTA
                </span>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
                  HPC 사용률 분석 시스템
                </h3>
              </div>
              <div className="text-zinc-600 dark:text-zinc-300 space-y-2 leading-[1.8]">
                <p>
                  삼성테크윈에 도입된 HPC 사용률 분석 시스템입니다.
                  슈퍼컴퓨터의 자원 사용 패턴을 분석하고, 사용률 통계를 제공하여
                  효율적인 자원 운영을 지원하는 시스템을 개발했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 성장과 배움 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">성장과 배움</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              세림아이엔에스에서의 약 2년 반은 웹 개발자로서 전반적인 역량을 쌓을 수 있었던 시기였습니다.
              정규직으로 근무하면서 삼성전자라는 대기업 환경에서의 개발 프로세스를 체득하고,
              프론트엔드부터 백엔드까지 풀스택 개발 경험을 쌓았습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "실시간 데이터를 차트로 시각화하는 대시보드 개발 경험",
                "FusionCharts를 활용한 다양한 차트 구현 노하우 습득",
                "대형 관제 스크린에 24시간 운영되는 시스템을 직접 만들어 본 성취감",
                "Struts, MyBatis 등 Java 웹 프레임워크 기반의 체계적인 개발 역량 확보",
                "대기업(삼성전자) 프로젝트의 개발 프로세스와 커뮤니케이션 방식 습득",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-teal-500 mt-0.5 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "근무 기간", value: "2년 6개월" },
              { label: "웹 파트 인원", value: "3명" },
              { label: "개발 시스템", value: "3개" },
              { label: "관제 운영", value: "24시간" },
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
              "SMS 실시간 모니터링 대시보드 전체 개발 및 삼성전자 관제탑 24시간 운영 적용",
              "JMS Job 모니터링 시스템 개발 완료",
              "SANTA HPC 사용률 분석 시스템 개발 및 삼성테크윈 적용",
              "정규직으로서 웹 개발 전반의 기초 역량 확보",
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
