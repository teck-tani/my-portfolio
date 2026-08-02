import { profile } from "@/data/profile";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <p>© 2026 권득천</p>
        <div>
          <a href={`mailto:${profile.email}`}>이메일</a>
          <Link href="/#hero">맨 위로</Link>
        </div>
      </div>
    </footer>
  );
}
