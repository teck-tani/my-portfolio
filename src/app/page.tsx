import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-stone-900 focus:text-white focus:rounded-lg focus:text-sm"
      >
        본문으로 건너뛰기
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Career />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
