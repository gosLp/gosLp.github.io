import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C++", "C", "CUDA C++", "Python", "Rust", "Go", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "GPU / Parallel Computing",
    items: ["CUDA", "ROCm", "HIP", "OpenMP", "SYCL / DPC++", "Multithreading", "HPC", "Nsight Compute", "rocprof", "VTune"],
  },
  {
    category: "Systems",
    items: ["Concurrent data structures", "Lock-free algorithms", "Wait-free algorithms", "Atomics", "Synchronization", "Linux / UNIX", "Operating systems", "Computer architecture"],
  },
  {
    category: "Compiler / ML Systems",
    items: ["LLVM IR", "MLIR", "Triton", "PyTorch", "TensorFlow", "Compiler optimization", "Data-flow analysis", "Tiling", "Fusion", "Autotuning"],
  },
  {
    category: "Engineering & Infrastructure",
    items: ["Docker", "Kubernetes", "AWS", "Django", "PostgreSQL", "MongoDB", "RabbitMQ", "gRPC", "Kafka", "React", "Electron"],
  },
];
