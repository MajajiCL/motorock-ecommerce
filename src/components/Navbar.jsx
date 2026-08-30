import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart, Search, Smartphone, Menu, Flame, X, User, HelpCircle, PackageCheck } from "lucide-react";
import { ALL_PRODUCTS } from "../data/catalogData";
import logoMotoRock from "../assets/logo-motorock-600.png";

const CATEGORIES_NAV = [
  { id: "128", name: "CASCOS", slug: "cascos" },
  { id: "36", name: "ACEITES", slug: "aceites" },
  { id: "47", name: "CADENAS", slug: "cadenas" },
  { id: "47", name: "REPUESTOS", slug: "repuestos" },
  { id: "116", name: "ACCESORIOS", slug: "accesorios" },
  { id: "36", name: "LUBRICANTES", slug: "lubricantes" },
  { id: "brands", name: "MARCAS", slug: "marcas" },
];

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
  activeCategory,
  onSelectCategory,
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
    <header className="sticky top-0 z-40 bg-[#0d0e12] border-b border-[#1e1f26] shadow-xl w-full">
      {/* 1. Top Notice Bar */}
      <div className="bg-[#08080a] text-zinc-400 text-[11px] py-1.5 px-4 border-b border-[#1a1b22]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left notice items */}
          <div className="flex items-center gap-4 sm:gap-6 truncate text-xs">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="text-[#e60000] font-black">⚡</span> Despacho express en 24h
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-zinc-300">
              <span className="text-[#e60000]">📍</span> Retiro en 2h en Talca
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-zinc-300">
              <span className="text-[#e60000]">📦</span> +726 productos
            </span>
          </div>

          {/* Right helper links */}
          <div className="flex items-center gap-4 text-zinc-400 text-xs flex-shrink-0">
            <a href="https://wa.me/56976967438" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Ayuda
            </a>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <button onClick={onOpenAppModal} className="hover:text-white transition-colors hidden sm:inline">
              Seguimiento
            </button>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <button onClick={onOpenGarage} className="hover:text-white flex items-center gap-1 transition-colors">
              <User size={12} />
              <span>Mi cuenta</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Brand Flame Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logoMotoRock}
            alt="MotoRock Chile"
            className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(230,0,0,0.4)]"
          />
        </a>

        {/* Center Search Bar */}
        <div className="flex-1 max-w-2xl relative hidden md:block" ref={searchContainerRef}>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar cascos HJC, aceites Motul, cadenas DID, repuestos..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
              className="w-full bg-[#16171d] border border-[#262730] focus:border-[#e60000] text-xs text-white pl-4 pr-10 py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 transition-all placeholder:text-zinc-500"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          </div>

          {/* Autocomplete Menu */}
          {showSearch && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#121318] border border-[#262730] rounded-xl shadow-2xl overflow-hidden z-50 divide-y divide-[#1e1f26]">
              <div className="p-2.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wider bg-[#16171d] flex items-center justify-between">
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
                  className="p-3 hover:bg-[#1c1d24] flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    className="w-10 h-10 object-contain rounded-lg bg-[#1a1b22] p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate font-heading">{item.name}</h4>
                    <p className="text-[11px] text-zinc-400 truncate">{item.categories?.[0]?.name || "Repuestos"}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-[#e60000] block font-heading">{item.priceFormatted}</span>
                    {item.inStock ? (
                      <span className="text-[9px] font-bold text-[#00bb76]">✓ En Stock</span>
                    ) : (
                      <span className="text-[9px] font-medium text-zinc-500">Agotado</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Descargar App Button */}
          <button
            onClick={onOpenAppModal}
            className="flex items-center gap-2 border border-red-600/70 hover:border-red-500 text-[#ff3333] hover:bg-red-600/10 px-3.5 py-2 rounded-lg font-bold text-xs transition-all cursor-pointer"
          >
            <Smartphone size={15} />
            <span className="hidden sm:inline">Descargar App</span>
          </button>

          {/* Virtual Garage Button */}
          <button
            onClick={onOpenGarage}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedBike
                ? "bg-[#e60000] text-white shadow-racing-red"
                : "bg-[#16171d] border border-white/10 hover:border-white/20 text-white"
            }`}
          >
            <span className="text-sm">🏍️</span>
            <span className="hidden sm:inline">
              {selectedBike ? `${selectedBike.brand} ${selectedBike.model}` : "Mi Moto"}
            </span>
            {selectedBike && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onClearGarage();
                }}
                className="ml-1 text-white/80 hover:text-white"
                title="Quitar moto"
              >
                <X size={13} />
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#16171d] border border-white/10 hover:border-white/20 text-white px-3.5 py-2 rounded-lg font-bold text-xs transition-all cursor-pointer"
          >
            <ShoppingCart size={15} />
            <span className="hidden sm:inline">Carrito</span>
            <span className="bg-[#e60000] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* 3. Sub-Navbar de Categorías */}
      <div className="bg-[#101116] border-t border-[#1a1b22] px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            {/* Categorías Button (Red Block) */}
            <button
              onClick={() => onSelectCategory("all")}
              className="bg-[#e60000] hover:bg-[#cc0000] text-white font-black text-xs px-6 py-2.5 uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer font-heading"
            >
              <Menu size={15} />
              <span>Categorías</span>
            </button>

            {/* Horizontal Links */}
            <nav className="flex items-center space-x-1 pl-4">
              {CATEGORIES_NAV.map((cat) => {
                const isActive = String(activeCategory) === String(cat.id);
                return (
                  <button
                    key={cat.name}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`px-4 py-2.5 text-xs font-extrabold tracking-wide uppercase transition-colors font-heading ${
                      isActive
                        ? "text-[#00d2ff] border-b-2 border-[#00d2ff]"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Ofertas Link (Right) */}
          <button
            onClick={() => onSelectCategory("ofertas")}
            className="flex items-center gap-1.5 text-[#ff3333] hover:text-white font-extrabold text-xs uppercase tracking-wider transition-colors font-heading py-2.5 pr-2"
          >
            <Flame size={15} className="text-[#e60000]" />
            <span>Ofertas</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-3 pb-2.5 md:hidden bg-[#0d0e12]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Buscar repuestos, cascos, aceites..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#16171d] border border-[#262730] text-xs text-white pl-8 pr-8 py-2 rounded-lg focus:outline-none focus:border-[#e60000]"
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
