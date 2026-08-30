import React from "react";
import { ShieldCheck, Truck, Clock, Phone, MapPin, Smartphone } from "lucide-react";
import logoMotoRock from "../assets/logo-motorock-600.png";

export default function Footer({ onOpenAppModal }) {
  return (
    <footer className="bg-[#08080a] border-t border-[#1a1b22] text-zinc-400 text-xs mt-16 pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Col 1: Brand info */}
        <div className="space-y-3">
          <img
            src={logoMotoRock}
            alt="MotoRock Chile"
            className="h-11 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(230,0,0,0.3)]"
          />
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            La tienda y servicio técnico líder de repuestos, cascos homologados ECE 22.06 e indumentaria motera en Talca y despacho express a todo Chile.
          </p>
          <button
            onClick={onOpenAppModal}
            className="inline-flex items-center gap-2 bg-[#e60000] hover:bg-[#cc0000] text-white px-4 py-2 rounded-lg font-bold text-xs transition-colors cursor-pointer font-heading"
          >
            <Smartphone size={13} />
            <span>Instalar App 2026</span>
          </button>
        </div>

        {/* Col 2: Categorías */}
        <div className="space-y-2">
          <h4 className="text-xs font-black text-white uppercase tracking-wider font-heading">
            Categorías Principales
          </h4>
          <ul className="space-y-1.5 text-[11px]">
            <li><a href="#catalogo" className="hover:text-white transition-colors">Cascos Homologados ECE 22.06</a></li>
            <li><a href="#catalogo" className="hover:text-white transition-colors">Aceites Sintéticos Motul 4T</a></li>
            <li><a href="#catalogo" className="hover:text-white transition-colors">Cadenas de Transmisión D.I.D Japón</a></li>
            <li><a href="#catalogo" className="hover:text-white transition-colors">Chaquetas e Indumentaria LS2</a></li>
            <li><a href="#catalogo" className="hover:text-white transition-colors">Bolsos Impermeables Rhinowalk</a></li>
          </ul>
        </div>

        {/* Col 3: Locales Talca */}
        <div className="space-y-2">
          <h4 className="text-xs font-black text-white uppercase tracking-wider font-heading">
            Locales Físicos Talca
          </h4>
          <div className="space-y-2 text-[11px]">
            <p>
              <strong className="text-white">Local 771:</strong> Indumentaria y Cascos
              <br />Av. 2 Sur (entre 1 Ote y 1 Pte), Talca
            </p>
            <p>
              <strong className="text-white">Local 777:</strong> Taller y Repuestos
              <br />Av. 2 Sur #777, Talca
            </p>
            <p className="text-[#00bb76] font-bold">
              ✓ Retiro en 2 horas para compras online
            </p>
          </div>
        </div>

        {/* Col 4: Despachos y Pagos */}
        <div className="space-y-2">
          <h4 className="text-xs font-black text-white uppercase tracking-wider font-heading">
            Despachos & Medios de Pago
          </h4>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Envíos asegurados por <strong>Starken</strong> y <strong>Chilexpress</strong> en 24 a 48 horas a todas las regiones de Chile.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-bold text-zinc-300">
            <span className="bg-[#121318] border border-[#202128] px-2.5 py-1 rounded">Webpay Plus</span>
            <span className="bg-[#121318] border border-[#202128] px-2.5 py-1 rounded">Mercado Pago</span>
            <span className="bg-[#121318] border border-[#202128] px-2.5 py-1 rounded">Transferencia</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-[#1a1b22] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-zinc-500">
        <p>© 2026 MotoRock Chile SpA. Todos los derechos reservados. Av. 2 Sur 771 y 777, Talca.</p>
        <p className="flex items-center gap-2">
          <span>Desarrollado con arquitectura de alto rendimiento</span>
        </p>
      </div>
    </footer>
  );
}
