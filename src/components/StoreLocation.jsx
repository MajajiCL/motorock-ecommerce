import React from "react";
import { MapPin, Clock, Phone, Wrench, MessageCircle, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

export default function StoreLocation() {
  return (
    <section className="my-14 rounded-3xl border border-white/10 bg-gradient-to-br from-[#121724] via-[#0b0e15] to-[#06080c] p-6 sm:p-12 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#FF5500]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF5500] text-black font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              SUCURSAL TALCA & TALLER PRO
            </span>
            <span className="text-gray-400 text-xs font-semibold">Regi?n del Maule, Chile</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight uppercase">
            Conoce Nuestro <span className="text-[#FF5500]">Showroom & Servicio T?cnico</span> en Talca
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed max-w-xl font-medium">
            Encuentra cascos de competici?n, indumentaria, repuestos y taller mec?nico especializado para tu motocicleta. Retira tus compras online en 2 horas h?biles o agenda mantenci?n preventiva.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Address */}
            <div className="glass-panel p-4 rounded-2xl space-y-1 border border-white/5">
              <div className="flex items-center gap-2 text-[#FF5500] font-black">
                <MapPin size={16} />
                <span>DIRECCI?N CENTRAL</span>
              </div>
              <p className="text-gray-200 font-bold">Avenida 2 Sur (entre 1 Ote y 1 Pte)</p>
              <p className="text-gray-400">Locales 771 y 777, Talca</p>
            </div>

            {/* Hours */}
            <div className="glass-panel p-4 rounded-2xl space-y-1 border border-white/5">
              <div className="flex items-center gap-2 text-amber-400 font-black">
                <Clock size={16} />
                <span>HORARIOS DE ATENCI?N</span>
              </div>
              <p className="text-gray-200 font-semibold">Lun, Jue, Vie: 09:30 a 18:30 hrs</p>
              <p className="text-gray-400">Mar, Mi?: 09:30 - 17:30 | S?b: 10:00 - 14:00</p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://wa.me/56976967438?text=Hola%20MotoRock,%20quiero%20agendar%20servicio%20t?cnico%20o%20consultar%20repuestos"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#FF5500] hover:bg-[#E04800] text-black font-black px-6 py-3.5 rounded-2xl text-xs shadow-xl shadow-[#FF5500]/25 transition-all uppercase tracking-wide"
            >
              <Wrench size={16} />
              <span>Agendar Taller (+56 9 7696 7438)</span>
            </a>

            <a
              href="https://wa.me/56956105413?text=Hola%20MotoRock,%20quiero%20consultar%20por%20indumentaria%20y%20cascos"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 glass-panel hover:bg-[#1c2436] text-gray-200 border border-white/10 px-6 py-3.5 rounded-2xl font-bold text-xs transition-all"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>Indumentaria & Cascos</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Map Card */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 space-y-4 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-white uppercase tracking-wider">Ubicaci?n Estrat?gica</span>
            <a
              href="https://maps.google.com/?q=Avenida+2+Sur+771+Talca+Chile"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#FF5500] hover:underline flex items-center gap-1 font-bold"
            >
              Google Maps <ExternalLink size={12} />
            </a>
          </div>

          <div className="aspect-[4/3] bg-[#06080c] rounded-2xl border border-white/5 flex flex-col items-center justify-center p-6 text-center space-y-3 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-[#FF5500] text-black font-black flex items-center justify-center text-2xl shadow-xl shadow-[#FF5500]/30 group-hover:scale-110 transition-transform">
              ??
            </div>
            <div>
              <h4 className="text-base font-black text-white">MotoRock Talca</h4>
              <p className="text-xs text-gray-400 mt-1">Av. 2 Sur 771 y 777, Talca</p>
              <span className="inline-block mt-3 text-[10px] text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 font-black tracking-wider uppercase">
                ? Local & Taller Abierto
              </span>
            </div>
          </div>

          <div className="p-3 bg-[#06080c] rounded-2xl border border-white/5 text-[11px] text-gray-400 flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#FF5500] flex-shrink-0" />
            <span>Servicio t?cnico certificado multimarca: Honda, Yamaha, Suzuki, Kawasaki, KTM, Bajaj.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
