import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://dckwon-portfolio.vercel.app";
const siteTitle = "권득천 | Java·Spring B2B 시니어 개발자";
const siteDescription =
  "Java·Spring 기반 B2B 업무 시스템을 설계하고 구현해 온 권득천의 포트폴리오입니다. 풀스택 개발, 데이터 품질, 시스템 전환, PL 경험을 대표 사례로 확인할 수 있습니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | 권득천 포트폴리오",
  },
  description: siteDescription,
  applicationName: "권득천 포트폴리오",
  authors: [{ name: "권득천" }],
  creator: "권득천",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "권득천 포트폴리오",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full" data-scroll-behavior="smooth">
      <body className="min-h-full">
        <a className="skip-link" href="#main">
          본문으로 건너뛰기
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
