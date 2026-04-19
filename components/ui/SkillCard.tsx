"use client";

import Image from "next/image";

export default function SkillCard({
  item,
  delay,
}: {
  item: { name: string; img: string };
  delay: number;
}) {
  return (
    <div
      style={{ animationDelay: `${delay * 60}ms` }}
      className="
      group w-[85px] h-[85px]
      flex flex-col items-center justify-center gap-2

      rounded-xl border

      border-gray-200 bg-white shadow-sm

      dark:border-white/10 dark:bg-white/[0.04] dark:backdrop-blur-md

      transition-all duration-300

      hover:-translate-y-2 hover:scale-[1.05]
      hover:border-indigo-500/40
      hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)]

      dark:hover:border-amber-400/40
      dark:hover:shadow-[0_10px_30px_rgba(251,191,36,0.2)]

      animate-fade-in
    "
    >
      {/* Image */}
      <Image
        src={item.img}
        alt={item.name}
        width={36}
        height={36}
        className="group-hover:scale-110 transition"
      />

      {/* Text */}
      <span
        className="
        text-[11px]

        /* LIGHT */
        text-gray-600 group-hover:text-indigo-500

        /* DARK */
        dark:text-gray-400 dark:group-hover:text-amber-300

        transition
      "
      >
        {item.name}
      </span>
    </div>
  );
}