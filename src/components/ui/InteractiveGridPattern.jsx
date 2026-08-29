import React, { useState } from "react";
import { cn } from "../../lib/utils";

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  ...props
}) {
  const [hoveredSquare, setHoveredSquare] = useState(null);

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full stroke-slate-300/40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x="-1"
          y="-1"
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeWidth="1" strokeDasharray="2 2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
    </svg>
  );
}

export default InteractiveGridPattern;
