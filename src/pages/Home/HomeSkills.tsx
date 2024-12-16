import { Badge } from "@/components/ui/badge";
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const HomeSkills: React.FC<{}> = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto mt-[80px] mb-[80px]">
      <div className="flex flex-col justify-center max-w-[500px] mb-12">
        <div className="flex justify-center mb-3">
          <Badge>Skills</Badge>
        </div>
        <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
          Shaping Solutions with <span className="text-primary">Precision</span>{" "}
          {" and "}
          <span className="text-primary">Expertise</span>
        </h1>

        <h2 className="text-center text-secondary">
          I'm a cybersecurity engineer, graduated in 2024, and a fullstack
        </h2>
      </div>

      <div className="flex overflow-hidden relative justify-center items-center px-20 pt-8 pb-20 max-w-lg rounded-lg size-full bg-background">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default HomeSkills;
