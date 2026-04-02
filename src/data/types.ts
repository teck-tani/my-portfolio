export interface CareerEntry {
  id: number;
  company: string;
  department?: string;
  client?: string;
  role: string;
  position: string;
  period: { start: string; end: string };
  category: "production" | "developer" | "lead";
  type: "정규직" | "프리랜서" | "스타트업" | "병역특례" | "실습";
  description: string;
  details: string[];
  techStack: string[];
  portfolioSlug?: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: "expert" | "advanced" | "intermediate" | "learning";
}

export interface Education {
  institution: string;
  major: string;
  period: string;
  status: string;
  gpa?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Training {
  name: string;
  institution: string;
  period: string;
  description: string;
}

export interface ProfileData {
  name: { ko: string; en: string };
  birthDate: string;
  email: string;
  phone: string;
  title: string;
  summary: string[];
  desiredLocations: string[];
  desiredEmployment: string[];
}
