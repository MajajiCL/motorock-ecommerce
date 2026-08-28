import React from "react";
import { Truck, ShieldCheck, Clock, ArrowRight, Smartphone, Sparkles, Mic, CheckCircle2 } from "lucide-react";

export default function HeroBanner({ onSelectCategory, onOpenGarage, onOpenAppModal }) {
  return (
    <div className="pt-6 pb-12 flex flex-col items-center text-center">
      {/* 1. Badge de Confianza */}
      <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-[#e5e5eb] shadow-sm mb-6 animate-in fade-in duration-300">
        <Sparkles size={13} className="text-[#5465ff]" />
        <span className="text-xs font-normal text-[#151581]">
          MotoRock App 2026 • Despacho Express en 24h & Retiro en 2h en Talca
        </span>
      </div>

      {/* 2. Titular Display */}
      <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-normal text-[#151581] leading-[0.95] tracking-[-0.04em] max-w-3xl mx-auto">
        Todo para tu moto en tu bolsillo.
        <br />
        <span className="text-[#151581]/90">Repuestos exactos y despacho inmediato.</span>
      </h1>

      {/* 3. Subtítulo */}
      <p className="text-base sm:text-lg text-[#a1a1cd] max-w-xl mx-auto mt-5 leading-relaxed font-normal">
        Selecciona tu modelo de moto, compra con 1-click y sigue el delivery en tiempo real por Starken o retira en 2 horas en nuestro local de Talca.
      </p>

      {/* 4. Botones de Descarga */}
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

      {/* 5. Mockup iPhone en Vivo con Fotos Reales en Alta Resolución */}
      <div className="mt-14 w-full max-w-[340px] relative">
        <div className="bg-white rounded-[44px] p-4 shadow-lovi border border-[#e5e5eb] relative overflow-hidden">
          {/* Dynamic Island */}
          <div className="w-24 h-4 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          </div>

          {/* Pantalla */}
          <div className="bg-[#f6f6fa] rounded-[32px] p-4 space-y-3 text-left border border-slate-100">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#151581] pb-1 border-b border-[#e5e5eb]">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00bb76] animate-pulse" />
                MotoRock Express
              </span>
              <span className="text-[#a1a1cd]">Talca, Chile</span>
            </div>

            {/* Widget Tracking */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#e5e5eb] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#00bb76] uppercase tracking-wider flex items-center gap-1">
                  <Truck size={12} /> Despacho en Ruta
                </span>
                <span className="text-[10px] font-mono text-[#a1a1cd]">STK-882194</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#151581]">Starken Express • En Camino</h4>
                <p className="text-[10px] text-[#a1a1cd]">Entrega estimada: Hoy antes de las 18:00 hrs</p>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-[#00bb76] rounded-full" />
              </div>
            </div>

            {/* Widget Moto Activa */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#e5e5eb] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#151581] flex items-center justify-center text-sm font-bold">
                  🏍️
                </div>
                <div>
                  <h5 className="text-[11px] font-bold text-[#151581]">Yamaha MT-03 2024</h5>
                  <p className="text-[9px] text-[#00bb76] font-semibold">100% Repuestos Compatibles</p>
                </div>
              </div>
              <span className="text-[10px] text-[#151581] font-bold">Activo</span>
            </div>

            {/* Item con Foto en Alta Resolución */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#e5e5eb] flex items-center gap-2.5">
              <img
                src="https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg"
                alt="Casco HJC Dakar"
                className="w-10 h-10 object-contain rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h6 className="text-[10px] font-bold text-[#151581] truncate">Casco HJC RPH 60 Dakar</h6>
                <span className="text-[10px] font-bold text-[#151581]">$599.900 CLP</span>
              </div>
              <button
                onClick={() => onSelectCategory("128")}
                className="px-2.5 py-1 bg-[#151581] text-white rounded-full text-[9px] font-bold cursor-pointer"
              >
                Ver
              </button>
            </div>

            {/* Barra Gradiente de Voz y Búsqueda */}
            <div className="gradient-brand p-2.5 rounded-full flex items-center justify-between text-white shadow-sm cursor-pointer">
              <span className="text-[10px] font-medium text-white/95 truncate pl-2">
                Pregunta al mecánico MotoRock...
              </span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Mic size={11} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Strip de Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto w-full mt-12 text-left">
        <div className="bg-white p-5 rounded-[24px] shadow-sm border border-[#e5e5eb] space-y-1">
          <span className="text-[11px] font-bold text-[#00bb76] uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 size={13} /> 24 a 48 Horas
          </span>
          <h4 className="text-sm font-semibold text-[#151581]">Despacho Express a Todo Chile</h4>
          <p className="text-xs text-[#a1a1cd]">Envíos asegurados por Starken y Chilexpress directo a tu puerta.</p>
        </div>

        <div className="bg-white p-5 rounded-[24px] shadow-sm border border-[#e5e5eb] space-y-1">
          <span className="text-[11px] font-bold text-[#151581] uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 size={13} className="text-[#5465ff]" /> Cero Errores
          </span>
          <h4 className="text-sm font-semibold text-[#151581]">Garage y Compatibilidad Exacta</h4>
          <p className="text-xs text-[#a1a1cd]">Filtra por modelo y recibe la cadena, piñón y aceite correcto.</p>
        </div>

        <div className="bg-white p-5 rounded-[24px] shadow-sm border border-[#e5e5eb] space-y-1">
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
