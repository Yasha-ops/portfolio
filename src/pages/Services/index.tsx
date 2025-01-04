import ServicesHero from "./ServicesHero";
import ServicesSolutions from "./ServicesSolutions";
import ServicesSteps from "./ServicesSteps";

const Services: React.FC<{}> = () => {
  return (
    <>
      <ServicesHero />
      <ServicesSteps />
      <ServicesSolutions />
    </>
  );
};

export default Services;
