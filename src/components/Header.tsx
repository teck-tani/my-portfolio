"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/#featured", label: "대표 프로젝트" },
  { href: "/#capabilities", label: "핵심 역량" },
  { href: "/#career", label: "경력" },
  { href: "/#contact", label: "연락" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="/#hero" className="brand" aria-label="권득천 포트폴리오 홈">
          <span className="brand-mark" aria-hidden="true">DK</span>
          <span className="brand-copy">
            <strong>권득천</strong>
            <small>Java · Spring · B2B</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <a className="header-contact" href={`mailto:${profile.email}`}>
          이메일 문의
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true">{mobileOpen ? "닫기" : "메뉴"}</span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${mobileOpen ? "is-open" : ""}`}
        aria-label="모바일 메뉴"
        hidden={!mobileOpen}
      >
        <div className="site-container">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${profile.email}`} onClick={() => setMobileOpen(false)}>
            {profile.email}
          </a>
        </div>
      </nav>
    </header>
  );
}
