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
    <div className="flex md:hidden overflow-hidden relative justify-center items-center px-12 max-w-lg rounded-lg size-full bg-background">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default HomeSkills;
