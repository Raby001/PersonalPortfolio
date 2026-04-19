import EducationItem from "../ui/EducationItem";
import ExternalLink from "@/components/ui/ExternalLink";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function Education() {
  return (
    <div className="border-2 dark:border-gray-700 border-gray-300 rounded-lg mt-[12px] overflow-hidden">

      {/* ITC */}
      <EducationItem
        logo="/others/itc.png"
        date="Jan 2022 - Sep 2027"
        title="Institute of Technology of Cambodia (ITC)"
        degree="Bachelor's Degree in GIC"
        details={[
          "1 month volunteer teaching juniors",
          "Maintain 3.5 GPA for 3 years",
        ]}
      >
      </EducationItem>

      <hr className="border-gray-600 mx-[30px]" />

      {/* WU */}
      <EducationItem
        logo="/others/western.png"
        date="Feb 2022 - Sep 2026"
        title="Western University (WU)"
        degree="Bachelor's Degree in English for Communication (EC)"
        details={[
          "Research: Impact of Social Media on Students",
          "Maintain <3 GPA for 3 years",
        ]}
      >
      </EducationItem>

    </div>
  );
}