import React from "react";
import { Truck, ShieldCheck, Wrench, Smartphone, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import NumberTicker from "./ui/NumberTicker";

export default function AppFeatureSection({ onOpenAppModal, onSelectCategory }) {
  return (
    <section className="my-16 max-w-6xl mx-auto px-4">
      {/* Luxurious Glassmorphic Card with Soft Atmosphere */}
      <div className="glass-panel rounded-[36px] p-8 sm:p-14 relative overflow-hidden border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
        {/* Soft Red Liquid Ambient Flare in Background */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-red-500/10 via-rose-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2 glass-pill-red px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Zap size={13} />
            <span>App Móvil MotoRock 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0f172a] leading-[1.05] tracking-tight font-heading">
            Diagnóstico, Repuestos Exactos y Despacho en Tiempo Real
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            La primera app móvil en Chile diseñada exclusivamente para motociclistas. Guarda tu moto en el Garage Virtual, recibe alertas de mantención, consulta por audio a nuestro Asistente Mecánico y sigue el camión de Starken en vivo hasta tu casa.
          </p>

          {/* Modern Glass Metric Badges */}
          <div className="grid grid-cols-3 gap-3.5 pt-2">
            <div className="glass-pill p-4 rounded-2xl text-center shadow-sm">
              <span className="text-xl sm:text-2xl font-black text-[#e60000] block font-heading">
                <NumberTicker value={726} prefix="+" />
              </span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Repuestos Reales</span>
            </div>
            <div className="glass-pill p-4 rounded-2xl text-center shadow-sm">
              <span className="text-xl sm:text-2xl font-black text-[#00bb76] block font-heading">
                <NumberTicker value={100} suffix="%" />
              </span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Garantía Calce</span>
            </div>
            <div className="glass-pill p-4 rounded-2xl text-center shadow-sm">
              <span className="text-xl sm:text-2xl font-black text-[#0f172a] block font-heading">
                <NumberTicker value={2} suffix="h" />
              </span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Retiro en Talca</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onOpenAppModal}
              className="bg-[#e60000] hover:bg-[#cc0000] text-white px-7 py-3.5 rounded-full font-extrabold text-xs shadow-racing flex items-center gap-2 transition-all cursor-pointer"
            >
              <Smartphone size={15} />
              <span>Instalar App Gratis</span>
            </button>
            <button
              onClick={() => onSelectCategory("47")}
              className="glass-pill hover:bg-white text-[#0f172a] px-6 py-3.5 rounded-full font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Explorar Repuestos</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
