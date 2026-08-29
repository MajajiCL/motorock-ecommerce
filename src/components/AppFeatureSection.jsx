import React from "react";
import { Truck, ShieldCheck, Wrench, Smartphone, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { CardSpotlight } from "./ui/CardSpotlight";
import NumberTicker from "./ui/NumberTicker";

export default function AppFeatureSection({ onOpenAppModal, onSelectCategory }) {
  return (
    <section className="my-14">
      <div className="bg-[#121214] text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden shadow-racing">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#e60000] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap size={13} />
            <span>App Móvil MotoRock 2026</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Diagnóstico, Repuestos Exactos y Despacho en Tiempo Real
          </h2>

          <p className="text-sm text-zinc-300 leading-relaxed font-normal">
            La primera app móvil en Chile diseñada para motociclistas. Guarda tu moto en el Garage Virtual, recibe alertas de mantención, consulta por audio a nuestro Asistente Mecánico y sigue el camión de Starken en vivo hasta tu casa.
          </p>

          {/* Metric Badges */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center">
              <span className="text-lg sm:text-2xl font-extrabold text-[#e60000] block">
                <NumberTicker value={726} prefix="+" />
              </span>
              <span className="text-[10px] text-zinc-300 uppercase font-semibold">Repuestos Reales</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center">
              <span className="text-lg sm:text-2xl font-extrabold text-[#00bb76] block">
                <NumberTicker value={100} suffix="%" />
              </span>
              <span className="text-[10px] text-zinc-300 uppercase font-semibold">Garantía Calce</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center">
              <span className="text-lg sm:text-2xl font-extrabold text-white block">
                <NumberTicker value={2} suffix="h" />
              </span>
              <span className="text-[10px] text-zinc-300 uppercase font-semibold">Retiro en Talca</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAppModal}
              className="bg-[#e60000] hover:bg-[#cc0000] text-white px-6 py-3 rounded-full font-bold text-xs shadow-racing flex items-center gap-2 transition-all cursor-pointer"
            >
              <Smartphone size={15} />
              <span>Instalar App Gratis</span>
            </button>
            <button
              onClick={() => onSelectCategory("47")}
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full font-bold text-xs border border-white/20 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Explorar Repuestos</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-[#e60000]/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
