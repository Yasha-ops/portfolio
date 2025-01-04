import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderTitle,
} from "@/components/ui/section-header";
import TechnoBall from "./TechnoBall";

const SkillsTechnos = () => {
  return (
    <div className="container flex flex-col gap-10 justify-center items-center mx-auto mt-[90px] mb-12 md:mb-[80px]">
      <SectionHeader badge="Skills">
        <SectionHeaderTitle>
          Stack i use to turn ideas to{" "}
          <span className="text-primary">reality</span>
        </SectionHeaderTitle>
        <SectionHeaderDescription>
          Seamlessly connecting frontend creativity and backend efficiency
        </SectionHeaderDescription>
      </SectionHeader>

      <TechnoBall />
    </div>
  );
};

export default SkillsTechnos;
