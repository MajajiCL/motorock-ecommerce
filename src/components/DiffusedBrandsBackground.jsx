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
      {/* 1. Precision Technical Dot Grid to eliminate feeling empty */}
      <div className="absolute inset-0 bg-tech-mesh opacity-50" />

      {/* 2. Rich Multi-tone Atmospheric Glows */}
      <div className="absolute -top-[10%] left-[15%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-red-600/[0.09] via-rose-500/[0.04] to-transparent blur-[140px]" />
      <div className="absolute top-[30%] -right-[8%] w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-indigo-600/[0.06] via-red-500/[0.04] to-transparent blur-[150px]" />
      <div className="absolute bottom-[2%] left-[8%] w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-red-600/[0.07] via-slate-600/[0.03] to-transparent blur-[160px]" />

      {/* 3. Floating Frosted Brand Badges */}
      <div className="absolute inset-0 opacity-[0.20] flex flex-col justify-around py-16 space-y-16 -rotate-1 scale-105">
        <div className="flex w-max animate-marquee-left space-x-8">
          {[...ROW_1, ...ROW_1, ...ROW_1].map((brand, idx) => (
            <div
              key={`r1-${idx}`}
              className="flex items-center justify-center h-14 w-36 px-4 py-2 bg-white/80 rounded-2xl border border-white/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] backdrop-blur-md flex-shrink-0"
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

        <div className="flex w-max animate-marquee-right space-x-8">
          {[...ROW_2, ...ROW_2, ...ROW_2].map((brand, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex items-center justify-center h-14 w-36 px-4 py-2 bg-white/80 rounded-2xl border border-white/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] backdrop-blur-md flex-shrink-0"
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
