import type { ResearchEntry } from "./types";

export const research: ResearchEntry[] = [
  {
    id: "grace-or-hopper",
    title:
      "Grace or Hopper? A Case Study of Wait-Free Concurrent Queues on the NVIDIA Grace Hopper GH200 Superchip",
    authors: [
      "Pratheek Prakash Shetty",
      "Atharva Gondhalekar",
      "Wu-chun Feng",
    ],
    venue:
      "ICPP Workshops '26 — 55th International Conference on Parallel Processing",
    location: "Singapore",
    year: 2026,
    status: "Published",
    description:
      "A device-local comparison of the Yang & Mellor-Crummey wait-free queue executed by Grace CPU threads against a CUDA adaptation executed by Hopper GPU threads on a coherent CPU-GPU superchip. The GPU implementation replaces dynamic node allocation with a host-preallocated segment pool, introducing a capacity dimension the CPU version does not have. The study characterizes throughput across thread counts and workload mixes, interprets the trends with CPU performance counters and Nsight Compute metrics, and isolates segment-pool sizing behavior from peak throughput.",
    doiUrl: "https://doi.org/10.1145/3816891.3834896",
    featured: true,
    highlights: [
      "Approximately 100x aggregate throughput for the GPU implementation at maximum evaluated parallelism and sufficient pool capacity.",
      "Warp-stall analysis attributes GPU cost to dependent memory operations rather than insufficient work.",
      "Separates capacity exhaustion (failed enqueues) from genuine emptiness (empty dequeues) in the measurement methodology.",
    ],
    latestUpdate: {
      date: "2026",
      title: "“Grace or Hopper?” published in the ICPP 2026 Workshops proceedings",
      description:
        "A case study of wait-free concurrent queues on the NVIDIA Grace Hopper GH200 Superchip.",
      url: "https://doi.org/10.1145/3816891.3834896",
    },
  },
  {
    id: "scalable-gpu-queues",
    title: "Scalable Concurrent Queues for GPU",
    authors: [
      "Pratheek Prakash Shetty",
      "Thomas R. W. Scogland",
      "Wu-chun Feng",
    ],
    venue: "arXiv preprint",
    year: 2026,
    status: "Preprint",
    description:
      "Work on scalable GPU concurrent queue design spanning lock-free and wait-free progress guarantees, including a queue variant not carried forward into the later packed-ring designs.",
    paperUrl: "https://arxiv.org/abs/2606.01693",
    doiUrl: "https://doi.org/10.48550/arXiv.2606.01693",
    featured: true,
    latestUpdate: {
      date: "2026-06-01",
      title: "“Scalable Concurrent Queues for GPU” is available as an arXiv preprint",
      description:
        "The preprint presents three linearizable GPU queues spanning lock-free and wait-free guarantees.",
      url: "https://arxiv.org/abs/2606.01693",
    },
  },
];
