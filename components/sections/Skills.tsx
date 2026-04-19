import SkillCard from "../ui/SkillCard";
import { groups } from "@/data/Skills";

export default function Skills() {
  return (
    <section className="my-[60px]">

      {/* Title */}
      <h1 className="text-[36px] text-black dark:text-white font-bold mb-10 tracking-tight">
        Skills
      </h1>

      {/* Groups */}
      <div className="space-y-16">
        {groups.map((group, i) => (
          <div key={group.title}>

            {/* Title */}
            <div className="flex items-center gap-4 mb-8">
              <p className="text-sm uppercase tracking-widest text-black dark:text-white">
                {group.title}
              </p>
              <div className="flex-1 h-[1px] bg-black dark:bg-white" />
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-6">
              {group.items.map((item, index) => (
                <SkillCard
                  key={item.name}
                  item={item}
                  delay={index}
                />
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
