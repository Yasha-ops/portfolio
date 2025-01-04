import BlurFade from "@/components/ui/blur-fade";
import ImgSkills from "@/assets/polygones/skills.svg";
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderTitle,
} from "@/components/ui/section-header";
import { Brain, Shield, Zap } from "lucide-react";

const SkillsThreePoints = () => {
  return (
    <BlurFade
      delay={0.25}
      inView
      className="container flex flex-col gap-6 justify-center items-center mx-auto my-[120px]"
    >
      <SectionHeader badge="Skills">
        <SectionHeaderTitle>
          High code quality for fast and{" "}
          <span className="text-primary">reliable solutions</span>
        </SectionHeaderTitle>
        <SectionHeaderDescription></SectionHeaderDescription>
      </SectionHeader>

      <div className="flex flex-col md:gap-8 md:flex-row">
        <div className="flex flex-col p-6 space-y-4 text-center md:text-left">
          <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-primary/10 md:mx-0">
            <Brain className="text-primary" />
          </div>
          <span className="text-xl font-semibold">Blasing fast solution</span>

          <span className="text-secondary">
            Businesses struggle to make sense of vast amounts of complex data,
            missing out on valuable insights that could drive growth and
            innovation.
          </span>
        </div>

        <div className="flex flex-col p-6 space-y-4 text-center md:text-left">
          <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-primary/10 md:mx-0">
            <Zap className="text-primary" />
          </div>
          <span className="text-xl font-semibold">Blasing fast solution</span>

          <span className="text-secondary">
            Businesses struggle to make sense of vast amounts of complex data,
            missing out on valuable insights that could drive growth and
            innovation.
          </span>
        </div>

        <div className="flex flex-col p-6 space-y-4 text-center md:text-left">
          <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-primary/10 md:mx-0">
            <Shield className="text-primary" />
          </div>
          <span className="text-xl font-semibold">Blasing fast solution</span>

          <span className="text-secondary">
            Businesses struggle to make sense of vast amounts of complex data,
            missing out on valuable insights that could drive growth and
            innovation.
          </span>
        </div>
      </div>
    </BlurFade>
  );
};
export default SkillsThreePoints;
