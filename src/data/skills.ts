import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    items: [
      { name: "Java", level: "expert" },
      { name: "Spring", level: "expert" },
      { name: "eGovFramework", level: "advanced" },
      { name: "MyBatis", level: "expert" },
      { name: "Struts", level: "advanced" },
      { name: "REST API", level: "advanced" },
      { name: "JSP", level: "expert" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", level: "expert" },
      { name: "jQuery", level: "expert" },
      { name: "Vue.js", level: "advanced" },
      { name: "React", level: "intermediate" },
      { name: "Next.js", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "HTML/CSS", level: "expert" },
      { name: "D3.js", level: "intermediate" },
      { name: "Vuetify", level: "intermediate" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "Oracle", level: "expert" },
      { name: "MySQL", level: "advanced" },
      { name: "MSSQL", level: "advanced" },
      { name: "SQL", level: "expert" },
      { name: "DB 모델링", level: "advanced" },
    ],
  },
  {
    category: "DevTools & Framework",
    items: [
      { name: "SDP Framework", level: "advanced" },
      { name: "Cordova", level: "intermediate" },
      { name: "GcExcel", level: "intermediate" },
      { name: "Jest", level: "intermediate" },
      { name: "Git", level: "advanced" },
      { name: "JSON", level: "expert" },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { name: "AI 개발", level: "intermediate" },
    ],
  },
];
