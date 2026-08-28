import React, { useState, useEffect } from "react";
import { ShieldCheck, Truck, Clock, Sparkles, ChevronRight, ArrowRight } from "lucide-react";

const SLIDES = [
  {
    tag: "COLECCIÓN 2026",
    title: "CASCOS CERTIFICADOS & SEGURIDAD TOTAL",
    subtitle: "LS2 Dragon Carbon, HRO, Abatibles e Integrales con norma ECE 22.06 e intercomunicadores Cardo.",
    cta: "Ver Cascos",
    category: "128", // CASCOS
    bgGradient: "from-orange-950/80 via-[#12151e] to-[#0b0d13]",
    badge: "Alta Gama"
  },
  {
    tag: "MÁXIMA POTENCIA",
    title: "TRANSMISIONES & KITS DE ARRASTRE",
    subtitle: "Cadenas DID doradas con O-Ring, Piñones y Catalinas de alta durabilidad para asfalto y enduro.",
    cta: "Ver Transmisiones",
    category: "47", // TRANSMISIONES
    bgGradient: "from-amber-950/80 via-[#12151e] to-[#0b0d13]",
    badge: "100% Calidad"
  },
  {
    tag: "MANTENIMIENTO PRO",
    title: "LUBRICANTES SINTÉTICOS MOTUL 4T",
    subtitle: "Protección máxima de motor y embrague, aceites 10W-40, 15W-50 y sprays de cadena para tu ruta.",
    cta: "Ver Lubricantes",
    category: "36", // LUBRICANTES
    bgGradient: "from-red-950/80 via-[#12151e] to-[#0b0d13]",
    badge: "Oficial Motul"
  }
];

export default function HeroBanner({ onSelectCategory, onOpenGarage }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <div className="relative overflow-hidden mb-8">
      {/* Main Banner Container */}
      <div className={`rounded-2xl border border-[#252b3d] bg-gradient-to-r ${slide.bgGradient} p-6 sm:p-10 transition-all duration-700 relative overflow-hidden shadow-2xl`}>
        {/* Background glow & aesthetic lines */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#FF5500] text-black font-extrabold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {slide.tag}
            </span>
            <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase flex items-center gap-1">
              <Sparkles size={12} className="text-amber-400" /> {slide.badge}
            </span>
          </div>

          <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none mb-4">
            {slide.title}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
            {slide.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectCategory(slide.category)}
              className="flex items-center gap-2 bg-[#FF5500] hover:bg-[#E04800] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#FF5500]/30 transition-all transform active:scale-95"
            >
              <span>{slide.cta}</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onOpenGarage}
              className="flex items-center gap-2 bg-[#1c202d] hover:bg-[#252b3d] text-gray-200 border border-[#2f374e] px-5 py-3 rounded-xl font-semibold text-sm transition-all"
            >
              <span>🏍️ Filtrar por mi Moto</span>
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 mt-8">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                current === idx ? "w-8 bg-[#FF5500]" : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Feature Value Props */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div className="bg-[#131620] border border-[#202534] rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Truck size={20} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Despachos a todo Chile</h4>
            <p className="text-[11px] text-gray-400">Starken y Chilexpress express</p>
          </div>
        </div>

        <div className="bg-[#131620] border border-[#202534] rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Pago 100% Seguro</h4>
            <p className="text-[11px] text-gray-400">Webpay Plus, Mercado Pago y Transferencia</p>
          </div>
        </div>

        <div className="bg-[#131620] border border-[#202534] rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Clock size={20} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Locales & Taller Talca</h4>
            <p className="text-[11px] text-gray-400">2 Sur 771-777 • Retiro en 2 horas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
