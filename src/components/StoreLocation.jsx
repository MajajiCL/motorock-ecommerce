import React from "react";
import { MapPin, Clock, Phone, Wrench, MessageCircle, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

export default function StoreLocation() {
  return (
    <section className="my-14 glass-aero rounded-3xl p-6 sm:p-12 shadow-xl relative overflow-hidden">
      {/* Soft Ambient Glow in background */}
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF5500] text-white font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm shadow-[#FF5500]/30">
              SUCURSAL TALCA & TALLER PRO
            </span>
            <span className="text-slate-500 text-xs font-semibold">Regi?n del Maule, Chile</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-black text-slate-900 leading-tight uppercase">
            Conoce Nuestro <span className="text-[#FF5500]">Showroom & Servicio T?cnico</span> en Talca
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed max-w-xl font-medium">
            Encuentra cascos de competici?n, indumentaria, repuestos y taller mec?nico especializado para tu motocicleta. Retira tus compras online en 2 horas h?biles o agenda mantenci?n preventiva.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Address Card */}
            <div className="bg-white/80 p-4 rounded-2xl space-y-1 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-[#FF5500] font-black">
                <MapPin size={16} />
                <span>DIRECCI?N CENTRAL</span>
              </div>
              <p className="text-slate-900 font-bold">Avenida 2 Sur (entre 1 Ote y 1 Pte)</p>
              <p className="text-slate-500">Locales 771 y 777, Talca</p>
            </div>

            {/* Hours Card */}
            <div className="bg-white/80 p-4 rounded-2xl space-y-1 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-amber-600 font-black">
                <Clock size={16} />
                <span>HORARIOS DE ATENCI?N</span>
              </div>
              <p className="text-slate-900 font-semibold">Lun, Jue, Vie: 09:30 a 18:30 hrs</p>
              <p className="text-slate-500">Mar, Mi?: 09:30 - 17:30 | S?b: 10:00 - 14:00</p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://wa.me/56976967438?text=Hola%20MotoRock,%20quiero%20agendar%20servicio%20t?cnico%20o%20consultar%20repuestos"
              target="_blank"
              rel="noreferrer"
              className="liquid-btn text-white font-black px-6 py-3.5 rounded-full text-xs shadow-xl shadow-[#FF5500]/25 flex items-center gap-2 uppercase tracking-wide cursor-pointer"
            >
              <Wrench size={16} />
              <span>Agendar Taller (+56 9 7696 7438)</span>
            </a>

            <a
              href="https://wa.me/56956105413?text=Hola%20MotoRock,%20quiero%20consultar%20por%20indumentaria%20y%20cascos"
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-6 py-3.5 rounded-full font-bold text-xs shadow-sm hover:shadow flex items-center gap-2 transition-all"
            >
              <MessageCircle size={16} className="text-emerald-600" />
              <span>Indumentaria & Cascos</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Map Card */}
        <div className="lg:col-span-5 bg-white/90 rounded-3xl p-6 space-y-4 border border-slate-200 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-slate-900 uppercase tracking-wider">Ubicaci?n Estrat?gica</span>
            <a
              href="https://maps.google.com/?q=Avenida+2+Sur+771+Talca+Chile"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#FF5500] hover:underline flex items-center gap-1 font-bold"
            >
              Google Maps <ExternalLink size={12} />
            </a>
          </div>

          <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200/70 rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-6 text-center space-y-3 relative overflow-hidden group shadow-inner">
            <div className="w-14 h-14 rounded-2xl bg-[#FF5500] text-white font-black flex items-center justify-center text-2xl shadow-xl shadow-[#FF5500]/30 group-hover:scale-110 transition-transform">
              ??
            </div>
            <div>
              <h4 className="text-base font-black text-slate-900">MotoRock Talca</h4>
              <p className="text-xs text-slate-500 mt-1">Av. 2 Sur 771 y 777, Talca</p>
              <span className="inline-block mt-3 text-[10px] text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 font-black tracking-wider uppercase shadow-sm">
                ? Local & Taller Abierto
              </span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-[11px] text-slate-600 flex items-center gap-2 shadow-inner">
            <ShieldCheck size={16} className="text-[#FF5500] flex-shrink-0" />
            <span>Servicio t?cnico certificado multimarca: Honda, Yamaha, Suzuki, Kawasaki, KTM, Bajaj.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
