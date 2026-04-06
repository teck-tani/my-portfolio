"use client";

import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "홈" },
  { href: "#about", label: "소개" },
  { href: "#career", label: "경력" },
  { href: "#skills", label: "기술" },
  { href: "#projects", label: "프로젝트" },
  { href: "#contact", label: "연락처" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#hero" className="text-xl font-bold tracking-tight">
          DCKwon
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-black dark:text-stone-400 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-background border-b border-stone-200 dark:border-stone-800 px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-stone-600 hover:text-black dark:text-stone-400 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
