import React, { useState } from "react";
import { X, Smartphone, QrCode, Truck, ShieldCheck, Bell, ArrowRight } from "lucide-react";

export default function AppDownloadModal({ isOpen, onClose }) {
  const [platform, setPlatform] = useState("ios");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-[32px] w-full max-w-xl shadow-2xl border border-[#e4e4e7] overflow-hidden relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 text-zinc-400 hover:text-[#121214] bg-zinc-100 hover:bg-zinc-200 p-2 rounded-full transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="p-8 pb-4 text-center space-y-2">
          <span className="inline-block bg-red-50 text-[#e60000] font-bold text-[11px] px-3.5 py-1 rounded-full border border-red-100 uppercase tracking-wide">
            ⚡ App Oficial MotoRock 2026
          </span>
          <h3 className="text-2xl font-extrabold text-[#121214] tracking-tight">
            Descarga la App en tu Celular
          </h3>
          <p className="text-sm text-zinc-500 max-w-md mx-auto">
            Escanea el código QR con tu cámara o abre el enlace en tu tienda de aplicaciones para rastreo GPS y compatibilidad exacta.
          </p>
        </div>

        <div className="flex justify-center gap-2 px-8 pt-2">
          <button
            onClick={() => setPlatform("ios")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              platform === "ios"
                ? "bg-[#e60000] text-white shadow-motorock-red"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
             iOS (App Store)
          </button>
          <button
            onClick={() => setPlatform("android")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              platform === "android"
                ? "bg-[#e60000] text-white shadow-motorock-red"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            🤖 Android (Google Play)
          </button>
        </div>

        <div className="p-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          <div className="sm:col-span-5 flex flex-col items-center justify-center p-5 bg-[#f8f9fa] rounded-[24px] border border-[#e4e4e7]">
            <div className="w-36 h-36 bg-white p-3 rounded-2xl shadow-sm border border-zinc-200 flex items-center justify-center relative group">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://majajicl.github.io/motorock-ecommerce/&color=e60000"
                alt="QR Code MotoRock App"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[11px] font-bold text-[#e60000] mt-3 text-center flex items-center gap-1">
              <QrCode size={13} /> Escanear con la cámara
            </span>
          </div>

          <div className="sm:col-span-7 space-y-3.5 text-xs text-[#121214]">
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-red-50 text-[#e60000] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                <Truck size={13} />
              </div>
              <div>
                <strong className="text-[#121214] block">Rastreo GPS de Despacho en Vivo</strong>
                <span className="text-zinc-500 text-[11px]">Sigue tu envío por Starken o Chilexpress minuto a minuto.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-red-50 text-[#e60000] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                <ShieldCheck size={13} />
              </div>
              <div>
                <strong className="text-[#121214] block">Compatibilidad de Moto 100% Exacta</strong>
                <span className="text-zinc-500 text-[11px]">Selecciona tu modelo y compra sin margen de error.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-red-50 text-[#e60000] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                <Bell size={13} />
              </div>
              <div>
                <strong className="text-[#121214] block">Retiro en Tienda Talca en 2 Horas</strong>
                <span className="text-zinc-500 text-[11px]">Notificación instantánea cuando tu pedido esté listo.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#f8f9fa] border-t border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-[#121214] font-bold">
            <span className="text-[#00bb76]">★★★★★</span>
            <span>4.9 de 5 en App Store & Google Play</span>
          </div>

          <a
            href="https://majajicl.github.io/motorock-ecommerce/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#e60000] hover:bg-[#cc0000] text-white px-6 py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-motorock-red transition-all"
          >
            <span>Instalar Web App Inmediata</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
