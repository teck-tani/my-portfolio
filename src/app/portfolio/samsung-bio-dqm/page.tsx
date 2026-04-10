import Link from "next/link";
import Image from "next/image";

export default function SamsungBioDqmPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-bio-dqm"
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
            삼성바이오 DQM 솔루션 운영
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            ㈜인터솔루션테크놀로 · 2024.04 ~ 2025.01 · DBA/데이터관리
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성바이오
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "HTML", "JavaScript", "SQL", "PL/SQL"].map((tech) => (
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
            매일 전사 데이터를 자동 검증하고, 오류를 찾아 원인까지 분석하는 품질 관리 체계를 구축했습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성바이오에서는 MDM(Master Data Management) 기준정보를 SAP에서 생성한 뒤,
              ERP를 비롯한 다수의 레거시 시스템에 배포하는 구조로 운영하고 있었습니다.
            </p>
            <p>
              그러나 배포 과정에서 다양한 원인으로 인해 데이터가 왜곡되는 문제가 발생했습니다.
              시스템 간 인터페이스 오류, 수동 입력 실수, 배포 타이밍 불일치 등으로
              각 시스템에 존재하는 동일 데이터가 서로 다른 값을 갖게 되었고,
              이로 인해 전사 데이터 품질이 심각하게 저하되고 있었습니다.
            </p>
            <p>
              이를 체계적으로 검증하고 관리하기 위해 DQM(Data Quality Management) 시스템 구축 프로젝트가 시작되었습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 + 기술 스택 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>팀 구성:</strong> SAP 개발자 2명 + DQM 담당(본인) 1명, 총 3인 팀
            </p>
            <p>GT One DQM(Data Quality Management) 솔루션을 활용하여 아래 업무를 전담했습니다.</p>
            <ul className="space-y-3 ml-1">
              {[
                "데이터 품질 지표(유효성, 정확성, 일관성, 유일성, 적시성)별 룰셋 설계 및 세팅",
                "매일 각 시스템의 데이터를 자체 DB로 적재하고, 전체 품질 룰을 자동으로 실행하여 데이터 정합성 검증",
                "검증 결과를 요약·통계하여 대시보드로 구성하고, 담당자에게 일일 메일 리포트 자동 발송",
                "오류 데이터 발생 시, 진짜 오류인지 판별하고 원인 파악(어디서, 왜 잘못되었는지) 후 시정 조치 가이드 제공",
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
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">문제: 솔루션 종속성으로 인한 개발 제약</h3>
              <p>
                DQM 솔루션 기반으로 개발을 진행하다 보니 솔루션 자체의 버그가 빈번하게 발생했고,
                프레임워크에 종속되어 있어 유연한 커스터마이징이 어려웠습니다.
                예상하지 못한 곳에서 오류가 발생하는 경우도 잦았습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">해결</h3>
              <ul className="space-y-2 ml-1">
                {[
                  "솔루션 버그 발생 시 우회 로직을 직접 구현하여 안정성 확보",
                  "솔루션이 제공하지 않는 기능은 SQL/PL/SQL로 별도 개발하여 보완",
                  "반복 발생하는 이슈는 패턴을 정리하여 팀 내 공유, 대응 속도 향상",
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

        {/* 4. 결과 + 스크린샷 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "품질 지표", value: "5종" },
              { label: "검증 대상 시스템", value: "다수" },
              { label: "일일 자동 검증", value: "매일" },
              { label: "프로젝트 기간", value: "10개월" },
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
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 mb-10 leading-[1.8]">
            {[
              "유효성·정확성·일관성·유일성·적시성 5개 품질 지표의 자동 검증 체계 구축",
              "매일 전 시스템 데이터를 자동 적재·검증하여 데이터 품질 이상을 즉시 감지",
              "대시보드 + 자동 메일 리포트로 담당자가 별도 조회 없이 품질 현황 파악 가능",
              "오류 원인 분석을 통해 근본적인 데이터 정합성 개선에 기여",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-blue-500 mt-0.5 shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* 스크린샷 */}
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
