import Link from "next/link";

export default function SamsungFileSharePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 뒤로가기 */}
        <Link
          href="/#career-samsung-file-share"
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
            삼성전자 파일 공유 플랫폼 개발
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-1">
            블루비즈랩 · 2019.05 ~ 2020.01 · 풀스택 개발자
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
            고객사: 삼성전자
          </p>
          <div className="flex flex-wrap gap-2">
            {["Java", "Spring", "MyBatis", "JavaScript", "jQuery", "HTML", "CSS"].map((tech) => (
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
            관리자(DCC) 시스템의 핵심 기능인 문서 등록을 담당하며 전체 시스템을
            이해하게 되었고, 오픈 3주 전 위기에 빠진 사용자(B2B) 시스템에
            긴급 투입되어 전면 안정화를 이끌었습니다.
          </p>
        </div>

        {/* 1. 배경/문제 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">배경 / 문제</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              삼성전자 직원과 외부 고객 간 파일을 안전하게 공유하기 위한 플랫폼
              개발 프로젝트였습니다. 시스템은 크게 두 파트로 나뉘어 있었습니다.
            </p>
            <p>
              <strong>DCC 시스템(관리자)</strong>은 삼성전자 내부 직원이 문서를
              등록·관리하고 고객에게 공유하는 관리자 화면이었고,{" "}
              <strong>B2B 시스템(사용자)</strong>은 외부 고객이 로그인하여 파일을
              다운로드하는 사용자 화면이었습니다.
            </p>
            <p>
              DCC 관리자 쪽은 개발자 3명 체제로 진행되었고, B2B 사용자 쪽은 별도
              개발자 2명이 담당하고 있었습니다.
            </p>
          </div>
        </section>

        {/* 2. 나의 역할 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">나의 역할</h2>
          <div className="text-zinc-600 dark:text-zinc-300 space-y-3 leading-[1.8]">
            <p>
              DCC 관리자 시스템에서 <strong>문서(파일) 등록</strong>이라는 가장
              핵심적인 기능을 담당하게 되었습니다.
            </p>
            <p>
              문서 등록 기능은 시스템의 중심축이었기 때문에, 자연스럽게 전체
              시스템의 ERD를 깊이 이해하게 되었고, 이를 통해 DCC와 B2B를 아우르는
              전체 업무 프로세스를 파악하게 되었습니다.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "DCC 시스템: 문서 등록·관리 핵심 기능 개발 (파일 업로드, 워터마크 삽입 및 PDF 변환, 버전 관리, 공유 설정 등)",
                "전체 시스템 ERD 분석을 통한 업무 프로세스 전반 이해",
                "B2B 시스템: 오픈 직전 긴급 투입, 전면 버그 수정 및 안정화 (SDS 대용량 다운로드 모듈 연동 포함)",
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
                DCC 관리자 시스템 — 핵심 기능 담당
              </h3>
              <p>
                파일 공유 플랫폼에서 가장 중요한 기능인 문서 등록 파트를
                담당했습니다. 문서의 업로드부터 워터마크 삽입 및 PDF 변환,
                메타데이터 관리, 고객별 공유 설정까지 시스템의 핵심 흐름을
                개발하면서, 자연스럽게 전체 ERD와 업무 프로세스를 깊이
                이해하게 되었습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                B2B 시스템 위기 — 오픈 3주 전 긴급 투입
              </h3>
              <p>
                DCC 쪽의 완성도가 높아지고 있던 시점, B2B 사용자 시스템에 심각한
                문제가 드러나기 시작했습니다. 2명의 개발자가 진행하고 있었지만,
                전체 시스템을 이해하지 못한 채 자신의 영역만 방어적으로
                개발해왔기 때문에 시스템 간 연결이 엉망인 상태였습니다.
              </p>
              <p>
                결국 한 명의 개발자가 교체되었고, PM의 요청으로 제가 B2B 쪽에
                긴급 투입되었습니다. 기존에 담당하던 DCC 작업은 배포 담당
                개발자에게 인수인계하고, 전면적으로 B2B 안정화에 집중했습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                빠른 문제 파악과 안정화
              </h3>
              <p>
                DCC 관리자 시스템을 개발하면서 전체 ERD와 업무 프로세스를 이미
                파악하고 있었기 때문에, B2B 쪽의 버그가 어디서 발생하고 어떻게
                수정해야 하는지 빠르게 판단할 수 있었습니다. 하나하나 버그를
                수정하고 데이터 흐름을 바로잡으면서 시스템을 안정화시켰습니다.
                또한 삼성SDS에서 제공하는 대용량 파일 다운로드 모듈을 B2B
                시스템에 연동하여 고객이 대용량 파일을 안정적으로 받을 수 있도록
                구현했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 결과 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">결과</h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 leading-[1.8]">
            {[
              "DCC 관리자 시스템 핵심 기능(문서 등록) 개발 완료",
              "위기 상황의 B2B 사용자 시스템을 긴급 투입하여 전면 안정화, 일정 내 오픈 성공",
              "관리자(DCC) + 사용자(B2B) 양쪽 시스템을 모두 경험하며 전체 플랫폼 이해도 확보",
              "기여도를 인정받아 추가 보상을 받으며 프로젝트 완료",
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
