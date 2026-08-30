import React from "react";
import { MapPin, Phone, Clock, ArrowRight, Wrench, Shield } from "lucide-react";

export default function StoreLocation() {
  return (
    <section className="my-12 sm:my-16 max-w-7xl mx-auto px-4">
      <div className="bg-[#121318] border border-[#202128] rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Store Details */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-[10px] font-black text-[#e60000] uppercase tracking-widest bg-red-600/10 border border-red-600/20 px-3 py-0.5 rounded">
              PUNTOS DE ATENCIÓN EN TALCA
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase font-heading">
              Tienda Oficial & Taller Mecánico Especializado
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Visítanos en pleno centro de Talca. Contamos con dos locales especializados para equiparte con indumentaria homologada y realizar mantenciones con repuestos genuinos.
            </p>

            {/* 2 Locations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Local 771: Indumentaria */}
              <div className="bg-[#0a0a0c] border border-[#202128] p-4 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-[#e60000] uppercase font-heading">Local 771</span>
                  <span className="text-[10px] text-zinc-400">Indumentaria</span>
                </div>
                <h4 className="text-xs font-bold text-white font-heading">Cascos, Chaquetas & Accesorios</h4>
                <p className="text-[11px] text-zinc-400 flex items-center gap-1">
                  <MapPin size={12} className="text-[#e60000]" /> Av. 2 Sur (entre 1 Ote y 1 Pte) #771
                </p>
                <a
                  href="https://wa.me/56956105413?text=Hola%20MotoRock,%20consulto%20por%20indumentaria"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#00bb76] font-bold hover:underline pt-1"
                >
                  <Phone size={12} /> WhatsApp: +56 9 5610 5413
                </a>
              </div>

              {/* Local 777: Taller */}
              <div className="bg-[#0a0a0c] border border-[#202128] p-4 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-[#00bb76] uppercase font-heading">Local 777</span>
                  <span className="text-[10px] text-zinc-400">Taller & Repuestos</span>
                </div>
                <h4 className="text-xs font-bold text-white font-heading">Servicio Técnico & Mantenciones</h4>
                <p className="text-[11px] text-zinc-400 flex items-center gap-1">
                  <MapPin size={12} className="text-[#00bb76]" /> Av. 2 Sur #777, Talca
                </p>
                <a
                  href="https://wa.me/56976967438?text=Hola%20MotoRock,%20quiero%20agendar%20taller"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#00bb76] font-bold hover:underline pt-1"
                >
                  <Phone size={12} /> WhatsApp: +56 9 7696 7438
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule & Quick Retiro Action */}
          <div className="lg:col-span-5 bg-[#0a0a0c] border border-[#202128] p-5 sm:p-6 rounded-xl space-y-4">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#e60000]" />
              <h3 className="text-sm font-black text-white uppercase tracking-wide font-heading">
                Horarios de Atención
              </h3>
            </div>

            <div className="space-y-2 text-xs divide-y divide-[#1a1b22]">
              <div className="flex justify-between pt-1">
                <span className="text-zinc-400">Lunes a Viernes</span>
                <span className="font-bold text-white">10:00 - 19:30 hrs</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-zinc-400">Sábados</span>
                <span className="font-bold text-white">10:30 - 15:00 hrs</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-zinc-400">Domingos y Festivos</span>
                <span className="text-[#e60000] font-bold">Cerrado</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Av.+2+Sur+771,+Talca,+Chile"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#16171d] hover:bg-[#202129] border border-white/10 text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MapPin size={13} className="text-[#e60000]" />
                <span>Abrir en Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
