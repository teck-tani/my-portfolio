import Link from "next/link";

export default function SamsungSsdPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-ssd"
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
            삼성반도체 SSD 관리 시스템 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            씨앤에스솔루션 · 2015.08 ~ 2016.02 · 풀스택 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성반도체
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "SDP Framework", "JavaScript", "Oracle"].map((tech) => (
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
            삼성전자 표준 프레임워크(SDP) 기반으로 SSD 하드디스크 관리 시스템을 2인 체제로 신규 개발하고,
            보안 로그인 모듈까지 연동하여 안정적으로 오픈한 프로젝트입니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성반도체에서 생산하는 SSD(Solid State Drive) 제품을 체계적으로 관리하기 위한
              웹 시스템이 필요했습니다.
            </p>
            <p>
              기존에는 SSD 관련 데이터를 효율적으로 관리할 수 있는 전용 시스템이 부재했기 때문에,
              삼성전자 표준 프레임워크(SDP)를 기반으로 신규 시스템을 구축하게 되었습니다.
            </p>
            <p>
              보안이 중요한 삼성 내부 시스템이었기 때문에 OTP 인증, SMS 문자인증 등
              다중 보안 로그인 체계를 갖추는 것이 필수 요구사항이었습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>팀 구성:</strong> 개발자 2명 (2인 체제)
            </p>
            <p>
              삼성전자 표준 프레임워크(SDP)를 기반으로 SSD 관리 시스템 전반을 신규 개발했습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "SDP(Samsung Development Platform) 프레임워크 기반 웹 시스템 신규 구축",
                "SSD 제품 정보 등록·조회·수정·삭제(CRUD) 기능 개발",
                "OTP 인증, SMS 문자인증 등 보안 로그인 모듈 연동 개발",
                "Oracle DB 기반 데이터 모델링 및 쿼리 개발",
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
                삼성 표준 프레임워크 기반의 체계적 개발
              </h3>
              <p>
                삼성전자 내부 표준 프레임워크(SDP)를 기반으로 개발을 진행했습니다.
                SDP의 규격에 맞춰 프로젝트 구조를 세팅하고, 표준 컴포넌트와 공통 모듈을 활용하여
                삼성 내부 시스템과 일관된 형태로 개발했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                원활한 협업과 소통
              </h3>
              <p>
                2인 체제의 소규모 팀이었기 때문에 긴밀한 협의와 소통이 가능했습니다.
                요구사항을 함께 정리하고, 역할을 명확히 분담하여 효율적으로 작업을 진행했습니다.
                고객과의 회의에서도 적극적으로 소통하며 요구사항을 조율했고,
                특별한 기술적 난관 없이 순탄하게 개발을 완료할 수 있었습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                보안 로그인 모듈 연동
              </h3>
              <p>
                삼성 내부 보안 정책에 따라 OTP(One-Time Password) 인증과
                SMS 문자인증 기반의 다중 인증 로그인 체계를 연동했습니다.
                기존에 제공되는 보안 모듈을 시스템에 통합하여
                인증 절차가 원활하게 동작하도록 구현했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "개발 인원", value: "2명" },
              { label: "프로젝트 기간", value: "7개월" },
              { label: "보안 인증", value: "OTP+SMS" },
              { label: "오픈 결과", value: "정상 오픈" },
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
              "삼성전자 표준 프레임워크(SDP) 기반 SSD 관리 시스템 신규 구축 완료",
              "SSD 제품 정보 CRUD 및 관리 기능 전체 개발",
              "OTP, SMS 문자인증 등 다중 보안 로그인 체계 연동 완료",
              "원활한 협업과 고객 소통으로 일정 내 안정적 오픈 달성",
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
