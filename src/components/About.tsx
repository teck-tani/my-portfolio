export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About Me
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
              DK
            </div>
          </div>

          <div>
            {/* 개인 정보 */}
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-20 font-semibold text-zinc-800 dark:text-zinc-200">이름</span>
                <span className="text-zinc-600 dark:text-zinc-400">권득천 (Kwon Deuk Cheon)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-20 font-semibold text-zinc-800 dark:text-zinc-200">생년월일</span>
                <span className="text-zinc-600 dark:text-zinc-400">1982.10.09</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-20 font-semibold text-zinc-800 dark:text-zinc-200">이메일</span>
                <a href="mailto:kweon82@naver.com" className="text-blue-600 hover:underline">kweon82@naver.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-20 font-semibold text-zinc-800 dark:text-zinc-200">전화번호</span>
                <span className="text-zinc-600 dark:text-zinc-400">010-5292-9461</span>
              </li>
            </ul>

            {/* 자기소개 */}
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              안녕하세요, 17년차 풀스택 개발자 권득천입니다.
              개발이라는 일이 저에게는 단순한 직업이 아니라 가장 즐거운 놀이터입니다.
              새로운 기술을 배우고, 코드 한 줄로 아이디어가 현실이 되는 그 순간이 늘 설렙니다.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              최근에는 AI를 활용한 개발에 푹 빠져 있습니다.
              AI와 함께 코딩하며 생산성의 한계를 넘고, 이전에는 상상만 했던 것들을
              빠르게 구현해내는 과정이 매일매일 흥미롭습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
