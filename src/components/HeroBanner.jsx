import React from "react";
import { Truck, ShieldCheck, Clock, ArrowRight, Smartphone, Sparkles, Shield, CheckCircle2 } from "lucide-react";
import IPhoneMockup from "./IPhoneMockup";

export default function HeroBanner({ onSelectCategory, onOpenGarage, onOpenAppModal }) {
  return (
    <div className="pt-8 pb-16 flex flex-col items-center text-center">
      {/* 1. Trust Pill Badge */}
      <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-[#e5e5eb] shadow-sm mb-6 animate-in fade-in duration-300">
        <Sparkles size={13} className="text-[#5465ff]" />
        <span className="text-xs font-normal text-[#151581]">
          MotoRock App 2026 • Despacho Express en 24h & Retiro en 2h en Talca
        </span>
      </div>

      {/* 2. Display Headline in ES Rebond Grotesque Style */}
      <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#151581] leading-[0.93] tracking-[-0.045em] max-w-3xl mx-auto">
        Todo para tu moto en tu bolsillo.
        <br />
        <span className="text-[#151581]/85">Repuestos exactos y despacho inmediato.</span>
      </h1>

      {/* 3. Subtext in Lavender Mist */}
      <p className="text-base sm:text-lg text-[#a1a1cd] max-w-xl mx-auto mt-6 leading-relaxed font-normal">
        Selecciona tu modelo de moto, compra en 1-click y sigue el delivery en tiempo real por Starken o retira en 2 horas en nuestro local de Talca.
      </p>

      {/* 4. Action Buttons Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
        <button
          onClick={onOpenAppModal}
          className="flex items-center gap-2.5 bg-[#151581] hover:bg-[#0e0e5a] text-white px-6 py-3 rounded-full text-xs font-semibold shadow-sm transition-all cursor-pointer"
        >
          <span className="text-base"></span>
          <div className="text-left">
            <span className="block text-[8px] uppercase tracking-wider text-slate-300 leading-none">Disponible en</span>
            <span className="block text-xs font-bold leading-tight">App Store</span>
          </div>
        </button>

        <button
          onClick={onOpenAppModal}
          className="flex items-center gap-2.5 bg-[#151581] hover:bg-[#0e0e5a] text-white px-6 py-3 rounded-full text-xs font-semibold shadow-sm transition-all cursor-pointer"
        >
          <span className="text-base">🤖</span>
          <div className="text-left">
            <span className="block text-[8px] uppercase tracking-wider text-slate-300 leading-none">Descargar en</span>
            <span className="block text-xs font-bold leading-tight">Google Play</span>
          </div>
        </button>

        <button
          onClick={onOpenGarage}
          className="flex items-center gap-2 bg-white hover:bg-slate-50 text-[#151581] border border-[#e5e5eb] px-6 py-3 rounded-full text-xs font-semibold shadow-sm transition-all cursor-pointer"
        >
          <span>🏍️ Filtrar por Mi Moto</span>
          <ArrowRight size={13} className="text-[#a1a1cd]" />
        </button>
      </div>

      {/* 5. Centerpiece: Real iPhone 16 Pro Mockup with Non-Clipped Side Floating Badges */}
      <div className="mt-14 w-full max-w-5xl relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 px-4">
        {/* Left Floating Card: Real Casco HJC Dakar */}
        <div
          onClick={() => onSelectCategory("128")}
          className="w-full sm:w-auto lg:max-w-[230px] bg-white p-4 rounded-[24px] shadow-lovi border border-[#e5e5eb] flex items-center gap-3.5 cursor-pointer hover:scale-105 transition-all duration-200 text-left order-2 lg:order-1"
        >
          <img
            src="https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg"
            alt="Casco HJC Dakar"
            className="w-14 h-14 object-contain rounded-2xl bg-[#f6f6fa] p-1.5 flex-shrink-0"
            onError={(e) => {
              e.target.src = "https://placehold.co/100x100/ffffff/333?text=HJC";
            }}
          />
          <div className="min-w-0">
            <span className="text-[9px] font-bold text-[#00bb76] uppercase tracking-wider flex items-center gap-1">
              <Shield size={10} /> ECE 22.06
            </span>
            <h5 className="text-xs font-bold text-[#151581] truncate">HJC RPH 60 Dakar</h5>
            <span className="text-xs font-bold text-[#151581] block">$599.900 CLP</span>
          </div>
        </div>

        {/* Center: Hyper-realistic iPhone 16 Pro Mockup */}
        <div className="order-1 lg:order-2 flex-shrink-0">
          <IPhoneMockup
            onSelectCategory={onSelectCategory}
            onOpenGarage={onOpenGarage}
          />
        </div>

        {/* Right Floating Card: Real Aceite Motul 7100 Sintético Ester */}
        <div
          onClick={() => onSelectCategory("36")}
          className="w-full sm:w-auto lg:max-w-[230px] bg-white p-4 rounded-[24px] shadow-lovi border border-[#e5e5eb] flex items-center gap-3.5 cursor-pointer hover:scale-105 transition-all duration-200 text-left order-3"
        >
          <img
            src="https://motorock.cl/wp-content/uploads/2026/06/MOTUL-7100-10W-40.png"
            alt="Motul 7100"
            className="w-14 h-14 object-contain rounded-2xl bg-[#f6f6fa] p-1.5 flex-shrink-0"
            onError={(e) => {
              e.target.src = "https://placehold.co/100x100/ffffff/333?text=Motul";
            }}
          />
          <div className="min-w-0">
            <span className="text-[9px] font-bold text-[#00bb76] uppercase tracking-wider block">
              100% Sintético Ester
            </span>
            <h5 className="text-xs font-bold text-[#151581] truncate">Motul 7100 10W-40</h5>
            <span className="text-xs font-bold text-[#151581] block">$16.900 CLP</span>
          </div>
        </div>
      </div>

      {/* 6. Three Pillars Strip in Paper White with 24px Radius */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto w-full mt-14 text-left">
        <div className="bg-white p-5 rounded-[24px] shadow-lovi border border-[#e5e5eb] space-y-1">
          <span className="text-[11px] font-bold text-[#00bb76] uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 size={13} /> 24 a 48 Horas
          </span>
          <h4 className="text-sm font-semibold text-[#151581]">Despacho Express a Todo Chile</h4>
          <p className="text-xs text-[#a1a1cd]">Envíos asegurados por Starken y Chilexpress directo a tu puerta.</p>
        </div>

        <div className="bg-white p-5 rounded-[24px] shadow-lovi border border-[#e5e5eb] space-y-1">
          <span className="text-[11px] font-bold text-[#151581] uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 size={13} className="text-[#5465ff]" /> Cero Errores
          </span>
          <h4 className="text-sm font-semibold text-[#151581]">Garage y Compatibilidad Exacta</h4>
          <p className="text-xs text-[#a1a1cd]">Filtra por modelo y recibe la cadena, piñón y aceite correcto.</p>
        </div>

        <div className="bg-white p-5 rounded-[24px] shadow-lovi border border-[#e5e5eb] space-y-1">
          <span className="text-[11px] font-bold text-[#5465ff] uppercase tracking-wider flex items-center gap-1">
            <Clock size={13} /> Listo en 2 Horas
          </span>
          <h4 className="text-sm font-semibold text-[#151581]">Retiro en Tienda Talca</h4>
          <p className="text-xs text-[#a1a1cd]">Compra en la app y retira listo en Av. 2 Sur 771 y 777.</p>
        </div>
      </div>
    </div>
  );
}
