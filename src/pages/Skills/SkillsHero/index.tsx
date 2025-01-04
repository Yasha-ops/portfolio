import BlurFade from "@/components/ui/blur-fade";
import FlickeringGrid from "@/components/ui/flickering-grid";

const SkillsHero = () => {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden  bg-background p-20">
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)] flex justify-center opacity-70"
        squareSize={4}
        gridGap={6}
        color="#3b82f6"
        maxOpacity={0.5}
        flickerChance={0.1}
      />

      <BlurFade
        delay={0.25}
        inView
        direction="left"
        className="relative z-10 container flex flex-col justify-center mx-auto min-h-[200px]  md:h-auto text-center overflow-hidden"
      >
        <h1 className="text-[35px]  md:text-[40px] lg:text-[48px] font-bold mb-4 text-darkGray">
          Discover my <span className="text-primary">skills</span>
        </h1>
        <h2 className="text-md text-secondary">
          Scroll down to discover how I bring ideas to life.
        </h2>
      </BlurFade>
    </div>
  );
};
export default SkillsHero;
