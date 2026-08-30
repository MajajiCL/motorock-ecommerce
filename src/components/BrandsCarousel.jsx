import React from "react";

const BRANDS = [
  { name: "HJC", shape: "rounded-full border border-white/20 px-4 py-1" },
  { name: "SHOEI", shape: "rounded-md border border-white/20 px-4 py-1" },
  { name: "BELL", shape: "rounded-full border border-white/20 px-4 py-1" },
  { name: "AGV", shape: "rounded-md border border-white/20 px-3.5 py-1 text-emerald-400" },
  { name: "DAINESE", shape: "px-3 py-1 font-extrabold text-red-500" },
  { name: "MOTUL", shape: "bg-red-600 text-white px-3 py-1 rounded font-black tracking-tighter" },
  { name: "D.I.D", subtitle: "RACING CHAIN", shape: "px-3 py-1 font-black text-amber-400" },
  { name: "AKRAPOVIČ", shape: "px-3 py-1 font-black text-red-500 flex items-center gap-1" },
];

export default function BrandsCarousel() {
  return (
    <section className="bg-[#09090b] border-b border-[#181920] py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 overflow-x-auto scrollbar-none py-1">
          {/* 1. HJC */}
          <div className="flex-shrink-0 px-4 py-1 rounded-full border border-zinc-700 bg-[#121318] text-white font-black text-xs tracking-widest font-heading hover:border-red-500 transition-colors cursor-pointer">
            HJC
          </div>

          {/* 2. SHOEI */}
          <div className="flex-shrink-0 px-4 py-1 rounded-md border border-zinc-700 bg-[#121318] text-white font-black text-xs tracking-widest font-heading hover:border-red-500 transition-colors cursor-pointer">
            SHOEI
          </div>

          {/* 3. BELL */}
          <div className="flex-shrink-0 px-4 py-1 rounded-full border border-zinc-700 bg-[#121318] text-white font-black text-xs tracking-widest font-heading hover:border-red-500 transition-colors cursor-pointer">
            BELL
          </div>

          {/* 4. AGV */}
          <div className="flex-shrink-0 px-3.5 py-1 rounded-md border border-zinc-700 bg-[#121318] flex items-center gap-1.5 font-heading text-xs font-black tracking-widest text-white hover:border-red-500 transition-colors cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>AGV</span>
          </div>

          {/* 5. DAINESE */}
          <div className="flex-shrink-0 px-3 py-1 font-heading text-xs font-black tracking-widest text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer">
            <span className="text-[#e60000]">▲</span>
            <span>DAINESE</span>
          </div>

          {/* 6. MOTUL */}
          <div className="flex-shrink-0 px-3 py-1 bg-[#e60000] text-white font-heading text-xs font-black tracking-wider rounded transition-transform hover:scale-105 cursor-pointer">
            MOTUL
          </div>

          {/* 7. D.I.D RACING CHAIN */}
          <div className="flex-shrink-0 px-3 py-1 font-heading text-xs font-black tracking-wider text-white hover:text-amber-400 transition-colors cursor-pointer">
            <span>D.I.D</span> <span className="text-[9px] text-zinc-400 block font-normal leading-none">RACING CHAIN</span>
          </div>

          {/* 8. AKRAPOVIC */}
          <div className="flex-shrink-0 px-3 py-1 font-heading text-xs font-black tracking-wider text-white hover:text-[#e60000] flex items-center gap-1 transition-colors cursor-pointer">
            <span className="text-[#e60000]">🦂</span>
            <span>AKRAPOVIČ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
