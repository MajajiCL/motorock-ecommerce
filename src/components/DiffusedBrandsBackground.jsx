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

const ROW_1 = [
  { name: "Motul", img: motulImg },
  { name: "LS2", img: ls2Img },
  { name: "Alpinestars", img: alpinestarsImg },
  { name: "AGV", img: agvImg },
  { name: "Pirelli", img: pirelliImg },
  { name: "Bell", img: bellImg },
  { name: "Cardo", img: cardoImg },
  { name: "Shaft", img: shaftImg },
  { name: "GHB", img: ghbImg },
  { name: "Dunlop", img: dunlopImg },
];

const ROW_2 = [
  { name: "ProTaper", img: protaperImg },
  { name: "Liqui Moly", img: liquiMolyImg },
  { name: "Ipone", img: iponeImg },
  { name: "Repsol", img: repsolImg },
  { name: "Castrol", img: castrolImg },
  { name: "Bosch", img: boschImg },
  { name: "Sena", img: senaImg },
  { name: "Ixon", img: ixonImg },
  { name: "Fly Racing", img: flyImg },
  { name: "Nolan", img: nolanImg },
];

export default function DiffusedBrandsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Soft Ambient Liquid Glows */}
      <div className="absolute -top-[20%] left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-red-500/10 via-red-600/5 to-transparent blur-[120px]" />
      <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-indigo-500/5 via-red-500/5 to-transparent blur-[140px]" />
      <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-red-600/5 via-slate-400/5 to-transparent blur-[130px]" />

      {/* 2. Frosted Glass Floating Brand Marquees */}
      <div className="absolute inset-0 opacity-[0.22] flex flex-col justify-around py-12 space-y-12 -rotate-1 scale-105">
        {/* Track 1: Moving Left */}
        <div className="flex w-max animate-marquee-left space-x-8">
          {[...ROW_1, ...ROW_1, ...ROW_1].map((brand, idx) => (
            <div
              key={`r1-${idx}`}
              className="flex items-center justify-center h-14 w-36 px-4 py-2 bg-white/50 rounded-2xl border border-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md flex-shrink-0"
            >
              <img
                src={brand.img}
                alt=""
                className="max-h-7 max-w-[85%] object-contain filter grayscale contrast-125"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Track 2: Moving Right */}
        <div className="flex w-max animate-marquee-right space-x-8">
          {[...ROW_2, ...ROW_2, ...ROW_2].map((brand, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex items-center justify-center h-14 w-36 px-4 py-2 bg-white/50 rounded-2xl border border-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md flex-shrink-0"
            >
              <img
                src={brand.img}
                alt=""
                className="max-h-7 max-w-[85%] object-contain filter grayscale contrast-125"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Track 3: Moving Left */}
        <div className="flex w-max animate-marquee-left-fast space-x-8">
          {[...ROW_1, ...ROW_2, ...ROW_1].map((brand, idx) => (
            <div
              key={`r3-${idx}`}
              className="flex items-center justify-center h-14 w-36 px-4 py-2 bg-white/50 rounded-2xl border border-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md flex-shrink-0"
            >
              <img
                src={brand.img}
                alt=""
                className="max-h-7 max-w-[85%] object-contain filter grayscale contrast-125"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
