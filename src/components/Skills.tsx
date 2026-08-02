import { skills } from "@/data/skills";

const levelLabels = {
  expert: "주력",
  advanced: "숙련",
  intermediate: "활용",
};

export default function Skills() {
  return (
    <section id="skills" className="section-block skills-section">
      <div className="site-container skills-layout">
        <div className="skills-intro">
          <p className="section-index">03 / Technical range</p>
          <h2>핵심 기술과 수행 역량</h2>
          <p>
            채용 포지션과 직접 연결되는 Java·Spring·SQL을 중심에 두고,
            프론트엔드와 모바일은 업무 흐름을 완성하는 도구로 활용합니다.
          </p>
        </div>

        <div className="skill-groups">
          {skills.map((group) => (
            <section key={group.category} className="skill-group">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <small>{levelLabels[skill.level]}</small>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
