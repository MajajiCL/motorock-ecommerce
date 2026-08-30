import React from "react";
import { Truck, ShieldCheck, Wrench, Smartphone, ArrowRight, Zap, CheckCircle2, MapPin, Radio, Bell } from "lucide-react";
import NumberTicker from "./ui/NumberTicker";

export default function AppFeatureSection({ onOpenAppModal, onSelectCategory }) {
  return (
    <section className="my-10 sm:my-16 max-w-6xl mx-auto px-3 sm:px-4">
      {/* Luxurious Glassmorphic Card with Balanced 2-Column Grid */}
      <div className="glass-panel rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
        {/* Soft Red Liquid Ambient Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-red-500/10 via-rose-500/5 to-transparent rounded-full blur-[90px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Copy & Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            <div className="inline-flex items-center gap-2 glass-pill-red px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider font-heading">
              <Zap size={13} />
              <span>App Móvil MotoRock 2026</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#0f172a] leading-[1.05] tracking-tight font-heading">
              Diagnóstico, Repuestos Exactos y Despacho en Tiempo Real
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              La primera app móvil en Chile diseñada exclusivamente para motociclistas. Guarda tu moto en el Garage Virtual, recibe alertas de mantención, consulta por audio a nuestro Asistente Mecánico y sigue el camión de Starken en vivo hasta tu casa.
            </p>

            {/* Metrics Badges */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-1">
              <div className="glass-pill p-3 sm:p-4 rounded-2xl text-center shadow-sm">
                <span className="text-lg sm:text-2xl font-black text-[#e60000] block font-heading">
                  <NumberTicker value={726} prefix="+" />
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Repuestos</span>
              </div>
              <div className="glass-pill p-3 sm:p-4 rounded-2xl text-center shadow-sm">
                <span className="text-lg sm:text-2xl font-black text-[#00bb76] block font-heading">
                  <NumberTicker value={100} suffix="%" />
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Garantía</span>
              </div>
              <div className="glass-pill p-3 sm:p-4 rounded-2xl text-center shadow-sm">
                <span className="text-lg sm:text-2xl font-black text-[#0f172a] block font-heading">
                  <NumberTicker value={2} suffix="h" />
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-wider">Retiro Talca</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAppModal}
                className="bg-[#e60000] hover:bg-[#cc0000] text-white px-6 sm:px-7 py-3 rounded-full font-extrabold text-xs shadow-racing flex items-center gap-2 transition-all cursor-pointer font-heading"
              >
                <Smartphone size={15} />
                <span>Instalar App Gratis</span>
              </button>
              <button
                onClick={() => onSelectCategory("47")}
                className="glass-pill hover:bg-white text-[#0f172a] px-5 sm:px-6 py-3 rounded-full font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Explorar Repuestos</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Right Column: Live App Preview Feature Card (5 Cols) — Perfectly fills the right side */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Feature 1: Starken Live Route Card */}
            <div className="bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-[24px] border border-white shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00bb76] animate-ping" />
                  <span className="text-xs font-black text-[#0f172a] font-heading">Rastreo GPS en Tiempo Real</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded-full">
                  Starken #STK-882194
                </span>
              </div>

              {/* Progress Stepper */}
              <div className="space-y-1.5 pt-1">
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#e60000] rounded-full w-[82%]" />
                </div>
                <div className="flex justify-between text-[9px] text-slate-500 font-bold">
                  <span>Bodega Talca</span>
                  <span className="text-[#e60000]">En Reparto Móvil</span>
                  <span>Tu Domicilio</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 text-slate-600 border-t border-slate-100">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-[#e60000]" /> Llegada estimada: Hoy 18:30 hrs</span>
                <span className="text-[#00bb76] font-bold">✓ Asegurado</span>
              </div>
            </div>

            {/* Feature 2: Voice Mechanic Diagnostic Card */}
            <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white p-4 sm:p-5 rounded-[24px] shadow-lg flex items-center justify-between gap-3">
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-1.5">
                  <Radio size={12} className="text-[#e60000] animate-pulse" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#e60000] font-heading">
                    IA Asistente Mecánico
                  </span>
                </div>
                <h5 className="text-xs font-bold text-white truncate font-heading">¿Qué repuesto necesita tu moto?</h5>
                <p className="text-[10px] text-slate-300">Habla o escribe y filtra por modelo exacto.</p>
              </div>

              <button
                onClick={onOpenAppModal}
                className="bg-[#e60000] hover:bg-[#cc0000] text-white px-3.5 py-2 rounded-full text-[10px] font-bold flex-shrink-0 shadow-sm transition-colors"
              >
                Probar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
