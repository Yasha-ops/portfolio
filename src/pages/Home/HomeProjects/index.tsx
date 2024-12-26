import { Badge } from "@/components/ui/badge";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row gap-2 items-center">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const HomeProjects = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto mt-8 mb-12 md:mb-4">
      <div className="flex flex-col justify-center max-w-[500px] mb-10">
        <div className="flex justify-center mb-3">
          <Badge>My projects</Badge>
        </div>
        <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
          Check out my latest <span className="text-primary">Work</span>
        </h1>

        <h2 className="text-center text-secondary">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </h2>
      </div>

      <div className="flex overflow-hidden relative flex-col justify-center items-center mb-7 w-full rounded-lg">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white pointer-events-none dark:from-background"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white pointer-events-none dark:from-background"></div>
      </div>

      <span className="text-sm font-bold text-center cursor-pointer hover:text-primary text-secondary">
        Learn more...
      </span>
    </div>
  );
};

export default HomeProjects;
