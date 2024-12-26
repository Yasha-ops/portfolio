import { Badge } from "@/components/ui/badge";
import ExperienceLine from "./ExperienceLine";
import EYIcon from "@/assets/corporate/ey.svg";
import MassaIcon from "@/assets/corporate/massa.svg";
import M19Icon from "@/assets/corporate/m19.jpg";
import CRIIcon from "@/assets/corporate/cri.png";
import EpitaIcon from "@/assets/corporate/epita.jpg";

const HomeExperience = () => {
  return (
    <div
      className="relative py-10 w-full"
      style={{
        backgroundImage: `url("/polygones/intercept.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // ou 'cover' selon l'effet désiré
      }}
    >
      <div className="container flex flex-col justify-center items-center mx-auto mt-8 mb-4">
        <div className="flex flex-col justify-center max-w-[500px] mb-12">
          <div className="flex justify-center mb-3">
            <Badge>Work Experience</Badge>
          </div>
          <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
            Building <span className="text-primary">Skills</span>, One
            Experience at a Time
          </h1>

          <h2 className="text-center text-secondary">
            I'm a cybersecurity engineer, graduated in 2024, and a fullstack
          </h2>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <ExperienceLine
            corporateName="Ernst & Young"
            duration="May 2018 - Present"
            jobTitle="Cybersecurity Consultant"
            xps={[
              {
                details: "Voili voilou",
              },
            ]}
            icon={EYIcon}
          />

          <ExperienceLine
            corporateName="Massa Labs"
            duration="May 2018 - Present"
            jobTitle="Cybersecurity Consultant"
            xps={[
              {
                details: "Voili voilou",
              },
            ]}
            icon={MassaIcon}
          />
          <ExperienceLine
            corporateName="M19"
            duration="May 2018 - Present"
            jobTitle="Cybersecurity Consultant"
            xps={[
              {
                details: "Voili voilou",
              },
            ]}
            icon={M19Icon}
          />

          <ExperienceLine
            corporateName="CRI - Conception Réalisation"
            duration="May 2018 - Present"
            jobTitle="Cybersecurity Consultant"
            xps={[
              {
                details: "Voili voilou",
              },
            ]}
            icon={CRIIcon}
          />

          <span className="mt-4 text-sm font-bold text-center cursor-pointer hover:text-primary text-secondary">
            Learn more...
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeExperience;
