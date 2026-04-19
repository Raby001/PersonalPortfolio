import Image from "next/image";
import ExternalLink from "../ui/ExternalLink";
import { FaFile, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import InternalLink from "../ui/InternalLink";
import ProfileCarousel from "../ui/ProfileCarousel";

export default function Hero() {
  return (
    <section className="mt-15 flex flex-col md:flex-row items-center justify-between gap-10">

      {/* Text */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold">
          Raby is here 👋
        </h1>

        <p className="mt-4 text-sm md:text-lg">
          4th year student at ITC
        </p>

        <p className="mt-6 font-semibold">
          Computer Science Student | Aspiring Full Stack Developer
        </p>

        <p className="mt-4 text-sm">
          For Q&A, contact me anytime 😄
        </p>

        <div className="mt-10 flex md:flex-row items-center justify-start flex-col gap-[30px]">

          {/* Resume */}
          <ExternalLink
            href="https://drive.google.com/file/d/1iUv6ZCv0PsKjnkXrgbXI1Qukfvu6D-g1/view?usp=sharing"
            className="hover:scale-110 hover:text-indigo-500 dark:hover:text-amber-300 transition"
          >
            <div className="flex flex-row items-center gap-2 border-2 px-8 py-2  rounded-[6px] ">
              <span className="font-medium">Resume / CV</span>
              <FaFile />
            </div>

          </ExternalLink>

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
      </div>

      <div className="relative flex justify-center items-center">

        {/* Glow stays */}
        <div className="absolute w-[260px] h-[260px] bg-gradient-to-r 
        from-indigo-500 to-purple-500 
        rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <ProfileCarousel />

      </div>
    </section>
  );
}