export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface PublicationItem {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  dateStr: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; iconName: string }[];
}
