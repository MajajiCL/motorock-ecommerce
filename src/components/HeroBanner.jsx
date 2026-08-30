import React from "react";
import { ArrowRight, Flame } from "lucide-react";

export default function HeroBanner({ onSelectCategory, onOpenGarage, onOpenAppModal }) {
  return (
    <section className="relative bg-[#0a0a0c] overflow-hidden py-10 sm:py-16 border-b border-[#181920]">
      {/* Intense Volcanic Flame Backdrop Behind the Helmet */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-l from-[#ff1a1a]/30 via-[#ff6600]/20 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 Cols): Impactful Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-black uppercase tracking-tight leading-[0.92] text-white font-display">
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

            {/* 3 Micro-Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <span className="text-[#e60000] text-xl font-black mt-0.5">⚡</span>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-heading">DESPACHO EXPRESS</h4>
                  <p className="text-[11px] text-zinc-400">24H en todo Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#e60000] text-xl font-black mt-0.5">📍</span>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-heading">RETIRO EN 2H</h4>
                  <p className="text-[11px] text-zinc-400">Talca</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#e60000] text-xl font-black mt-0.5">🛡️</span>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-heading">REPUESTOS EXACTOS</h4>
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
                className="bg-[#14151a] hover:bg-[#1c1d24] text-white border border-white/15 px-7 py-3.5 rounded-md font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer font-heading"
              >
                <span>OFERTAS</span>
                <Flame size={15} className="text-[#e60000]" />
              </button>
            </div>
          </div>

          {/* Right Column (5 Cols): Hero Racing Helmet */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Dynamic Ember Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-orange-500/20 to-transparent rounded-full filter blur-3xl pointer-events-none" />

            {/* Resplandor detrás del casco. Va DEBAJO de la imagen y no como
                sombra del <img>: el casco es negro sobre fondo casi negro y
                sin una luz que lo separe se pierde la mitad de la silueta. */}
            {/* Los gradientes van en `style` y no en clases de Tailwind.
                Un `bg-[radial-gradient(...)]` con varias paradas y comas
                deja de generarse en cuanto el className se parte en varias
                líneas: la clase existe en el JSX pero el CSS nunca sale, y
                el div queda a 0x0 sin fondo. Pasó exactamente eso aquí. */}
            <div
              className="absolute z-0 rounded-full pointer-events-none"
              style={{
                width: "92%", aspectRatio: "1 / 1", filter: "blur(70px)",
                background:
                  "radial-gradient(circle, rgba(255,90,10,0.62) 0%, rgba(230,20,0,0.34) 38%, rgba(120,10,0,0.12) 62%, transparent 78%)",
              }}
            />
            {/* Segundo foco, más bajo y ancho: la brasa que queda bajo el
                casco y le da suelo. Sin él la pieza flota. */}
            <div
              className="absolute z-0 rounded-full pointer-events-none"
              style={{
                width: "58%", height: "22%", bottom: "16%", filter: "blur(45px)",
                background:
                  "radial-gradient(ellipse, rgba(255,120,20,0.50) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 group cursor-pointer" onClick={() => onSelectCategory("128")}>
              {/* Foto oficial del HJC RPHA que la tienda vende, recortada del
                  fondo blanco de catálogo. Antes se cargaba el JPG tal cual
                  desde el WordPress y se veía un rectángulo blanco pegado
                  sobre el fondo negro.
                  WebP con alfa: 73 KB frente a 514 del PNG, y el <picture>
                  deja el PNG para quien no soporte WebP. */}
              <picture>
                <source srcSet="./img/hjc-rpha-hero.webp" type="image/webp" />
                <img
                  src="./img/hjc-rpha-hero.png"
                  alt="Casco HJC RPHA 60 Dakar, homologado, disponible en MotoRock Talca"
                  width="794"
                  height="716"
                  fetchPriority="high"
                  className="w-full max-w-[420px] sm:max-w-[480px] h-auto object-contain filter drop-shadow-[0_18px_38px_rgba(230,0,0,0.55)] group-hover:scale-105 transition-transform duration-500"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
