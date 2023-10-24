import { Project, ProjectId } from "../types";

const projects: Project[] = [
  {
    id: "chronolog",
    title: "ChronoLog: A High-Performance Storage Infrastructure for Activity and Log Workloads",
    shortDescription:
      "HPC applications generate more data than storage systems can handle, and it is becoming increasingly important to store activity (log) data generated by people and applications. ChronoLog is a hierarchical, distributed log store that leverages physical time to achieve log ordering and reduce contention while utilizing storage tiers to elastically scale the log capacity.",
    link: "/research/projects/chronolog",
    isFeatured: true,
    isFunded: true,
    isOurs: true,
  },
  {
    id: "coeus",
    title: "Coeus: Accelerating Scientific Insights Using Enriched Metadata",
    shortDescription:
      "In collaboration with Sandia and Oak Ridge National Laboratories, coeus investigate the use of an active storage system to calculate derived quantities and support complex queries on scientific data (simulation and observational) as well as optimizing data placement across the storage hierarchy, with awareness of the resource limitations, to better support the scientific discovery process.",
    link: "/research/projects/coeus",
    isFeatured: true,
    // isFunded: true,
    isOurs: true,
  },
  {
    id: "hermes",
    title:
      "Hermes: Extending the HDF Library to Support Intelligent I/O Buffering for Deep Memory and Storage Hierarchy System",
    shortDescription:
      "To reduce the I/O bottleneck, complex storage hierarchies have been introduced. However, managing this complexity should not be left to application developers. Hermes is a middeware library that automatically manages buffering in heterogeneous storage environments.",
    link: "/research/projects/hermes",
    isFeatured: true,
    isFunded: true,
    isOpenSource: true,
    isOurs: true,
  },
  {
    id: "iris",
    title: "IRIS: I/O Redirection Via Integrated Storage",
    shortDescription:
      "Various storage solutions exist and require specialized APIs and data models in order to use, which binds developers, applications, and entire computing facilities to using certain interfaces. Each storage system is designed and optimized for certain applications but does not perform well for others. IRIS is a unified storage access system that bridges the semantic gap between filesystems and object stores.",
    link: "/research/projects/iris",
    isFeatured: false,
  },
];

export default projects;

export function getProjectById(id: ProjectId): Project | undefined {
  return projects.find((project) => project.id === id);
}