"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function InternalLink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="relative group"
    >
      <span
        className={`
          transition-colors duration-300
          ${isActive 
            ? "text-indigo-600 dark:text-amber-300" 
            : "hover:text-indigo-600 dark:hover:text-amber-300"}
        `}
      >
        {children}
      </span>

      <span
        className={`
          absolute left-0 -bottom-1 h-[2px] w-full
          origin-left scale-x-0
          bg-indigo-600 dark:bg-amber-300
          transition-transform duration-300

          group-hover:scale-x-100
          ${isActive ? "scale-x-100" : ""}
        `}
      />
    </Link>
  );
}