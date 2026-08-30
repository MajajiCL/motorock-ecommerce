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

            {/* Brasas reales detrás del casco.
                Un resplandor difuso no bastaba: el casco es negro y sobre
                fondo negro perdía media silueta, se veía partido en trozos
                rojos flotando. Contra el naranja de las brasas la forma
                completa se recorta y se lee entera.

                La máscara radial es imprescindible: sin ella se ve el
                rectángulo del JPEG pegado sobre el fondo de la sección.
                Aquí se difumina hacia los bordes y funde con el negro.

                Los gradientes van en `style` y no en clases de Tailwind:
                un `bg-[radial-gradient(...)]` con comas deja de generarse
                en cuanto el className se parte en varias líneas, y el div
                queda a 0x0 sin fondo. Ya pasó una vez en este archivo. */}
            <div
              className="absolute z-0 pointer-events-none"
              style={{
                width: "125%", aspectRatio: "1216 / 832",
                backgroundImage: "url(./img/hero-fondo-fuego.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center 58%",
                // Desenfocado y a media opacidad: en la primera prueba iba
                // nítido y las rocas competían con el casco —dos planos al
                // mismo nivel de detalle y no se distinguía cuál era el
                // producto—. Difuminado se comporta como lo que es: la luz
                // y el ambiente que hay detrás.
                filter: "blur(14px) saturate(1.15)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 58% 54% at 50% 55%, #000 30%, transparent 74%)",
                maskImage:
                  "radial-gradient(ellipse 58% 54% at 50% 55%, #000 30%, transparent 74%)",
                opacity: 0.62,
              }}
            />
            {/* Un punto de luz cálida justo detrás del casco, encima de las
                brasas: es lo que empuja la silueta hacia adelante. */}
            <div
              className="absolute z-0 rounded-full pointer-events-none"
              style={{
                width: "70%", aspectRatio: "1 / 1", filter: "blur(60px)",
                background:
                  "radial-gradient(circle, rgba(255,110,20,0.40) 0%, rgba(220,40,0,0.18) 45%, transparent 72%)",
              }}
            />

            <div className="relative z-10 group cursor-pointer" onClick={() => onSelectCategory("128")}>
              {/* POR QUÉ AQUÍ NO VA UNA FOTO DE CATÁLOGO.
                  Se probó con la foto oficial del HJC RPHA y con los tres
                  cascos del catálogo que mejor puntuaban: recortados del
                  fondo blanco y puestos sobre el fondo oscuro, todos se ven
                  partidos. La razón es de la fuente, no del recorte: un
                  casco negro fotografiado sobre blanco sólo tiene contorno
                  por contraste con ese blanco, y al quitarlo la silueta
                  desaparece. Se midió sobre 22 fotos de casco y ninguna
                  sobrevive.

                  Esta imagen es de ambiente y va rotulada como tal en el
                  alt: no afirma ser un producto del catálogo ni lleva marca
                  legible. El producto real se compra en la parrilla, donde
                  cada ficha sí lleva su foto oficial, su SKU y su precio. */}
              {/* Segunda versión. La primera salió con una insignia de
                  letras deformadas que imitaba a LS2 —una marca que la
                  tienda SÍ distribuye—, y un logotipo falso de una marca
                  real es peor que ninguno. Se intentó borrarla con
                  inpainting dos veces y quedó peor que el original, así que
                  se regeneró pidiendo superficie lisa sin emblemas. */}
              <img
                src="./img/hero-casco-limpio.jpg"
                alt="Casco de moto sobre brasas — imagen de ambiente"
                width="1216"
                height="832"
                fetchPriority="high"
                className="w-full max-w-[470px] sm:max-w-[560px] h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                style={{
                  // La imagen trae su propio fondo negro; la máscara lo
                  // funde con el de la sección para que no se vea la caja.
                  WebkitMaskImage:
                    "radial-gradient(ellipse 74% 72% at 50% 50%, #000 58%, transparent 88%)",
                  maskImage:
                    "radial-gradient(ellipse 74% 72% at 50% 50%, #000 58%, transparent 88%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
