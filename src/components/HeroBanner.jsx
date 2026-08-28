import React, { useState, useEffect } from "react";
import { ShieldCheck, Truck, Clock, Sparkles, ArrowRight, Zap, ChevronRight, Award } from "lucide-react";

const SLIDES = [
  {
    tag: "COLECCI?N PRO 2026",
    title: "CASCOS DE COMPETICI?N & SEGURIDAD TOTAL",
    subtitle: "LS2 Dragon Carbon, HRO, Abatibles e Integrales con certificaci?n ECE 22.06 e intercomunicadores Cardo Mesh.",
    cta: "Explorar Cascos",
    category: "128",
    accentBadge: "Norma ECE 22.06",
    stats: "247 Modelos en Stock"
  },
  {
    tag: "M?XIMO RENDIMIENTO",
    title: "TRANSMISIONES REFORZADAS & CADENAS D.I.D",
    subtitle: "Kits de arrastre con cadenas doradas X-Ring, coronas y pi?ones en acero templado para calle y enduro.",
    cta: "Ver Transmisiones",
    category: "47",
    accentBadge: "Calidad 100% Japonesa",
    stats: "322 Repuestos Compatibles"
  },
  {
    tag: "MANTENIMIENTO DE ?LITE",
    title: "LUBRICANTES SINT?TICOS MOTUL & TALLER TALCA",
    subtitle: "Aceites 10W-40, 15W-50 4T con tecnolog?a Ester, sprays de cadena y servicio t?cnico en Talca.",
    cta: "Ver Lubricantes",
    category: "36",
    accentBadge: "Distribuidor Oficial",
    stats: "73 Variedades de Fluidos"
  }
];

export default function HeroBanner({ onSelectCategory, onOpenGarage }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <div className="relative overflow-hidden mb-10">
      {/* Main Liquid Glass Hero Card */}
      <div className="glass-aero rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-xl">
        {/* Soft Liquid Ambient Glow Blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-400/20 via-amber-300/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-sky-400/15 via-blue-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="bg-[#FF5500] text-white font-black text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm shadow-[#FF5500]/30">
              {slide.tag}
            </span>
            <span className="bg-white border border-slate-200/90 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <Award size={13} className="text-[#FF5500]" /> {slide.accentBadge}
            </span>
            <span className="hidden sm:inline-block text-[11px] text-slate-500 font-semibold">
              ? {slide.stats}
            </span>
          </div>

          <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.1] uppercase">
            {slide.title}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
            {slide.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => onSelectCategory(slide.category)}
              className="liquid-btn text-white px-7 py-3.5 rounded-full font-black text-xs sm:text-sm shadow-xl shadow-[#FF5500]/25 flex items-center gap-2.5 transform active:scale-95 cursor-pointer"
            >
              <span>{slide.cta}</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onOpenGarage}
              className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all"
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
                current === idx ? "w-10 bg-[#FF5500]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Feature Value Props Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-4">
        <div className="glass-aero rounded-2xl p-4 flex items-center gap-3.5 hover:shadow-lg transition-all">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center flex-shrink-0 shadow-sm">
            <Truck size={22} />
          </div>
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">Despacho Express Nacional</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Starken y Chilexpress a todo Chile Continental</p>
          </div>
        </div>

        <div className="glass-aero rounded-2xl p-4 flex items-center gap-3.5 hover:shadow-lg transition-all">
          <div className="w-11 h-11 rounded-2xl bg-orange-50 text-[#FF5500] border border-orange-100 flex items-center justify-center flex-shrink-0 shadow-sm">
            <ShieldCheck size={22} />
          </div>
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">Pagos Seguros en Cuotas</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Webpay Plus, Mercado Pago y Transferencia</p>
          </div>
        </div>

        <div className="glass-aero rounded-2xl p-4 flex items-center gap-3.5 hover:shadow-lg transition-all">
          <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center flex-shrink-0 shadow-sm">
            <Clock size={22} />
          </div>
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">Showroom & Taller Talca</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Av. 2 Sur 771 y 777 ? Retiro en 2 horas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
