import { careers } from "@/data/career";
import CareerCard from "./CareerCard";

export default function Career() {
  const developmentCareers = careers
    .filter((entry) => entry.category !== "production")
    .toReversed();
  const recentCareers = developmentCareers.slice(0, 6);
  const earlierCareers = developmentCareers.slice(6);

  return (
    <section id="career" className="section-block career-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-index">04 / Experience</p>
          <div>
            <h2>최근 경험부터 빠르게 확인하세요.</h2>
            <p>
              2012년 이후 17건의 개발 프로젝트를 수행했습니다. 최근 경험은
              바로 보여주고, 이전 경력은 필요할 때 펼쳐 볼 수 있게 정리했습니다.
            </p>
          </div>
        </div>

        <div className="career-list">
          {recentCareers.map((entry) => (
            <CareerCard key={entry.id} entry={entry} />
          ))}
        </div>

        <details className="career-archive">
          <summary>
            <span>2012 — 2021 이전 개발 경력</span>
            <strong>{earlierCareers.length}개 프로젝트 펼쳐 보기</strong>
          </summary>
          <div className="career-list archived">
            {earlierCareers.map((entry) => (
              <CareerCard key={entry.id} entry={entry} />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
