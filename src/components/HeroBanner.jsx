import React, { useState, useEffect } from "react";
import { ShieldCheck, Truck, Clock, Sparkles, ArrowRight, Zap, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    tag: "COLECCI?N PRO 2026",
    title: "CASCOS DE COMPETICI?N & SEGURIDAD TOTAL",
    subtitle: "LS2 Dragon Carbon, HRO, Abatibles e Integrales con certificaci?n ECE 22.06 e intercomunicadores Cardo Mesh.",
    cta: "Explorar Cascos",
    category: "128",
    accentColor: "#FF5500",
    badge: "Homologaci?n ECE 22.06",
    stats: "247 Modelos en Stock"
  },
  {
    tag: "M?XIMO RENDIMIENTO",
    title: "TRANSMISIONES REFORZADAS & CADENAS D.I.D",
    subtitle: "Kits de arrastre con cadenas doradas X-Ring, coronas y pi?ones en acero templado para calle y enduro.",
    cta: "Ver Transmisiones",
    category: "47",
    accentColor: "#F59E0B",
    badge: "100% Japon?s / Alta Durabilidad",
    stats: "322 Repuestos Compatibles"
  },
  {
    tag: "MANTENIMIENTO DE ?LITE",
    title: "LUBRICANTES SINT?TICOS MOTUL & TALLER TALCA",
    subtitle: "Aceites 10W-40, 15W-50 4T con tecnolog?a Ester, sprays para cadena y mantenciones en nuestro local de Talca.",
    cta: "Ver Lubricantes",
    category: "36",
    accentColor: "#EF4444",
    badge: "Distribuidor Autorizado",
    stats: "73 Variedades de Fluidos"
  }
];

export default function HeroBanner({ onSelectCategory, onOpenGarage }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <div className="relative overflow-hidden mb-10">
      {/* Main Luxury Hero Card */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#121724] via-[#0b0e15] to-[#06080c] p-6 sm:p-12 relative overflow-hidden shadow-2xl">
        {/* Glow Spheres */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-40 transition-all duration-1000"
          style={{ backgroundColor: slide.accentColor }}
        />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FF5500]/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="bg-[#FF5500] text-black font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-[#FF5500]/30">
              {slide.tag}
            </span>
            <span className="bg-white/5 border border-white/10 text-gray-300 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles size={13} className="text-amber-400" /> {slide.badge}
            </span>
            <span className="hidden sm:inline-block text-[11px] text-gray-400 font-semibold">
              ? {slide.stats}
            </span>
          </div>

          <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] uppercase">
            {slide.title}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
            {slide.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => onSelectCategory(slide.category)}
              className="flex items-center gap-2.5 bg-[#FF5500] hover:bg-[#E04800] text-white px-7 py-3.5 rounded-2xl font-black text-xs sm:text-sm shadow-xl shadow-[#FF5500]/30 transition-all transform active:scale-95"
            >
              <span>{slide.cta}</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onOpenGarage}
              className="flex items-center gap-2 bg-[#161c28] hover:bg-[#1f283a] text-gray-200 border border-[#2d384e] px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all"
            >
              <span>??? Filtrar por Mi Moto</span>
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2.5 mt-10">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? "w-10 bg-[#FF5500]" : "w-2.5 bg-gray-700 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Feature Value Props Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-4">
        <div className="glass-panel rounded-2xl p-4 flex items-center gap-3.5 border border-white/5 hover:border-[#FF5500]/30 transition-all">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <Truck size={22} />
          </div>
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wide">Despacho Express Nacional</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Starken y Chilexpress a todo Chile Continental</p>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-4 flex items-center gap-3.5 border border-white/5 hover:border-[#FF5500]/30 transition-all">
          <div className="w-11 h-11 rounded-xl bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/20 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={22} />
          </div>
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wide">Pagos Seguros en Cuotas</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Webpay Plus, Mercado Pago y Transferencia</p>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-4 flex items-center gap-3.5 border border-white/5 hover:border-[#FF5500]/30 transition-all">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Clock size={22} />
          </div>
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wide">Showroom & Taller Talca</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Av. 2 Sur 771 y 777 ? Retiro en 2 horas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
