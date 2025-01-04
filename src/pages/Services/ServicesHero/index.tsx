import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import BlurFade from "@/components/ui/blur-fade";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { cn } from "@/lib/utils";

const ServicesHero = () => {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden  bg-background p-20">
      <AnimatedGridPattern
        maxOpacity={0.2}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] -skew-y-12"
        )}
      />

      <BlurFade
        delay={0.25}
        inView
        direction="left"
        className="relative z-10 container flex flex-col justify-center mx-auto min-h-[200px]  md:h-auto text-center overflow-hidden"
      >
        <h1 className="text-[35px]  md:text-[40px] lg:text-[48px] font-bold mb-4 text-darkGray">
          What i can do for <span className="text-primary">you</span>
        </h1>
        <h2 className="text-md text-secondary">
          Custom solutions to drive your projects forward
        </h2>
      </BlurFade>
    </div>
  );
};

export default ServicesHero;
