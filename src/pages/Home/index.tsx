import HomeBackground from "./HomeBackground";
import HomeAbout from "./HomeAbout";
import HomeHero from "./HomeHero";
import HomeExperience from "./HomeExperience";

const Home: React.FC<{}> = () => {
  return (
    <>
      <HomeBackground />
      <HomeHero />
      <HomeAbout />
      <HomeExperience />
    </>
  );
};

export default Home;
