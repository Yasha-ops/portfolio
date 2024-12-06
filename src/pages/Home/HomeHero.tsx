import { Button } from "@/components/ui/button";
import { HomeCircles } from "./HomeCircles";

const HomeHero: React.FC<{}> = () => {
  return (
    <div className="container flex justify-between mx-auto mt-8">
      <div className="flex flex-col my-auto w-2/5">
        <h1 className="text-[48px] font-bold mb-4 text-darkGray">
          Hi, I'm <span className="text-primary">Yassine</span> <span>👋</span>
        </h1>
        <h2 className="mb-4 text-lg text-darkGray">
          <span className="font-bold text-primary">Software Engineer</span>{" "}
          turned Entrepreneur. I love building things and helping people grow
          their business
        </h2>

        <h2 className="mb-6 text-darkGray">
          Looking for a cybersecurity expert ?{" "}
          <span className="font-bold transition duration-200 text-primary hover:text-primary-red hover:cursor-pointer">
            Click here !
          </span>
        </h2>

        <div className="flex gap-3">
          <Button variant={"outline"}>Discover my projects</Button>
          <Button>Contact Me</Button>
        </div>
      </div>

      <HomeCircles />
    </div>
  );
};

export default HomeHero;
