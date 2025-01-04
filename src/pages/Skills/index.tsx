import SkillsHero from "./SkillsHero";
import SkillsThreePoints from "./SkillsThreePoints";
import SkillsBoundaries from "./SkillsBoundary";
import PubCV from "@/components/ui/pub";

const Skills = () => {
  return (
    <>
      <SkillsHero />
      <SkillsThreePoints />
      <SkillsBoundaries />
      <PubCV />

      {/* Ajouter un bandeau avec télécharger le CV + un bandeau avec basculer sur le coté cyber */}
    </>
  );
};

export default Skills;
