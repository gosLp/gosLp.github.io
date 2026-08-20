export const site = {
  name: "Pratheek Prakash Shetty",
  shortName: "Pratheek P. Shetty",
  title: "Pratheek Prakash Shetty | GPU Systems & Parallel Computing",
  description:
    "Pratheek Prakash Shetty is a computer engineering researcher interested in GPU systems, parallel algorithms, compiler and runtime systems, and high-performance computing.",
  siteUrl: "https://pratheekps.github.io",
  email: "pratheekps@vt.edu",
  location: "Blacksburg, VA",
  headshot: {
    src: "/images/pratheek-shetty2.jpg",
    alt: "Portrait of Pratheek Prakash Shetty",
    initials: "PPS",
  },
  eyebrow: "Computer Engineering Researcher",
  focusLine: "GPU Systems · Parallel Algorithms · Compilers · HPC",
  introduction:
    "I am a computer engineering researcher interested in GPU systems, parallel algorithms, concurrent data structures, compiler and runtime systems, and high-performance computing.",
  about: [

    "I am a MS student in Electrical and Computer Engineering at Virginia Tech, where I work as a Graduate Research Assistant in the SyNeRGy Lab advised by Dr. Wu-chun Feng, and co-advised by Thomas Scogland at Lawrence Livermore National Laboratory.",
   
    // "My work is centered on systems problems where hardware behavior, concurrency, and software abstractions meet. I am especially interested in making accelerator-backed systems easier to reason about and more efficient at scale.",
    // "I enjoy problems involving GPU execution, synchronization, scheduling, parallel data structures, and the compiler and runtime support needed for irregular workloads.",
  ],
  currentDetails:[
    //  "My work sits in the gap between what concurrency theory assumes and what GPUs actually provide. Classical lock-free and wait-free algorithms were designed for CPUs: they assume double-width atomics, dynamic allocation, and a scheduler fairness. GPUs supply none of these. The algorithms do not transfer well, and neither do their progress proofs, so the device-resident queues inside real GPU systems are written by hand, with performance measured and correctness assumed",
    "My work asks how classical concurrency changes when the machine is a GPU. The abstractions and progress arguments developed for CPU systems do not map cleanly onto massively parallel accelerators, where the available synchronization primitives, memory model, and scheduling behavior impose very different constraints on both correctness and performance.",
    "I work on GPU-native concurrent data structures that make those constraints explicit, combining architecture-aware design with formal correctness and progress guarantees. More broadly, I am interested in making device-side coordination something that can be reasoned about systematically rather than treated as an architecture-specific implementation detail.",
    // "I have been rebuilding that foundation: bounded ring queues that pack every concurrently modified shared object into a single native 64-bit word, batch contended reservations at warp granularity, and carry progress guarantees stated as theorems with their scheduler assumptions made explicit. The designs are proved, checked with a linearizability checker over concurrent histories, and evaluated on four GPUs from two vendors",
    "Where I want to take this: device-side coordination is moving onto the critical path of real systems. Megakernels with in-kernel schedulers, device-side task graphs, GPU-initiated I/O. Those systems inherit whatever semantics their queue provides, usually without a stated guarantee. I want to work on the compiler and runtime side of that problem: making the scheduling and coordination structures that compilers emit something you can reason about rather than something you benchmark and hope."
  ],
    // "TODO: Add current academic status, institution, research group, advisor, and future research direction.",
  profiles: {
    github: "https://github.com/gosLp",
    scholar: "https://scholar.google.com/citations?hl=en&user=fVFqdIUAAAAJ",
    linkedin: "https://www.linkedin.com/in/pratheekps01",
    blog: "https://pratfolio.vercel.app",
  },
} as const;

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/research/" },
  { label: "Projects", href: "/projects/" },
  { label: "Resumes", href: "/resumes/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const researchInterests = [
  
  {
    title: "Compilers & Runtime Systems",
    description:
      "Device-side task graphs, megakernels and persistent kernels, and scheduling for work that is discovered at runtime rather than fixed at launch.",
  },
  {
    title: "Parallel Algorithms & Concurrent Data Structures",
    description:
      "Bounded ring queues, helping protocols, linearizability, and the practical question of when a concurrent structure is actually on a workload's critical path.",
  },
  {
    title: "GPU Systems",
    description:
      "GPU execution models, accelerator systems, synchronization, scheduling, and heterogeneous CPU–GPU systems.",
  },
  {
    title: "High-Performance Computing",
    description:
      "Cross-vendor characterization on NVIDIA and AMD, hardware counter analysis normalized to useful work, and heterogeneous CPU–GPU systems such as GH200.",
  },
] as const;

export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}` || "/";
}
