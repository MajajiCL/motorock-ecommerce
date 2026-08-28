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
    <header className="sticky top-0 z-40 bg-[#f6f6fa]/95 backdrop-blur-md border-b border-[#e5e5eb]">
      {/* Barra de Notificación Superior */}
      <div className="bg-[#151581] text-white text-[11px] py-1.5 px-4 font-normal">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#00bb76] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
              APP 2026
            </span>
            <span className="text-slate-200">
              Despacho Express Starken y Chilexpress • <strong>Retiro en 2 horas en Talca</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <MapPin size={11} className="text-[#00bb76]" /> Av. 2 Sur 771 y 777, Talca
            </span>
            <span className="hidden sm:inline text-indigo-400">•</span>
            <button
              onClick={onOpenAppModal}
              className="text-[#00bb76] hover:underline font-medium cursor-pointer"
            >
              Descargar App Móvil
            </button>
          </div>
        </div>
      </div>

      {/* Cabecera Principal */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo Oficial */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logoMotoRock}
            alt="MotoRock Chile"
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </a>

        {/* Barra de Búsqueda */}
        <div className="flex-1 max-w-lg relative hidden md:block" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a1a1cd]" size={15} />
            <input
              type="text"
              placeholder="Buscar cascos, aceites Motul, cadenas DID, repuestos..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
              className="w-full bg-white border border-[#e5e5eb] focus:border-[#5465ff] text-xs text-[#151581] pl-9 pr-20 py-2.5 rounded-full focus:outline-none focus:ring-1 focus:ring-[#5465ff] transition-all placeholder:text-[#a1a1cd]"
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
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-medium text-[#a1a1cd]">
                726 repuestos
              </span>
            )}
          </div>

          {/* Menú Autocompletar */}
          {showSearch && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#e5e5eb] rounded-2xl shadow-lovi overflow-hidden z-50 divide-y divide-slate-100">
              <div className="p-3 text-[10px] font-bold text-[#a1a1cd] uppercase tracking-wider bg-[#f6f6fa] flex items-center justify-between">
                <span>Resultados de búsqueda</span>
                <span className="text-[#151581]">{suggestions.length} encontrados</span>
              </div>
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    setShowSearch(false);
                  }}
                  className="p-3 hover:bg-[#f6f6fa] flex items-center gap-3 cursor-pointer transition-colors"
                >
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    className="w-10 h-10 object-contain rounded-xl bg-[#f6f6fa] border border-[#e5e5eb] p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-[#151581] truncate">{item.name}</h4>
                    <p className="text-[11px] text-[#a1a1cd] truncate">{item.categories?.[0]?.name || "Repuestos"}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#151581] block">{item.priceFormatted}</span>
                    {item.inStock ? (
                      <span className="text-[9px] font-medium text-[#00bb76]">✓ En Stock</span>
                    ) : (
                      <span className="text-[9px] font-medium text-slate-400">Agotado</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-2.5">
          {/* Botón Descarga App */}
          <button
            onClick={onOpenAppModal}
            className="hidden sm:flex items-center gap-2 bg-[#151581] hover:bg-[#0e0e5a] text-white px-4 py-2 rounded-full font-medium text-xs shadow-sm transition-all cursor-pointer"
          >
            <Smartphone size={14} className="text-[#00bb76]" />
            <span>Descargar App</span>
          </button>

          {/* Selector Mi Moto */}
          <button
            onClick={onOpenGarage}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium border transition-all cursor-pointer ${
              selectedBike
                ? "bg-indigo-50 border-[#151581] text-[#151581]"
                : "bg-white border-[#e5e5eb] text-[#292824] hover:bg-slate-50"
            }`}
          >
            <span className="text-sm">🏍️</span>
            <div className="text-left hidden lg:block">
              <span className="block text-[9px] text-[#a1a1cd] uppercase leading-none">Mi Moto</span>
              <span className="block font-semibold text-xs truncate max-w-[110px] text-[#151581] mt-0.5">
                {selectedBike ? `${selectedBike.brand} ${selectedBike.model}` : "Filtrar"}
              </span>
            </div>
            {selectedBike && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onClearGarage();
                }}
                className="ml-1 text-[#a1a1cd] hover:text-[#151581]"
                title="Quitar filtro"
              >
                <X size={12} />
              </span>
            )}
          </button>

          {/* Carrito */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-white border border-[#e5e5eb] hover:border-[#151581] text-[#151581] px-3.5 py-2 rounded-full font-semibold text-xs shadow-sm transition-all cursor-pointer"
          >
            <ShoppingCart size={15} />
            <span className="hidden sm:inline">Carrito</span>
            {cartCount > 0 && (
              <span className="bg-[#151581] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Buscador Móvil */}
      <div className="p-3 pt-0 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a1a1cd]" size={14} />
          <input
            type="text"
            placeholder="Buscar repuestos, cascos, aceites..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-white border border-[#e5e5eb] text-xs text-[#151581] pl-8 pr-8 py-2 rounded-full focus:outline-none focus:border-[#5465ff]"
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
