import React from "react";
import { Shield, Truck, RefreshCw, MessageCircle, MapPin, Instagram, Facebook, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0e14] border-t border-[#202536] text-gray-400 text-xs mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand Col */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF5500] flex items-center justify-center text-white font-bold">
              🏍️
            </div>
            <span className="font-display font-black text-xl text-white tracking-tight">
              MOTO<span className="text-[#FF5500]">ROCK</span>
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed text-[11px]">
            La tienda y servicio técnico líder en repuestos, cascos, transmisiones e indumentaria para motociclistas en Chile.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.instagram.com/motorocktalca"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-[#181d2c] hover:bg-[#FF5500] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/MotoRockChile"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-[#181d2c] hover:bg-[#FF5500] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://wa.me/56956105413"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-[#181d2c] hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">Categorías Principales</h4>
          <ul className="space-y-1.5 text-[11px]">
            <li><a href="#" className="hover:text-white transition-colors">Cascos Integrales & Abatibles</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kits de Transmisión & Cadenas DID</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Aceites y Lubricantes Motul 4T</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Chaquetas, Guantes y Botas MX</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bolsos y Mochilas Rhinowalk</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Intercomunicadores Cardo & Sena</a></li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div className="space-y-2">
          <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">Políticas & Ayuda</h4>
          <ul className="space-y-1.5 text-[11px]">
            <li><a href="#" className="hover:text-white transition-colors">Políticas de Despacho Nacional</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cambios y Devoluciones</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Garantía Legal de Productos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a></li>
          </ul>
        </div>

        {/* Contact & Stores */}
        <div className="space-y-2">
          <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">Sucursal Talca</h4>
          <div className="space-y-2 text-[11px]">
            <p className="flex items-start gap-2">
              <MapPin size={14} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
              <span>Av. 2 Sur Locales 771 y 777, Talca, Región del Maule.</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} className="text-emerald-400 flex-shrink-0" />
              <span>Taller / Repuestos: +56 9 7696 7438</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} className="text-[#FF5500] flex-shrink-0" />
              <span>Indumentaria: +56 9 5610 5413</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-[#1a1f2e] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-400">
        <div>
          © {new Date().getFullYear()} MotoRock Chile (motorock.cl). Todos los derechos reservados.
        </div>
        <div className="flex items-center gap-4">
          <span className="text-emerald-400">● Sistema de Alta Concurrencia Activo</span>
          <span>Webpay Plus • Mercado Pago • Flow</span>
        </div>
      </div>
    </footer>
  );
}
