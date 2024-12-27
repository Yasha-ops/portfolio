import { Badge } from "@/components/ui/badge";
import ImgSkills from "@/assets/polygones/skills.svg";
import BlurFade from "@/components/ui/blur-fade";
import { AnimatedBeamDemo } from "./Test";

const SkillsHero2 = () => {
  return (
    <BlurFade
      delay={0.25}
      inView
      className="container flex flex-col gap-10 justify-center items-center mx-auto mt-8 mb-12 md:mb-4"
    >
      <div className="flex flex-col justify-center max-w-[500px] mb-10">
        <div className="flex justify-center mb-3">
          <Badge>Skills</Badge>
        </div>
        <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
          Coding beyond <span className="text-primary">boundaries</span>
        </h1>

        <h2 className="text-center text-secondary">
          Seamlessly connecting frontend creativity and backend efficiency
        </h2>
      </div>

      <div className="flex gap-10 w-full">
        <img src={ImgSkills} className="w-1/2 max-h-[400px]" />

        <div className="flex flex-col w-full">
          <div className="flex flex-col max-w-[600px] text-justify md:text-left">
            <span className="text-lg">
              Discover the full range of{" "}
              <span className="font-bold text-primary">skills</span> that enable
              me to design complete, tailor-made digital solutions. Each area
              has its own key role, and together they create optimal
              experiences.
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-rows-4 grid-cols-3 gap-6 w-full h-full mt-[40px]">
            <div className="row-span-3 row-start-1 rounded-xl border-2 border-primary">
              1
            </div>
            <div className="row-span-3 row-start-2 rounded-xl border-2 border-primary">
              2
            </div>
            <div className="row-span-3 row-start-1 rounded-xl border-2 border-primary">
              3
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

const SkillsHero = () => {
  return (
    <BlurFade
      delay={0.25}
      inView
      className="container flex flex-col gap-10 justify-center items-center mx-auto mt-8 mb-12 md:mb-4"
    >
      <div className="flex flex-col justify-center max-w-[500px]">
        <div className="flex justify-center mb-3">
          <Badge>Skills</Badge>
        </div>
        <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
          Coding beyond <span className="text-primary">boundaries</span>
        </h1>

        <h2 className="text-center text-secondary">
          Seamlessly connecting frontend creativity and backend efficiency
        </h2>
      </div>

      <div className="flex w-full">
        <AnimatedBeamDemo />
      </div>
    </BlurFade>
  );
};
export default SkillsHero;
