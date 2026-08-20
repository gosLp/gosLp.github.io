import type { ResumeEntry } from "./types";

export const resumes: ResumeEntry[] = [
  {
    name: "Academic / Research Resume",
    shortName: "Research Resume",
    description:
      "Research-focused resume covering education, GPU systems work, compiler and runtime research, and systems engineering experience.",
    file: "/resumes/pratheek-shetty-cv.pdf",
    category: "academic",
    viewLabel: "View CV",
    available: true,
  },
  {
    name: "GPU Systems Resume",
    shortName: "GPU Systems",
    description:
      "Focused on CUDA, GPU programming, parallel algorithms, concurrent data structures, performance engineering, heterogeneous systems, and HPC.",
    file: "/resumes/pratheek-shetty-gpu-systems.pdf",
    category: "gpu",
    viewLabel: "View resume",
    available: true,
  },
  {
    name: "Compiler / ML Systems Resume",
    shortName: "Compiler Systems",
    description:
      "Focused on compiler and runtime systems, GPU compilers, ML systems, program optimization, task graphs, and kernel fusion.",
    file: "/resumes/pratheek-shetty-compilers.pdf",
    category: "compilers",
    viewLabel: "View resume",
    available: true,
  },
  {
    name: "Software Engineering Resume",
    shortName: "Software Engineering",
    description:
      "A broader software and systems engineering version for general software engineering and systems positions.",
    file: "/resumes/pratheek-shetty-software-engineering.pdf",
    category: "software",
    viewLabel: "View resume",
    available: true,
  },
];
