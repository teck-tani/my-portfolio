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
  screenshots?: { src: string; alt: string; caption?: string }[];
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: "expert" | "advanced" | "intermediate";
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

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  summary?: string;
  description: string;
  techStack: string[];
  highlights: string[];
  screenshots: {
    src: string;
    alt: string;
    placeholder?: boolean;
    type?: "mobile" | "web";
    caption?: string;
  }[];
}

export interface CompanyPortfolio {
  companyName: string;
  client: string;
  period: { start: string; end: string };
  role: string;
  summary: string;
  techStack: string[];
  projects: ProjectDetail[];
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
