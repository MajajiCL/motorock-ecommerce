import React from "react";
import { Truck, ShieldCheck, Clock, ArrowRight, Smartphone, Sparkles, Shield, CheckCircle2 } from "lucide-react";
import IPhoneMockup from "./IPhoneMockup";
import ImageStreamHero from "./ImageStreamHero";
import AnimatedShinyText from "./ui/AnimatedShinyText";
import NumberTicker from "./ui/NumberTicker";

const STREAM_PRODUCTS = [
  {
    src: "https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg",
    title: "Casco HJC RPH 60 Dakar",
    price: "$599.900 CLP"
  },
  {
    src: "https://motorock.cl/wp-content/uploads/2026/06/MOTUL-7100-10W-40.png",
    title: "Aceite Motul 7100 4T",
    price: "$16.900 CLP"
  },
  {
    src: "https://motorock.cl/wp-content/uploads/2026/08/1-24-300x300.webp",
    title: "Cadena D.I.D X-Ring Japón",
    price: "$89.900 CLP"
  },
  {
    src: "https://motorock.cl/wp-content/uploads/2026/08/SERRA-1.webp",
    title: "Chaqueta LS2 Serra Evo",
    price: "$159.900 CLP"
  },
  {
    src: "https://motorock.cl/wp-content/uploads/2026/06/MOTUL-800V.png",
    title: "Motul 800V Factory Line",
    price: "$19.900 CLP"
  },
  {
    src: "https://motorock.cl/wp-content/uploads/2026/08/chaqueta-ls2-sepang-hombre-negro-gris.jpg",
    title: "Chaqueta LS2 Sepang",
    price: "$129.900 CLP"
  },
  {
    src: "https://motorock.cl/wp-content/uploads/2026/08/X_imgi-2-rhinowalk-motorcycle-bag-45l-waterproof-pvc-tail-saddle-bag-durable-dry-luggage-outdoor-bag-motorbike-rear4921.jpg",
    title: "Bolso Rhinowalk 45L",
    price: "$69.900 CLP"
  },
  {
    src: "https://motorock.cl/wp-content/uploads/2026/06/MOTUL-5100-10W-40.png",
    title: "Motul 5100 10W-40",
    price: "$12.900 CLP"
  }
];

export default function HeroBanner({ onSelectCategory, onOpenGarage, onOpenAppModal }) {
  return (
    <ImageStreamHero images={STREAM_PRODUCTS} cards={8} speed={22} axis={52}>
      <div className="pt-8 pb-16 flex flex-col items-center text-center">
        {/* 1. Trust Glass Pill Badge */}
        <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full mb-6 animate-in fade-in duration-300">
          <Sparkles size={13} className="text-[#e60000]" />
          <AnimatedShinyText className="text-xs text-[#121214]">
            ⚡ MotoRock App 2026 • Despacho Express en 24h & Retiro en 2h en Talca
          </AnimatedShinyText>
        </div>

        {/* 2. Display Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#121214] leading-[0.95] tracking-tight max-w-3xl mx-auto drop-shadow-sm">
          Todo para tu moto en tu bolsillo.
          <br />
          <span className="text-[#e60000]">Repuestos exactos y despacho inmediato.</span>
        </h1>

        {/* 3. Subtext */}
        <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto mt-6 leading-relaxed font-normal">
          Selecciona tu modelo de moto, compra en 1-click y sigue el delivery en tiempo real por Starken o retira en 2 horas en nuestro local de Talca.
        </p>

        {/* 4. Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
          <button
            onClick={onOpenAppModal}
            className="flex items-center gap-2.5 bg-[#121214] hover:bg-black text-white px-6 py-3 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span className="text-base"></span>
            <div className="text-left">
              <span className="block text-[8px] uppercase tracking-wider text-zinc-400 leading-none">Disponible en</span>
              <span className="block text-xs font-bold leading-tight">App Store</span>
            </div>
          </button>

          <button
            onClick={onOpenAppModal}
            className="flex items-center gap-2.5 bg-[#121214] hover:bg-black text-white px-6 py-3 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span className="text-base">🤖</span>
            <div className="text-left">
              <span className="block text-[8px] uppercase tracking-wider text-zinc-400 leading-none">Descargar en</span>
              <span className="block text-xs font-bold leading-tight">Google Play</span>
            </div>
          </button>

          <button
            onClick={onOpenGarage}
            className="flex items-center gap-2 bg-[#e60000] hover:bg-[#cc0000] text-white px-6 py-3 rounded-full text-xs font-bold shadow-racing transition-all cursor-pointer"
          >
            <span>🏍️ Filtrar por Mi Moto</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 5. Centerpiece: iPhone 16 Pro Mockup with Floating Glass Cards */}
        <div className="mt-14 w-full max-w-5xl relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 px-4">
          {/* Left Floating Card */}
          <div
            onClick={() => onSelectCategory("128")}
            className="w-full sm:w-auto lg:max-w-[230px] glass-panel glass-panel-hover p-4 rounded-[24px] flex items-center gap-3.5 cursor-pointer text-left order-2 lg:order-1"
          >
            <img
              src="https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg"
              alt="Casco HJC Dakar"
              className="w-14 h-14 object-contain rounded-2xl bg-white/80 p-1.5 flex-shrink-0"
            />
            <div className="min-w-0">
              <span className="text-[9px] font-bold text-[#00bb76] uppercase tracking-wider flex items-center gap-1">
                <Shield size={10} /> ECE 22.06
              </span>
              <h5 className="text-xs font-bold text-[#121214] truncate">HJC RPH 60 Dakar</h5>
              <span className="text-xs font-extrabold text-[#e60000] block">$599.900 CLP</span>
            </div>
          </div>

          {/* Center: Real iPhone 16 Pro Mockup */}
          <div className="order-1 lg:order-2 flex-shrink-0">
            <IPhoneMockup
              onSelectCategory={onSelectCategory}
              onOpenGarage={onOpenGarage}
            />
          </div>

          {/* Right Floating Card */}
          <div
            onClick={() => onSelectCategory("36")}
            className="w-full sm:w-auto lg:max-w-[230px] glass-panel glass-panel-hover p-4 rounded-[24px] flex items-center gap-3.5 cursor-pointer text-left order-3"
          >
            <img
              src="https://motorock.cl/wp-content/uploads/2026/06/MOTUL-7100-10W-40.png"
              alt="Motul 7100"
              className="w-14 h-14 object-contain rounded-2xl bg-white/80 p-1.5 flex-shrink-0"
            />
            <div className="min-w-0">
              <span className="text-[9px] font-bold text-[#00bb76] uppercase tracking-wider block">
                100% Sintético Ester
              </span>
              <h5 className="text-xs font-bold text-[#121214] truncate">Motul 7100 10W-40</h5>
              <span className="text-xs font-extrabold text-[#e60000] block">$16.900 CLP</span>
            </div>
          </div>
        </div>

        {/* 6. Three Glass Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto w-full mt-14 text-left">
          <div className="glass-panel p-5 rounded-[24px] space-y-1">
            <span className="text-[11px] font-bold text-[#00bb76] uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 size={13} />
              <NumberTicker value={24} suffix=" a 48 Horas" />
            </span>
            <h4 className="text-sm font-bold text-[#121214]">Despacho Express a Todo Chile</h4>
            <p className="text-xs text-zinc-500">Envíos asegurados por Starken y Chilexpress directo a tu puerta.</p>
          </div>

          <div className="glass-panel p-5 rounded-[24px] space-y-1">
            <span className="text-[11px] font-bold text-[#e60000] uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 size={13} className="text-[#e60000]" />
              <NumberTicker value={726} prefix="+" suffix=" Repuestos" />
            </span>
            <h4 className="text-sm font-bold text-[#121214]">Garage y Compatibilidad Exacta</h4>
            <p className="text-xs text-zinc-500">Filtra por modelo y recibe la cadena, piñón y aceite correcto.</p>
          </div>

          <div className="glass-panel p-5 rounded-[24px] space-y-1">
            <span className="text-[11px] font-bold text-[#121214] uppercase tracking-wider flex items-center gap-1">
              <Clock size={13} className="text-[#e60000]" />
              <NumberTicker value={2} prefix="Listo en " suffix=" Horas" />
            </span>
            <h4 className="text-sm font-bold text-[#121214]">Retiro en Tienda Talca</h4>
            <p className="text-xs text-zinc-500">Compra en la app y retira listo en Av. 2 Sur 771 y 777.</p>
          </div>
        </div>
      </div>
    </ImageStreamHero>
  );
}
