import React from "react";
import { MapPin, Clock, Phone, Wrench, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";

export default function StoreLocation() {
  return (
    <section className="my-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-4">
          <span className="bg-orange-100 text-[#FF5500] font-bold text-[11px] px-3 py-1 rounded uppercase tracking-wider inline-block">
            TIENDA Y TALLER EN TALCA
          </span>

          <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 leading-tight">
            Visita Nuestros Locales en Talca
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
            Encuentra todo en cascos, indumentaria, repuestos y servicio t?cnico para tu moto en un solo lugar. Puedes comprar online y retirar gratis en tienda en 2 horas h?biles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {/* Address */}
            <div className="bg-slate-50 p-4 rounded-xl space-y-1 border border-slate-200">
              <div className="flex items-center gap-1.5 text-[#FF5500] font-bold">
                <MapPin size={15} />
                <span>DIRECCI?N</span>
              </div>
              <p className="text-slate-900 font-bold">Avenida 2 Sur (entre 1 Ote y 1 Pte)</p>
              <p className="text-slate-500">Locales 771 y 777, Talca, Regi?n del Maule</p>
            </div>

            {/* Hours */}
            <div className="bg-slate-50 p-4 rounded-xl space-y-1 border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                <Clock size={15} />
                <span>HORARIOS DE ATENCI?N</span>
              </div>
              <p className="text-slate-900 font-semibold">Lun, Jue, Vie: 09:30 a 18:30 hrs</p>
              <p className="text-slate-500">Mar, Mi?: 09:30 - 17:30 | S?b: 10:00 - 14:00</p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://wa.me/56976967438?text=Hola%20MotoRock,%20quiero%20agendar%20servicio%20t?cnico%20o%20consultar%20por%20repuestos"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FF5500] hover:bg-[#e64d00] text-white font-bold px-5 py-2.5 rounded-lg text-xs shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Wrench size={15} />
              <span>Taller y Repuestos (+56 9 7696 7438)</span>
            </a>

            <a
              href="https://wa.me/56956105413?text=Hola%20MotoRock,%20quiero%20consultar%20por%20cascos%20e%20indumentaria"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 px-5 py-2.5 rounded-lg font-semibold text-xs transition-colors flex items-center gap-2"
            >
              <MessageCircle size={15} className="text-emerald-600" />
              <span>Indumentaria y Cascos (+56 9 5610 5413)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clean Map Box */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Ubicaci?n en Talca</span>
            <a
              href="https://maps.google.com/?q=Avenida+2+Sur+771+Talca+Chile"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#FF5500] hover:underline flex items-center gap-1 font-semibold"
            >
              Abrir en Google Maps <ExternalLink size={11} />
            </a>
          </div>

          <div className="aspect-[4/3] bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center p-6 text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF5500] font-bold flex items-center justify-center text-xl">
              ??
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">MotoRock Talca</h4>
              <p className="text-xs text-slate-500 mt-0.5">Av. 2 Sur Locales 771 y 777, Talca</p>
              <span className="inline-block mt-2 text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-bold">
                Abierto en horarios de atenci?n
              </span>
            </div>
          </div>

          <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-500 flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#FF5500] flex-shrink-0" />
            <span>Servicio t?cnico multimarca: Honda, Yamaha, Suzuki, Kawasaki, KTM, Bajaj.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
