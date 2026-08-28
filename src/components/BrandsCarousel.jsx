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
    <section className="my-10">
      <div className="text-center mb-5">
        <span className="text-[11px] font-black text-[#FF5500] uppercase tracking-widest bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200 shadow-sm inline-block">
          MARCAS OFICIALES & DISTRIBUIDOR AUTORIZADO
        </span>
        <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 mt-2">
          Las Mejores Marcas del Mundo en MotoRock Chile
        </h3>
      </div>

      <div className="glass-aero rounded-3xl p-6 shadow-sm overflow-hidden">
        <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center flex-nowrap">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center p-3 bg-white hover:bg-orange-50/50 rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:scale-105 group h-16 w-28 cursor-pointer"
              title={brand.name}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="max-h-9 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
