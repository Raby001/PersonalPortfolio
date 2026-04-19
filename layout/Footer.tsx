import ExternalLink from "@/components/ui/ExternalLink";
import InternalLink from "@/components/ui/InternalLink";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="
      w-full mt-[120px]
      border-t border-black/10 dark:border-white/10
      bg-white/70 dark:bg-gray-950/70 backdrop-blur-md
    ">
      <div className="max-w-[700px] mx-auto px-[20px] md:px-0 py-[24px] 
      flex justify-between items-center text-[14px]">

        {/* Left */}
        <p>
          © 2026 raby-portfolio |{" "}
          <span className="font-semibold">
            Is this portfolio good?
          </span>
        </p>

        {/* Right */}
        <div className="flex space-x-3 sm:space-x-5 text-[18px]">

          <ExternalLink href="https://github.com/Raby001">
            <FaGithub className="hover:scale-110 hover:text-indigo-500 dark:hover:text-amber-300 transition" />
          </ExternalLink>

          <InternalLink href="/contact">
            <FaMailBulk className="hover:scale-110 hover:text-indigo-500 dark:hover:text-amber-300 transition" />
          </InternalLink>

          <ExternalLink href="https://www.linkedin.com/in/raby-han-4106a535a/">
            <FaLinkedin className="hover:scale-110 hover:text-indigo-500 dark:hover:text-amber-300 transition" />
          </ExternalLink>

        </div>
      </div>
    </footer>
  );
}