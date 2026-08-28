import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart, Search, Wrench, MapPin, Phone, ChevronDown, X, Shield, Sparkles } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-40 bg-[#0b0d13]/95 backdrop-blur-md border-b border-[#222736]">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-[#FF5500] via-[#E04800] to-[#FF5500] text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="bg-black/30 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">Chile</span>
            <span>?? <strong>Env?os a todo Chile</strong> | Gratis en compras sobre $50.000</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1"><MapPin size={12} /> Locales Talca: 2 Sur 771 y 777</span>
            <a href="https://wa.me/56956105413" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
              <Phone size={12} /> WhatsApp: +56 9 5610 5413
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF5500] to-[#B33000] flex items-center justify-center shadow-lg shadow-[#FF5500]/30 group-hover:scale-105 transition-transform">
            <span className="text-xl">???</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-2xl tracking-tighter text-white">MOTO<span className="text-[#FF5500]">ROCK</span></span>
              <span className="bg-[#FF5500]/20 text-[#FF5500] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#FF5500]/30">CL</span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">Talca ? Motos & Repuestos</p>
          </div>
        </a>

        {/* Search Bar with Instant Autocomplete */}
        <div className="flex-1 max-w-xl relative hidden md:block" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar cascos, transmisiones, aceites Motul, repuestos..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
              className="w-full bg-[#151822] border border-[#252b3d] text-sm text-white pl-10 pr-10 py-2.5 rounded-xl focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] transition-all placeholder:text-gray-500"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  onSearchChange("");
                  setSuggestions([]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {showSearch && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#151822] border border-[#2c3347] rounded-xl shadow-2xl overflow-hidden z-50 divide-y divide-[#22283a]">
              <div className="p-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-[#10121a]">
                Resultados R?pidos ({suggestions.length})
              </div>
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    setShowSearch(false);
                  }}
                  className="p-3 hover:bg-[#1f2433] flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <img
                    src={item.primaryImage || "https://placehold.co/80x80/222/fff?text=Moto"}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-lg bg-black/40 border border-[#2c3347]"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
                    <p className="text-xs text-gray-400 truncate">{item.categories?.[0]?.name || "Repuestos"}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-[#FF5500]">{item.priceFormatted}</span>
                    {item.inStock ? (
                      <span className="block text-[10px] text-emerald-400 font-medium">En Stock</span>
                    ) : (
                      <span className="block text-[10px] text-red-400 font-medium">Agotado</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Actions: Virtual Garage & Cart Trigger */}
        <div className="flex items-center gap-3">
          {/* Virtual Garage Button */}
          <button
            onClick={onOpenGarage}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
              selectedBike
                ? "bg-[#FF5500]/10 border-[#FF5500] text-[#FF5500] shadow-sm shadow-[#FF5500]/20"
                : "bg-[#151822] border-[#252b3d] text-gray-300 hover:border-gray-500 hover:text-white"
            }`}
          >
            <span className="text-base">???</span>
            <div className="text-left hidden lg:block">
              <span className="block text-[10px] text-gray-400 uppercase leading-tight font-medium">Tu Moto</span>
              <span className="block font-bold truncate max-w-[120px]">
                {selectedBike ? `${selectedBike.brand} ${selectedBike.model}` : "Seleccionar"}
              </span>
            </div>
            {selectedBike && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onClearGarage();
                }}
                className="ml-1 text-gray-400 hover:text-white p-0.5 rounded"
                title="Quitar filtro"
              >
                <X size={12} />
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 bg-[#FF5500] hover:bg-[#E04800] text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-[#FF5500]/25 transition-all transform active:scale-95"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Carrito</span>
            {cartCount > 0 && (
              <span className="bg-white text-[#FF5500] text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="p-3 pt-0 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Buscar productos en MotoRock..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#151822] border border-[#252b3d] text-xs text-white pl-9 pr-8 py-2 rounded-lg focus:outline-none focus:border-[#FF5500]"
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
