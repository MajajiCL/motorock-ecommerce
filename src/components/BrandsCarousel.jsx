import React from "react";
import motulImg from "../assets/brands/motul.png";
import ls2Img from "../assets/brands/ls2.png";
import alpinestarsImg from "../assets/brands/alpinestars.png";
import agvImg from "../assets/brands/agv.png";
import pirelliImg from "../assets/brands/pirelli.png";
import bellImg from "../assets/brands/bell.png";
import cardoImg from "../assets/brands/cardo.png";
import shaftImg from "../assets/brands/shaft.png";
import dunlopImg from "../assets/brands/dunlop.png";
import protaperImg from "../assets/brands/protaper.png";

const BRANDS = [
  { name: "HJC", text: "HJC" },
  { name: "SHOEI", text: "SHOEI" },
  { name: "BELL", text: "BELL" },
  { name: "AGV", text: "AGV" },
  { name: "DAINESE", text: "DAINESE" },
  { name: "MOTUL", text: "MOTUL" },
  { name: "D.I.D", text: "D.I.D RACING CHAIN" },
  { name: "AKRAPOVIC", text: "AKRAPOVIČ" },
  { name: "PIRELLI", text: "PIRELLI" },
  { name: "LS2", text: "LS2" },
];

export default function BrandsCarousel() {
  return (
    <section className="bg-[#0a0a0c] border-b border-[#1a1b22] py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-6 overflow-x-auto scrollbar-none py-1 opacity-90">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-4 py-1.5 rounded bg-[#121318] border border-[#202128] hover:border-red-600/50 hover:bg-[#16171f] transition-all cursor-pointer"
            >
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-zinc-300 hover:text-white font-heading">
                {brand.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
