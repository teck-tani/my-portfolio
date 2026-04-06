import Image from "next/image";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="pt-16 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-sm font-mono text-stone-500 dark:text-stone-400">01</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">소개</h2>
        </div>

        {/* 상단: 사진 + 개인정보 */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
          <Image
            src="/my.jpg"
            alt="권득천 프로필 사진"
            width={256}
            height={320}
            className="w-52 rounded-2xl object-cover object-top shadow-lg shrink-0"
          />

          <div>
            {/* 개인정보 */}
            <ul className="space-y-3 text-base mb-6">
              <li className="flex items-center gap-3">
                <span className="w-20 shrink-0 font-semibold text-stone-800 dark:text-stone-200">이름</span>
                <span className="text-stone-600 dark:text-stone-400">
                  {profile.name.ko} ({profile.name.en})
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-20 shrink-0 font-semibold text-stone-800 dark:text-stone-200">생년월일</span>
                <span className="text-stone-600 dark:text-stone-400">{profile.birthDate}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-20 shrink-0 font-semibold text-stone-800 dark:text-stone-200">이메일</span>
                <a href={`mailto:${profile.email}`} className="text-teal-700 dark:text-teal-400 hover:underline">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-20 shrink-0 font-semibold text-stone-800 dark:text-stone-200">전화번호</span>
                <span className="text-stone-600 dark:text-stone-400">{profile.phone}</span>
              </li>
            </ul>

            {/* 슬로건 */}
            <p className="text-lg font-medium text-stone-700 dark:text-stone-300 leading-[1.7] max-w-[50ch]">
              {profile.summary[0]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
