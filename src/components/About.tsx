import Image from "next/image";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          소개
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

        {/* 상단: 사진 + 개인정보 */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-12">
          <Image
            src="/my.jpg"
            alt="권득천 프로필 사진"
            width={256}
            height={320}
            className="w-52 rounded-2xl object-cover object-top shadow-lg shrink-0"
            priority
          />

          <div>
            {/* 개인정보 */}
            <ul className="space-y-3 text-base mb-6">
              <li className="flex items-center gap-3">
                <span className="w-20 shrink-0 font-semibold text-zinc-800 dark:text-zinc-200">이름</span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  {profile.name.ko} ({profile.name.en})
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-20 shrink-0 font-semibold text-zinc-800 dark:text-zinc-200">생년월일</span>
                <span className="text-zinc-600 dark:text-zinc-400">{profile.birthDate}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-20 shrink-0 font-semibold text-zinc-800 dark:text-zinc-200">이메일</span>
                <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-20 shrink-0 font-semibold text-zinc-800 dark:text-zinc-200">전화번호</span>
                <span className="text-zinc-600 dark:text-zinc-400">{profile.phone}</span>
              </li>
            </ul>

            {/* 슬로건 */}
            <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {profile.summary[0]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
