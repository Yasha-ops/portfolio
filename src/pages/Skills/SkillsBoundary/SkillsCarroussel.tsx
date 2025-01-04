import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";
import React from "react";
import { DATA_STACK } from "./Data";

const MinSection: React.FC<{
  title: string;
  description: string;
  icon: any;
}> = ({ title, description, icon }) => {
  return (
    <div className="flex justify-start items-start md:justify-center md:flex-row-reverse">
      <div className="flex flex-col text-left md:text-left">
        <h3 className="text-xl font-bold cursor-pointer outline-none md:px-5 md:pl-0 group">
          {title}
        </h3>
        <h3 className="group flex flex-1 cursor-pointer items-center px-5 outline-none justify-start text-[16px] pl-0">
          {description}
        </h3>
      </div>

      {icon}
    </div>
  );
};

const BeyongBoundariesMobile: React.FC<{}> = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto w-full max-w-sm md:hidden"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {DATA_STACK.map((elt, idx) => {
          const Icon = elt.icon;
          return (
            <CarouselItem key={idx} className="flex flex-col gap-7">
              <div className="grid grid-cols-4  md:w-1/2 min-h-[300px] p-5 gap-4 border-[1px] shadow-lg rounded-[10px] items-center">
                {elt.logos?.map((logo, idx) => {
                  return <img src={logo} key={idx} className="text-primary" />;
                })}
              </div>

              <MinSection
                title={elt.title}
                description={elt.description}
                icon={
                  <div
                    className={cn(
                      "flex justify-center items-center mx-3 mb-5 w-14 h-14 rounded-full item-box bg-primary/10 sm:mx-6 shrink-0",
                      idx == 0
                        ? "text-primary bg-primary/10"
                        : idx == 1
                        ? "text-[#f63b3b] bg-[#f63b3b]/10"
                        : "text-black bg-black/10"
                    )}
                  >
                    <Icon size={35} />
                  </div>
                }
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default () => {
  return (
    <>
      <div className="hidden gap-10 w-full md:flex">
        <div className="flex flex-col gap-7 w-1/2">
          {DATA_STACK.map((elt, idx) => {
            const Icon = elt.icon;
            return (
              <MinSection
                title={elt.title}
                description={elt.description}
                icon={
                  <div
                    className={cn(
                      "flex justify-center  items-center mx-3 mb-5 w-14 h-14 rounded-full item-box  sm:mx-6 shrink-0 bg-green-400",
                      idx == 0
                        ? "text-primary bg-primary/10"
                        : idx == 1
                        ? "text-[#f63b3b] bg-[#f63b3b]/10"
                        : "text-black bg-black/10"
                    )}
                  >
                    <Icon size={35} />
                  </div>
                }
              />
            );
          })}
        </div>

        <div className="w-1/2">
          <div className="grid grid-cols-4 w-full p-10 gap-[60px] border-[1px] shadow-lg rounded-[10px] items-center">
            {DATA_STACK[0].logos?.map((logo, idx) => {
              return <img src={logo} key={idx} className="text-primary" />;
            })}
          </div>
        </div>
      </div>

      <BeyongBoundariesMobile />
    </>
  );
};
