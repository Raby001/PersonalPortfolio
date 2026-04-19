"use client";

import Image from "next/image";
import ExternalLink from "@/components/ui/ExternalLink";
import { FaGithub, FaGlobe, FaYoutube } from "react-icons/fa";

export default function ProjectCard({ project }: any) {
  return (
        <div
        className="
        group p-6 rounded-xl border

        border-gray-200 bg-white shadow-sm

        dark:border-white/10 dark:bg-white/[0.04] dark:backdrop-blur-md

        transition-all duration-300

        hover:-translate-y-2 hover:scale-[1.02]
        hover:border-indigo-500/40
        hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)]

        dark:hover:border-amber-400/40
        dark:hover:shadow-[0_10px_40px_rgba(251,191,36,0.25)]
        "
        >
        {/* Image */}
        <div className="relative w-full h-[160px] mb-5 overflow-hidden rounded-md">
            <Image
            src={project.image}
            alt={project.title}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover transition group-hover:scale-105"
            />
        </div>

        <h3
            className="
            text-lg font-semibold

            text-gray-900

            dark:text-white
        "
        >
            {project.title}
        </h3>

        <p
            className="
            text-sm mt-2

            text-gray-600

            dark:text-gray-400
        "
        >
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t: string) => (
            <span
                key={t}
                className="
                text-xs px-2 py-1 rounded

                bg-gray-100 text-gray-700

                dark:bg-white/10 dark:text-gray-300

                transition
            "
            >
                {t}
            </span>
            ))}
        </div>

        <div className="flex flex-row gap-3 mt-6 flex-wrap">

        {project.github && (
            <ExternalLink
            href={project.github}
            className="
                flex items-center gap-2 px-4 py-1 rounded-md border text-sm font-medium

                border-gray-300 text-black
                hover:border-indigo-600 hover:text-indigo-600

                dark:border-gray-600 dark:text-white
                dark:hover:border-amber-300 dark:hover:text-amber-300

                transition
            "
            >
            <FaGithub />
            Github
            </ExternalLink>
        )}

        {project.youtube && (
            <ExternalLink
            href={project.youtube}
            className="
                flex items-center gap-2 px-4 py-1 rounded-md border text-sm font-medium

                border-gray-300 text-black
                hover:border-red-500 hover:text-red-500

                dark:border-gray-600 dark:text-white
                dark:hover:border-red-400 dark:hover:text-red-400

                transition
            "
            >
            <FaYoutube />
            Youtube
            </ExternalLink>
        )}

        {project.website && (
            <ExternalLink
            href={project.website}
            className="
                flex items-center gap-2 px-4 py-1 rounded-md border text-sm font-medium

                border-gray-300 text-black
                hover:border-green-600 hover:text-green-600

                dark:border-gray-600 dark:text-white
                dark:hover:border-green-400 dark:hover:text-green-400

                transition
            "
            >
            <FaGlobe size={16} />
            Website
            </ExternalLink>
        )}

        </div>
    </div>
  );
}