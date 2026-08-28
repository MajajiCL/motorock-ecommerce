import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart, Search, Wrench, MapPin, Phone, ChevronDown, X, Shield, Sparkles, SlidersHorizontal, Flame } from "lucide-react";
import { ALL_PRODUCTS } from "../data/catalogData";

export default function Navbar({
  cartCount,
  onOpenCart,
  selectedBike,
  onOpenGarage,
  onClearGarage,
  searchQuery,
  onSearchChange,
  onSelectProduct
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

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

  // Click outside to close search
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 glass-nav shadow-2xl">
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-[#06080c] via-[#141a27] to-[#06080c] border-b border-white/5 py-1.5 px-4 text-[11px] font-medium text-gray-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/30 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider">
              <Flame size={12} className="animate-pulse" /> OFERTAS CYBER 2026
            </span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline">?? <strong>Env?os a todo Chile</strong> ? Gratis sobre $50.000</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1 hover:text-white transition-colors">
              <MapPin size={12} className="text-[#FF5500]" /> Talca: 2 Sur 771 y 777
            </span>
            <span className="hidden md:inline text-gray-600">?</span>
            <a
              href="https://wa.me/56956105413"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <Phone size={12} /> WhatsApp: +56 9 5610 5413
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FF5500] via-[#E04800] to-[#992200] p-0.5 shadow-lg shadow-[#FF5500]/25 group-hover:shadow-[#FF5500]/40 transition-all duration-300 transform group-hover:scale-105">
            <div className="w-full h-full bg-[#090c12] rounded-[14px] flex items-center justify-center">
              <span className="text-2xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">???</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-display font-black text-2xl tracking-tighter text-white group-hover:text-gray-100">
                MOTO<span className="text-[#FF5500]">ROCK</span>
              </span>
              <span className="bg-[#FF5500] text-black font-black text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">
                CHILE
              </span>
            </div>
            <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase block mt-1">
              Repuestos & Indumentaria Pro
            </span>
          </div>
        </a>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative hidden md:block" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={17} />
            <input
              type="text"
              placeholder="Buscar cascos LS2, cadenas DID, lubricantes Motul, repuestos..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
              className="w-full bg-[#0d111a] border border-[#222a3d] hover:border-[#313c56] focus:border-[#FF5500] text-sm text-white pl-11 pr-20 py-2.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF5500]/20 transition-all placeholder:text-gray-500 shadow-inner"
            />
            {searchQuery ? (
              <button
                onClick={() => {
                  onSearchChange("");
                  setSuggestions([]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1"
              >
                <X size={15} />
              </button>
            ) : (
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                <span className="bg-[#181f2f] text-gray-400 border border-[#263148] text-[10px] font-mono px-1.5 py-0.5 rounded">
                  726 items
                </span>
              </div>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {showSearch && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#0e121a] border border-[#263148] rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-[#1b2233] animate-in fade-in-50 duration-150">
              <div className="p-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-[#0a0d14] flex items-center justify-between">
                <span>Resultados R?pidos</span>
                <span className="text-[#FF5500]">{suggestions.length} encontrados</span>
              </div>
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    setShowSearch(false);
                  }}
                  className="p-3 hover:bg-[#161c28] flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    className="w-12 h-12 object-contain rounded-xl bg-[#141824] border border-[#222b3d] p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate group-hover:text-[#FF5500]">{item.name}</h4>
                    <p className="text-[11px] text-gray-400 truncate">{item.categories?.[0]?.name || "Repuestos"}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-[#FF5500] block">{item.priceFormatted}</span>
                    {item.inStock ? (
                      <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                        En Stock
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold text-red-400 bg-red-500/10 px-1.5 py-0.2 rounded border border-red-500/20">
                        Agotado
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Virtual Garage Cockpit Button */}
          <button
            onClick={onOpenGarage}
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl text-xs font-bold border transition-all duration-300 ${
              selectedBike
                ? "bg-[#FF5500]/15 border-[#FF5500] text-white shadow-lg shadow-[#FF5500]/20"
                : "bg-[#0f141f] border-[#222a3d] text-gray-300 hover:border-gray-500 hover:text-white"
            }`}
          >
            <div className="w-6 h-6 rounded-lg bg-[#FF5500] flex items-center justify-center text-xs">
              ???
            </div>
            <div className="text-left hidden lg:block">
              <span className="block text-[9px] text-gray-400 uppercase font-medium leading-none">Mi Garage</span>
              <span className="block font-black text-xs truncate max-w-[130px] mt-0.5">
                {selectedBike ? `${selectedBike.brand} ${selectedBike.model}` : "Seleccionar Moto"}
              </span>
            </div>
            {selectedBike && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onClearGarage();
                }}
                className="ml-1 text-gray-400 hover:text-white p-0.5 hover:bg-white/10 rounded"
                title="Quitar filtro"
              >
                <X size={12} />
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-gradient-to-r from-[#FF5500] to-[#E04800] hover:from-[#FF6611] hover:to-[#EB5500] text-white px-4 py-2.5 rounded-2xl font-black text-xs shadow-lg shadow-[#FF5500]/25 hover:shadow-[#FF5500]/40 transition-all transform active:scale-95"
          >
            <ShoppingCart size={17} />
            <span className="hidden sm:inline font-bold">Carrito</span>
            {cartCount > 0 && (
              <span className="bg-white text-[#FF5500] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="p-3 pt-0 md:hidden">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
          <input
            type="text"
            placeholder="Buscar en MotoRock..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#0f141f] border border-[#222a3d] text-xs text-white pl-10 pr-8 py-2 rounded-xl focus:outline-none focus:border-[#FF5500]"
          />
          {searchQuery && (
            <button onClick={() => onSearchChange("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
              <X size={14} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
