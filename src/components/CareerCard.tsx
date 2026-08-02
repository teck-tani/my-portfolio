import Link from "next/link";
import type { CareerEntry } from "@/data/types";

export default function CareerCard({ entry }: { entry: CareerEntry }) {
  const title = entry.description;

  return (
    <article
      id={entry.portfolioSlug ? `career-${entry.portfolioSlug}` : undefined}
      className="career-entry"
    >
      <div className="career-period">
        <time>{entry.period.start}</time>
        <span aria-hidden="true">—</span>
        <time>{entry.period.end}</time>
      </div>

      <div className="career-content">
        <div className="career-heading-row">
          <div>
            <p className="career-company">
              {entry.company}
              {entry.position ? ` · ${entry.position}` : ""}
              {entry.client ? ` / 고객사 ${entry.client}` : ""}
            </p>
            <h3>
              {entry.portfolioSlug ? (
                <Link href={`/portfolio/${entry.portfolioSlug}`}>{title}</Link>
              ) : (
                title
              )}
            </h3>
          </div>
          <span className="career-type">{entry.type}</span>
        </div>

        <p className="career-role">{entry.role}</p>

        {entry.details.length > 0 && (
          <details className="career-details">
            <summary>담당 내용 보기</summary>
            <ul>
              {entry.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </details>
        )}

        {entry.techStack.length > 0 && (
          <p className="career-tech">
            <span>기술</span>
            {entry.techStack.join(" · ")}
          </p>
        )}

        {entry.portfolioSlug && (
          <Link className="career-link" href={`/portfolio/${entry.portfolioSlug}`}>
            프로젝트 사례 읽기 <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
    </article>
  );
}
