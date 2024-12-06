import { cn } from "@/lib/utils";

export interface LineDescriptionProps {
  xps: { title?: string; details: string }[];
}

const LineDescription: React.FC<LineDescriptionProps> = ({ xps }) => {
  return (
    <div className="flex-col mt-2 mb-3 text-sm">
      {xps.map((elt, idx) => {
        return (
          <div className="flex gap-2 w-full" key={idx}>
            {xps.length > 1 ? (
              <div className="flex relative flex-col items-center">
                <div className="w-2 h-2 bg-black rounded-full" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[2px] bg-black h-full" />
              </div>
            ) : undefined}

            {/* Contenu de la description */}
            <div
              className={cn(
                "flex flex-col",
                idx == xps.length - 1 ? "mb-2" : "mb-5"
              )}
            >
              {xps.length > 1 ? (
                <span className="text-sm font-bold">{elt.title}</span>
              ) : undefined}

              <span>{elt.details}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LineDescription;
