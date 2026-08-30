import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart, Search, MapPin, Smartphone, X } from "lucide-react";
import { ALL_PRODUCTS } from "../data/catalogData";
import logoMotoRock from "../assets/logo-motorock-600.png";

export default function Navbar({
  cartCount,
  onOpenCart,
  selectedBike,
  onOpenGarage,
  onClearGarage,
  searchQuery,
  onSearchChange,
  onSelectProduct,
  onOpenAppModal,
  searchInputRef
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const q = searchQuery.toLowerCase().trim();
    const matches = ALL_PRODUCTS.filter((p) => {
      const name = (p.name || "").toLowerCase();
      const sku = (p.sku || "").toLowerCase();
      const cat = (p.categories?.[0]?.name || "").toLowerCase();
      return name.includes(q) || sku.includes(q) || cat.includes(q);
    }).slice(0, 6);

    setSuggestions(matches);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-2xl border-b border-white/60 shadow-[0_4px_30px_rgba(15,23,42,0.03)] w-full">
      {/* Top Notice Bar */}
      <div className="bg-zinc-900/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Compact delivery badge */}
          <div className="flex items-center gap-1.5 truncate">
            <span className="bg-[#e60000] text-white text-[8px] sm:text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0 shadow-sm">
              MOTO ROCK
            </span>
            <span className="text-zinc-300 truncate text-[10px] sm:text-xs">
              🚚 Despacho Express Starken • <strong className="text-white hidden xs:inline">Retiro en 2h en Talca</strong>
            </span>
          </div>

          {/* Right: Quick Location / App link */}
          <div className="flex items-center gap-2 sm:gap-4 text-zinc-400 flex-shrink-0">
            <span className="hidden md:flex items-center gap-1 text-xs">
              <MapPin size={11} className="text-[#e60000]" /> Talca, Maule
            </span>
            <button
              onClick={onOpenAppModal}
              className="text-[#e60000] hover:underline font-extrabold text-[10px] sm:text-xs cursor-pointer"
            >
              Descargar App
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3.5 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logoMotoRock}
            alt="MotoRock Chile"
            className="h-8 sm:h-11 w-auto object-contain drop-shadow-sm"
          />
        </a>

        {/* Desktop & Tablet Search Bar */}
        <div className="flex-1 max-w-lg relative hidden md:block" ref={searchContainerRef}>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
            <input
              type="text"
              placeholder="Buscar cascos HJC, aceites Motul, cadenas DID, repuestos..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
              className="w-full bg-white/80 backdrop-blur-md border border-white/90 focus:border-[#e60000] text-xs text-[#0f172a] pl-9 pr-20 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500/20 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all placeholder:text-slate-400"
            />
            {searchQuery ? (
              <button
                onClick={() => {
                  onSearchChange("");
                  setSuggestions([]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X size={14} />
              </button>
            ) : (
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-extrabold text-[#e60000] font-heading">
                726 repuestos
              </span>
            )}
          </div>

          {/* Autocomplete Menu */}
          {showSearch && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 glass-panel rounded-2xl shadow-xl overflow-hidden z-50 divide-y divide-slate-100/60">
              <div className="p-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white/60 flex items-center justify-between">
                <span>Resultados de búsqueda</span>
                <span className="text-[#e60000] font-bold">{suggestions.length} encontrados</span>
              </div>
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    setShowSearch(false);
                  }}
                  className="p-3 hover:bg-white/90 flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    className="w-10 h-10 object-contain rounded-xl bg-white/80 border border-white/60 p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#0f172a] truncate font-heading">{item.name}</h4>
                    <p className="text-[11px] text-slate-500 truncate">{item.categories?.[0]?.name || "Repuestos"}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-[#e60000] block font-heading">{item.priceFormatted}</span>
                    {item.inStock ? (
                      <span className="text-[9px] font-bold text-[#00bb76]">✓ En Stock</span>
                    ) : (
                      <span className="text-[9px] font-medium text-slate-400">Agotado</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Desktop App Download Button */}
          <button
            onClick={onOpenAppModal}
            className="hidden lg:flex items-center gap-2 bg-[#e60000] hover:bg-[#cc0000] text-white px-4 py-2 rounded-full font-extrabold text-xs shadow-racing transition-all cursor-pointer font-heading"
          >
            <Smartphone size={14} />
            <span>Descargar App</span>
          </button>

          {/* Virtual Garage Selector */}
          <button
            onClick={onOpenGarage}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedBike
                ? "bg-red-50/90 border border-[#e60000] text-[#e60000] shadow-sm"
                : "glass-pill text-[#0f172a] hover:bg-white/95"
            }`}
          >
            <span className="text-sm">🏍️</span>
            <div className="text-left hidden sm:block">
              <span className="block text-[9px] text-slate-400 uppercase leading-none">Mi Moto</span>
              <span className="block font-extrabold text-xs truncate max-w-[90px] lg:max-w-[120px] text-[#0f172a] mt-0.5 font-heading">
                {selectedBike ? `${selectedBike.brand} ${selectedBike.model}` : "Filtrar"}
              </span>
            </div>
            {selectedBike && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onClearGarage();
                }}
                className="ml-0.5 text-slate-400 hover:text-[#e60000]"
                title="Quitar filtro"
              >
                <X size={12} />
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-1.5 sm:gap-2 bg-[#0f172a] hover:bg-black text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            <ShoppingCart size={15} />
            <span className="hidden sm:inline">Carrito</span>
            {cartCount > 0 && (
              <span className="bg-[#e60000] text-white text-[10px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-3 pb-2.5 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Buscar repuestos, cascos, aceites..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-white/90 backdrop-blur-md border border-white/90 text-xs text-[#0f172a] pl-8 pr-8 py-2 rounded-full focus:outline-none focus:border-[#e60000] shadow-sm"
          />
          {searchQuery && (
            <button onClick={() => onSearchChange("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400">
              <X size={13} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
