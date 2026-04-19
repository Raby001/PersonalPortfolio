import { projects } from "@/data/Projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList({
  onlyFeatured = false,
}: {
  onlyFeatured?: boolean;
}) {
  const filtered = onlyFeatured
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {filtered.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}