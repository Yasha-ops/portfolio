import { Badge } from "@/components/ui/badge";
import Marquee from "@/components/ui/marquee";
import GithubCard from "./GithubCard";
import Data from "./projects.json";

const firstRow = Data.reviews.slice(0, Data.reviews.length / 3);
const secondRow = Data.reviews.slice(
  Math.floor(Data.reviews.length / 3),
  Math.floor((2 * Data.reviews.length) / 3)
);
const thirdRow = Data.reviews.slice(Math.floor((2 * Data.reviews.length) / 3));

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
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <GithubCard key={review.name} {...review} username="Yasha-Ops" />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review) => (
            <GithubCard key={review.name} {...review} username="Yasha-Ops" />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:35s]">
          {thirdRow.map((review) => (
            <GithubCard key={review.name} {...review} username="Yasha-Ops" />
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
