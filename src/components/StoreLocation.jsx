import React from "react";
import { MapPin, Clock, Wrench, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";

export default function StoreLocation() {
  return (
    <section className="my-16 bg-white rounded-[32px] p-8 sm:p-12 shadow-motorock border border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="bg-red-50 text-[#e60000] font-bold text-[11px] px-3.5 py-1 rounded-full border border-red-100 uppercase tracking-wider inline-block">
            SHOWROOM Y TALLER TALCA
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121214] tracking-tight leading-tight">
            Visita Nuestros Locales en Talca
          </h2>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
            Encuentra todo en cascos, indumentaria, repuestos y servicio técnico en un solo lugar. Puedes comprar desde la app o la web y retirar listo en 2 horas hábiles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
            <div className="bg-[#f8f9fa] p-4 rounded-[20px] space-y-1 border border-[#e4e4e7]">
              <div className="flex items-center gap-1.5 text-[#e60000] font-bold">
                <MapPin size={14} />
                <span>DIRECCIÓN OFICIAL</span>
              </div>
              <p className="text-[#121214] font-bold">Avenida 2 Sur (entre 1 Ote y 1 Pte)</p>
              <p className="text-zinc-500">Locales 771 y 777, Talca, Región del Maule</p>
            </div>

            <div className="bg-[#f8f9fa] p-4 rounded-[20px] space-y-1 border border-[#e4e4e7]">
              <div className="flex items-center gap-1.5 text-[#121214] font-bold">
                <Clock size={14} className="text-[#e60000]" />
                <span>HORARIOS DE ATENCIÓN</span>
              </div>
              <p className="text-[#121214] font-semibold">Lun, Jue, Vie: 09:30 a 18:30 hrs</p>
              <p className="text-zinc-500">Mar, Mié: 09:30 - 17:30 | Sáb: 10:00 - 14:00</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="https://wa.me/56976967438?text=Hola%20MotoRock,%20quiero%20agendar%20servicio%20técnico%20o%20consultar%20por%20repuestos"
              target="_blank"
              rel="noreferrer"
              className="bg-[#e60000] hover:bg-[#cc0000] text-white font-bold px-5 py-2.5 rounded-full text-xs shadow-motorock-red flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Wrench size={14} />
              <span>Taller y Repuestos (+56 9 7696 7438)</span>
            </a>

            <a
              href="https://wa.me/56956105413?text=Hola%20MotoRock,%20quiero%20consultar%20por%20cascos%20e%20indumentaria"
              target="_blank"
              rel="noreferrer"
              className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#121214] border border-[#e4e4e7] px-5 py-2.5 rounded-full font-bold text-xs transition-colors flex items-center gap-2"
            >
              <MessageCircle size={14} className="text-[#00bb76]" />
              <span>Indumentaria y Cascos (+56 9 5610 5413)</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#f8f9fa] rounded-[28px] p-6 border border-[#e4e4e7] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#121214] uppercase tracking-wider">Ubicación en Talca</span>
            <a
              href="https://maps.google.com/?q=Avenida+2+Sur+771+Talca+Chile"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#e60000] hover:underline flex items-center gap-1 font-bold"
            >
              Google Maps <ExternalLink size={11} />
            </a>
          </div>

          <div className="aspect-[4/3] bg-white rounded-[24px] border border-[#e4e4e7] flex flex-col items-center justify-center p-6 text-center space-y-2 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#e60000] font-bold flex items-center justify-center text-xl">
              📍
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#121214]">MotoRock Talca</h4>
              <p className="text-xs text-zinc-500 mt-0.5">Av. 2 Sur Locales 771 y 777, Talca</p>
              <span className="inline-block mt-2 text-[10px] text-[#00bb76] bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-100 font-bold">
                ✓ Abierto en horario de atención
              </span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#e4e4e7] text-[11px] text-zinc-600 flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#00bb76] flex-shrink-0" />
            <span>Taller especializado: Honda, Yamaha, Suzuki, Kawasaki, KTM y Bajaj.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
