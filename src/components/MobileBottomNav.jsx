import React from "react";
import { Home, ShoppingCart, Search, Smartphone } from "lucide-react";

export default function MobileBottomNav({
  cartCount,
  onOpenCart,
  selectedBike,
  onOpenGarage,
  onOpenAppModal,
  onFocusSearch
}) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 px-3 pb-3 pointer-events-none">
      <nav className="pointer-events-auto glass-panel rounded-full px-4 py-2.5 shadow-[0_10px_35px_rgba(15,23,42,0.15)] border border-white/90 backdrop-blur-2xl flex items-center justify-around max-w-md mx-auto">
        {/* 1. Inicio */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-[#e60000] transition-colors p-1"
          aria-label="Inicio"
        >
          <Home size={18} />
          <span className="text-[9px] font-bold">Inicio</span>
        </button>

        {/* 2. Mi Moto (Garage) */}
        <button
          onClick={onOpenGarage}
          className={`flex flex-col items-center gap-0.5 transition-colors p-1 relative ${
            selectedBike ? "text-[#e60000] font-extrabold" : "text-slate-600 hover:text-[#e60000]"
          }`}
          aria-label="Mi Moto"
        >
          <span className="text-base leading-none">🏍️</span>
          <span className="text-[9px] font-bold truncate max-w-[55px]">
            {selectedBike ? selectedBike.brand : "Mi Moto"}
          </span>
          {selectedBike && (
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[#00bb76] ring-1 ring-white" />
          )}
        </button>

        {/* 3. Buscar */}
        <button
          onClick={onFocusSearch}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-[#e60000] transition-colors p-1"
          aria-label="Buscar"
        >
          <Search size={18} />
          <span className="text-[9px] font-bold">Buscar</span>
        </button>

        {/* 4. Carrito */}
        <button
          onClick={onOpenCart}
          className="flex flex-col items-center gap-0.5 text-[#0f172a] hover:text-[#e60000] transition-colors p-1 relative"
          aria-label="Carrito de compras"
        >
          <div className="relative">
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-[#e60000] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[9px] font-bold">Carrito</span>
        </button>

        {/* 5. App Móvil */}
        <button
          onClick={onOpenAppModal}
          className="flex flex-col items-center gap-0.5 text-[#e60000] transition-colors p-1"
          aria-label="App Móvil"
        >
          <Smartphone size={18} className="animate-pulse" />
          <span className="text-[9px] font-extrabold">App</span>
        </button>
      </nav>
    </div>
  );
}
