import { Badge } from "@/components/ui/badge";
import HackathonCard from "./HackathonCard";

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

      <div className="grid grid-cols-3 gap-5 mb-8 w-full">
        <HackathonCard />
        <HackathonCard />
        <HackathonCard />
        <HackathonCard />
        <HackathonCard />
        <HackathonCard />
      </div>
    </div>
  );
};

export default HomeHackathons;
