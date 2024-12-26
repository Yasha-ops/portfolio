import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const HackathonCard: React.FC<{
  className?: string;
  imgSrc?: string;
  imgClass?: string;
  projectTitle: string;
  projectDuration: string;
  projectDescription: string;
  stack: string[];
}> = ({
  className,
  imgSrc,
  imgClass,
  projectTitle,
  projectDescription,
  projectDuration,
  stack,
}) => {
  return (
    <div
      className={cn(
        "w-full bg-white shadow-lg transition duration-500 rounded-[8px] hover:shadow-lg hover:-translate-y-[5px]",
        className
      )}
    >
      <img
        className={cn(
          "object-cover w-full bg-black h-[200px] rounded-t-[8px]",
          imgClass
        )}
        src={imgSrc}
      />

      <div className="flex flex-col p-2">
        <div className="flex justify-between items-center mb-1 w-full">
          <span className="font-semibold text-md">{projectTitle}</span>
          <span>{projectDuration}</span>
        </div>
        <span className="mb-2 text-secondary">{projectDescription}</span>
        <div className="flex gap-2 justify-start w-full text-xs">
          {stack.map((elt) => {
            return <Badge>{elt}</Badge>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
