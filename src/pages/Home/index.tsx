import HomeBackground from "./HomeBackground";
import HomeAbout from "./HomeAbout";
import HomeHero from "./HomeHero";
import HomeExperience from "./HomeExperience";
import HomeSkills from "./HomeSkills";
import HomeProjects from "./HomeProjects";
import HomeHackathons from "./HomeHackathons";
import HomeGetInTouch from "./HomeGetInTouch";

const Home: React.FC<{}> = () => {
  return (
    <>
      <HomeBackground />
      <HomeHero />
      <HomeAbout />
      <HomeExperience />
      <HomeProjects />
      {/*<HomeHackathons />
      <HomeGetInTouch />*/}
    </>
  );
};

export default Home;
