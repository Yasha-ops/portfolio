import BlurFade from "@/components/ui/blur-fade";
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderTitle,
} from "@/components/ui/section-header";
import SkillsCarroussel from "./SkillsCarroussel";

const SkillsBoundaries = () => {
  return (
    <BlurFade
      delay={0.25}
      inView
      className="container flex flex-col gap-6 justify-center items-center mx-auto my-[120px]"
    >
      <SectionHeader badge="Skills">
        <SectionHeaderTitle>
          Coding beyond <span className="text-primary">boundaries</span>
        </SectionHeaderTitle>
        <SectionHeaderDescription>
          Covering every aspect of a project, from the first line of code to
          final deployment
        </SectionHeaderDescription>
      </SectionHeader>

      <div className="flex py-3 w-full">
        <SkillsCarroussel />
      </div>
    </BlurFade>
  );
};
export default SkillsBoundaries;
