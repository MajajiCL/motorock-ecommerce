import React from "react";
import { ArrowRight, Shield, Cog, Fuel, Wrench, Package } from "lucide-react";
import { CardSpotlight } from "./ui/CardSpotlight";
import { BorderBeam } from "./ui/BorderBeam";

export default function BentoCategories({ onSelectCategory }) {
  return (
    <section className="my-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <span className="text-[11px] font-bold text-[#e60000] uppercase tracking-wider bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
            LÍNEAS DE COMPETICIÓN & CALLE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121214] mt-1 tracking-tight">
            Catálogo de Alto Rendimiento
          </h2>
        </div>
        <p className="text-xs text-zinc-500 max-w-md">
          726 repuestos, indumentaria y cascos homologados ECE 22.06 con despacho express o retiro en Talca.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Card 1: Cascos Premium HJC (2 Cols) */}
        <CardSpotlight
          onClick={() => onSelectCategory("128")}
          className="md:col-span-2 lg:col-span-2 p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden group min-h-[240px] bg-white rounded-[28px] border border-[#e4e4e7] shadow-sm"
        >
          <BorderBeam size={180} duration={8} colorFrom="#e60000" colorTo="#121214" />
          <div className="relative z-10 max-w-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-red-50 text-[#e60000]">
                <Shield size={18} />
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">247 Modelos Homologados</span>
            </div>
            <h3 className="text-xl font-bold text-[#121214] group-hover:text-[#e60000] transition-colors">
              Cascos de Moto ECE 22.06
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Integrales, abatibles y multipropósito. HJC RPH 60 Dakar, LS2 Storm II, GHB y Shaft.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#e60000] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Ver Cascos</span>
              <ArrowRight size={14} />
            </span>
            <span className="text-[11px] font-bold text-[#00bb76]">Desde $32.900 CLP</span>
          </div>

          <img
            src="https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg"
            alt="Casco HJC Dakar"
            className="absolute -right-4 -bottom-4 w-44 h-44 object-contain opacity-90 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
          />
        </CardSpotlight>

        {/* Card 2: Transmisión D.I.D */}
        <CardSpotlight
          onClick={() => onSelectCategory("47")}
          className="p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden group min-h-[240px] bg-white rounded-[28px] border border-[#e4e4e7] shadow-sm"
        >
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-zinc-100 text-[#121214]">
                <Cog size={18} />
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">322 Repuestos</span>
            </div>
            <h3 className="text-lg font-bold text-[#121214] group-hover:text-[#e60000] transition-colors">
              Transmisiones D.I.D
            </h3>
            <p className="text-xs text-zinc-600">
              Cadenas reforzadas X-Ring y O-Ring, coronas y piñones en acero japonés.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#e60000] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Ver Cadenas</span>
              <ArrowRight size={14} />
            </span>
          </div>

          <img
            src="https://motorock.cl/wp-content/uploads/2026/08/1-24-300x300.webp"
            alt="Transmisiones"
            className="absolute -right-4 -bottom-4 w-32 h-32 object-contain opacity-85 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
          />
        </CardSpotlight>

        {/* Card 3: Aceites Motul */}
        <CardSpotlight
          onClick={() => onSelectCategory("36")}
          className="p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden group min-h-[240px] bg-white rounded-[28px] border border-[#e4e4e7] shadow-sm"
        >
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-red-50 text-[#e60000]">
                <Fuel size={18} />
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">73 Variedades</span>
            </div>
            <h3 className="text-lg font-bold text-[#121214] group-hover:text-[#e60000] transition-colors">
              Aceites Motul 4T
            </h3>
            <p className="text-xs text-zinc-600">
              Motul 7100 100% Sintético Ester y 5100 Technosynthese 10W-40 y 15W-50.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#e60000] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Ver Aceites</span>
              <ArrowRight size={14} />
            </span>
          </div>

          <img
            src="https://motorock.cl/wp-content/uploads/2026/06/MOTUL-7100-10W-40.png"
            alt="Aceites Motul"
            className="absolute -right-4 -bottom-4 w-32 h-32 object-contain opacity-90 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
          />
        </CardSpotlight>

        {/* Card 4: Taller Talca (2 cols) */}
        <div className="md:col-span-2 lg:col-span-2 p-6 bg-[#121214] text-white rounded-[28px] flex flex-col justify-between shadow-sm relative overflow-hidden min-h-[240px]">
          <div className="relative z-10 max-w-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-white/10 text-[#00bb76]">
                <Wrench size={18} />
              </span>
              <span className="text-xs font-bold text-[#00bb76] uppercase tracking-wide">Servicio Técnico Talca</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Taller Mecánico Especializado
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Mantenciones periódicas, cambio de transmisión, frenos y neumáticos en Av. 2 Sur 771 y 777, Talca.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/56976967438?text=Hola%20MotoRock,%20quiero%20agendar%20mantencion%20para%20mi%20moto"
              target="_blank"
              rel="noreferrer"
              className="bg-[#e60000] hover:bg-[#cc0000] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-racing flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Agendar por WhatsApp</span>
              <ArrowRight size={14} />
            </a>
            <span className="text-xs text-zinc-300 font-semibold">+56 9 7696 7438</span>
          </div>
        </div>

        {/* Card 5: Chaquetas LS2 e Indumentaria (2 cols) */}
        <CardSpotlight
          onClick={() => onSelectCategory("116")}
          className="md:col-span-1 lg:col-span-2 p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden group min-h-[240px] bg-white rounded-[28px] border border-[#e4e4e7] shadow-sm"
        >
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-zinc-100 text-[#121214]">
                <Package size={18} />
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Indumentaria Biker</span>
            </div>
            <h3 className="text-lg font-bold text-[#121214] group-hover:text-[#e60000] transition-colors">
              Chaquetas LS2, Guantes y Bolsos
            </h3>
            <p className="text-xs text-zinc-600">
              Chaquetas LS2 Serra Evo con protecciones CE, guantes y bolsos impermeables Rhinowalk.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#e60000] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Ver Indumentaria</span>
              <ArrowRight size={14} />
            </span>
          </div>

          <img
            src="https://motorock.cl/wp-content/uploads/2026/08/SERRA-1.webp"
            alt="Chaqueta LS2 Serra"
            className="absolute -right-4 -bottom-4 w-36 h-36 object-contain opacity-90 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
          />
        </CardSpotlight>
      </div>
    </section>
  );
}
