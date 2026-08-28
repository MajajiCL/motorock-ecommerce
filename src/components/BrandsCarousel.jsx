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
    <section className="my-8 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden">
      <div className="flex items-center justify-between px-2 mb-3 pb-2 border-b border-slate-100">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
          Distribuidor Oficial & Marcas Autorizadas
        </h3>
        <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
          Respaldo y garant?a oficial
        </span>
      </div>

      {/* Magic UI Marquee with Edge Gradient Blur */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-2.5 bg-slate-50 hover:bg-white rounded-xl border border-slate-100 hover:border-slate-300 shadow-sm transition-all h-12 w-28 cursor-pointer mx-2"
              title={brand.name}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="max-h-7 max-w-[85%] object-contain filter grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </Marquee>

        {/* Left & Right Edge Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
