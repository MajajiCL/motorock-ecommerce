import React from "react";
import { Truck, ShieldCheck, Wrench, Smartphone, ArrowRight, CheckCircle2, Clock } from "lucide-react";

export default function AppFeatureSection({ onOpenAppModal, onSelectCategory }) {
  return (
    <section className="my-16 bg-white rounded-[32px] p-8 sm:p-12 shadow-motorock border border-[#e4e4e7]">
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
        <span className="inline-block bg-red-50 text-[#e60000] font-bold text-xs px-4 py-1.5 rounded-full border border-red-100 uppercase tracking-wider">
          Ecosistema MotoRock App 2026
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#121214] tracking-tight leading-tight">
          La máxima efectividad de servicio para ti y tu motocicleta
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto">
          Diseñado para eliminar dudas de compatibilidad, acelerar los tiempos de despacho y darte control total desde tu teléfono.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pilar 1 */}
        <div className="bg-[#f8f9fa] rounded-[28px] p-7 flex flex-col justify-between border border-[#e4e4e7] hover:bg-white hover:shadow-motorock transition-all group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#e60000] flex items-center justify-center text-xl shadow-sm border border-[#e4e4e7]">
              🏍️
            </div>
            <h3 className="text-lg font-bold text-[#121214] group-hover:text-[#e60000] transition-colors">
              Garage de Compatibilidad Exacta
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Ingresa la marca y cilindrada de tu moto. La app filtra automáticamente el paso de cadena correcto (428/520), bujías, pastillas y viscosidad recomendada.
            </p>
          </div>

          <div className="pt-6 border-t border-zinc-200/60 flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#00bb76] flex items-center gap-1">
              <CheckCircle2 size={13} /> 100% Sin Errores
            </span>
            <span className="text-xs font-bold text-[#e60000] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
              Configurar <ArrowRight size={13} />
            </span>
          </div>
        </div>

        {/* Pilar 2 */}
        <div className="bg-[#f8f9fa] rounded-[28px] p-7 flex flex-col justify-between border border-[#e4e4e7] hover:bg-white hover:shadow-motorock transition-all group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#00bb76] flex items-center justify-center text-xl shadow-sm border border-[#e4e4e7]">
              <Truck size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#121214] group-hover:text-[#e60000] transition-colors">
              Despacho Express & Tracking GPS
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Envíos diarios por Starken y Chilexpress a todo Chile. Monitorea el estado de tu encomienda en tiempo real con notificaciones push directo a tu móvil.
            </p>
          </div>

          <div className="pt-6 border-t border-zinc-200/60 flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#00bb76] flex items-center gap-1">
              <CheckCircle2 size={13} /> 24-48h a Regiones
            </span>
            <span className="text-xs font-bold text-[#e60000] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
              Ver Tiempos <ArrowRight size={13} />
            </span>
          </div>
        </div>

        {/* Pilar 3 */}
        <div className="bg-[#f8f9fa] rounded-[28px] p-7 flex flex-col justify-between border border-[#e4e4e7] hover:bg-white hover:shadow-motorock transition-all group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#e60000] flex items-center justify-center text-xl shadow-sm border border-[#e4e4e7]">
              <Wrench size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#121214] group-hover:text-[#e60000] transition-colors">
              Retiro en 2h & Taller en Talca
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Compra en la app y retira listo en nuestro local de Av. 2 Sur 771-777. Agenda mantención o instalación de repuestos con mecánicos especializados.
            </p>
          </div>

          <div className="pt-6 border-t border-zinc-200/60 flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#e60000] flex items-center gap-1">
              <Clock size={13} /> Listo en 2 Horas
            </span>
            <span className="text-xs font-bold text-[#e60000] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
              Ver Local <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </div>

      {/* Banner Descarga */}
      <div className="mt-12 p-8 bg-[#121214] text-white rounded-[28px] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-zinc-800">
        <div className="space-y-2 text-center lg:text-left">
          <span className="bg-[#e60000] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
            Disponible para iOS y Android
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Descarga la App MotoRock y obtén despacho prioritario
          </h3>
          <p className="text-xs text-zinc-400 max-w-lg">
            Guarda tu moto en el garage virtual, recibe cupones de descuento exclusivos y gestiona tus pedidos desde un solo lugar.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
          <button
            onClick={onOpenAppModal}
            className="bg-[#e60000] hover:bg-[#cc0000] text-white px-7 py-3.5 rounded-full text-xs font-bold shadow-motorock-red transition-all cursor-pointer flex items-center gap-2"
          >
            <Smartphone size={15} />
            <span>Descargar Gratis</span>
          </button>
        </div>
      </div>
    </section>
  );
}
