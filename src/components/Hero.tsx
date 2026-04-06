export default function Hero() {
  return (
    <section id="hero" className="px-6 pt-48 pb-32">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-wide text-stone-500 dark:text-stone-400 mb-6">
          Full-Stack Developer — 17+ Years
        </p>
        <h1 className="font-display font-extrabold tracking-tighter leading-[0.9] text-[clamp(3.5rem,8vw,6rem)]">
          권득천
        </h1>
        <div className="mt-8 max-w-[50ch]">
          <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 leading-[1.7]">
            빠른 적응력, 정확한 결과물.
            <br />
            다양한 현장에서 검증된 풀스택 개발자.
          </p>
        </div>
      </div>
    </section>
  );
}
