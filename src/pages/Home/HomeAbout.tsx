import { Badge } from "@/components/ui/badge";
import Picture from "@/assets/yassine3.png";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeAbout: React.FC<{}> = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto mt-8 mb-[80px]">
      <div className="flex flex-col justify-center max-w-[500px] mb-12">
        <div className="flex justify-center mb-3">
          <Badge>About</Badge>
        </div>
        <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
          Riding the Waves of{" "}
          <span className="text-primary">Fullstack Development</span>
        </h1>

        <h2 className="text-center text-secondary">
          I'm a cybersecurity engineer, graduated in 2024, and a fullstack
        </h2>
      </div>

      <div className="flex justify-between w-full">
        <img src={Picture} className=" w-[500px]" />

        <div className="flex flex-col max-w-[600px]">
          <span className="text-lg">
            I'm a{" "}
            <span className="font-bold text-primary">
              cybersecurity engineer
            </span>
            , graduated in 2024, and a fullstack developer with a flair for
            crafting sleek frontends and secure backends. Since starting my
            freelance journey in 2021, I've built innovative, efficient
            solutions for diverse clients.
            <br />
            <br />
            When I'm not coding, I recharge by{" "}
            <span className="font-bold text-primary">
              catching waves at the beach
            </span>
            .
          </span>

          <div className="flex mt-7">
            <Button className="flex items-center">
              <Download size={40} className="text-white" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
