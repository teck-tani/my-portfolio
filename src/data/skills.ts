import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    category: "Backend · Core",
    items: [
      { name: "Java", level: "expert" },
      { name: "Spring / Spring Boot", level: "expert" },
      { name: "MyBatis", level: "expert" },
      { name: "REST API", level: "advanced" },
      { name: "eGovFramework / SDP", level: "advanced" },
      { name: "JSP", level: "expert" },
    ],
  },
  {
    category: "Frontend · Mobile",
    items: [
      { name: "JavaScript", level: "expert" },
      { name: "HTML / CSS", level: "expert" },
      { name: "jQuery", level: "expert" },
      { name: "Vue.js", level: "advanced" },
      { name: "Cordova", level: "advanced" },
      { name: "React / Next.js", level: "intermediate" },
    ],
  },
  {
    category: "Data · Integration",
    items: [
      { name: "Oracle / SQL / PL·SQL", level: "expert" },
      { name: "DB 모델링", level: "advanced" },
      { name: "데이터 품질 · 정합성", level: "advanced" },
      { name: "외부 API · SAP 연동", level: "advanced" },
      { name: "엑셀 파싱 · 정규화", level: "advanced" },
    ],
  },
  {
    category: "Delivery · Leadership",
    items: [
      { name: "요구사항 정의", level: "advanced" },
      { name: "프로젝트 리딩", level: "advanced" },
      { name: "레거시 분석 · 전환", level: "advanced" },
      { name: "고객 커뮤니케이션", level: "advanced" },
      { name: "Git · Jest", level: "intermediate" },
    ],
  },
];
