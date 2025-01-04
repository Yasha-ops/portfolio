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
    <div className="flex overflow-hidden relative justify-center items-center px-12 max-w-lg rounded-lg md:hidden size-full bg-background">
      <IconCloud
        iconSlugs={slugs}
        onIconClick={(slug) => {
          console.log(slug);
        }}
      />
    </div>
  );
};

export default HomeSkills;
