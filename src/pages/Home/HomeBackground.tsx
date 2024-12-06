import React from "react";

const HomeBackground: React.FC = () => {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
    >
      <defs>
        <pattern
          id="background-pattern"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x="0"
          y="0"
        >
          <circle id="pattern-circle" cx="1" cy="1" r="1"></circle>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#background-pattern)"
      ></rect>
    </svg>
  );
};

export default HomeBackground;
