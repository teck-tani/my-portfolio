import Image from "next/image";
import portrait from "../../public/my.jpg";
import { profile } from "@/data/profile";

const proofPoints = [
  { label: "개발 기반", value: "Java · Spring · SQL" },
  { label: "수행 범위", value: "요구 정의 · 설계 · 구현 · 안정화" },
  { label: "주요 경험", value: "B2B · 제조 · 데이터 · 모바일" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Senior Java / Spring Developer</p>
          <h1>
            복잡한 업무를
            <span>운영 가능한 시스템</span>으로 만듭니다.
          </h1>
          <p className="hero-intro">
            <strong>권득천</strong>은 17년의 현장 경험을 바탕으로 Java·Spring
            기반 B2B 시스템을 설계하고 구현해 온 풀스택 개발자입니다. 고객과
            요구사항을 정리하는 일부터 팀 리딩, 운영 안정화까지 책임집니다.
          </p>

          <div className="hero-actions" aria-label="빠른 이동">
            <a className="button button-primary" href="#featured">
              대표 프로젝트 보기
              <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>
              이메일로 연락하기
            </a>
          </div>

          <dl className="proof-list">
            {proofPoints.map((point) => (
              <div key={point.label}>
                <dt>{point.label}</dt>
                <dd>{point.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="portrait-block">
          <div className="portrait-frame">
            <Image
              src={portrait}
              alt="권득천 프로필 사진"
              sizes="(max-width: 52rem) 72vw, 28rem"
              className="portrait-image"
              preload
            />
          </div>
          <figcaption>
            <span>현재</span>
            한국타이어 웹·하이브리드 모바일 시스템 개발
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
