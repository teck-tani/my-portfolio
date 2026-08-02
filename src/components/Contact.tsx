import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="site-container contact-layout">
        <div>
          <p className="section-index">05 / Contact</p>
          <h2>운영되는 시스템을 함께 만들 사람을 찾고 계신가요?</h2>
        </div>
        <div className="contact-copy">
          <p>
            Java·Spring 기반 B2B 서비스의 신규 구축, 전환, 안정화와 PL 역할에
            기여할 수 있습니다. 현재는 장기적으로 제품과 업무를 이해할 수 있는
            정규직 포지션을 우선 검토하고 있습니다.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <span>{profile.email}</span>
            <span aria-hidden="true">↗</span>
          </a>
          <small>전화번호 등 상세 연락처는 지원 서류에서 확인하실 수 있습니다.</small>
        </div>
      </div>
    </section>
  );
}
