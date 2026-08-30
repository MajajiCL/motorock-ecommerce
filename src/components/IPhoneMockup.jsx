import React, { useState, useEffect } from "react";
import { Truck, Shield, Mic, CheckCircle2, ChevronRight, Sparkles, Navigation, Bell } from "lucide-react";
import AnimatedList from "./ui/AnimatedList";
import NumberTicker from "./ui/NumberTicker";

export default function IPhoneMockup({ onSelectCategory, onOpenGarage }) {
  const [activeTab, setActiveTab] = useState("delivery"); // 'delivery' | 'garage' | 'deals'
  const [waveHeight, setWaveHeight] = useState([10, 16, 8, 20, 12]);

  // Audio wave animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveHeight([
        Math.floor(6 + Math.random() * 16),
        Math.floor(10 + Math.random() * 18),
        Math.floor(6 + Math.random() * 14),
        Math.floor(12 + Math.random() * 20),
        Math.floor(8 + Math.random() * 16),
      ]);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto select-none max-w-full overflow-hidden sm:overflow-visible">
      {/* External Physical Buttons on Chassis (Visible only on sm+ to prevent mobile viewport clipping) */}
      <div className="hidden sm:block absolute -left-[3px] top-[95px] w-[3px] h-[24px] bg-[#27272a] rounded-l-[2px] shadow-sm z-0" />
      <div className="hidden sm:block absolute -left-[3px] top-[135px] w-[3px] h-[46px] bg-[#27272a] rounded-l-[2px] shadow-sm z-0" />
      <div className="hidden sm:block absolute -left-[3px] top-[195px] w-[3px] h-[46px] bg-[#27272a] rounded-l-[2px] shadow-sm z-0" />
      <div className="hidden sm:block absolute -right-[3px] top-[145px] w-[3px] h-[60px] bg-[#27272a] rounded-r-[2px] shadow-sm z-0" />

      {/* Titanium Black Frame — Responsive Width */}
      <div className="w-[290px] xs:w-[315px] sm:w-[335px] rounded-[44px] sm:rounded-[52px] p-[7px] sm:p-[9px] bg-gradient-to-b from-[#27272a] via-[#18181b] to-[#09090b] shadow-[0_25px_60px_-15px_rgba(230,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.15)_inset,0_12px_32px_rgba(0,0,0,0.3)] relative z-10 mx-auto">
        {/* Inner Ceramic Bezel */}
        <div className="rounded-[38px] sm:rounded-[44px] p-[5px] sm:p-[6px] bg-[#000000] shadow-[0_0_0_1px_rgba(0,0,0,0.95)] relative overflow-hidden">
          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] pointer-events-none z-30 rounded-[36px]" />

          {/* Screen Content */}
          <div className="bg-[#f8f9fc] rounded-[34px] sm:rounded-[38px] overflow-hidden flex flex-col justify-between min-h-[520px] sm:min-h-[580px] relative z-10 border border-slate-200">
            {/* Status Bar */}
            <div className="pt-2.5 sm:pt-3 px-4 sm:px-6 flex items-center justify-between text-[11px] font-bold text-[#0f172a] z-20">
              <span className="tracking-tight font-heading">9:41</span>

              {/* Dynamic Island */}
              <div className="w-[88px] sm:w-[98px] h-[24px] sm:h-[26px] bg-[#000000] rounded-full flex items-center justify-between px-2 sm:px-2.5 shadow-md">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#e60000] animate-pulse" />
                  <span className="text-[8px] sm:text-[9px] font-bold text-white tracking-tight font-heading">MotoRock</span>
                </div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#18181b] ring-1 ring-white/20 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#e60000]" />
                </div>
              </div>

              {/* 5G & Battery */}
              <div className="flex items-center gap-1 sm:gap-1.5 text-xs text-[#0f172a]">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold">5G</span>
                <div className="w-4 sm:w-5 h-2.5 rounded-[4px] border border-[#0f172a] p-0.5 flex items-center">
                  <div className="h-full w-full bg-[#00bb76] rounded-[2px]" />
                </div>
              </div>
            </div>

            {/* In-App Screen Content */}
            <div className="p-3 sm:p-4 space-y-2.5 sm:space-y-3 flex-1 flex flex-col justify-between">
              {/* App Header */}
              <div className="flex items-center justify-between text-xs pt-0.5">
                <div>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-bold tracking-wider">Tu Garage & Envíos</span>
                  <h4 className="text-xs sm:text-sm font-black text-[#0f172a] leading-tight font-heading">MotoRock App 2026</h4>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0f172a] shadow-sm">
                  <Bell size={12} className="text-[#e60000]" />
                </div>
              </div>

              {/* Segmented Tabs */}
              <div className="flex items-center p-0.5 sm:p-1 bg-white rounded-full border border-slate-200 shadow-sm text-[10px] sm:text-[11px] font-bold text-[#0f172a]">
                <button
                  onClick={() => setActiveTab("delivery")}
                  className={`flex-1 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "delivery"
                      ? "bg-[#e60000] text-white shadow-racing"
                      : "text-slate-500 hover:text-[#0f172a]"
                  }`}
                >
                  🚚 Despacho
                </button>
                <button
                  onClick={() => setActiveTab("garage")}
                  className={`flex-1 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "garage"
                      ? "bg-[#e60000] text-white shadow-racing"
                      : "text-slate-500 hover:text-[#0f172a]"
                  }`}
                >
                  🏍️ Mi Moto
                </button>
                <button
                  onClick={() => setActiveTab("deals")}
                  className={`flex-1 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "deals"
                      ? "bg-[#e60000] text-white shadow-racing"
                      : "text-slate-500 hover:text-[#0f172a]"
                  }`}
                >
                  🔥 Ofertas
                </button>
              </div>

              {/* Tab Panels */}
              <div className="space-y-2 sm:space-y-2.5 flex-1">
                {activeTab === "delivery" && (
                  <div className="bg-white p-3 sm:p-3.5 rounded-[20px] sm:rounded-[22px] border border-slate-200 shadow-sm space-y-2 animate-in fade-in duration-200 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] sm:text-[10px] font-extrabold text-[#e60000] uppercase tracking-wider flex items-center gap-1 bg-red-50 px-2 py-0.5 rounded-full font-heading">
                        <Truck size={10} /> Starken Express
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 font-bold">#STK-882194</span>
                    </div>

                    <div>
                      <h5 className="text-[11px] sm:text-xs font-bold text-[#0f172a] font-heading">En camino a tu domicilio</h5>
                      <p className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">Entrega estimada: Hoy antes de 18:30 hrs</p>
                    </div>

                    <div className="space-y-1">
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#e60000] rounded-full transition-all duration-500 w-[78%]" />
                      </div>
                      <div className="flex justify-between text-[8px] sm:text-[9px] text-slate-400 font-semibold">
                        <span>Centro Talca</span>
                        <span className="text-[#e60000] font-bold">En Reparto</span>
                        <span>Destino</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "garage" && (
                  <div
                    onClick={onOpenGarage}
                    className="bg-white p-3 sm:p-3.5 rounded-[20px] sm:rounded-[22px] border border-slate-200 shadow-sm space-y-2 animate-in fade-in duration-200 cursor-pointer hover:border-red-300 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] sm:text-[10px] font-extrabold text-[#e60000] uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded-full font-heading">
                        Garage Activo
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-[#00bb76] font-bold">✓ 100% Calce</span>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-red-50 text-[#e60000] flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0">
                        🏍️
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-[11px] sm:text-xs font-bold text-[#0f172a] truncate font-heading">Yamaha MT-03 / R3</h5>
                        <p className="text-[9px] sm:text-[10px] text-slate-500">Paso 520 • Motul 10W-40 (2.0L)</p>
                      </div>
                    </div>

                    <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px] sm:text-[10px] text-[#e60000] font-bold font-heading">
                      <span>Ver repuestos compatibles</span>
                      <ChevronRight size={12} />
                    </div>
                  </div>
                )}

                {/* Real Product Card 1 */}
                <div
                  onClick={() => onSelectCategory("128")}
                  className="bg-white p-2.5 sm:p-3 rounded-[18px] sm:rounded-[22px] border border-slate-200 shadow-sm flex items-center gap-2.5 sm:gap-3 cursor-pointer hover:bg-slate-50 transition-colors text-left"
                >
                  <img
                    src="https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg"
                    alt="Casco HJC Dakar"
                    className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-xl bg-slate-50 p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[8px] sm:text-[9px] font-extrabold text-[#00bb76] uppercase tracking-wider block font-heading">
                      ECE 22.06
                    </span>
                    <h6 className="text-[10px] sm:text-[11px] font-bold text-[#0f172a] truncate font-heading">Casco HJC RPH 60 Dakar</h6>
                    <span className="text-[11px] sm:text-xs font-black text-[#e60000] block font-heading">$599.900 CLP</span>
                  </div>
                  <button className="px-2.5 sm:px-3 py-1 bg-[#0f172a] hover:bg-[#e60000] text-white rounded-full text-[9px] sm:text-[10px] font-bold shadow-sm flex-shrink-0 transition-colors">
                    Ver
                  </button>
                </div>

                {/* Real Product Card 2 */}
                <div
                  onClick={() => onSelectCategory("36")}
                  className="bg-white p-2.5 sm:p-3 rounded-[18px] sm:rounded-[22px] border border-slate-200 shadow-sm flex items-center gap-2.5 sm:gap-3 cursor-pointer hover:bg-slate-50 transition-colors text-left"
                >
                  <img
                    src="https://motorock.cl/wp-content/uploads/2026/06/MOTUL-7100-10W-40.png"
                    alt="Motul 7100 10W-40"
                    className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-xl bg-slate-50 p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[8px] sm:text-[9px] font-extrabold text-[#00bb76] uppercase tracking-wider block font-heading">
                      100% Sintético Ester
                    </span>
                    <h6 className="text-[10px] sm:text-[11px] font-bold text-[#0f172a] truncate font-heading">Motul 7100 10W-40 4T</h6>
                    <span className="text-[11px] sm:text-xs font-black text-[#e60000] block font-heading">$16.900 CLP</span>
                  </div>
                  <button className="px-2.5 sm:px-3 py-1 bg-[#0f172a] hover:bg-[#e60000] text-white rounded-full text-[9px] sm:text-[10px] font-bold shadow-sm flex-shrink-0 transition-colors">
                    Ver
                  </button>
                </div>
              </div>

              {/* Assistant Voice Bar */}
              <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#e60000] p-2 sm:p-2.5 rounded-full flex items-center justify-between text-white shadow-md cursor-pointer hover:brightness-110 transition-all">
                <div className="flex items-center gap-1.5 pl-2 min-w-0">
                  <Sparkles size={11} className="text-[#e60000] flex-shrink-0 animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] font-bold text-white truncate font-heading">
                    ¿Qué repuesto necesitas?
                  </span>
                </div>
                <div className="flex items-center gap-0.5 bg-white/20 px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0">
                  {waveHeight.map((h, i) => (
                    <div
                      key={i}
                      className="w-[1.5px] sm:w-[2px] bg-white rounded-full transition-all duration-300"
                      style={{ height: `${Math.max(4, h * 0.75)}px` }}
                    />
                  ))}
                  <Mic size={10} className="text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="pb-1.5 sm:pb-2 pt-0.5 flex justify-center">
              <div className="w-24 sm:w-28 h-1 bg-slate-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
