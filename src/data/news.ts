import { projects } from "./projects";
import { research } from "./research";
import type { NewsEntry } from "./types";

/**
 * Add standalone news here. Keep dates in YYYY-MM-DD format.
 *
 * Example — publish only after every detail is verified:
 * {
 *   date: "2026-08-19",
 *   category: "Publication",
 *   title: "New paper accepted to an ICPP 2026 workshop",
 *   description: "One factual sentence about the work and its contribution.",
 *   url: "/research/",
 * },
 */
export const manualNews: NewsEntry[] = [];

const researchNews: NewsEntry[] = research.flatMap((entry) =>
  entry.latestUpdate
    ? [{
        ...entry.latestUpdate,
        category: entry.status === "Published" || entry.status === "Preprint" ? "Paper" : "Research",
        url: entry.latestUpdate.url ?? entry.paperUrl ?? "/research/",
      }]
    : [],
);

const projectNews: NewsEntry[] = projects.flatMap((project) =>
  project.latestUpdate
    ? [{
        ...project.latestUpdate,
        category: "Project",
        url: project.latestUpdate.url ?? project.projectUrl ?? project.githubUrl ?? "/projects/",
      }]
    : [],
);

export const latestNews = [...manualNews, ...researchNews, ...projectNews]
  .sort((a, b) => b.date.localeCompare(a.date));
