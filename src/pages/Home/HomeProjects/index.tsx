import { Badge } from "@/components/ui/badge";
import ProjectCard from "./ProjectCard";

const HomeProjects = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto mt-8 mb-4">
      <div className="flex flex-col justify-center max-w-[500px] mb-12">
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

      <div className="grid grid-cols-3 gap-5 mb-8 w-full">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <span className="text-sm font-bold text-center cursor-pointer hover:text-primary text-secondary">
        Learn more...
      </span>
    </div>
  );
};

export default HomeProjects;
