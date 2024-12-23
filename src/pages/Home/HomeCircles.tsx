import OrbitingCircles from "@/components/ui/orbiting-circles";
import {
  JavascriptIcon,
  TypescriptIcon,
  SvelteIcon,
  ReactIcon,
  NextJsIcon,
  MongoIcon,
  GithubIcon,
  GolangIcon,
  FirebaseIcon,
  AngularIcon,
  NestJsIcon,
  RedisIcon,
} from "@/assets/logos";

const Circles = {
  first: [
    {
      img: JavascriptIcon,
      delay: 3,
    },
    {
      delay: 25,
      img: TypescriptIcon,
    },
    {
      delay: 100,
      img: NextJsIcon,
    },
    {
      delay: 17,
      img: NestJsIcon,
    },
  ],
  second: [
    {
      delay: 25,
      img: AngularIcon,
    },
    {
      delay: 0,
      img: GolangIcon,
    },

    {
      delay: 10,
      img: FirebaseIcon,
    },

    {
      delay: 15,
      img: SvelteIcon,
    },
  ],

  third: [
    {
      delay: 15,
      img: MongoIcon,
    },
    {
      delay: 0,
      img: GithubIcon,
    },

    {
      delay: 30,
      img: ReactIcon,
    },

    {
      delay: 45,
      img: RedisIcon,
    },
  ],
};

export function HomeCircles() {
  return (
    <div className="hidden relative md:flex h-[500px] md:w-full lg:w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      {/* Outer Circles (reverse) */}

      {Circles.first.map((elt, idx) => (
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={30}
          delay={elt.delay}
          reverse={true}
          key={idx}
        >
          <img src={elt.img} />
        </OrbitingCircles>
      ))}

      {Circles.second.map((elt, idx) => (
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={120}
          duration={20}
          delay={elt.delay}
          key={idx}
        >
          <img src={elt.img} />
        </OrbitingCircles>
      ))}

      {Circles.third.map((elt, idx) => (
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          radius={70}
          duration={20}
          delay={elt.delay}
          reverse
          key={idx}
        >
          <img src={elt.img} />
        </OrbitingCircles>
      ))}
    </div>
  );
}

export function MobileHomeCircles() {
  return (
    <div className="absolute inset-0 md:hidden opacity-80 mt-[200px] -z-10 flex h-[300px] flex-col items-center justify-center overflow-hidden rounded-lg bg-background w-full mx-auto">
      {/* Outer Circles (reverse) */}

      {Circles.first.map((elt, idx) => (
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          radius={120}
          duration={30}
          delay={elt.delay}
          reverse={true}
          key={idx}
        >
          <img src={elt.img} />
        </OrbitingCircles>
      ))}

      {Circles.second.map((elt, idx) => (
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          radius={90}
          duration={20}
          delay={elt.delay}
          key={idx}
        >
          <img src={elt.img} />
        </OrbitingCircles>
      ))}

      {Circles.third.map((elt, idx) => (
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          radius={50}
          duration={20}
          delay={elt.delay}
          reverse
          key={idx}
        >
          <img src={elt.img} />
        </OrbitingCircles>
      ))}
    </div>
  );
}
