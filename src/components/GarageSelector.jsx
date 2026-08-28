import React, { useState } from "react";
import { X, Check, Search, ShieldCheck } from "lucide-react";
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
      <div className="bg-white rounded-[32px] w-full max-w-2xl shadow-motorock border border-[#e4e4e7] overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 border-b border-[#e4e4e7] flex items-center justify-between bg-[#f8f9fa]">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🏍️</span>
            <div>
              <h3 className="font-bold text-[#121214] text-sm">Garage Virtual MotoRock</h3>
              <p className="text-xs text-zinc-400">Selecciona tu modelo y filtra solo repuestos 100% compatibles</p>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-[#121214] p-1.5 rounded-full hover:bg-zinc-200 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        <div className="p-4 border-b border-[#e4e4e7] space-y-3 bg-white">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={15} />
            <input
              type="text"
              placeholder="Buscar por modelo (ej: MT-03, CB 190R, Duke 390, Pulsar NS200)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#f8f9fa] border border-[#e4e4e7] text-xs text-[#121214] pl-9 pr-4 py-2 rounded-full focus:outline-none focus:border-[#e60000]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setBrandFilter(b)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-colors flex-shrink-0 cursor-pointer ${
                  brandFilter === b
                    ? "bg-[#e60000] text-white shadow-motorock-red"
                    : "bg-[#f8f9fa] text-[#121214] hover:bg-zinc-200 border border-[#e4e4e7]"
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
                    ? "bg-red-50 border-[#e60000] ring-1 ring-[#e60000]"
                    : "bg-white border-[#e4e4e7] hover:border-zinc-300 hover:bg-[#f8f9fa]"
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase">{bike.brand}</span>
                  <h4 className="text-xs font-bold text-[#121214]">{bike.model}</h4>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-zinc-500">
                    <span>Paso: {bike.chainPitch}</span>
                    <span>•</span>
                    <span>{bike.oilSpec}</span>
                  </div>
                </div>

                {isSelected ? (
                  <span className="w-6 h-6 rounded-full bg-[#e60000] text-white flex items-center justify-center text-xs">
                    <Check size={13} />
                  </span>
                ) : (
                  <span className="text-xs text-zinc-400 font-semibold">Seleccionar</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-[#f8f9fa] border-t border-[#e4e4e7] flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-zinc-600">
            <ShieldCheck size={14} className="text-[#00bb76]" />
            <span>Filtro de cadenas, bujías y aceites garantizado.</span>
          </div>
          {selectedBike && (
            <button
              onClick={() => {
                onSelectBike(null);
                onClose();
              }}
              className="text-[#e60000] hover:underline font-bold"
            >
              Quitar Selección
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
