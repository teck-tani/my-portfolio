const capabilities = [
  {
    number: "01",
    title: "요구사항을 개발 가능한 언어로 바꿉니다.",
    description:
      "고객이 기능의 방향을 명확히 설명하지 못해도 반복 미팅과 문서화로 범위를 합의하고, 팀이 구현할 수 있는 단위로 나눕니다.",
  },
  {
    number: "02",
    title: "화면과 API, 데이터 흐름을 함께 봅니다.",
    description:
      "DB 모델링부터 Java 서버, 웹·모바일 UI까지 연결해 보았기 때문에 한 계층의 편의보다 전체 운영 흐름을 기준으로 판단합니다.",
  },
  {
    number: "03",
    title: "낯선 시스템도 구조부터 복원합니다.",
    description:
      "문서가 부족한 레거시 코드와 데이터 구조를 역분석하고, 인증·권한·배치·정합성 같은 운영 리스크를 찾아 안정화합니다.",
  },
];

export default function About() {
  return (
    <section id="capabilities" className="section-block capability-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-index">02 / How I work</p>
          <div>
            <h2>시니어 개발자에게 기대하는 범위를 끝까지 맡습니다.</h2>
            <p>
              구현 속도만큼 중요한 것은 문제를 제대로 정의하고, 운영 이후에도
              이해할 수 있는 결과를 남기는 일이라고 생각합니다.
            </p>
          </div>
        </div>

        <ol className="capability-list">
          {capabilities.map((capability) => (
            <li key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
