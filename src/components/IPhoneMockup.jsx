import React, { useState, useEffect } from "react";
import { Truck, Shield, Mic, CheckCircle2, ChevronRight, Sparkles, Navigation, Bell } from "lucide-react";
import AnimatedList from "./ui/AnimatedList";
import NumberTicker from "./ui/NumberTicker";

const LIVE_EVENTS = [
  {
    id: "e1",
    icon: "📦",
    title: "Orden #STK-882194 despachada",
    time: "Hace 1 min",
    desc: "En ruta con Starken Express a Talca",
    badge: "En Camino"
  },
  {
    id: "e2",
    icon: "🪖",
    title: "Nuevo Casco HJC Dakar en stock",
    time: "Hace 3 min",
    desc: "Tallas M y L listas para retiro en Talca",
    badge: "Stock Listo"
  },
  {
    id: "e3",
    icon: "⭐",
    title: "Reseña 5★ de Claudio V.",
    time: "Hace 5 min",
    desc: "Retiro de kit D.I.D en 2h en local 2 Sur",
    badge: "Verificado"
  }
];

export default function IPhoneMockup({ onSelectCategory, onOpenGarage }) {
  const [activeTab, setActiveTab] = useState("delivery"); // 'delivery' | 'garage' | 'deals'
  const [waveHeight, setWaveHeight] = useState([10, 16, 8, 20, 12]);

  // Audio wave animation for AI Mechanic Voice Bar
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
    <div className="relative mx-auto select-none">
      {/* External Physical Buttons on Chassis */}
      {/* Action Button (Left Top) */}
      <div className="absolute -left-[3px] top-[95px] w-[3px] h-[24px] bg-[#94a3b8] rounded-l-[2px] shadow-sm z-0" />
      {/* Volume Up (Left Middle) */}
      <div className="absolute -left-[3px] top-[135px] w-[3px] h-[46px] bg-[#94a3b8] rounded-l-[2px] shadow-sm z-0" />
      {/* Volume Down (Left Bottom) */}
      <div className="absolute -left-[3px] top-[195px] w-[3px] h-[46px] bg-[#94a3b8] rounded-l-[2px] shadow-sm z-0" />
      {/* Power / Siri Button (Right) */}
      <div className="absolute -right-[3px] top-[145px] w-[3px] h-[60px] bg-[#94a3b8] rounded-r-[2px] shadow-sm z-0" />

      {/* Titanium Natural Metallic Outer Chassis (iPhone 16 Pro) */}
      <div className="w-[310px] sm:w-[335px] rounded-[52px] p-[9px] bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] shadow-[0_25px_60px_-15px_rgba(21,21,129,0.18),0_0_0_1px_rgba(255,255,255,0.8)_inset,0_12px_32px_rgba(0,0,0,0.1)] relative z-10">
        {/* Inner Ceramic Shield Bezel */}
        <div className="rounded-[44px] p-[6px] bg-[#000000] shadow-[0_0_0_1px_rgba(0,0,0,0.95)] relative overflow-hidden">
          {/* Subtle Screen Glass Glare Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none z-30 rounded-[40px]" />

          {/* Super Retina XDR OLED Display Screen */}
          <div className="bg-[#f6f6fa] rounded-[38px] overflow-hidden flex flex-col justify-between min-h-[580px] relative z-10 border border-slate-200/60">
            {/* Status Bar */}
            <div className="pt-3 px-6 flex items-center justify-between text-[11px] font-semibold text-[#151581] z-20">
              <span className="font-bold tracking-tight">9:41</span>

              {/* Dynamic Island Pill */}
              <div className="w-[98px] h-[26px] bg-[#000000] rounded-full flex items-center justify-between px-2.5 shadow-md transition-all hover:scale-105">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00bb76] animate-pulse" />
                  <span className="text-[9px] font-bold text-white tracking-tight">MotoRock</span>
                </div>
                {/* Camera Lens */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#1e293b] ring-1 ring-white/20 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                </div>
              </div>

              {/* 5G & Battery Icons */}
              <div className="flex items-center gap-1.5 text-xs text-[#151581]">
                <span className="text-[10px] font-bold font-mono">5G</span>
                <div className="w-5 h-2.5 rounded-[4px] border border-[#151581] p-0.5 flex items-center">
                  <div className="h-full w-full bg-[#00bb76] rounded-[2px]" />
                </div>
              </div>
            </div>

            {/* In-App Screen Layout */}
            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
              {/* App Header */}
              <div className="flex items-center justify-between text-xs pt-1">
                <div>
                  <span className="text-[10px] text-[#a1a1cd] uppercase font-semibold tracking-wider">Tu Garage & Envíos</span>
                  <h4 className="text-sm font-bold text-[#151581] leading-tight">MotoRock App 2026</h4>
                </div>
                <div className="w-7 h-7 rounded-full bg-white border border-[#e5e5eb] flex items-center justify-center text-[#151581] shadow-sm">
                  <Bell size={13} />
                </div>
              </div>

              {/* Interactive Segmented Tabs */}
              <div className="flex items-center p-1 bg-white rounded-full border border-[#e5e5eb] shadow-sm text-[11px] font-semibold text-[#151581]">
                <button
                  onClick={() => setActiveTab("delivery")}
                  className={`flex-1 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "delivery"
                      ? "bg-[#151581] text-white shadow-sm"
                      : "text-[#a1a1cd] hover:text-[#151581]"
                  }`}
                >
                  🚚 Despacho
                </button>
                <button
                  onClick={() => setActiveTab("garage")}
                  className={`flex-1 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "garage"
                      ? "bg-[#151581] text-white shadow-sm"
                      : "text-[#a1a1cd] hover:text-[#151581]"
                  }`}
                >
                  🏍️ Mi Moto
                </button>
                <button
                  onClick={() => setActiveTab("deals")}
                  className={`flex-1 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === "deals"
                      ? "bg-[#151581] text-white shadow-sm"
                      : "text-[#a1a1cd] hover:text-[#151581]"
                  }`}
                >
                  🔥 Ofertas
                </button>
              </div>

              {/* Tab Content Panels */}
              <div className="space-y-2.5 flex-1">
                {/* 1. Live Starken Delivery Tracker */}
                {activeTab === "delivery" && (
                  <div className="bg-white p-3.5 rounded-[22px] border border-[#e5e5eb] shadow-sm space-y-2.5 animate-in fade-in duration-200 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#00bb76] uppercase tracking-wider flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        <Truck size={11} /> Starken Express
                      </span>
                      <span className="text-[10px] font-mono text-[#a1a1cd] font-bold">#STK-882194</span>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-[#151581]">En camino a tu domicilio</h5>
                      <p className="text-[10px] text-[#a1a1cd] mt-0.5">Entrega estimada: Hoy antes de 18:30 hrs</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00bb76] rounded-full transition-all duration-500 w-[78%]" />
                      </div>
                      <div className="flex justify-between text-[9px] text-[#a1a1cd]">
                        <span>Centro Talca</span>
                        <span className="text-[#00bb76] font-bold">En Reparto</span>
                        <span>Destino</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Virtual Garage Bike Selector */}
                {activeTab === "garage" && (
                  <div
                    onClick={onOpenGarage}
                    className="bg-white p-3.5 rounded-[22px] border border-[#e5e5eb] shadow-sm space-y-2 animate-in fade-in duration-200 cursor-pointer hover:border-indigo-300 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#5465ff] uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-full">
                        Garage Activo
                      </span>
                      <span className="text-[10px] text-[#00bb76] font-bold">✓ 100% Calce</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-[#151581] flex items-center justify-center text-lg font-bold flex-shrink-0">
                        🏍️
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs font-bold text-[#151581] truncate">Yamaha MT-03 / R3</h5>
                        <p className="text-[10px] text-[#a1a1cd]">Paso 520 • Motul 10W-40 (2.0L)</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-[#151581] font-semibold">
                      <span>Ver repuestos compatibles</span>
                      <ChevronRight size={13} className="text-[#5465ff]" />
                    </div>
                  </div>
                )}

                {/* 3. Real Product Spotlight Card (HJC Dakar Helmet) */}
                <div
                  onClick={() => onSelectCategory("128")}
                  className="bg-white p-3 rounded-[22px] border border-[#e5e5eb] shadow-sm flex items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors text-left"
                >
                  <img
                    src="https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg"
                    alt="Casco HJC RPH 60 Dakar"
                    className="w-11 h-11 object-contain rounded-xl bg-[#f6f6fa] p-1 flex-shrink-0"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/100x100/ffffff/333?text=HJC";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-bold text-[#00bb76] uppercase tracking-wider block">
                      Homologado ECE 22.06
                    </span>
                    <h6 className="text-[11px] font-bold text-[#151581] truncate">Casco HJC RPH 60 Dakar</h6>
                    <span className="text-xs font-bold text-[#151581] block mt-0.5">$599.900 CLP</span>
                  </div>
                  <button className="px-3 py-1.5 bg-[#151581] text-white rounded-full text-[10px] font-bold shadow-sm flex-shrink-0">
                    Ver
                  </button>
                </div>

                {/* 4. Second Product Spotlight Card (Motul 7100 10W-40) */}
                <div
                  onClick={() => onSelectCategory("36")}
                  className="bg-white p-3 rounded-[22px] border border-[#e5e5eb] shadow-sm flex items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors text-left"
                >
                  <img
                    src="https://motorock.cl/wp-content/uploads/2026/06/MOTUL-7100-10W-40.png"
                    alt="Motul 7100 10W-40"
                    className="w-11 h-11 object-contain rounded-xl bg-[#f6f6fa] p-1 flex-shrink-0"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/100x100/ffffff/333?text=Motul";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-bold text-[#00bb76] uppercase tracking-wider block">
                      100% Sintético Ester
                    </span>
                    <h6 className="text-[11px] font-bold text-[#151581] truncate">Motul 7100 10W-40 4T</h6>
                    <span className="text-xs font-bold text-[#151581] block mt-0.5">$16.900 CLP</span>
                  </div>
                  <button className="px-3 py-1.5 bg-[#151581] text-white rounded-full text-[10px] font-bold shadow-sm flex-shrink-0">
                    Ver
                  </button>
                </div>
              </div>

              {/* Dynamic Liquid Gradient AI Mechanic Assistant Bar */}
              <div className="gradient-brand p-2.5 rounded-full flex items-center justify-between text-white shadow-md cursor-pointer hover:brightness-105 transition-all">
                <div className="flex items-center gap-2 pl-2 min-w-0">
                  <Sparkles size={13} className="text-white flex-shrink-0 animate-pulse" />
                  <span className="text-[10px] font-medium text-white/95 truncate">
                    ¿Qué repuesto necesita tu moto?
                  </span>
                </div>
                {/* Real Animated Waveform Audio Indicator */}
                <div className="flex items-center gap-0.5 bg-white/20 px-2 py-1 rounded-full flex-shrink-0">
                  {waveHeight.map((h, i) => (
                    <div
                      key={i}
                      className="w-[2px] bg-white rounded-full transition-all duration-300"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                  <Mic size={11} className="text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Home Indicator Bar */}
            <div className="pb-2 pt-1 flex justify-center">
              <div className="w-28 h-1 bg-slate-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
