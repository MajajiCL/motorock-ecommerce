import React, { useState } from "react";
import { X, Check, Search, AlertCircle } from "lucide-react";
import { ALL_BIKES } from "../data/catalogData";

export default function GarageSelector({ isOpen, onClose, onSelectBike, selectedBike }) {
  const [filterText, setFilterText] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("ALL");

  if (!isOpen) return null;

  const brands = ["ALL", ...Array.from(new Set(ALL_BIKES.map((b) => b.brand)))];

  const filteredBikes = ALL_BIKES.filter((b) => {
    const matchesBrand = selectedBrand === "ALL" || b.brand === selectedBrand;
    const matchesSearch =
      b.brand.toLowerCase().includes(filterText.toLowerCase()) ||
      b.model.toLowerCase().includes(filterText.toLowerCase()) ||
      b.engine.toLowerCase().includes(filterText.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bg-white/95 backdrop-blur-2xl border border-white/90 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-100 border border-orange-200 text-[#FF5500] flex items-center justify-center text-xl shadow-sm">
              ???
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Garage Virtual MotoRock</h3>
              <p className="text-xs text-slate-500">Selecciona tu moto para filtrar repuestos 100% compatibles</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-200">
            <X size={20} />
          </button>
        </div>

        {/* Brand Selector Tabs */}
        <div className="p-4 border-b border-slate-100 bg-white space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedBrand === brand
                    ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25"
                    : "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200"
                }`}
              >
                {brand === "ALL" ? "Todas las Marcas" : brand}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por modelo (ej: XR 150, FZ 25, MT-03, Tornado...)"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-900 pl-10 pr-4 py-2.5 rounded-full focus:outline-none focus:border-[#FF5500] shadow-inner"
            />
          </div>
        </div>

        {/* Bikes List */}
        <div className="p-4 overflow-y-auto flex-1 divide-y divide-slate-100">
          {filteredBikes.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">No encontramos modelos con ese filtro.</div>
          ) : (
            filteredBikes.map((bike) => {
              const isSelected = selectedBike?.id === bike.id;
              return (
                <div
                  key={bike.id}
                  onClick={() => {
                    onSelectBike(bike);
                    onClose();
                  }}
                  className={`p-3.5 hover:bg-orange-50/40 cursor-pointer rounded-2xl flex items-center justify-between transition-all my-1 ${
                    isSelected ? "bg-orange-50 border border-[#FF5500]/40 shadow-sm" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-800 font-black text-xs flex items-center justify-center shadow-sm">
                      {bike.brand.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        {bike.brand} {bike.model}
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-normal">
                          {bike.year}
                        </span>
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Cilindrada: {bike.engine} | Paso de Cadena: {bike.chainPitch} | Aceite: {bike.oilSpec}
                      </p>
                    </div>
                  </div>

                  <div>
                    {isSelected ? (
                      <span className="bg-[#FF5500] text-white p-1.5 rounded-full flex items-center justify-center shadow-sm">
                        <Check size={14} />
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-slate-600 hover:text-slate-950 px-3.5 py-1.5 rounded-full bg-slate-100 shadow-sm">
                        Elegir
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <AlertCircle size={14} className="text-[#FF5500]" /> El filtro ajustar? pi?ones, aceites y kits de arrastre.
          </span>
          <button onClick={onClose} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-full font-bold hover:bg-slate-300">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
