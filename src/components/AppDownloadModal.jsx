import React, { useState } from "react";
import { X, Smartphone, QrCode, CheckCircle2, Bell, Truck, ShieldCheck, ArrowRight, Download, Star } from "lucide-react";

export default function AppDownloadModal({ isOpen, onClose }) {
  const [platform, setPlatform] = useState("ios");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-[32px] w-full max-w-xl shadow-lovi border border-[#e5e5eb] overflow-hidden relative animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 text-slate-400 hover:text-indigo-900 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="p-8 pb-4 text-center space-y-2">
          <span className="inline-block bg-emerald-50 text-[#00bb76] font-semibold text-[11px] px-3.5 py-1 rounded-full border border-emerald-100 uppercase tracking-wide">
            ? App Oficial MotoRock 2026
          </span>
          <h3 className="text-2xl font-normal text-[#151581] tracking-tight">
            Descarga la App en tu Celular
          </h3>
          <p className="text-sm text-[#a1a1cd] max-w-md mx-auto">
            Escanea el c?digo QR con tu c?mara o abre el enlace en tu tienda de aplicaciones para rastreo GPS y compatibilidad exacta.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center gap-2 px-8 pt-2">
          <button
            onClick={() => setPlatform("ios")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              platform === "ios"
                ? "bg-[#151581] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            ? iOS (App Store)
          </button>
          <button
            onClick={() => setPlatform("android")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              platform === "android"
                ? "bg-[#151581] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            ?? Android (Google Play)
          </button>
        </div>

        {/* QR Code & Features */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          {/* QR Code box */}
          <div className="sm:col-span-5 flex flex-col items-center justify-center p-5 bg-[#f6f6fa] rounded-[24px] border border-[#e5e5eb]">
            <div className="w-36 h-36 bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center relative group">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://majajicl.github.io/motorock-ecommerce/&color=151581`}
                alt="QR Code MotoRock App"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[11px] font-medium text-[#a1a1cd] mt-3 text-center flex items-center gap-1">
              <QrCode size={13} className="text-[#151581]" /> Escanear con la c?mara
            </span>
          </div>

          {/* Value props list */}
          <div className="sm:col-span-7 space-y-3.5 text-xs text-[#292824]">
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#00bb76] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Truck size={13} />
              </div>
              <div>
                <strong className="text-[#151581] block">Rastreo GPS de Despacho en Vivo</strong>
                <span className="text-slate-500 text-[11px]">Sigue tu env?o por Starken o Chilexpress minuto a minuto.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-indigo-50 text-[#151581] flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldCheck size={13} />
              </div>
              <div>
                <strong className="text-[#151581] block">Compatibilidad de Moto 100% Exacta</strong>
                <span className="text-slate-500 text-[11px]">Selecciona tu modelo y compra sin margen de error.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-purple-50 text-[#9f73e6] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bell size={13} />
              </div>
              <div>
                <strong className="text-[#151581] block">Retiro en Tienda Talca en 2 Horas</strong>
                <span className="text-slate-500 text-[11px]">Notificaci?n instant?nea cuando tu pedido est? listo.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Direct Link */}
        <div className="p-6 bg-[#f6f6fa] border-t border-[#e5e5eb] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-[#151581] font-semibold">
            <span className="text-[#00bb76]">?????</span>
            <span>4.9 de 5 en App Store & Google Play</span>
          </div>

          <a
            href="https://majajicl.github.io/motorock-ecommerce/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#151581] hover:bg-[#0e0e5a] text-white px-6 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span>Instalar Web App Inmediata</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
