import React, { useState, useEffect } from "react";
import { ShieldCheck, Truck, Clock, Sparkles, ArrowRight, Zap, ChevronRight, Award } from "lucide-react";

const SLIDES = [
  {
    tag: "EQUIPAMIENTO & SEGURIDAD TOTAL",
    title: "CASCOS HOMOLOGADOS ECE 22.06 & INDUMENTARIA",
    subtitle: "LS2 Helmets, GHB, HRO y Shaft. Visores anti-rayas con Pinlock, calce anat?mico y compatibilidad con intercomunicadores Cardo y Sena para ruta y ciudad.",
    cta: "Explorar Cascos",
    category: "128",
    accentBadge: "Norma ECE 22.06",
    stats: "247 Modelos en Stock",
    primaryImg: "https://motorock.cl/wp-content/uploads/2026/08/CASCO-ABATIBLE-GHB-166-ANDROID-GRIS-MATTE-1.png",
    secondaryImg: "https://motorock.cl/wp-content/uploads/2026/08/ls2-casco-of616-airflow-ii-negro-matte-9.webp",
    brandLogo: "./brands/ls2.png"
  },
  {
    tag: "TRACCI?N & ALTO RENDIMIENTO",
    title: "TRANSMISIONES D.I.D & KITS DE ARRASTRE",
    subtitle: "Cadenas reforzadas japonesas X-Ring y O-Ring, coronas y pi?ones en acero templado para Honda XR/CB, Yamaha FZ/MT-03, Suzuki, Kawasaki y KTM.",
    cta: "Ver Transmisiones",
    category: "47",
    accentBadge: "100% Calidad Japonesa D.I.D",
    stats: "322 Repuestos Compatibles",
    primaryImg: "https://motorock.cl/wp-content/uploads/2026/08/1-24-300x300.webp",
    secondaryImg: "https://motorock.cl/wp-content/uploads/2026/08/X_mt2215-i-2000-416839-300x300.jpg",
    brandLogo: "./brands/dunlop.png"
  },
  {
    tag: "LUBRICACI?N & SERVICIO T?CNICO",
    title: "LUBRICANTES SINT?TICOS MOTUL & TALLER TALCA",
    subtitle: "L?neas Motul 7100 100% Sint?tico Ester y 5100 Technosynthese 4T. Mantenciones peri?dicas, cambio de frenos y transmisi?n en nuestros locales de Talca.",
    cta: "Ver Lubricantes",
    category: "36",
    accentBadge: "Distribuidor Oficial Motul",
    stats: "73 Variedades de Fluidos",
    primaryImg: "https://motorock.cl/wp-content/uploads/2026/08/MOTUL-7100-10W-40.png",
    secondaryImg: "https://motorock.cl/wp-content/uploads/2026/08/MOTUL-5100-10W-40.png",
    brandLogo: "./brands/motul.png"
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
      {/* Main Liquid Glass Hero Card with Real Photos */}
      <div className="glass-aero rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
        {/* Soft Ambient Refraction Blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-400/20 via-amber-300/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-sky-400/15 via-blue-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-5">
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

            <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight leading-[1.1] uppercase">
              {slide.title}
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
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

            {/* Slide Indicators */}
            <div className="flex items-center gap-2.5 pt-4">
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

          {/* Right Column: Real Downloaded Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              {/* Pedestal Glow Base */}
              <div className="absolute inset-4 bg-gradient-to-tr from-orange-200/50 via-amber-100/40 to-white rounded-3xl blur-xl transform rotate-6 scale-95 -z-10" />

              {/* Main Product Card Pedestal */}
              <div className="w-full h-full bg-white/90 backdrop-blur-md rounded-3xl border border-white shadow-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                <img
                  src={slide.primaryImg}
                  alt={slide.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x400/ffffff/333?text=MotoRock";
                  }}
                />

                {/* Floating Secondary Thumbnail */}
                <div className="absolute bottom-3 right-3 w-16 h-16 bg-white rounded-2xl border border-slate-200 p-1 shadow-lg overflow-hidden hidden sm:block">
                  <img
                    src={slide.secondaryImg}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Brand Badge */}
                <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black text-slate-800 uppercase tracking-wider">
                    Foto Real Cat?logo
                  </span>
                </div>
              </div>
            </div>
          </div>
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
