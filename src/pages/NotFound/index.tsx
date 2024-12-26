import ImgNotFound from "@/assets/polygones/notfound2.svg";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <BlurFade
      delay={0.25}
      inView
      direction="down"
      className="container flex gap-10 items-center w-full my-[90px]"
    >
      <img src={ImgNotFound} className="w-1/2" />
      <div className="flex flex-col w-1/2">
        <h1 className="text-[36px] font-bold text-darkGray text-center md:text-left mb-1">
          Oops! Error <span className="text-primary">404</span>
        </h1>

        <h2 className="mb-4 text-center text-secondary md:text-left">
          This page doesn't exist
        </h2>

        <div>
          <Link to="/">
            <Button className="flex items-center">
              <Home />
              <span>Back to homepage</span>
            </Button>
          </Link>
        </div>
      </div>
    </BlurFade>
  );
};

export default NotFound;
