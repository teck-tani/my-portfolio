import type { Metadata } from "next";
import { careers } from "@/data/career";

const projectDescriptions = {
  pilgrimsoft:
    "한국타이어 대상 영업·설비·안전·재고 업무를 Java, Vue.js, Cordova로 구현한 하이브리드 웹·모바일 프로젝트입니다.",
  "samsung-bio-dqm":
    "삼성바이오 전사 데이터의 유효성·정확성·일관성을 자동 검증하고 오류 원인을 분석하는 DQM 체계를 구축한 프로젝트입니다.",
  "samsung-data-collection":
    "외부 API와 비정형 엑셀 데이터를 자동 수집·정규화해 Oracle DB에 적재하는 삼성전자 데이터 파이프라인 개발 프로젝트입니다.",
  "samsung-b2b-pl":
    "삼성전자 B2B 추가 개발을 리딩하고 CPMS 사급자재 시스템의 권한·인증·파일 처리를 내부 환경으로 전환한 프로젝트입니다.",
  "samsung-display-portal":
    "Vue.js 기반 삼성디스플레이 IT 포털에서 자산 관리와 서비스 요청 화면을 개발하고 프로젝트 안정화를 지원한 사례입니다.",
  "samsung-wiznet-ramdump":
    "Java/JSP 기반 WizNet에 Vue.js를 부분 도입해 Ramdump 분석 결과를 트리 UI로 시각화하고 룰 자동 갱신을 구축한 프로젝트입니다.",
  "samsung-education":
    "삼성전자 DS2 Academy의 경진대회 운영 화면과 실기 답안 제출·자동 채점 기능을 개발한 사내 교육·평가 시스템 프로젝트입니다.",
  "samsung-file-share":
    "삼성전자 임직원과 고객 간 파일 공유 플랫폼의 관리자 문서 등록 기능을 개발하고 사용자 시스템의 출시 전 안정화를 이끈 프로젝트입니다.",
  "samsung-wiznet":
    "삼성전자 사내·사외 이슈 관리 시스템 WizNet의 웹 화면 코드를 개선하고 기능 유지보수와 리팩토링을 수행한 프로젝트입니다.",
  "samsung-oht-monitoring":
    "Flash 기반 반도체 OHT 모니터링을 D3.js와 HTML5로 전환하고 DOM 최적화로 대규모 실시간 화면 성능을 개선한 프로젝트입니다.",
  "samsung-electro-dqm":
    "삼성전기 기준정보와 레거시 데이터의 정합성 검증 룰을 설계하고 일일 품질 리포트를 자동화한 DQM 운영·개발 프로젝트입니다.",
  "grinus-interior":
    "가구 배치부터 자동 견적까지 지원하는 인테리어 시스템을 ERD·아키텍처·서버 구성부터 1인 개발로 완성한 프로젝트입니다.",
  "samsung-display-process":
    "삼성반도체 공정관리 시스템을 자체 JavaScript 프레임워크 환경에서 내재화하고 핵심 CRUD 화면을 개발한 프로젝트입니다.",
  "samsung-ssd":
    "삼성전자 표준 SDP 프레임워크로 SSD 관리 시스템을 신규 구축하고 OTP·SMS 다중 인증을 연동한 2인 개발 프로젝트입니다.",
  "rolling-story":
    "북미향 웹툰 플랫폼의 기획 커뮤니케이션부터 뷰어·마일리지·PayPal 결제까지 사용자 핵심 흐름을 구현한 프로젝트입니다.",
  "samsung-signage":
    "약 100명 규모의 삼성전자 디지털 사이니지 프로젝트에서 광고 콘텐츠 편집기의 기능 개선과 유지보수를 수행한 사례입니다.",
  "samsung-hpc":
    "삼성전자 HPC 운영을 위한 실시간 관제 대시보드, Job 모니터링, 사용률 분석 시스템을 개발해 24시간 관제에 적용한 프로젝트입니다.",
} as const;

export type ProjectSlug = keyof typeof projectDescriptions;

export function createProjectMetadata(slug: ProjectSlug): Metadata {
  const entry = careers.find((career) => career.portfolioSlug === slug);

  if (!entry) {
    throw new Error(`Career metadata is missing for portfolio slug: ${slug}`);
  }

  const description = projectDescriptions[slug];
  const canonical = `/portfolio/${slug}`;
  const socialTitle = `${entry.description} | 권득천 포트폴리오`;

  return {
    title: entry.description,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url: canonical,
      siteName: "권득천 개발자 포트폴리오",
      title: socialTitle,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "권득천 Java·Spring B2B 개발자 포트폴리오",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
