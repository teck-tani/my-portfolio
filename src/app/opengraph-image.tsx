import { ImageResponse } from "next/og";

export const alt = "권득천 Java·Spring B2B 시니어 개발자 포트폴리오";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f6f3eb",
        color: "#18211d",
        padding: "70px 76px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        <span>권득천 · PORTFOLIO</span>
        <span style={{ color: "#0d6b62" }}>JAVA · SPRING · B2B</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-3px",
            lineHeight: 1.12,
          }}
        >
          복잡한 업무를 운영 가능한 시스템으로 만듭니다.
        </div>
        <div style={{ display: "flex", color: "#52615a", fontSize: 29 }}>
          풀스택 개발 · 데이터 품질 · 시스템 전환 · 프로젝트 리딩
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: 12,
          background: "#0d6b62",
        }}
      />
    </div>,
    size,
  );
}
