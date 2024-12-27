import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  AppWindow,
  BotMessageSquare,
  GitCompareArrowsIcon,
  Heart,
  Home,
  PencilRulerIcon,
  ServerCog,
  Shield,
  User,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const divCenterRef = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex overflow-hidden relative justify-center items-center w-full bg-background"
      ref={containerRef}
    >
      <div className="grid grid-cols-3 gap-5 items-center size-full">
        <div className="flex col-start-1 row-span-1 row-start-1 justify-center">
          <HoverCard>
            <HoverCardTrigger>
              <Circle
                ref={div2Ref}
                className="relative !z-10 w-14 h-14 hover:text-primary"
              >
                <AppWindow />
              </Circle>
            </HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="flex col-start-1 row-span-1 row-start-3 justify-center">
          <HoverCard>
            <HoverCardTrigger>
              <Circle
                ref={div1Ref}
                className="relative !z-10 w-14 h-14 hover:text-primary"
              >
                <ServerCog />
              </Circle>
            </HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="flex col-start-2 row-span-1 row-start-2 justify-center">
          <Circle ref={divCenterRef} className="w-14 h-14 hover:text-primary">
            <User />
          </Circle>
        </div>

        <div className="flex col-start-3 row-span-1 row-start-3 justify-center">
          <HoverCard>
            <HoverCardTrigger>
              <Circle
                ref={div4Ref}
                className="relative !z-10 w-14 h-14 hover:text-primary"
              >
                <PencilRulerIcon />
              </Circle>
            </HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        </div>
        <div
          className="flex col-start-3 row-span-1 row-start-1 justify-center"
          ref={div5Ref}
        >
          <Popover>
            <PopoverTrigger className="">
              <Circle
                ref={div5Ref}
                className="relative !z-10 w-14 h-14 hover:text-primary"
              >
                <Shield />
              </Circle>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] z-50 bg-white border-black/10 shadow-lg border-[1px] p-4 mr-4">
              The React Framework – created and maintained by @vercel.
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <AnimatedBeam
        duration={10}
        delay={5}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={divCenterRef}
      />
      <AnimatedBeam
        duration={10}
        delay={2}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={divCenterRef}
      />
      <AnimatedBeam
        duration={10}
        delay={3}
        containerRef={containerRef}
        fromRef={div4Ref}
        reverse={true}
        toRef={divCenterRef}
      />

      <AnimatedBeam
        duration={10}
        delay={4}
        containerRef={containerRef}
        fromRef={div5Ref}
        reverse={true}
        toRef={divCenterRef}
      />
    </div>
  );
}
