export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    title: "포트폴리오 웹사이트",
    description:
      "Next.js + TypeScript + Tailwind CSS로 구축한 개인 포트폴리오 사이트. AI(Claude)와 함께 개발.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in-progress",
  },
];
