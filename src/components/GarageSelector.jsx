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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#12151f] border border-[#272e42] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-[#222738] flex items-center justify-between bg-[#151926]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] flex items-center justify-center text-xl">
              ???
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Garage Virtual MotoRock</h3>
              <p className="text-xs text-gray-400">Selecciona tu moto para filtrar repuestos 100% compatibles</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5">
            <X size={20} />
          </button>
        </div>

        {/* Brand Selector Tabs */}
        <div className="p-4 border-b border-[#222738] bg-[#0e111a] space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedBrand === brand
                    ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25"
                    : "bg-[#181d2c] text-gray-400 hover:text-white hover:bg-[#20273b]"
                }`}
              >
                {brand === "ALL" ? "Todas las Marcas" : brand}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por modelo (ej: XR 150, FZ 25, MT-03, Tornado...)"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full bg-[#181d2c] border border-[#293147] text-xs text-white pl-9 pr-4 py-2 rounded-xl focus:outline-none focus:border-[#FF5500]"
            />
          </div>
        </div>

        {/* Bikes List */}
        <div className="p-4 overflow-y-auto flex-1 divide-y divide-[#1e2436]">
          {filteredBikes.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-xs">No encontramos modelos con ese filtro.</div>
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
                  className={`p-3.5 hover:bg-[#1a2030] cursor-pointer rounded-xl flex items-center justify-between transition-all my-1 ${
                    isSelected ? "bg-[#FF5500]/10 border border-[#FF5500]/40" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#20273a] text-gray-300 font-black text-xs flex items-center justify-center">
                      {bike.brand.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        {bike.brand} {bike.model}
                        <span className="text-[10px] bg-[#262f45] text-gray-300 px-2 py-0.5 rounded font-normal">
                          {bike.year}
                        </span>
                      </h4>
                      <p className="text-[11px] text-gray-400">
                        Cilindrada: {bike.engine} | Paso de Cadena: {bike.chainPitch} | Aceite: {bike.oilSpec}
                      </p>
                    </div>
                  </div>

                  <div>
                    {isSelected ? (
                      <span className="bg-[#FF5500] text-white p-1.5 rounded-full flex items-center justify-center">
                        <Check size={14} />
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-gray-400 hover:text-white px-3 py-1.5 rounded-lg bg-[#22293d]">
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
        <div className="p-4 bg-[#10131c] border-t border-[#222738] flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <AlertCircle size={14} className="text-[#FF5500]" /> El filtro ajustar? pi?ones, aceites y kits de arrastre.
          </span>
          <button onClick={onClose} className="px-4 py-2 bg-[#202638] text-white rounded-lg font-semibold hover:bg-[#2b334a]">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
