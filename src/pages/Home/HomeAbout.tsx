import { Badge } from "@/components/ui/badge";
import Picture from "@/assets/yassine3.png";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";

const HomeAbout: React.FC<{}> = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto mt-8 md:mb-[80px] mb-[110px]">
      <BlurFade delay={0.25} inView>
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
      </BlurFade>
      <div className="flex flex-col gap-10 justify-between items-center w-full md:gap-4 md:flex-row">

      <BlurFade delay={0.25} inView direction="left">
        <img src={Picture} className="w-[340px] md:w-[420px] lg:w-[500px]" />
      </BlurFade>

      <BlurFade delay={0.25} inView direction="right">
        <div className="flex flex-col max-w-[600px] text-justify md:text-left">
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
            <Button className="flex items-center w-full md:w-auto">
              <Download size={40} className="text-white" />
              Download CV
            </Button>
          </div>
        </div>
      </BlurFade>
      </div>

    </div>
  );
};

export default HomeAbout;
