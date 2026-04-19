import Image from "next/image";

type Props = {
  logo: string;
  date: string;
  title: string;
  degree: string;
  details: string[];
  children?: React.ReactNode; // for buttons
};

export default function EducationItem({
  logo,
  date,
  title,
  degree,
  details,
  children,
}: Props) {
  return (
    <div className="px-[30px] py-[30px] space-y-[20px]">

      <div className="flex gap-[15px] items-start">

        {/* Logo */}
        <div className="w-[50px] h-[50px] relative shrink-0">
        <Image
            src={logo}
            alt={title}
            fill
            sizes="50px"
            className="object-contain"
        />
        </div>

        {/* Content */}
        <div className="flex flex-col">

          <p className="text-sm dark:text-white text text-black">{date}</p>

          <p className="font-bold text-black dark:text-white text">
            {title}
          </p>

          <p className="text-black dark:text-white text">
            {degree}
          </p>

          <ul className="list-disc ml-5 mt-2 text-black dark:text-white text-sm space-y-1">
            {details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* Actions */}
          {children && (
            <div className="mt-4 flex gap-3">
              {children}
            </div>
          )}

        </div>
      </div>

    </div>
  );
}