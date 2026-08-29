import React from "react";
import { MapPin, Phone, Clock, Wrench, Shield, ArrowRight } from "lucide-react";

export default function StoreLocation() {
  return (
    <section className="my-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <span className="text-[11px] font-bold text-[#e60000] uppercase tracking-wider bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
            SHOWROOM & TALLER EN TALCA
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121214] mt-1 tracking-tight">
            Locales Físicos MotoRock
          </h2>
        </div>
        <p className="text-xs text-zinc-500 max-w-md">
          Visítanos en pleno centro de Talca. Prueba cascos e indumentaria en Local 771 o instala repuestos en Taller Local 777.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Local 771: Indumentaria */}
        <div className="bg-white p-6 rounded-[28px] border border-[#e4e4e7] shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#e60000] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
                Local 771 • Cascos & Ropa
              </span>
              <span className="text-xs font-bold text-[#00bb76]">Abierto Hoy</span>
            </div>

            <h3 className="text-lg font-bold text-[#121214]">
              Showroom Indumentaria y Equipamiento
            </h3>

            <div className="space-y-2 text-xs text-zinc-600">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-[#e60000] flex-shrink-0 mt-0.5" />
                <span>Av. 2 Sur 771 (entre 1 Ote y 1 Pte), Talca, Maule.</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} className="text-zinc-400 flex-shrink-0" />
                <span>Lunes a Viernes: 10:00 - 19:30 | Sábado: 10:30 - 14:30</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-[#00bb76] flex-shrink-0" />
                <span>WhatsApp Venta: <strong>+56 9 5610 5413</strong></span>
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/56956105413?text=Hola%20MotoRock,%20tengo%20una%20consulta%20sobre%20indumentaria"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 rounded-full bg-[#121214] hover:bg-[#e60000] text-white font-bold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Consultar Disponibilidad</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Local 777: Taller */}
        <div className="bg-white p-6 rounded-[28px] border border-[#e4e4e7] shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#e60000] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
                Local 777 • Taller Mecánico
              </span>
              <span className="text-xs font-bold text-[#00bb76]">Servicio Express</span>
            </div>

            <h3 className="text-lg font-bold text-[#121214]">
              Taller Mecánico y Repuestos
            </h3>

            <div className="space-y-2 text-xs text-zinc-600">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-[#e60000] flex-shrink-0 mt-0.5" />
                <span>Av. 2 Sur 777 (entre 1 Ote y 1 Pte), Talca, Maule.</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} className="text-zinc-400 flex-shrink-0" />
                <span>Lunes a Viernes: 09:30 - 19:00 | Sábado: 10:00 - 14:00</span>
              </p>
              <p className="flex items-center gap-2">
                <Wrench size={15} className="text-[#e60000] flex-shrink-0" />
                <span>WhatsApp Taller: <strong>+56 9 7696 7438</strong></span>
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/56976967438?text=Hola%20MotoRock,%20quiero%20agendar%20hora%20en%20el%20taller"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 rounded-full bg-[#e60000] hover:bg-[#cc0000] text-white font-bold text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-racing"
          >
            <span>Agendar Hora de Taller</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
