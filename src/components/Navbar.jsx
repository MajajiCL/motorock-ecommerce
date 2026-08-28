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
    <header className="sticky top-0 z-40 glass-nav-aero">
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border-b border-orange-500/15 py-1.5 px-4 text-[11px] font-medium text-slate-700">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 bg-[#FF5500] text-white px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wider shadow-sm shadow-[#FF5500]/30">
              <Flame size={12} className="animate-bounce" /> OFERTAS CYBER 2026
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-800">?? <strong>Env?os a todo Chile</strong> ? Gratis en compras sobre $50.000</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <span className="flex items-center gap-1 hover:text-slate-900 font-semibold transition-colors">
              <MapPin size={13} className="text-[#FF5500]" /> Talca: Av. 2 Sur 771 y 777
            </span>
            <span className="hidden md:inline text-slate-300">?</span>
            <a
              href="https://wa.me/56956105413"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-bold transition-colors"
            >
              <Phone size={13} /> WhatsApp: +56 9 5610 5413
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Official Logo */}
        <a href="#" className="flex items-center gap-2 group flex-shrink-0">
          <img
            src="./logo-motorock-600.png"
            alt="MotoRock Chile"
            className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback to text if image fails
              e.target.style.display = "none";
              if (e.target.nextSibling) e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="hidden items-center gap-1.5 font-display font-black text-2xl tracking-tight text-slate-900">
            <span>MOTO<span className="text-[#FF5500]">ROCK</span></span>
          </div>
        </a>

        {/* Search Bar with Liquid Glass styling */}
        <div className="flex-1 max-w-xl relative hidden md:block" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={17} />
            <input
              type="text"
              placeholder="Buscar cascos LS2, cadenas DID, aceites Motul, repuestos..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
              className="w-full bg-white/80 border border-slate-200/80 hover:border-slate-300 focus:border-[#FF5500] text-sm text-slate-900 pl-11 pr-24 py-2.5 rounded-full focus:outline-none focus:ring-4 focus:ring-[#FF5500]/10 transition-all placeholder:text-slate-400 shadow-sm shadow-slate-200/50"
            />
            {searchQuery ? (
              <button
                onClick={() => {
                  onSearchChange("");
                  setSuggestions([]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
              >
                <X size={15} />
              </button>
            ) : (
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                <span className="bg-slate-100 text-slate-500 border border-slate-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  726 items
                </span>
              </div>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {showSearch && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-slate-100 animate-in fade-in-50 duration-150">
              <div className="p-2.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 flex items-center justify-between">
                <span>Sugerencias en Vivo</span>
                <span className="text-[#FF5500] font-bold">{suggestions.length} productos</span>
              </div>
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    setShowSearch(false);
                  }}
                  className="p-3 hover:bg-orange-50/50 flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    className="w-12 h-12 object-contain rounded-xl bg-white border border-slate-100 p-1 flex-shrink-0 shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate hover:text-[#FF5500]">{item.name}</h4>
                    <p className="text-[11px] text-slate-500 truncate">{item.categories?.[0]?.name || "Repuestos"}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-[#FF5500] block">{item.priceFormatted}</span>
                    {item.inStock ? (
                      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200">
                        En Stock
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold text-red-600 bg-red-50 px-1.5 py-0.2 rounded-full border border-red-200">
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
            className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold border transition-all duration-300 ${
              selectedBike
                ? "bg-orange-50 border-[#FF5500] text-[#FF5500] shadow-sm shadow-[#FF5500]/20"
                : "bg-white/80 border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-white shadow-sm"
            }`}
          >
            <span className="text-base">???</span>
            <div className="text-left hidden lg:block">
              <span className="block text-[9px] text-slate-400 uppercase font-medium leading-none">Mi Garage</span>
              <span className="block font-black text-xs truncate max-w-[130px] mt-0.5 text-slate-900">
                {selectedBike ? `${selectedBike.brand} ${selectedBike.model}` : "Elegir Moto"}
              </span>
            </div>
            {selectedBike && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onClearGarage();
                }}
                className="ml-1 text-slate-400 hover:text-slate-800 p-0.5 hover:bg-slate-200 rounded-full"
                title="Quitar filtro"
              >
                <X size={12} />
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="liquid-btn text-white px-5 py-2.5 rounded-full font-black text-xs flex items-center gap-2 shadow-lg shadow-[#FF5500]/30 transform active:scale-95 cursor-pointer"
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
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
          <input
            type="text"
            placeholder="Buscar repuestos, cascos, aceites..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-white border border-slate-200 text-xs text-slate-900 pl-10 pr-8 py-2 rounded-full focus:outline-none focus:border-[#FF5500]"
          />
          {searchQuery && (
            <button onClick={() => onSearchChange("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400">
              <X size={14} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
