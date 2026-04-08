export default function Hero() {
  return (
    <section id="hero" className="px-6 pt-32 pb-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display font-extrabold tracking-tight text-3xl md:text-4xl">
          권득천
          <span className="text-stone-400 dark:text-stone-500 font-normal mx-2">|</span>
          <span className="text-stone-600 dark:text-stone-300 font-semibold">
            풀스택 웹 개발자 · AI Agent
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="text-sm px-3 py-1 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 font-medium">
            17년+ 경력
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 font-medium">
            20개+ 프로젝트
          </span>
        </div>
      </div>
    </section>
  );
}
