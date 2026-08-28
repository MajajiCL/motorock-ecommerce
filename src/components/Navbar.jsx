import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart, Search, MapPin, Phone, X, ChevronRight, Bike } from "lucide-react";
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-[11px] py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-[#FF5500] text-white text-[10px] font-bold px-2 py-0.5 rounded">
              CHILE
            </span>
            <span>Env?os a todo Chile v?a Starken y Chilexpress ? <strong>Gratis sobre $50.000</strong></span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-[#FF5500]" /> Talca: Av. 2 Sur 771 y 777
            </span>
            <span className="hidden md:inline text-slate-600">?</span>
            <a
              href="https://wa.me/56956105413"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:underline font-semibold"
            >
              <Phone size={12} /> WhatsApp: +56 9 5610 5413
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Official Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logoMotoRock}
            alt="MotoRock Chile"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative hidden md:block" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Buscar cascos, aceites Motul, cadenas DID, repuestos..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
              className="w-full bg-slate-50 border border-slate-300 hover:border-slate-400 focus:border-[#FF5500] text-sm text-slate-900 pl-10 pr-20 py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF5500] transition-colors placeholder:text-slate-400"
            />
            {searchQuery ? (
              <button
                onClick={() => {
                  onSearchChange("");
                  setSuggestions([]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X size={15} />
              </button>
            ) : (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-slate-400">
                726 productos
              </span>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {showSearch && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50 divide-y divide-slate-100">
              <div className="p-2.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 flex items-center justify-between">
                <span>Resultados de b?squeda</span>
                <span className="text-[#FF5500]">{suggestions.length} encontrados</span>
              </div>
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    setShowSearch(false);
                  }}
                  className="p-3 hover:bg-slate-50 flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    className="w-11 h-11 object-contain rounded-lg bg-slate-50 border border-slate-200 p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate hover:text-[#FF5500]">{item.name}</h4>
                    <p className="text-[11px] text-slate-500 truncate">{item.categories?.[0]?.name || "Repuestos"}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#FF5500] block">{item.priceFormatted}</span>
                    {item.inStock ? (
                      <span className="text-[9px] font-semibold text-emerald-700">En Stock</span>
                    ) : (
                      <span className="text-[9px] font-semibold text-red-600">Agotado</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Virtual Garage Vehicle Selector */}
          <button
            onClick={onOpenGarage}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all ${
              selectedBike
                ? "bg-orange-50 border-[#FF5500] text-[#FF5500]"
                : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-100"
            }`}
          >
            <span className="text-base">???</span>
            <div className="text-left hidden lg:block">
              <span className="block text-[9px] text-slate-400 uppercase leading-none">Mi Moto</span>
              <span className="block font-bold text-xs truncate max-w-[120px] text-slate-900 mt-0.5">
                {selectedBike ? `${selectedBike.brand} ${selectedBike.model}` : "Seleccionar"}
              </span>
            </div>
            {selectedBike && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onClearGarage();
                }}
                className="ml-1 text-slate-400 hover:text-slate-700 p-0.5 rounded"
                title="Quitar filtro"
              >
                <X size={12} />
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#FF5500] hover:bg-[#e64d00] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Carrito</span>
            {cartCount > 0 && (
              <span className="bg-white text-[#FF5500] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div className="p-3 pt-0 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
          <input
            type="text"
            placeholder="Buscar repuestos, cascos, aceites..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-900 pl-9 pr-8 py-2 rounded-lg focus:outline-none focus:border-[#FF5500]"
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
