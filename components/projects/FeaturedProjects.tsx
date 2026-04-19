import InternalLink from "../ui/InternalLink";
import ProjectList from "./ProjectList";

export default function FeaturedProjects() {
  return (
    <section className="my-[100px]">
        
        <h1 className="text-[32px] font-bold mb-10">
            Projects
        </h1>

        <ProjectList onlyFeatured />
        <div className="mt-10">
            <InternalLink href="/project">
                View all Projects →
            </InternalLink>            
        </div>

    </section>
  );
}