import type { ProfileData, Education, Certification, Training } from "./types";

export const profile: ProfileData = {
  name: { ko: "권득천", en: "Kwon Deuk Cheon" },
  email: "kweon82@naver.com",
  title: "Java/Spring B2B 시니어 개발자",
  summary: [
    "Java·Spring 기반 B2B 시스템을 요구사항 정의부터 설계, 구현, 안정화까지 책임지는 시니어 풀스택 개발자.",
  ],
  desiredLocations: ["경기 화성시", "경기 용인시 기흥구", "경기 성남시 분당구"],
  desiredEmployment: ["정규직"],
};

export const educations: Education[] = [
  {
    institution: "학점은행제",
    major: "컴퓨터공학과",
    period: "2018.06 ~ 2019.02",
    status: "졸업",
  },
  {
    institution: "수원과학대학",
    major: "컴퓨터정보과",
    period: "2007.02 ~ 2011.02",
    status: "졸업",
    gpa: "3.8 / 4.5",
  },
  {
    institution: "수원공업고등학교",
    major: "전문(실업)계열",
    period: "~ 2001",
    status: "졸업",
  },
];

export const certifications: Certification[] = [
  { name: "자동차운전면허", issuer: "경찰청", year: "2000" },
  { name: "통신선로기능사", issuer: "한국산업인력공단", year: "2000" },
];

export const trainings: Training[] = [
  {
    name: "실전 jQuery",
    institution: "삼성SDS멀티캠퍼스",
    period: "2012.09",
    description: "jQuery를 이용한 다양한 웹디자인 구현",
  },
  {
    name: "중소기업 정보시스템 구축을 위한 데이터모델링 핵심",
    institution: "한국데이터베이스진흥원",
    period: "2012.08",
    description: "DB 모델링 기법",
  },
  {
    name: "안드로이드와 JAVA Framework 전문가 양성 과정",
    institution: "KOSTA",
    period: "2011.07 ~ 2012.01",
    description:
      "Java, SQL, HTML, JavaScript, JSP, Ajax, Struts, Spring을 이용한 웹개발",
  },
];
