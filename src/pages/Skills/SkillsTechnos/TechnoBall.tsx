import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "tsnode",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "docker",
  "git",
  "github",
  "gitlab",
  "figma",
  "go",
  "python",
  "nestjs",
  "kubernetes",
];

const TechnoBall: React.FC<{}> = () => {
  return (
    <div className="flex gap-7 justify-center w-full">
      <div className="max-w-[400px] flex justify-center">
        <IconCloud
          iconSlugs={slugs}
          onIconClick={(slug) => {
            console.log(slug);
          }}
        />
      </div>

      {/*<div className="flex flex-col w-1/2 py-[50px]">
        <span className="text-[24px] font-bold">Pick a technology</span>
        <span>
          Don't hesitate to pick a technology to get more details on my
          expertise
        </span>
      </div>*/}
    </div>
  );
};

export default TechnoBall;
