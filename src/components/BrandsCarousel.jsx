import React from "react";
import { Marquee } from "./ui/Marquee";
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

const BRANDS = [
  { name: "Motul", img: motulImg },
  { name: "LS2 Helmets", img: ls2Img },
  { name: "Alpinestars", img: alpinestarsImg },
  { name: "AGV", img: agvImg },
  { name: "Pirelli", img: pirelliImg },
  { name: "Bell", img: bellImg },
  { name: "Cardo", img: cardoImg },
  { name: "Shaft", img: shaftImg },
  { name: "GHB Helmets", img: ghbImg },
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

export default function BrandsCarousel() {
  return (
    <section className="my-10 max-w-6xl mx-auto px-4">
      {/* Floating Glass Ribbon Container */}
      <div className="glass-panel rounded-full py-3 px-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] border border-white/90 flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden">
        <div className="flex items-center gap-2 pl-2 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#e60000] animate-pulse" />
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0f172a] font-heading">
            Distribuidor Oficial
          </h3>
        </div>

        {/* Marquee with Smooth Left/Right Edge Fades */}
        <div className="relative flex-1 w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:35s]">
            {BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-10 w-28 px-3 py-1.5 bg-white/70 hover:bg-white rounded-full border border-white/80 shadow-sm transition-all cursor-pointer mx-2"
                title={brand.name}
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="max-h-6 max-w-[80%] object-contain filter grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </Marquee>

          {/* Seamless Edge Gradient Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white/90 to-transparent" />
        </div>
      </div>
    </section>
  );
}
