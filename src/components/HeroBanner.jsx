import React, { useState } from "react";
import { Truck, ShieldCheck, Clock, ArrowRight, Smartphone, Sparkles, Mic, ChevronRight, CheckCircle2, Shield, Wrench } from "lucide-react";

const HERO_SLIDES = [
  {
    id: "helmets",
    badge: "CASCOS HOMOLOGADOS ECE 22.06",
    title: "Seguridad y Rendimiento de Nivel Mundial",
    subtitle: "Cascos integrales, abatibles y multipropósito HJC, LS2, Shaft y GHB con despacho inmediato a todo Chile.",
    category: "128",
    priceText: "Desde $32.900 CLP",
    featuredImg: "https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg",
    featuredName: "HJC RPH 60 Dakar",
    featuredPrice: "$599.900 CLP",
    tag: "Certificación ECE 22.06"
  },
  {
    id: "chains",
    badge: "TRANSMISIÓN D.I.D JAPÓN",
    title: "Cero Desgaste con Cadenas Reforzadas",
    subtitle: "Kits de transmisión con paso exacto (428/520) para Honda, Yamaha, Kawasaki, KTM y Suzuki.",
    category: "47",
    priceText: "Desde $18.900 CLP",
    featuredImg: "https://motorock.cl/wp-content/uploads/2026/08/1-24-300x300.webp",
    featuredName: "Kit Transmisión D.I.D X-Ring",
    featuredPrice: "$89.900 CLP",
    tag: "Acero Japonés de Alta Resistencia"
  },
  {
    id: "oils",
    badge: "ACEITES Y LUBRICANTES MOTUL",
    title: "Máxima Protección para tu Motor 4T",
    subtitle: "Motul 7100 100% Sintético Ester y 5100 Technosynthese en 10W-40, 15W-50 y 20W-50.",
    category: "36",
    priceText: "Desde $9.900 CLP",
    featuredImg: "https://motorock.cl/wp-content/uploads/2026/08/MOTUL-7100-10W-40.png",
    featuredName: "Motul 7100 10W-40 4T",
    featuredPrice: "$16.900 CLP",
    tag: "100% Sintético Ester"
  },
  {
    id: "gear",
    badge: "INDUMENTARIA BIKER & PROTECCIONES",
    title: "Chaquetas LS2, Guantes y Equipamiento",
    subtitle: "Chaquetas LS2 Serra Evo con protecciones homologadas, guantes de cuero y mochilas impermeables Rhinowalk.",
    category: "116",
    priceText: "Desde $14.900 CLP",
    featuredImg: "https://motorock.cl/wp-content/uploads/2026/08/SERRA-1.webp",
    featuredName: "Chaqueta LS2 Serra Evo",
    featuredPrice: "$159.900 CLP",
    tag: "Protecciones Certificadas CE"
  }
];

export default function HeroBanner({ onSelectCategory, onOpenGarage, onOpenAppModal }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = HERO_SLIDES[activeSlide];

  return (
    <div className="pt-3 pb-10 space-y-6">
      {/* 1. Main High-Impact Hero Showcase Card */}
      <div className="relative bg-[#121214] text-white rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl">
        {/* Fondo Gradiente MotoRock Red sutil */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#e60000]/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#e60000]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
          {/* Columna Izquierda: Información Principal y Botones */}
          <div className="lg:col-span-7 space-y-5">
            {/* Slide Tabs Navigation */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    activeSlide === idx
                      ? "bg-[#e60000] text-white shadow-motorock-red"
                      : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  <span>{s.badge.split(" ")[0]}</span>
                  {activeSlide === idx && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                </button>
              ))}
            </div>

            {/* Badge de Categoría */}
            <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/50 text-[#ff4d4d] px-3.5 py-1 rounded-full text-xs font-semibold">
              <Sparkles size={12} className="text-[#e60000]" />
              <span>{slide.badge}</span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.05] tracking-tight text-white">
              {slide.title}
            </h1>

            {/* Subtítulo Descriptivo */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {slide.subtitle}
            </p>

            {/* Botones de Acción Inmediata */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectCategory(slide.category)}
                className="bg-[#e60000] hover:bg-[#cc0000] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-motorock-red flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Explorar {slide.badge.split(" ")[0]}</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onOpenGarage}
                className="bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>🏍️ Filtrar por Mi Moto</span>
              </button>

              <button
                onClick={onOpenAppModal}
                className="bg-white hover:bg-zinc-100 text-[#121214] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Smartphone size={15} className="text-[#e60000]" />
                <span>Descargar App</span>
              </button>
            </div>

            {/* Micro Garantías */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Truck size={14} className="text-[#00bb76]" /> Envíos en 24-48h por Starken
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#e60000]" /> Retiro en 2h en Talca
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#00bb76]" /> Garantía Oficial
              </span>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Fotográfica Real y Mockup iPhone */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 items-center justify-center">
            {/* Tarjeta de Producto Real en Alta Resolución */}
            <div className="w-full bg-zinc-900/90 rounded-[28px] p-6 border border-zinc-800 relative group overflow-hidden shadow-lg">
              <div className="absolute top-4 right-4 bg-[#e60000] text-white font-bold text-[10px] px-3 py-1 rounded-full shadow-sm">
                {slide.tag}
              </div>

              <div className="aspect-square w-full max-w-[260px] mx-auto flex items-center justify-center p-4">
                <img
                  src={slide.featuredImg}
                  alt={slide.featuredName}
                  className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-2 text-left space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Destacado MotoRock</span>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white truncate">{slide.featuredName}</h4>
                  <span className="text-sm font-extrabold text-[#ff4d4d]">{slide.featuredPrice}</span>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-zinc-400">{slide.priceText}</span>
                  <button
                    onClick={() => onSelectCategory(slide.category)}
                    className="text-[#ff4d4d] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                  >
                    Ver en catálogo <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Strip de 3 Pilares Rápidos MotoRock */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-[24px] shadow-motorock border border-[#e4e4e7] flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#e60000] flex items-center justify-center flex-shrink-0 font-bold text-xl">
            <Truck size={24} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#121214] uppercase tracking-wider">Despacho Express</h4>
            <p className="text-xs text-zinc-500 mt-0.5">Envíos diarios por Starken y Chilexpress a todo Chile.</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-[24px] shadow-motorock border border-[#e4e4e7] flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#e60000] flex items-center justify-center flex-shrink-0 font-bold text-xl">
            🏍️
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#121214] uppercase tracking-wider">Garage de Compatibilidad</h4>
            <p className="text-xs text-zinc-500 mt-0.5">Cero errores en pasos de cadena, bujías y aceites.</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-[24px] shadow-motorock border border-[#e4e4e7] flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#e60000] flex items-center justify-center flex-shrink-0 font-bold text-xl">
            <Clock size={24} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#121214] uppercase tracking-wider">Retiro en 2 Horas</h4>
            <p className="text-xs text-zinc-500 mt-0.5">Compra online y retira listo en local de Talca (2 Sur 771).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
