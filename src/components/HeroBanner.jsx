import React, { useState, useEffect } from "react";
import { Truck, ShieldCheck, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    tag: "CASCOS Y SEGURIDAD",
    title: "Cascos de Moto con Homologaci?n ECE 22.06",
    subtitle: "Modelos HJC, LS2, GHB y Shaft. Cascos integrales, abatibles y multiprop?sito con visores de alta visibilidad, calce c?modo y protecci?n certificada para calle y carretera.",
    cta: "Ver Cascos",
    category: "128",
    img: "https://motorock.cl/wp-content/uploads/2026/08/CASCO-ABATIBLE-GHB-166-ANDROID-GRIS-MATTE-1.png",
    accent: "bg-orange-50 border-orange-200"
  },
  {
    tag: "TRANSMISI?N Y ARRASTRE",
    title: "Cadenas y Kits de Transmisi?n D.I.D Jap?n",
    subtitle: "Cadenas reforzadas con O-Ring y X-Ring, coronas y pi?ones en acero templado para Honda XR/CB, Yamaha FZ/MT, Suzuki, Kawasaki, KTM y Bajaj.",
    cta: "Ver Transmisiones",
    category: "47",
    img: "https://motorock.cl/wp-content/uploads/2026/08/1-24-300x300.webp",
    accent: "bg-blue-50 border-blue-200"
  },
  {
    tag: "LUBRICANTES Y MANTENCI?N",
    title: "Aceites Sint?ticos Motul y Taller en Talca",
    subtitle: "L?neas Motul 7100 100% Sint?tico y 5100 Technosynthese 4T. Todo para la mantenci?n de tu moto, frenos, transmisi?n y servicio t?cnico en Talca.",
    cta: "Ver Lubricantes",
    category: "36",
    img: "https://motorock.cl/wp-content/uploads/2026/08/MOTUL-7100-10W-40.png",
    accent: "bg-amber-50 border-amber-200"
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
    <div className="mb-8">
      {/* Main Editorial Hero Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Clear Human Copy */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block bg-orange-100 text-[#FF5500] font-bold text-[11px] px-3 py-1 rounded uppercase tracking-wider">
              {slide.tag}
            </span>

            <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight">
              {slide.title}
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectCategory(slide.category)}
                className="bg-[#FF5500] hover:bg-[#e64d00] text-white px-6 py-3 rounded-lg font-bold text-xs sm:text-sm shadow-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>{slide.cta}</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onOpenGarage}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 px-5 py-3 rounded-lg font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>Filtrar por Mi Moto</span>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2 pt-4">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    current === idx ? "w-8 bg-[#FF5500]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Clean Product Showcase Image */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-[320px] aspect-square bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center justify-center shadow-inner">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = "https://placehold.co/400x400/ffffff/333?text=MotoRock";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Value Props Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-3.5">
        <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
            <Truck size={20} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Env?os a Todo Chile</h4>
            <p className="text-[11px] text-slate-500">V?a Starken y Chilexpress (Gratis sobre $50.000)</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF5500] flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Hasta 6 Cuotas Sin Inter?s</h4>
            <p className="text-[11px] text-slate-500">Paga con Webpay Plus y Mercado Pago</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
            <Clock size={20} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Retiro en Tienda Talca</h4>
            <p className="text-[11px] text-slate-500">Av. 2 Sur 771 y 777 ? Listo en 2 horas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
