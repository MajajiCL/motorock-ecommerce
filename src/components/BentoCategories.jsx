import React from "react";
import { ArrowRight, Shield, Cog, Fuel, Wrench, Package, Sparkles } from "lucide-react";
import { CardSpotlight } from "./ui/CardSpotlight";
import { BorderBeam } from "./ui/BorderBeam";

export default function BentoCategories({ onSelectCategory }) {
  return (
    <section className="my-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <span className="text-[11px] font-bold text-[#FF5500] uppercase tracking-wider bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
            Categor?as Principales
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            Explora el Cat?logo de MotoRock
          </h2>
        </div>
        <p className="text-xs text-slate-500 max-w-md">
          M?s de 720 repuestos, accesorios e indumentaria con despacho a todo Chile o retiro directo en Talca.
        </p>
      </div>

      {/* Modern Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Card 1: Cascos (Large 2 Columns) */}
        <CardSpotlight
          onClick={() => onSelectCategory("128")}
          className="md:col-span-2 lg:col-span-2 p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden group min-h-[220px]"
        >
          <BorderBeam size={180} duration={8} colorFrom="#FF5500" colorTo="#F59E0B" />
          <div className="relative z-10 max-w-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-orange-50 text-[#FF5500]">
                <Shield size={18} />
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">247 Modelos</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF5500] transition-colors">
              Cascos de Moto
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Integrales, abatibles y multiprop?sito con certificaci?n ECE 22.06. HJC, LS2, GHB y Shaft.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#FF5500] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Ver Cascos</span>
              <ArrowRight size={14} />
            </span>
            <span className="text-[11px] font-semibold text-slate-400">Desde $32.900 CLP</span>
          </div>

          {/* Background image preview */}
          <img
            src="https://motorock.cl/wp-content/uploads/2026/08/CASCO-ABATIBLE-GHB-166-ANDROID-GRIS-MATTE-1.png"
            alt="Cascos"
            className="absolute -right-6 -bottom-6 w-44 h-44 object-contain opacity-85 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
          />
        </CardSpotlight>

        {/* Card 2: Transmisiones D.I.D */}
        <CardSpotlight
          onClick={() => onSelectCategory("47")}
          className="p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden group min-h-[220px]"
        >
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Cog size={18} />
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">322 Repuestos</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF5500] transition-colors">
              Transmisi?n D.I.D
            </h3>
            <p className="text-xs text-slate-600">
              Cadenas reforzadas X-Ring y O-Ring, pi?ones y catalinas para Honda, Yamaha, KTM y m?s.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#FF5500] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Ver Transmisiones</span>
              <ArrowRight size={14} />
            </span>
          </div>

          <img
            src="https://motorock.cl/wp-content/uploads/2026/08/1-24-300x300.webp"
            alt="Transmisiones"
            className="absolute -right-4 -bottom-4 w-32 h-32 object-contain opacity-80 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
          />
        </CardSpotlight>

        {/* Card 3: Aceites Motul */}
        <CardSpotlight
          onClick={() => onSelectCategory("36")}
          className="p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden group min-h-[220px]"
        >
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <Fuel size={18} />
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">73 Variedades</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF5500] transition-colors">
              Aceites Motul 4T
            </h3>
            <p className="text-xs text-slate-600">
              Motul 7100 100% Sint?tico y 5100 semi-sint?tico 10W-40, 15W-50 y 20W-50.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#FF5500] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Ver Lubricantes</span>
              <ArrowRight size={14} />
            </span>
          </div>

          <img
            src="https://motorock.cl/wp-content/uploads/2026/08/MOTUL-7100-10W-40.png"
            alt="Aceites"
            className="absolute -right-4 -bottom-4 w-32 h-32 object-contain opacity-80 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
          />
        </CardSpotlight>

        {/* Card 4: Taller y Servicio T?cnico Talca */}
        <div className="md:col-span-2 lg:col-span-2 p-6 bg-slate-900 text-white rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-white/10 text-emerald-400">
                <Wrench size={18} />
              </span>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Servicio T?cnico Talca</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Taller Mec?nico Especializado
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mantenciones peri?dicas, cambio de transmisi?n, frenos y neum?ticos en Av. 2 Sur 771 y 777, Talca.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/56976967438?text=Hola%20MotoRock,%20quiero%20agendar%20mantencion%20para%20mi%20moto"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FF5500] hover:bg-[#e64d00] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm flex items-center gap-1.5 transition-colors"
            >
              <span>Agendar por WhatsApp</span>
              <ArrowRight size={14} />
            </a>
            <span className="text-xs text-slate-400">+56 9 7696 7438</span>
          </div>
        </div>

        {/* Card 5: Indumentaria & Bolsos Rhinowalk */}
        <CardSpotlight
          onClick={() => onSelectCategory("116")}
          className="md:col-span-1 lg:col-span-2 p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden group min-h-[220px]"
        >
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-purple-50 text-purple-600">
                <Package size={18} />
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Indumentaria Biker</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF5500] transition-colors">
              Chaquetas, Guantes y Bolsos
            </h3>
            <p className="text-xs text-slate-600">
              Bolsos impermeables Rhinowalk, guantes con protecci?n y chaquetas para ruta y ciudad.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#FF5500] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Ver Indumentaria</span>
              <ArrowRight size={14} />
            </span>
          </div>

          <img
            src="https://motorock.cl/wp-content/uploads/2026/08/X_imgi-2-rhinowalk-motorcycle-bag-45l-waterproof-pvc-tail-saddle-bag-durable-dry-luggage-outdoor-bag-motorbike-rear4921-300x300.jpg"
            alt="Bolsos"
            className="absolute -right-4 -bottom-4 w-32 h-32 object-contain opacity-80 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
          />
        </CardSpotlight>
      </div>
    </section>
  );
}
