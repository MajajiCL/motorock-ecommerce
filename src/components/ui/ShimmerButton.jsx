import React from "react";
import { cn } from "../../lib/utils";

export const ShimmerButton = ({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "0.75rem",
  background = "#FF5500",
  className,
  children,
  ...props
}) => {
  return (
    <button
      style={{
        "--spread": "90deg",
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
        "--bg": background,
      }}
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] font-bold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {/* Spark container */}
      <div className="absolute inset-0 -z-30 overflow-visible [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      {children}
      {/* Highlight backdrop */}
      <div className="absolute inset-[1px] -z-20 rounded-[calc(var(--radius)-1px)] bg-[#FF5500] group-hover:bg-[#e64d00] transition-colors" />
    </button>
  );
};
