import React from "react";
import motulImg from "../assets/brands/motul.png";
import ls2Img from "../assets/brands/ls2.png";
import alpinestarsImg from "../assets/brands/alpinestars.png";
import agvImg from "../assets/brands/agv.png";
import pirelliImg from "../assets/brands/pirelli.png";
import bellImg from "../assets/brands/bell.png";
import cardoImg from "../assets/brands/cardo.png";
import shaftImg from "../assets/brands/shaft.png";
import ghbImg from "../assets/brands/ghb.png";
import dunlopImg from "../assets/brands/dunlop.png";
import protaperImg from "../assets/brands/protaper.png";
import liquiMolyImg from "../assets/brands/liqui-moly.png";
import iponeImg from "../assets/brands/ipone.png";
import repsolImg from "../assets/brands/repsol.png";
import castrolImg from "../assets/brands/castrol.png";
import boschImg from "../assets/brands/bosch.png";
import senaImg from "../assets/brands/sena.png";
import ixonImg from "../assets/brands/ixon.png";
import flyImg from "../assets/brands/fly.png";
import nolanImg from "../assets/brands/nolan.png";
import InteractiveGridPattern from "./ui/InteractiveGridPattern";

const ALL_DIFFUSED_BRANDS = [
  { name: "Motul", img: motulImg },
  { name: "LS2 Helmets", img: ls2Img },
  { name: "Alpinestars", img: alpinestarsImg },
  { name: "AGV", img: agvImg },
  { name: "Pirelli", img: pirelliImg },
  { name: "Bell", img: bellImg },
  { name: "Cardo", img: cardoImg },
  { name: "Shaft", img: shaftImg },
  { name: "GHB", img: ghbImg },
  { name: "Dunlop", img: dunlopImg },
  { name: "ProTaper", img: protaperImg },
  { name: "Liqui Moly", img: liquiMolyImg },
  { name: "Ipone", img: iponeImg },
  { name: "Repsol", img: repsolImg },
  { name: "Castrol", img: castrolImg },
  { name: "Bosch", img: boschImg },
  { name: "Sena", img: senaImg },
  { name: "Ixon", img: ixonImg },
  { name: "Fly Racing", img: flyImg },
  { name: "Nolan", img: nolanImg }
];

export default function DiffusedBrandsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Background Interactive Mesh Grid */}
      <InteractiveGridPattern width={48} height={48} className="opacity-25" />

      {/* Clearly Visible Diagonal Watermark Grid of Authorized Brands */}
      <div className="absolute inset-0 opacity-[0.16] -rotate-3 scale-105 flex flex-col justify-around py-6">
        {Array.from({ length: 5 }).map((_, rowIdx) => (
          <div
            key={rowIdx}
            className="flex items-center justify-around gap-8 whitespace-nowrap overflow-hidden px-4"
            style={{
              transform: `translateX(${(rowIdx % 2 === 0 ? 1 : -1) * 20}px)`,
            }}
          >
            {ALL_DIFFUSED_BRANDS.slice(rowIdx * 4, rowIdx * 4 + 7).concat(ALL_DIFFUSED_BRANDS.slice(0, 3)).map((brand, idx) => (
              <div
                key={`${rowIdx}-${idx}`}
                className="flex items-center justify-center h-14 w-32 px-3 py-1.5 bg-white/40 rounded-2xl border border-slate-300/30 backdrop-blur-[1px] shadow-sm flex-shrink-0"
              >
                <img
                  src={brand.img}
                  alt=""
                  className="max-h-7 max-w-[85%] object-contain filter grayscale contrast-125 brightness-90"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
