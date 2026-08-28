import React, { useState } from "react";
import { X, Check, Search, ShieldCheck, Wrench } from "lucide-react";
import { POPULAR_BIKES } from "../data/catalogData";

export default function GarageSelector({ isOpen, onClose, onSelectBike, selectedBike }) {
  const [brandFilter, setBrandFilter] = useState("all");
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const brands = ["all", "HONDA", "YAMAHA", "SUZUKI", "KAWASAKI", "KTM", "BAJAJ", "BMW", "ROYAL ENFIELD", "LONCIN", "EUROMOT"];

  const filteredBikes = POPULAR_BIKES.filter((b) => {
    const matchesBrand = brandFilter === "all" || b.brand.toUpperCase() === brandFilter;
    const matchesSearch =
      search === "" ||
      (b.brand + " " + b.model + " " + b.displacement).toLowerCase().includes(search.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-[32px] w-full max-w-2xl shadow-lovi border border-[#e5e5eb] overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 border-b border-[#e5e5eb] flex items-center justify-between bg-[#f6f6fa]">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🏍️</span>
            <div>
              <h3 className="font-semibold text-[#151581] text-sm">Garage Virtual MotoRock</h3>
              <p className="text-xs text-[#a1a1cd]">Selecciona tu modelo y filtra solo repuestos 100% compatibles</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-[#151581] p-1.5 rounded-full hover:bg-slate-200 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        <div className="p-4 border-b border-[#e5e5eb] space-y-3 bg-white">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a1a1cd]" size={15} />
            <input
              type="text"
              placeholder="Buscar por modelo (ej: MT-03, CB 190R, Duke 390, Pulsar NS200)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#f6f6fa] border border-[#e5e5eb] text-xs text-[#151581] pl-9 pr-4 py-2 rounded-full focus:outline-none focus:border-[#151581]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setBrandFilter(b)}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-colors flex-shrink-0 cursor-pointer ${
                  brandFilter === b
                    ? "bg-[#151581] text-white"
                    : "bg-[#f6f6fa] text-[#151581] hover:bg-slate-200 border border-[#e5e5eb]"
                }`}
              >
                {b === "all" ? "Todas las Marcas" : b}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredBikes.map((bike) => {
            const isSelected = selectedBike?.id === bike.id;
            return (
              <div
                key={bike.id}
                onClick={() => {
                  onSelectBike(bike);
                  onClose();
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? "bg-indigo-50 border-[#151581] ring-1 ring-[#151581]"
                    : "bg-white border-[#e5e5eb] hover:border-slate-300 hover:bg-[#f6f6fa]"
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold text-[#a1a1cd] uppercase">{bike.brand}</span>
                  <h4 className="text-xs font-bold text-[#151581]">{bike.model}</h4>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500">
                    <span>Paso: {bike.chainPitch}</span>
                    <span>•</span>
                    <span>{bike.oilSpec}</span>
                  </div>
                </div>

                {isSelected ? (
                  <span className="w-6 h-6 rounded-full bg-[#151581] text-white flex items-center justify-center text-xs">
                    <Check size={13} />
                  </span>
                ) : (
                  <span className="text-xs text-slate-400 font-semibold">Seleccionar</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-[#f6f6fa] border-t border-[#e5e5eb] flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-600">
            <ShieldCheck size={14} className="text-[#00bb76]" />
            <span>Filtro de cadenas, bujías y aceites garantizado.</span>
          </div>
          {selectedBike && (
            <button
              onClick={() => {
                onSelectBike(null);
                onClose();
              }}
              className="text-red-600 hover:underline font-semibold"
            >
              Quitar Selección
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
