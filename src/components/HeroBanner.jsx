import React from "react";
import { ArrowRight, Flame, Shield, Zap, MapPin } from "lucide-react";

export default function HeroBanner({ onSelectCategory, onOpenGarage, onOpenAppModal }) {
  return (
    <section className="relative bg-[#0a0a0c] overflow-hidden py-10 sm:py-16 border-b border-[#1a1b22]">
      {/* Background Volcanic Fire Glow Behind the Helmet */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-l from-[#e60000]/25 via-[#ff5500]/15 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 Cols): Bold Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black uppercase tracking-tight leading-[0.92] text-white font-display">
              TODO PARA TU MOTO
              <br />
              <span className="text-[#e60000] drop-shadow-[0_0_25px_rgba(230,0,0,0.6)]">
                EN TU BOLSILLO
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Repuestos exactos, despacho inmediato y retiro en 2h en Talca.
              <br />
              Más de <strong className="text-[#e60000] font-black">726 productos</strong> para mantener tu moto siempre al 100%.
            </p>

            {/* 3 Key Trust Micro-Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <span className="text-[#e60000] text-lg font-black mt-0.5">⚡</span>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-heading">Despacho Express</h4>
                  <p className="text-[11px] text-zinc-400">24H en todo Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#e60000] text-lg font-black mt-0.5">📍</span>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-heading">Retiro en 2H</h4>
                  <p className="text-[11px] text-zinc-400">Talca (Av. 2 Sur)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#e60000] text-lg font-black mt-0.5">🛡️</span>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-heading">Repuestos Exactos</h4>
                  <p className="text-[11px] text-zinc-400">Compatibilidad garantizada</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onSelectCategory("all")}
                className="bg-[#e60000] hover:bg-[#cc0000] text-white px-8 py-3.5 rounded-md font-black text-xs uppercase tracking-wider shadow-racing-red flex items-center gap-2 transition-all cursor-pointer font-heading"
              >
                <span>VER PRODUCTOS</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => onSelectCategory("ofertas")}
                className="bg-[#16171d] hover:bg-[#202129] text-white border border-white/15 px-7 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer font-heading"
              >
                <span>OFERTAS</span>
                <Flame size={15} className="text-[#e60000]" />
              </button>
            </div>
          </div>

          {/* Right Column (5 Cols): Hero Racing Helmet with Fiery Atmosphere */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glow Halo */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-orange-500/10 to-transparent rounded-full filter blur-2xl pointer-events-none" />

            <div className="relative z-10 group cursor-pointer" onClick={() => onSelectCategory("128")}>
              <img
                src="https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg"
                alt="Casco HJC RPHA 60 Dakar"
                className="w-full max-w-[420px] sm:max-w-[460px] h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(230,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
