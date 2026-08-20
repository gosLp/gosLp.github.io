import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    organization: "SyNeRGy Lab, Virginia Tech",
    role: "Research Assistant",
    location: "Blacksburg, VA",
    startDate: "Dec 2024",
    endDate: "Present",
    context:
      "Advisor: Wu-chun Feng · External advisor: Thomas R. W. Scogland, Lawrence Livermore National Laboratory",
    description: [
      "Designed and proved two bounded GPU concurrent FIFO queues with lock-free and wait-free progress guarantees.",
      "Built and validated cross-vendor CUDA and HIP implementations evaluated on four GPUs from two vendors.",
      "Characterized wait-free queue behavior on the NVIDIA GH200 across CPU and GPU execution; published at ICPP Workshops '26.",
      "Studied GPU atomic operations, contention, memory coherence, and concurrent data-structure behavior using Nsight Compute, rocprof, and VTune.",
      "Developed a persistent device-side scheduling algorithm in C++ and SYCL for the CoreTSAR-M heterogeneous task-distribution runtime.",
    ],
  },
  {
    organization: "Virginia Tech",
    role: "Software Engineer",
    location: "Blacksburg, VA",
    startDate: "Sep 2024",
    endDate: "May 2025",
    description: [
      "Built a real-time data acquisition and visualization system for high-frequency signals using Python, Electron, and React.",
      "Implemented a multithreaded processing pipeline that increased throughput by 2.5x.",
      "Reduced processing latency by 35% by optimizing microcontroller communication with a custom SPI interface.",
    ],
  },
  {
    organization: "Instahyre",
    role: "Software Development Engineer Intern",
    startDate: "Mar 2024",
    endDate: "Jun 2024",
    description: [
      "Restructured a microservices architecture to support 3x more concurrent users while reducing API response time by 40%.",
      "Optimized PostgreSQL queries and a Django backend, reducing average query time from 1.2 seconds to 0.3 seconds.",
      "Developed customizable and automated job-email workflows using Django, Angular, and RabbitMQ.",
    ],
  },
  {
    organization: "Tikaj Private Ltd",
    role: "Software Development Engineer Intern",
    startDate: "Mar 2023",
    endDate: "Jul 2023",
    description: [
      "Maintained Node.js services for Phishgrid and Blinkstore and integrated an LLM-powered automated-task workflow.",
      "Worked on CI/CD pipelines and a microservices architecture to improve backend scalability.",
    ],
  },
  {
    organization: "CryptoNaukri",
    role: "Backend Intern",
    startDate: "Apr 2022",
    endDate: "Jun 2022",
    description: [
      "Designed validated Express.js API routes for a blockchain-developer community platform.",
      "Improved backend performance by 10% through secure route and validation optimizations.",
    ],
  },
];
