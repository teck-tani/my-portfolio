export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-3xl text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-4">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
          Hi, I&apos;m
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">
          Kwon Deuk Cheon
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          17년차 풀스택 개발자.
          <br />
          개발을 즐기고, AI와 함께 새로운 가능성을 만들어갑니다.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
