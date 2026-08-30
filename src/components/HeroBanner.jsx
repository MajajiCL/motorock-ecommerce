import React from "react";
import { Truck, ShieldCheck, Clock, ArrowRight, Smartphone, Sparkles, Shield, CheckCircle2, Star, Zap } from "lucide-react";
import IPhoneMockup from "./IPhoneMockup";
import AnimatedShinyText from "./ui/AnimatedShinyText";
import NumberTicker from "./ui/NumberTicker";

export default function HeroBanner({ onSelectCategory, onOpenGarage, onOpenAppModal }) {
  return (
    <section className="relative pt-4 sm:pt-8 pb-8 sm:pb-16 flex flex-col items-center text-center px-3 sm:px-4 max-w-full overflow-hidden">
      {/* 1. Trust Glass Pill Badge */}
      <div className="inline-flex items-center gap-2 glass-pill px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6 animate-in fade-in duration-300 max-w-full">
        <Sparkles size={13} className="text-[#e60000] flex-shrink-0" />
        <AnimatedShinyText className="text-[11px] sm:text-xs text-[#0f172a] truncate">
          ⚡ MotoRock App 2026 • Despacho Express en 24h & Retiro en 2h en Talca
        </AnimatedShinyText>
      </div>

      {/* 2. Display Headline */}
      <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0f172a] leading-[1.05] sm:leading-[0.98] tracking-tight max-w-3xl mx-auto font-heading px-2">
        Todo para tu moto en tu bolsillo.
        <br />
        <span className="text-[#e60000]">Repuestos exactos y despacho inmediato.</span>
      </h1>

      {/* 3. Subtext */}
      <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-xl mx-auto mt-3 sm:mt-6 leading-relaxed font-normal px-2">
        Selecciona tu modelo de moto, compra en 1-click y sigue el delivery en tiempo real por Starken o retira en 2 horas en nuestro local de Talca.
      </p>

      {/* 4. Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-6 sm:mt-8 w-full max-w-md sm:max-w-none px-2">
        <button
          onClick={onOpenAppModal}
          className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <span className="text-sm sm:text-base"></span>
          <div className="text-left">
            <span className="block text-[7px] sm:text-[8px] uppercase tracking-wider text-slate-400 leading-none">App Store</span>
            <span className="block text-[11px] sm:text-xs font-bold leading-tight font-heading">iOS</span>
          </div>
        </button>

        <button
          onClick={onOpenAppModal}
          className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <span className="text-sm sm:text-base">🤖</span>
          <div className="text-left">
            <span className="block text-[7px] sm:text-[8px] uppercase tracking-wider text-slate-400 leading-none">Google Play</span>
            <span className="block text-[11px] sm:text-xs font-bold leading-tight font-heading">Android</span>
          </div>
        </button>

        <button
          onClick={onOpenGarage}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#e60000] hover:bg-[#cc0000] text-white px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs font-extrabold shadow-racing transition-all cursor-pointer font-heading"
        >
          <span>🏍️ Filtrar por Mi Moto</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* 5. Centerpiece: iPhone 16 Pro Mockup with 2 Balanced Desktop Side Badges */}
      <div className="mt-8 sm:mt-14 w-full max-w-5xl relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-2 sm:px-4">
        {/* Left Desktop Glass Card: Cascos */}
        <div
          onClick={() => onSelectCategory("128")}
          className="hidden lg:flex w-[240px] glass-panel glass-panel-hover p-4 rounded-[24px] items-center gap-3.5 cursor-pointer text-left flex-shrink-0"
        >
          <img
            src="https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg"
            alt="Casco HJC Dakar"
            className="w-14 h-14 object-contain rounded-2xl bg-white/90 p-1.5 flex-shrink-0"
          />
          <div className="min-w-0">
            <span className="text-[9px] font-extrabold text-[#00bb76] uppercase tracking-wider flex items-center gap-1 font-heading">
              <Shield size={10} /> ECE 22.06
            </span>
            <h5 className="text-xs font-bold text-[#0f172a] truncate font-heading">HJC RPH 60 Dakar</h5>
            <span className="text-xs font-extrabold text-[#e60000] block font-heading">$599.900 CLP</span>
          </div>
        </div>

        {/* Center: Responsive iPhone 16 Pro Mockup */}
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
          <IPhoneMockup
            onSelectCategory={onSelectCategory}
            onOpenGarage={onOpenGarage}
          />
        </div>

        {/* Right Desktop Glass Card: Motul */}
        <div
          onClick={() => onSelectCategory("36")}
          className="hidden lg:flex w-[240px] glass-panel glass-panel-hover p-4 rounded-[24px] items-center gap-3.5 cursor-pointer text-left flex-shrink-0"
        >
          <img
            src="https://motorock.cl/wp-content/uploads/2026/06/MOTUL-7100-10W-40.png"
            alt="Motul 7100"
            className="w-14 h-14 object-contain rounded-2xl bg-white/90 p-1.5 flex-shrink-0"
          />
          <div className="min-w-0">
            <span className="text-[9px] font-extrabold text-[#00bb76] uppercase tracking-wider block font-heading">
              100% Sintético Ester
            </span>
            <h5 className="text-xs font-bold text-[#0f172a] truncate font-heading">Motul 7100 10W-40</h5>
            <span className="text-xs font-extrabold text-[#e60000] block font-heading">$16.900 CLP</span>
          </div>
        </div>
      </div>

      {/* 6. Three Glass Pillars Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto w-full mt-8 sm:mt-14 text-left px-2">
        <div className="glass-panel p-4 sm:p-5 rounded-[20px] sm:rounded-[24px] space-y-1">
          <span className="text-[10px] sm:text-[11px] font-extrabold text-[#00bb76] uppercase tracking-wider flex items-center gap-1 font-heading">
            <CheckCircle2 size={12} />
            <NumberTicker value={24} suffix=" a 48 Horas" />
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-[#0f172a] font-heading">Despacho Express Todo Chile</h4>
          <p className="text-[11px] sm:text-xs text-slate-500">Envíos asegurados por Starken y Chilexpress directo a tu puerta.</p>
        </div>

        <div className="glass-panel p-4 sm:p-5 rounded-[20px] sm:rounded-[24px] space-y-1">
          <span className="text-[10px] sm:text-[11px] font-extrabold text-[#e60000] uppercase tracking-wider flex items-center gap-1 font-heading">
            <CheckCircle2 size={12} className="text-[#e60000]" />
            <NumberTicker value={726} prefix="+" suffix=" Repuestos" />
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-[#0f172a] font-heading">Garage y Calce Exacto</h4>
          <p className="text-[11px] sm:text-xs text-slate-500">Filtra por modelo y recibe la cadena, piñón y aceite correcto.</p>
        </div>

        <div className="glass-panel p-4 sm:p-5 rounded-[20px] sm:rounded-[24px] space-y-1">
          <span className="text-[10px] sm:text-[11px] font-extrabold text-[#0f172a] uppercase tracking-wider flex items-center gap-1 font-heading">
            <Clock size={12} className="text-[#e60000]" />
            <NumberTicker value={2} prefix="Listo en " suffix=" Horas" />
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-[#0f172a] font-heading">Retiro en Tienda Talca</h4>
          <p className="text-[11px] sm:text-xs text-slate-500">Compra en la app y retira listo en Av. 2 Sur 771 y 777.</p>
        </div>
      </div>
    </section>
  );
}
