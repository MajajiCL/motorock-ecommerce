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

const ROW_1_BRANDS = [
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

const ROW_2_BRANDS = [
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
      {/* 1. Racing Checkered Speed Grid Texture */}
      <div className="absolute inset-0 racing-grid-pattern opacity-70" />

      {/* 2. Racing Speed Lines Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(230,0,0,0.06),rgba(255,255,255,0))]" />

      {/* 3. Clearly Visible Infinite Moving Brand Marquees */}
      <div className="absolute inset-0 opacity-[0.24] flex flex-col justify-around py-8 space-y-8 -rotate-2 scale-105">
        {/* Track 1: Moving Left Infinitely */}
        <div className="flex w-max animate-marquee-left space-x-8">
          {[...ROW_1_BRANDS, ...ROW_1_BRANDS, ...ROW_1_BRANDS].map((brand, idx) => (
            <div
              key={`r1-${idx}`}
              className="flex items-center justify-center h-14 w-36 px-4 py-2 bg-white/60 rounded-2xl border border-zinc-300/60 shadow-sm backdrop-blur-[2px] flex-shrink-0"
            >
              <img
                src={brand.img}
                alt=""
                className="max-h-7 max-w-[85%] object-contain filter grayscale contrast-125 hover:grayscale-0 transition-all"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Track 2: Moving Right Infinitely */}
        <div className="flex w-max animate-marquee-right space-x-8">
          {[...ROW_2_BRANDS, ...ROW_2_BRANDS, ...ROW_2_BRANDS].map((brand, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex items-center justify-center h-14 w-36 px-4 py-2 bg-white/60 rounded-2xl border border-zinc-300/60 shadow-sm backdrop-blur-[2px] flex-shrink-0"
            >
              <img
                src={brand.img}
                alt=""
                className="max-h-7 max-w-[85%] object-contain filter grayscale contrast-125 hover:grayscale-0 transition-all"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Track 3: Moving Left Infinitely */}
        <div className="flex w-max animate-marquee-left-fast space-x-8">
          {[...ROW_1_BRANDS, ...ROW_2_BRANDS, ...ROW_1_BRANDS].map((brand, idx) => (
            <div
              key={`r3-${idx}`}
              className="flex items-center justify-center h-14 w-36 px-4 py-2 bg-white/60 rounded-2xl border border-zinc-300/60 shadow-sm backdrop-blur-[2px] flex-shrink-0"
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
