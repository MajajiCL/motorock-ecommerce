import React from "react";

export default function DiffusedBrandsBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Dark Ambient Radial Flame Glows */}
      <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-red-600/[0.04] blur-[150px]" />
      <div className="absolute bottom-[15%] left-[5%] w-[700px] h-[700px] rounded-full bg-orange-600/[0.03] blur-[160px]" />
    </div>
  );
}
