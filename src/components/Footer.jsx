import React from "react";
import { ShieldCheck, Truck, Clock, MapPin, Smartphone, Heart } from "lucide-react";
import logoMotoRock from "../assets/logo-motorock-600.png";

export default function Footer({ onOpenAppModal }) {
  return (
    <footer className="bg-[#121214] text-white pt-14 pb-8 border-t border-zinc-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="space-y-4">
            <img
              src={logoMotoRock}
              alt="MotoRock Chile"
              className="h-10 w-auto object-contain brightness-110"
            />
            <p className="text-xs text-zinc-400 leading-relaxed">
              E-commerce líder y Servicio Técnico de motocicletas en Talca, Región del Maule. Representante y distribuidor oficial de las mejores marcas del mundo.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00bb76] animate-pulse" />
              <span className="text-xs font-bold text-zinc-300">Tiendas y Taller Abiertos</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Locales Talca</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <strong className="text-white">Local 771:</strong> Indumentaria, Cascos y Calzado
              </li>
              <li>
                <strong className="text-white">Local 777:</strong> Taller y Repuestos de Motor
              </li>
              <li>Av. 2 Sur (entre 1 Ote y 1 Pte), Talca</li>
              <li>WhatsApp: +56 9 5610 5413</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Garantías & Envíos</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>🚚 Despacho Express Starken y Chilexpress</li>
              <li>⏱️ Retiro en Tienda en 2 Horas</li>
              <li>🛡️ Garantía Oficial de Fábrica</li>
              <li>💳 6 Cuotas Sin Interés con Webpay</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">App MotoRock 2026</h4>
            <p className="text-xs text-zinc-400">
              Descarga la app en iOS o Android y accede al Garage Virtual con calce exacto.
            </p>
            <button
              onClick={onOpenAppModal}
              className="w-full py-2 px-4 rounded-full bg-[#e60000] hover:bg-[#cc0000] text-white font-bold text-xs shadow-racing transition-colors"
            >
              Descargar App Gratis
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <p>© 2026 MotoRock Talca (motorock.cl). Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Pasión sobre dos ruedas</span>
            <span className="text-[#e60000]">🏍️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
