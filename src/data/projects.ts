import type { ProjectEntry } from "./types";

export const projects: ProjectEntry[] = [
  {
    title: "Tvastr: Contract-Driven GPU DSL Prototype",
    description:
      "A prototype generator that turns tensor-operation contracts into executable compiler and runtime artifacts.",
    longDescription:
      "Building a GPU DSL generator that converts tensor-operation contracts into PyTorch references, Triton kernel scaffolds, runtime guards, schedule spaces, autotuning scripts, and MLIR/TableGen stubs. Includes shape and dtype validation, layout guards, rewrite-legality checks, schedule pruning, and heuristic schedule ranking for a fused matrix multiplication, bias, and ReLU kernel.",
    technologies: ["Triton", "PyTorch", "MLIR", "TableGen", "Autotuning"],
    featured: true,
    year: 2026,
  },
  {
    title: "Autotiling Pass for LLVM/MLIR",
    description:
      "A compiler pass that analyzes reuse and selects cache-aware tile sizes for GPU kernels.",
    longDescription:
      "Built a C++ MLIR pass that analyzes data-reuse patterns, selects cache-optimal tile sizes, fuses loops, and inserts prefetches for GPU kernels. Resume evaluation reports a 1.9x speedup on GEMM and convolution workloads with 2% compile overhead.",
    technologies: ["C++", "LLVM", "MLIR", "GPU Compilers"],
    featured: true,
    year: 2025,
  },
  {
    title: "RISC-V Sine Hardware Accelerator",
    description:
      "A custom RISC-V accelerator for trigonometric workloads in graphics and physics-style kernels.",
    longDescription:
      "Designed a hardware accelerator for sine computation and evaluated it against a software implementation. Resume evaluation reports a 43% cycle-count reduction while maintaining precision.",
    technologies: ["RISC-V", "Computer Architecture", "Hardware Acceleration"],
    featured: true,
    year: 2024,
  },
  {
    title: "Rlu-BplusTree",
    description:
      "A concurrent B+ tree implementation in Rust focused on performance and memory safety.",
    longDescription:
      "Created a concurrent B+ tree for multithreaded database and file-system workloads. Resume evaluation reports 90% of the C implementation's speed while eliminating the memory-safety vulnerabilities present in that implementation.",
    technologies: ["Rust", "Concurrent Data Structures", "Databases"],
    featured: true,
    year: 2024,
  },
  {
    title: "GigaDAQ: Real-Time Data Acquisition System",
    description:
      "A high-speed data acquisition and visualization system for custom laboratory hardware.",
    longDescription:
      "Developed a Python server and Electron interface for real-time data acquisition, waveform visualization, serial hardware communication, and large-dataset processing, with attention to low-level data handling and network I/O.",
    technologies: ["Python", "Electron", "React", "Hardware I/O"],
    featured: false,
    year: 2024,
  }
];
