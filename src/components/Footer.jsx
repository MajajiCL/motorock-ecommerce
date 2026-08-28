import React from "react";
import { MapPin, Phone, Instagram, Facebook, Mail, Smartphone } from "lucide-react";
import logoMotoRock from "../assets/logo-motorock-600.png";

export default function Footer({ onOpenAppModal }) {
  return (
    <footer className="mt-20 border-t border-[#e5e5eb] bg-white">
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
              Venta de motos, repuestos, cascos e indumentaria en Chile. Servicio técnico, despacho express y retiro en Talca.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://instagram.com/motorocktalca"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#f6f6fa] text-[#151581] hover:bg-[#151581] hover:text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://facebook.com/MotoRockChile"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#f6f6fa] text-[#151581] hover:bg-[#151581] hover:text-white flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-[#151581] uppercase tracking-wider">Categorías</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><a href="#" className="hover:text-[#5465ff] transition-colors">Cascos Homologados ECE 22.06</a></li>
              <li><a href="#" className="hover:text-[#5465ff] transition-colors">Cadenas y Transmisiones D.I.D</a></li>
              <li><a href="#" className="hover:text-[#5465ff] transition-colors">Aceites y Lubricantes Motul</a></li>
              <li><a href="#" className="hover:text-[#5465ff] transition-colors">Chaquetas y Guantes</a></li>
              <li><a href="#" className="hover:text-[#5465ff] transition-colors">Bolsos Impermeables Rhinowalk</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-[#151581] uppercase tracking-wider">Ecosistema Móvil</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button
                  onClick={onOpenAppModal}
                  className="flex items-center gap-1.5 text-[#151581] font-semibold hover:text-[#5465ff] cursor-pointer"
                >
                  <Smartphone size={13} className="text-[#00bb76]" />
                  <span>Descargar App MotoRock iOS & Android</span>
                </button>
              </li>
              <li><a href="#" className="hover:text-[#5465ff] transition-colors">Rastreo GPS de Envíos Starken</a></li>
              <li><a href="#" className="hover:text-[#5465ff] transition-colors">Garantía Legal y Devoluciones</a></li>
              <li><a href="#" className="hover:text-[#5465ff] transition-colors">Términos del Servicio</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-[#151581] uppercase tracking-wider">Locales y Contacto</h4>
            <div className="space-y-1.5 text-xs text-slate-600">
              <p className="flex items-start gap-1.5">
                <MapPin size={13} className="text-[#00bb76] flex-shrink-0 mt-0.5" />
                <span>Av. 2 Sur 771 y 777, Talca, Maule</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone size={13} className="text-[#00bb76] flex-shrink-0" />
                <span>+56 9 5610 5413 (Indumentaria)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone size={13} className="text-[#00bb76] flex-shrink-0" />
                <span>+56 9 7696 7438 (Taller Mecánico)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail size={13} className="text-slate-400 flex-shrink-0" />
                <span>contacto@motorock.cl</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#e5e5eb] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#a1a1cd]">
          <p>© 2026 MotoRock Chile. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3 font-medium text-slate-500">
            <span>Webpay Plus</span>
            <span>•</span>
            <span>Mercado Pago</span>
            <span>•</span>
            <span>Starken Express</span>
            <span>•</span>
            <span>Chilexpress</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
