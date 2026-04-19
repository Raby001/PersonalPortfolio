import Image from "next/image";

export default function Work() {
  return (
    <div className="border-2 border-gray-300 dark:border-gray-700 rounded-lg mt-[12px]">

      <div className="px-[30px] py-[40px] flex flex-col items-center justify-center text-center gap-[20px]">

        {/* Image */}
        <Image
          src="/others/nothing.png"
          alt="No work experience"
          width={80}
          height={80}
          className="opacity-80"
        />

        {/* Text */}
        <div className="space-y-[6px]">
          <p className="font-bold text-black dark:text-white">
            No work experience yet
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            But I'm actively building projects and improving my skills 👨‍💻
          </p>
        </div>

      </div>

    </div>
  );
}