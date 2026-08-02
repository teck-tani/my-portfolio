import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-[70vh] px-6 py-24 flex items-center justify-center"
    >
      <div className="w-full max-w-xl text-center">
        <p className="mb-4 font-mono text-sm font-semibold tracking-[0.2em] text-teal-700 dark:text-teal-300">
          404 · PAGE NOT FOUND
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          요청하신 페이지를 찾을 수 없습니다
        </h1>
        <p className="mx-auto mt-5 max-w-md leading-7 text-zinc-600 dark:text-zinc-300">
          주소가 변경되었거나 더 이상 제공되지 않는 페이지입니다. 홈에서 프로젝트와
          경력을 다시 확인해 주세요.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-teal-300"
        >
          포트폴리오 홈으로
        </Link>
      </div>
    </main>
  );
}
