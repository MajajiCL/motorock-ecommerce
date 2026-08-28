import React from "react";

const BRANDS = [
  { name: "Motul", img: "./brands/motul.png" },
  { name: "LS2 Helmets", img: "./brands/ls2.png" },
  { name: "Alpinestars", img: "./brands/alpinestars.png" },
  { name: "AGV", img: "./brands/agv.png" },
  { name: "Pirelli", img: "./brands/pirelli.png" },
  { name: "Bell", img: "./brands/bell.png" },
  { name: "Cardo", img: "./brands/cardo.png" },
  { name: "Shaft", img: "./brands/shaft.png" },
  { name: "GHB Helmets", img: "./brands/ghb.png" },
  { name: "Dunlop", img: "./brands/dunlop.png" },
  { name: "ProTaper", img: "./brands/protaper.png" },
  { name: "Liqui Moly", img: "./brands/liqui-moly.png" },
  { name: "Ipone", img: "./brands/ipone.png" },
  { name: "Repsol", img: "./brands/repsol.png" },
  { name: "Castrol", img: "./brands/castrol.png" },
  { name: "Bosch", img: "./brands/bosch.png" },
  { name: "Sena", img: "./brands/sena.png" },
  { name: "Ixon", img: "./brands/ixon.png" },
  { name: "Fly Racing", img: "./brands/fly.png" },
  { name: "Nolan", img: "./brands/nolan.png" }
];

export default function BrandsCarousel() {
  return (
    <section className="my-10">
      <div className="text-center mb-5">
        <span className="text-[11px] font-black text-[#FF5500] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200 shadow-sm inline-block">
          MARCAS OFICIALES & DISTRIBUIDOR AUTORIZADO
        </span>
        <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 mt-2">
          Las Mejores Marcas del Mundo en MotoRock Chile
        </h3>
      </div>

      <div className="glass-aero rounded-3xl p-6 shadow-sm overflow-hidden">
        <div className="flex items-center gap-8 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center flex-nowrap">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center p-3 bg-white hover:bg-orange-50/50 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:scale-110 group h-16 w-28 cursor-pointer"
              title={brand.name}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="max-h-10 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-slate-700">${brand.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
