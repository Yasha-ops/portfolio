import { Badge } from "@/components/ui/badge";
import HackathonCard from "./HackathonCard";
import ImgGummu from "@/assets/hackathons/gummu.png";
import ImgR2Start from "@/assets/hackathons/r2start.png";
import ImgLightCom from "@/assets/hackathons/lightCom.png";
import ImgKryLegal from "@/assets/hackathons/krylegal.png";
import ImgIgem from "@/assets/hackathons/cleanHeat.png";
import ImgVintrade from "@/assets/hackathons/vintrade.png";

const HomeHackathons: React.FC<{}> = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto mt-[80px] mb-4">
      <div className="flex flex-col justify-center max-w-[500px] mb-12">
        <div className="flex justify-center mb-3">
          <Badge>Hackathons</Badge>
        </div>
        <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
          I like turning coffee into <span className="text-primary">code</span>{" "}
          and ideas into <span className="text-primary">reality</span>
        </h1>

        <h2 className="text-center text-secondary">
          During my time in university, I attended many hackathons. People from
          around the country would come together and build incredible things in
          2-3 days.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 mb-8 w-full md:grid-cols-3 md:gap-5">
        <HackathonCard
          imgSrc={ImgR2Start}
          imgClass="bg-white"
          projectTitle="Ready2Start"
          projectDescription="Bla bla bla bla bla"
          projectDuration="3 days"
          stack={["NodeJs", "ReactJS", "MySQL"]}
        />
        <HackathonCard
          imgSrc={ImgGummu}
          imgClass="bg-primary/10"
          projectTitle="Gummu"
          projectDescription="Bla bla bla"
          projectDuration="3 days"
          stack={["NodeJs", "ReactJs", "React Native", "Typescript"]}
        />
        <HackathonCard
          imgSrc={ImgVintrade}
          projectTitle="VinTrade"
          projectDescription="Bla bla bla bla"
          projectDuration="3 days"
          stack={["NestJs", "ReactJs", "MongoDB"]}
        />

        <HackathonCard
          imgSrc={ImgKryLegal}
          imgClass="bg-black"
          projectTitle="KryLegal"
          className="hidden md:block"
          projectDescription="Bla bla bla bla bla"
          projectDuration="1 week"
          stack={["Rust", "ReactJS", "NodeJs"]}
        />
        <HackathonCard
          imgSrc={ImgIgem}
          imgClass="bg-white"
          projectTitle="Clean Heat"
          className="hidden md:block"
          projectDescription="Bla bla bla bla bla"
          projectDuration="1 year"
          stack={["ReactJs", "Python", "NodeJs"]}
        />
        <HackathonCard
          className="hidden md:block"
          imgSrc={ImgLightCom}
          imgClass="bg-black"
          projectTitle="Light Com"
          projectDescription="bla bla bla"
          projectDuration="3 days"
          stack={["Python", "OpenCV", "C++"]}
        />
      </div>
    </div>
  );
};

export default HomeHackathons;
