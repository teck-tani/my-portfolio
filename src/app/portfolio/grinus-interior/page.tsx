import Link from "next/link";

export default function GrinusInteriorPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-grinus-interior"
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
            인테리어 자동화 시스템 설계 및 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            그리는 · 2016.06 ~ 2017.01 · 개발 총괄 (1인 개발)
          </p>
          <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-6">
            스타트업 자사 서비스
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "eGovFramework(Spring)", "MyBatis", "jQuery", "Oracle/MySQL"].map((tech) => (
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
            가상의 인테리어 환경에서 가구와 소품을 배치하고, 자동으로 견적을 산출하는
            인테리어 자동화 시스템을 1인 개발 총괄로 설계부터 구축까지 전담했습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              스타트업 &quot;그리는&quot;에서 인테리어 견적 자동화 시스템을 처음부터 구축하는 프로젝트였습니다.
              고객이 가상의 인테리어 환경을 통해 다양한 가구와 소품을 직접 배치해보고,
              선택한 구성에 따라 자동으로 견적이 산출되는 서비스를 목표로 했습니다.
            </p>
            <p>
              기존 시스템이 전혀 없는 상태에서 DB 설계, 시스템 아키텍처, 파일 서버까지
              전체 인프라와 백엔드를 새로 구축해야 했으며,
              전자정부 프레임워크(eGovFramework)를 도입하여 안정적인 개발 기반을 마련해야 했습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              <strong>팀 구성:</strong> 퍼블리셔 1명 + 3D 디자이너 1명 + 개발자 1명 (본인)
            </p>
            <p>
              3명으로 구성된 소규모 팀에서 개발 파트를 혼자 전담했습니다.
              퍼블리셔가 화면 마크업을, 3D 디자이너가 가상 인테리어 환경의 3D 에셋을 담당했고,
              저는 시스템 전체의 설계와 개발을 맡았습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "DB 설계(ERD) 및 전체 시스템 아키텍처 설계 — 제로베이스에서 전체 구조 수립",
                "전자정부 프레임워크(eGovFramework) 도입 및 프로젝트 초기 세팅",
                "자동 견적 시스템 개발 — 사용자가 선택한 가구/소품 조합에 따른 견적 자동 산출 로직",
                "회원 가입·로그인·인증 모듈 개발",
                "NAS 기반 파일 공유 서버 구축·운영 — 3D 에셋 및 이미지 리소스 관리",
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
                제로베이스에서 시스템 설계
              </h3>
              <p>
                기존 시스템이 없는 상태에서 시작했기 때문에, ERD 설계부터 시스템 아키텍처 구성,
                개발 환경 세팅까지 모든 것을 직접 결정하고 구축해야 했습니다.
                전자정부 프레임워크를 기반으로 안정적인 구조를 잡고,
                향후 기능 확장을 고려한 테이블 설계를 진행했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                견적 자동화 로직 구현
              </h3>
              <p>
                인테리어에 사용되는 가구, 소품, 자재 등 다양한 항목의 가격 정보를 DB로 관리하고,
                사용자가 가상 환경에서 선택한 조합에 따라 실시간으로 견적을 산출하는 로직을 개발했습니다.
                카테고리별 옵션과 수량에 따른 가격 계산, 할인 적용 등의 비즈니스 로직을 구현했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                파일 서버 인프라 구축
              </h3>
              <p>
                3D 디자이너가 제작한 에셋과 인테리어 이미지 등 대용량 파일을 효율적으로 관리하기 위해
                NAS 기반의 파일 공유 서버를 직접 구축하고 운영했습니다.
                팀원들이 작업한 리소스를 중앙에서 관리하고 시스템에 연동할 수 있는 구조를 만들었습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 leading-[1.8]">
            {[
              "제로베이스에서 인테리어 자동화 시스템의 DB 설계, 아키텍처 구축, 핵심 기능 개발까지 1인 개발로 완수",
              "자동 견적 산출 시스템, 회원·인증 모듈, NAS 파일 서버 등 서비스 운영에 필요한 전체 백엔드 구축",
              "퍼블리셔, 3D 디자이너와 협업하며 소규모 팀에서의 개발 총괄 경험 축적",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-blue-500 mt-0.5 shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
            * 경영 악화로 인해 서비스 출시 전 회사가 폐업하게 되었지만,
            제로베이스에서 시스템 전체를 설계하고 구축한 값진 경험이었습니다.
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            * 스크린샷이 없습니다.
          </p>
        </section>
      </div>
    </div>
  );
}
