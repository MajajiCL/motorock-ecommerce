import React from "react";
import { cn } from "../../lib/utils";

export function AnimatedShinyText({ children, className, shimmerWidth = 100 }) {
  return (
    <span
      style={{
        "--shimmer-width": `${shimmerWidth}px`,
      }}
      className={cn(
        "mx-auto max-w-md text-[#151581] font-semibold",
        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-[#5465ff]/60 via-50% to-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}

export default AnimatedShinyText;
