import Image from "next/image";
import Link from "next/link";
import equipmentDashboard from "../../public/img/ez-heims/main.png";

const featuredProjects = [
  {
    slug: "samsung-b2b-pl",
    index: "02",
    period: "2022.06 — 2023.02",
    role: "PL · 개발자 3명 리딩",
    title: "삼성전자 B2B 추가개발 · CPMS 전환",
    summary:
      "고객의 모호한 요구를 기능 단위로 구체화하고, 권한·인증·파일 처리 이슈를 풀어 내부 시스템 전환까지 이끌었습니다.",
    evidence: [
      "고객 대면 미팅과 요구사항 합의",
      "신규 메뉴 3건 개발 총괄",
      "권한·인증·파일 마이그레이션 설계",
    ],
  },
  {
    slug: "samsung-data-collection",
    index: "03",
    period: "2023.03 — 2023.12",
    role: "Backend Developer",
    title: "외부 데이터 수집 · DB 구축 자동화",
    summary:
      "형식이 계속 바뀌는 엑셀과 외부 API 데이터를 규칙 기반으로 정규화해 안정적인 적재 파이프라인을 구축했습니다.",
    evidence: [
      "비정형 엑셀 규칙 기반 파싱",
      "외부 API 수집·정규화·적재",
      "기존 코드 역분석과 흐름 문서화",
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="featured" className="section-block featured-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-index">01 / Selected work</p>
          <div>
            <h2>대표 프로젝트</h2>
            <p>
              기술 이름보다 어떤 문제를 맡았고, 어디까지 책임졌는지를 먼저
              보여드립니다.
            </p>
          </div>
        </div>

        <article className="featured-lead">
          <div className="featured-lead-copy">
            <div className="project-meta">
              <span>01</span>
              <span>2025.02 — 현재</span>
              <span>Full-stack Developer</span>
            </div>
            <h3>
              <Link href="/portfolio/pilgrimsoft">
                한국타이어 글로벌 업무 시스템
              </Link>
            </h3>
            <p className="featured-summary">
              영업·설비보전·안전점검·물류 현장을 위한 웹과 하이브리드 모바일
              시스템을 개발하고 있습니다. 모바일 화면부터 REST API, ERD,
              외부 연동과 자동 배치까지 한 흐름으로 책임졌습니다.
            </p>
            <ul className="evidence-list">
              <li>설비보전 앱 프론트엔드·백엔드 전 범위 개발</li>
              <li>지게차 관리 ERD·API·SAP 연동·자정 배치 설계</li>
              <li>OTP 인증과 Baidu·Google 지도 지역별 분기 구현</li>
            </ul>
            <Link className="text-link" href="/portfolio/pilgrimsoft">
              문제와 해결 과정 보기 <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <figure className="featured-media">
            <div className="featured-media-frame">
              <Image
                src={equipmentDashboard}
                alt="한국타이어 설비보전 모바일 앱의 작업 현황 대시보드"
                sizes="(max-width: 52rem) 88vw, 30rem"
              />
            </div>
            <figcaption>
              EZ-HEIMS 2.0 Mobile · 금일 보전작업 현황
            </figcaption>
          </figure>
        </article>

        <div className="featured-secondary-grid">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="featured-secondary">
              <div className="project-meta">
                <span>{project.index}</span>
                <span>{project.period}</span>
                <span>{project.role}</span>
              </div>
              <h3>
                <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.summary}</p>
              <ul className="evidence-list compact">
                {project.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="text-link" href={`/portfolio/${project.slug}`}>
                사례 자세히 보기 <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
