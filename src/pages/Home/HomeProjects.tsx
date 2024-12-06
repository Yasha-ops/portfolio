import { Badge } from "@/components/ui/badge";

const HomeProjects = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto mt-8 mb-4">
      <div className="flex flex-col justify-center max-w-[500px] mb-12">
        <div className="flex justify-center mb-3">
          <Badge>My projects</Badge>
        </div>
        <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
          Riding the Waves of{" "}
          <span className="text-primary">Fullstack Development</span>
        </h1>

        <h2 className="text-center text-secondary">
          I'm a cybersecurity engineer, graduated in 2024, and a fullstack
        </h2>
      </div>
    </div>
  );
};

export default HomeProjects;
