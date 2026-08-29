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
  onOpenAppModal
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e4e4e7] shadow-sm">
      {/* Top Notice Bar */}
      <div className="bg-[#121214] text-white text-[11px] py-1.5 px-4 font-normal border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#e60000] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              MOTO ROCK 2026
            </span>
            <span className="text-zinc-300">
              Despacho Express Starken y Chilexpress • <strong>Retiro en 2 horas en Talca (Av. 2 Sur 771-777)</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1">
              <MapPin size={11} className="text-[#e60000]" /> Talca, Región del Maule
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <button
              onClick={onOpenAppModal}
              className="text-[#e60000] hover:underline font-bold cursor-pointer"
            >
              Descargar App Móvil
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logoMotoRock}
            alt="MotoRock Chile"
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </a>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg relative hidden md:block" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={15} />
            <input
              type="text"
              placeholder="Buscar cascos HJC, aceites Motul, cadenas DID, repuestos..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
              className="w-full bg-[#f8f9fa] border border-[#e4e4e7] focus:border-[#e60000] text-xs text-[#121214] pl-9 pr-20 py-2.5 rounded-full focus:outline-none focus:ring-1 focus:ring-[#e60000] transition-all placeholder:text-zinc-400"
            />
            {searchQuery ? (
              <button
                onClick={() => {
                  onSearchChange("");
                  setSuggestions([]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
              >
                <X size={14} />
              </button>
            ) : (
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#e60000]">
                726 repuestos
              </span>
            )}
          </div>

          {/* Autocomplete Menu */}
          {showSearch && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#e4e4e7] rounded-2xl shadow-clean overflow-hidden z-50 divide-y divide-zinc-100">
              <div className="p-3 text-[10px] font-bold text-zinc-400 uppercase tracking-wider bg-[#f8f9fa] flex items-center justify-between">
                <span>Resultados de búsqueda</span>
                <span className="text-[#e60000]">{suggestions.length} encontrados</span>
              </div>
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    setShowSearch(false);
                  }}
                  className="p-3 hover:bg-[#f8f9fa] flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    className="w-10 h-10 object-contain rounded-xl bg-[#f8f9fa] border border-[#e4e4e7] p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#121214] truncate">{item.name}</h4>
                    <p className="text-[11px] text-zinc-500 truncate">{item.categories?.[0]?.name || "Repuestos"}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#e60000] block">{item.priceFormatted}</span>
                    {item.inStock ? (
                      <span className="text-[9px] font-bold text-[#00bb76]">✓ En Stock</span>
                    ) : (
                      <span className="text-[9px] font-medium text-zinc-400">Agotado</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* App Download Button */}
          <button
            onClick={onOpenAppModal}
            className="hidden sm:flex items-center gap-2 bg-[#e60000] hover:bg-[#cc0000] text-white px-4 py-2 rounded-full font-bold text-xs shadow-racing transition-all cursor-pointer"
          >
            <Smartphone size={14} />
            <span>Descargar App</span>
          </button>

          {/* Virtual Garage Selector */}
          <button
            onClick={onOpenGarage}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
              selectedBike
                ? "bg-red-50 border-[#e60000] text-[#e60000]"
                : "bg-white border-[#e4e4e7] text-[#121214] hover:bg-zinc-50"
            }`}
          >
            <span className="text-sm">🏍️</span>
            <div className="text-left hidden lg:block">
              <span className="block text-[9px] text-zinc-400 uppercase leading-none">Mi Moto</span>
              <span className="block font-bold text-xs truncate max-w-[110px] text-[#121214] mt-0.5">
                {selectedBike ? `${selectedBike.brand} ${selectedBike.model}` : "Filtrar"}
              </span>
            </div>
            {selectedBike && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onClearGarage();
                }}
                className="ml-1 text-zinc-400 hover:text-[#e60000]"
                title="Quitar filtro"
              >
                <X size={12} />
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#121214] hover:bg-black text-white px-4 py-2 rounded-full font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            <ShoppingCart size={15} />
            <span className="hidden sm:inline">Carrito</span>
            {cartCount > 0 && (
              <span className="bg-[#e60000] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="p-3 pt-0 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
          <input
            type="text"
            placeholder="Buscar repuestos, cascos, aceites..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#f8f9fa] border border-[#e4e4e7] text-xs text-[#121214] pl-8 pr-8 py-2 rounded-full focus:outline-none focus:border-[#e60000]"
          />
          {searchQuery && (
            <button onClick={() => onSearchChange("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400">
              <X size={13} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
