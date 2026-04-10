import Link from "next/link";
import Image from "next/image";

export default function SamsungElectroDqmPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-electro-dqm"
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
            삼성전기 DQM 시스템 운영 및 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            지티원 · 2017.01 ~ 2017.12 · DBA/데이터관리
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성전기
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "SQL"].map((tech) => (
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
            데이터 품질 관리의 기초를 다진 첫 DQM 프로젝트. SQL과 DB 구조에 대한 깊은 이해를 쌓은 성장의 시기였습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성전기에서는 MDM(Master Data Management) 기준정보를 ERP로 배포하고,
              다수의 레거시 시스템과 데이터를 연동하는 구조로 운영하고 있었습니다.
            </p>
            <p>
              하지만 시스템 간 데이터 배포 과정에서 인터페이스 오류, 수동 입력 실수,
              배포 타이밍 불일치 등의 문제가 지속적으로 발생했고,
              동일한 기준정보가 시스템마다 다른 값을 가지는 데이터 불일치 현상이 반복되고 있었습니다.
            </p>
            <p>
              이를 체계적으로 관리하기 위해 DQM(Data Quality Management) 시스템을 도입하여
              데이터 품질을 상시 모니터링하고 검증하는 체계를 구축하게 되었습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              DQM 솔루션을 활용한 데이터 품질 관리 전반을 담당했습니다.
              처음 접하는 DQM 영역이었기에 배우면서 실무에 적용하는 과정이었습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "기준정보(MDM→ERP) 및 레거시 시스템 간 데이터 배포 검증 룰 설계 및 SQL 작성",
                "일일 데이터 품질 리포트 자동 메일 발송 시스템 개발 (웹 기반 커스텀 구축)",
                "DB 모델링 및 데이터 정합성 검증 체계 운영",
                "검증 룰에 필요한 복잡한 SQL 쿼리 작성 및 최적화",
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
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">문제: 처음 접하는 DQM 도메인과 복잡한 DB 구조</h3>
              <p>
                DQM이라는 도메인 자체가 처음이었고, 삼성전기의 대규모 DB 구조를 이해하는 것부터 쉽지 않았습니다.
                수십 개의 테이블 간 관계를 파악하고, 어떤 데이터가 어디서 생성되어 어디로 흘러가는지
                전체 데이터 흐름을 이해해야만 정확한 검증 룰을 만들 수 있었습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">해결</h3>
              <ul className="space-y-2 ml-1">
                {[
                  "ERD와 데이터 사전을 반복적으로 분석하며 DB 구조를 체계적으로 학습",
                  "현업 담당자들과 지속적으로 소통하며 데이터의 비즈니스 의미를 파악",
                  "복잡한 검증 SQL을 작성하면서 쿼리 설계 능력과 DB 이해도를 크게 향상",
                  "실수를 통해 배운 경험을 문서화하여 이후 유사 업무에 재활용",
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
              이 프로젝트는 데이터 엔지니어링과 DB에 대한 깊은 이해를 쌓게 된 전환점이었습니다.
            </p>
            <ul className="space-y-2 ml-1">
              {[
                "SQL 작성 능력이 비약적으로 성장 — 복잡한 조인, 서브쿼리, 분석함수 등을 실무에서 체득",
                "DB 구조(ERD, 정규화, 테이블 관계)에 대한 깊은 이해를 확보",
                "데이터가 시스템을 거치며 어떻게 변형되고 전파되는지 전체 흐름을 파악하는 시야를 얻음",
                "이후 삼성바이오 DQM 프로젝트에서 이 경험이 큰 밑거름이 됨",
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "프로젝트 기간", value: "12개월" },
              { label: "검증 룰 설계", value: "다수" },
              { label: "일일 자동 리포트", value: "매일" },
              { label: "DB 모델링", value: "수행" },
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
              "기준정보 배포 시 데이터 불일치를 자동으로 감지하는 검증 체계 구축",
              "일일 품질 리포트 자동 메일 발송으로 담당자의 수동 확인 업무 제거",
              "DB 모델링을 통해 검증 데이터의 체계적 관리 기반 마련",
              "SQL과 DB 구조에 대한 실무 역량을 크게 향상시킨 성장의 프로젝트",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-blue-500 mt-0.5 shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 스크린샷 */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold mb-4">스크린샷</h3>
          <div className="relative w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <Image
              src="/img/DQM/DQM.jpg"
              alt="DQXpress 데이터 품질 관리 대시보드"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            이해를 돕기 위한 샘플 사진입니다. (보안 때문에 실제 화면 사진이 없습니다.)
          </p>
        </section>
      </div>
    </div>
  );
}
