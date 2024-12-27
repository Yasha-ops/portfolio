import { Button } from "@/components/ui/button";
import { HomeCircles } from "../HomeCircles";
import BlurFade from "@/components/ui/blur-fade";
import HomeSkills from "../HomeSkills";
import { Link } from "react-router-dom";

const HomeHero: React.FC<{}> = () => {
  return (
    <div className="container flex flex-col justify-center mx-auto min-h-[600px] lg:justify-between lg:mt-[90px] lg:flex-row md:h-auto">
      <div className="flex flex-col my-auto w-full text-center lg:w-2/5 lg:text-left mt-[40px] md:mt-[80px] md:items-center lg:items-start">
        <BlurFade delay={0.25} inView direction="left">
          <h1 className="text-[35px]  md:text-[40px] lg:text-[48px] font-bold mb-4 text-darkGray">
            Hi, I'm <span className="text-primary">Yassine</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <h2 className="mb-4 text-lg text-darkGray text-[16px] lg:text-[18px] md:max-w-[500px] lg:max-w-[1000px]">
            <span className="font-bold text-primary">Software Engineer</span>{" "}
            turned Entrepreneur. I love building things and helping people grow
            their business
          </h2>
          <h2 className="mb-6 text-darkGray text-[18px] hidden md:block">
            Looking for a cybersecurity expert ?{" "}
            <span className="font-bold transition duration-200 text-primary hover:text-primary-red hover:cursor-pointer">
              Click here !
            </span>
          </h2>

          <HomeSkills />
          <div className="flex flex-col gap-3 mt-4 md:flex-row md:mx-auto md:justify-center lg:justify-start lg:mx-0">
            <Link to="/projects">
              <Button variant={"outline"}>Discover my projects</Button>
            </Link>
            <Link to="/contact">
              <Button>Contact Me</Button>
            </Link>
          </div>
        </BlurFade>
      </div>

      <BlurFade delay={0.25} inView direction="right">
        <HomeCircles />
      </BlurFade>
    </div>
  );
};

export default HomeHero;
