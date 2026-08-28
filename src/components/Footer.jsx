import React from "react";
import { MapPin, Phone, Instagram, Facebook, Mail } from "lucide-react";
import logoMotoRock from "../assets/logo-motorock-600.png";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="space-y-3">
            <img
              src={logoMotoRock}
              alt="MotoRock Chile"
              className="h-10 w-auto object-contain"
            />
            <p className="text-xs text-slate-600 leading-relaxed">
              Venta de motos, repuestos, cascos e indumentaria en Chile. Servicio t?cnico y atenci?n en Talca.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://instagram.com/motorocktalca"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 hover:text-[#FF5500] flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com/MotoRockChile"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Categor?as</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Cascos de Moto</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Cadenas y Transmisiones DID</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Aceites y Lubricantes Motul</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Chaquetas y Guantes</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Equipamiento Motocross</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Informaci?n y Pol?ticas</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Pol?ticas de Despacho (Starken/Chilexpress)</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Cambios y Devoluciones (Garant?a Legal)</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">T?rminos y Condiciones</a></li>
              <li><a href="#" className="hover:text-[#FF5500] transition-colors">Pol?ticas de Privacidad</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Locales y Contacto</h4>
            <div className="space-y-1.5 text-xs text-slate-600">
              <p className="flex items-start gap-1.5">
                <MapPin size={14} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
                <span>Av. 2 Sur 771 y 777, Talca, Maule</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone size={14} className="text-emerald-600 flex-shrink-0" />
                <span>+56 9 5610 5413 (Indumentaria)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone size={14} className="text-emerald-600 flex-shrink-0" />
                <span>+56 9 7696 7438 (Taller)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail size={14} className="text-slate-400 flex-shrink-0" />
                <span>contacto@motorock.cl</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>? 2026 MotoRock Chile. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3 font-medium">
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
