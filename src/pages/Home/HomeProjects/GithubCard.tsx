import { cn } from "@/lib/utils";

const GithubCard: React.FC<{
  img: string;
  name: string;
  username: string;
  body: string;
}> = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
        // dark styles
      )}
    >
      <div className="flex flex-row justify-between gap-2 items-center">
        <div className="flex flex-col">
          <span className="text-md font-medium dark:text-white font-semibold">
            {name}
          </span>
          <p className="text-xs font-medium dark:text-white/40">{username} /</p>
        </div>

        <img className="rounded-full" width="32" height="32" alt="" src={img} />
      </div>

      <div className="h-full line-clamp-2">
        <div className="mt-2 text-sm text-ellipsis overflow-hidden line-clamp-2">
          {body}
        </div>
      </div>
    </figure>
  );
};

export default GithubCard;
