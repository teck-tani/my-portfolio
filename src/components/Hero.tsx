export default function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center justify-center px-6 pt-32 pb-16"
    >
      <div className="max-w-3xl text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-4">
          포트폴리오
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
          안녕하세요,
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">
          권득천입니다
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          풀스택 개발자.
          <br />
          개발을 즐기고, AI와 함께 새로운 가능성을 만들어갑니다.
        </p>
      </div>
    </section>
  );
}
