import { Badge } from "@/components/ui/badge";

const HomeGetInTouch = () => {
  return (
    <div
      className="container flex flex-col justify-center items-center mx-auto mt-[80px] mb-4 min-h-[500px]"
      style={{
        backgroundImage: `url("/polygones/world.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center max-w-[500px] mb-12">
        <div className="flex justify-center mb-3">
          <Badge>Contact</Badge>
        </div>
        <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
          Get in touch
        </h1>

        <h2 className="text-center text-secondary">
          Want to chat ? Send me a DM on Linkedin or Github
        </h2>
      </div>
    </div>
  );
};

export default HomeGetInTouch;
