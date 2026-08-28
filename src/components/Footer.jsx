import logoMotoRock from '../assets/logo-motorock-600.png';
import React from "react";
import { Shield, Truck, RefreshCw, MessageCircle, MapPin, Instagram, Facebook, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/80 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <img
                src={logoMotoRock}
                alt="MotoRock Chile"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-slate-600 leading-relaxed">
              Motos, repuestos de alta gama y accesorios en Chile. Pasi?n por las dos ruedas y servicio t?cnico especializado en Talca.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/motorocktalca"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-pink-600 flex items-center justify-center transition-all shadow-sm"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com/MotoRockChile"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-blue-600 flex items-center justify-center transition-all shadow-sm"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Categor?as Principales</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Cascos Integrales & Abatibles</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Kits de Arrastre & Transmisiones DID</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Lubricantes Sint?ticos Motul 4T</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Indumentaria Biker & Chaquetas</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Equipamiento Motocross & Enduro</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Atenci?n al Cliente</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Seguimiento de Env?os Starken</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Pol?ticas de Devoluci?n & Garant?a</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">T?rminos y Condiciones</a></li>
            </ul>
          </div>

          {/* Col 4: Stores */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Sucursales F?sicas</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
                <span>Avenida 2 Sur Locales 771 y 777, Talca, Regi?n del Maule</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-emerald-600 flex-shrink-0" />
                <span>+56 9 5610 5413 (Indumentaria)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-emerald-600 flex-shrink-0" />
                <span>+56 9 7696 7438 (Taller & Repuestos)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>? 2026 MotoRock Chile. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Webpay Plus</span>
            <span>?</span>
            <span>Mercado Pago</span>
            <span>?</span>
            <span>Starken</span>
            <span>?</span>
            <span>Chilexpress</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
