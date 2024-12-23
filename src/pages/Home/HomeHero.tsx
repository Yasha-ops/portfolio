import { Button } from "@/components/ui/button";
import { HomeCircles, MobileHomeCircles } from "./HomeCircles";

const HomeHero: React.FC<{}> = () => {
  return (
    <div className="container flex flex-col justify-center mx-auto min-h-[600px] lg:justify-between lg:mt-8 lg:flex-row md:h-auto">
      <div className="flex flex-col my-auto w-full text-center lg:w-2/5 lg:text-left mt-[100px] md:mt-[80px] md:items-center lg:items-start">
        <h1 className="text-[35px]  md:text-[40px] lg:text-[48px] font-bold mb-4 text-darkGray">
          Hi, I'm <span className="text-primary">Yassine</span>
        </h1>
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

        <div className="flex flex-col gap-3 md:flex-row md:mx-auto lg:mx-0">
          <Button variant={"outline"}>Discover my projects</Button>
          <Button>Contact Me</Button>
        </div>
      </div>

      <HomeCircles />
    </div>
  );
};

export default HomeHero;
