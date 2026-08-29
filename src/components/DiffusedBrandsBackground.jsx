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

const ALL_DIFFUSED_BRANDS = [
  motulImg, ls2Img, alpinestarsImg, agvImg, pirelliImg, bellImg,
  cardoImg, shaftImg, ghbImg, dunlopImg, protaperImg, liquiMolyImg,
  iponeImg, repsolImg, castrolImg, boschImg, senaImg, ixonImg, flyImg, nolanImg
];

export default function DiffusedBrandsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-[0.045] blur-[0.6px] mix-blend-multiply"
    >
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-x-12 gap-y-16 p-8 -rotate-6 scale-110">
        {Array.from({ length: 4 }).flatMap((_, loopIdx) =>
          ALL_DIFFUSED_BRANDS.map((imgSrc, idx) => (
            <div
              key={`${loopIdx}-${idx}`}
              className="flex items-center justify-center h-16 w-full grayscale"
            >
              <img
                src={imgSrc}
                alt=""
                className="max-h-10 max-w-[80%] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
