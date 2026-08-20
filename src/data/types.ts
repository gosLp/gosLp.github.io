export type ResearchStatus =
  | "Published"
  | "Accepted"
  | "Workshop"
  | "Preprint"
  | "Under review"
  | "In progress";

export interface LatestUpdate {
  /** ISO year, month, or date; for example 2026, 2026-08, or 2026-08-19. */
  date: string;
  title: string;
  description?: string;
  url?: string;
}

export interface ResearchEntry {
  id: string;
  title: string;
  authors: string[];
  venue?: string;
  location?: string;
  year?: number;
  status: ResearchStatus;
  description: string;
  paperUrl?: string;
  codeUrl?: string;
  slidesUrl?: string;
  posterUrl?: string;
  doiUrl?: string;
  featured: boolean;
  highlights?: string[];
  /** Add this object to surface a research update in Latest news. */
  latestUpdate?: LatestUpdate;
}

export interface ProjectEntry {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  projectUrl?: string;
  paperUrl?: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
  year?: number;
  /** Add this object to surface a project update in Latest news. */
  latestUpdate?: LatestUpdate;
}

export interface ExperienceEntry {
  organization: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  context?: string;
  description: string[];
  url?: string;
}

export interface ResumeEntry {
  name: string;
  shortName: string;
  description: string;
  file: string;
  category: "academic" | "gpu" | "compilers" | "software";
  viewLabel: string;
  available: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface WritingEntry {
  title: string;
  date?: string;
  description: string;
  url: string;
}

export interface NewsEntry extends LatestUpdate {
  category: "Paper" | "Research" | "Publication" | "Project" | "Talk" | "Award" | "Site" | "Other";
}
