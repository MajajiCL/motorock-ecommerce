import React from "react";
import { MapPin, Clock, Phone, Wrench, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";

export default function StoreLocation() {
  return (
    <section className="my-12 bg-gradient-to-br from-[#141724] to-[#0f121a] border border-[#232a3d] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Store Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Sucursal Física & Taller
            </span>
            <span className="text-gray-400 text-xs font-semibold">Talca, Región del Maule</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
            Ven a Conocernos a Nuestro <span className="text-[#FF5500]">Local & Taller</span> en Talca
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
            Encuentra todo el equipamiento, cascos, indumentaria y servicio técnico especializado para tu moto en pleno centro de Talca. Retira tus compras online en 2 horas hábiles o agenda mantención.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Address */}
            <div className="bg-[#191e2c] border border-[#262f44] p-4 rounded-2xl space-y-1.5">
              <div className="flex items-center gap-2 text-[#FF5500] font-bold">
                <MapPin size={16} />
                <span>Dirección Central</span>
              </div>
              <p className="text-gray-200 font-semibold">Avenida 2 Sur (entre 1 Ote y 1 Pte)</p>
              <p className="text-gray-400">Locales 771 y 777, Talca</p>
            </div>

            {/* Hours */}
            <div className="bg-[#191e2c] border border-[#262f44] p-4 rounded-2xl space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Clock size={16} />
                <span>Horarios de Atención</span>
              </div>
              <p className="text-gray-200">Lun, Jue, Vie: 09:30 a 18:30 hrs</p>
              <p className="text-gray-400">Mar, Mié: 09:30 - 17:30 | Sáb: 10:00 - 14:00</p>
            </div>
          </div>

          {/* Quick Action Contacts */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://wa.me/56976967438?text=Hola%20MotoRock,%20quiero%20agendar%20servicio%20técnico%20o%20consultar%20repuestos"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#FF5500] hover:bg-[#E04800] text-white px-5 py-3 rounded-xl font-bold text-xs shadow-lg shadow-[#FF5500]/25 transition-all"
            >
              <Wrench size={16} />
              <span>Agendar Taller / Repuestos (+56 9 7696 7438)</span>
            </a>

            <a
              href="https://wa.me/56956105413?text=Hola%20MotoRock,%20quiero%20consultar%20por%20indumentaria%20y%20cascos"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#1b2230] hover:bg-[#252e42] text-gray-200 border border-[#2f3952] px-5 py-3 rounded-xl font-semibold text-xs transition-all"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>Indumentaria & Cascos</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Map Card */}
        <div className="lg:col-span-5 bg-[#171b26] border border-[#283146] rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase tracking-wider">Ubicación Satelital</span>
            <a
              href="https://maps.google.com/?q=Avenida+2+Sur+771+Talca+Chile"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#FF5500] hover:underline flex items-center gap-1 font-semibold"
            >
              Ver en Google Maps <ExternalLink size={12} />
            </a>
          </div>

          <div className="aspect-[4/3] bg-[#0d1017] rounded-xl border border-[#22283a] flex flex-col items-center justify-center p-6 text-center space-y-3 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-full bg-[#FF5500]/20 text-[#FF5500] flex items-center justify-center text-2xl border border-[#FF5500]/40 group-hover:scale-110 transition-transform">
              📍
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">MotoRock Talca</h4>
              <p className="text-xs text-gray-400 mt-0.5">Av. 2 Sur 771 y 777, Talca</p>
              <span className="inline-block mt-2 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                ● Abierto en Horario Comercial
              </span>
            </div>
          </div>

          <div className="p-3 bg-[#11141c] rounded-xl border border-[#202636] text-[11px] text-gray-400 flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#FF5500] flex-shrink-0" />
            <span>Servicio técnico multimarca garantizado: Honda, Yamaha, Suzuki, Kawasaki, KTM, Bajaj.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
