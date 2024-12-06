import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import LineDescription, {
  LineDescriptionProps,
} from "./ExperienceLineDescription";

interface ExperienceLineProps extends LineDescriptionProps {
  icon: any;
  corporateName: string;
  jobTitle: string;
  duration: string;
}

const ExperienceLine: React.FC<ExperienceLineProps> = ({
  icon,
  corporateName,
  jobTitle,
  duration,
  xps,
}) => {
  const [isDescriptionVisible, setDescriptionVisibility] =
    useState<boolean>(false);

  return (
    <div
      className="flex gap-4 items-start w-full bg-white rounded-[8px] shadow-sm p-4 "
      onClick={() => setDescriptionVisibility(!isDescriptionVisible)}
    >
      <img src={icon} className=" w-[50px] h-[50px] object-center" />

      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full group h-[50px]">
          <div className="flex flex-col gap-1 justify-start text-left">
            <span className="flex gap-1 items-center font-bold text-md">
              {corporateName}
              <ChevronUp
                size={20}
                className={cn(
                  "opacity-0 transition-all duration-300 ease-out transform rotate-0 translate-x-0 group-hover:translate-x-1 group-hover:opacity-100",
                  isDescriptionVisible ? "rotate-180 opacity-1" : "rotate-90"
                )}
              />
            </span>
            <span className="text-sm">{jobTitle}</span>
          </div>

          <span className="text-sm">{duration}</span>
        </div>

        {isDescriptionVisible ? <LineDescription xps={xps} /> : undefined}
      </div>
    </div>
  );
};

export default ExperienceLine;
