import React, { useState } from "react";
import { X, Check, Search } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-[32px] w-full max-w-2xl shadow-lovi border border-[#e5e5eb] overflow-hidden flex flex-col max-h-[85vh]">
        <div className="p-6 border-b border-[#e5e5eb] flex items-center justify-between bg-[#f6f6fa]">
          <div>
            <h3 className="text-lg font-semibold text-[#151581]">Selecciona tu Motocicleta</h3>
            <p className="text-xs text-[#a1a1cd]">Garant?a de compatibilidad 100% en repuestos, transmisiones y aceites</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-[#151581] p-2 rounded-full hover:bg-slate-200 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        <div className="p-5 border-b border-slate-100 bg-white space-y-3">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedBrand === brand
                    ? "bg-[#151581] text-white"
                    : "bg-[#f6f6fa] text-[#292824] hover:bg-slate-200"
                }`}
              >
                {brand === "ALL" ? "Todas las marcas" : brand}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a1a1cd]" />
            <input
              type="text"
              placeholder="Buscar modelo (ej: XR 150, FZ 25, MT-03, Tornado, Pulsar...)"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full bg-[#f6f6fa] border border-[#e5e5eb] text-xs text-[#151581] pl-9 pr-4 py-2.5 rounded-full focus:outline-none focus:border-[#5465ff]"
            />
          </div>
        </div>

        <div className="p-4 overflow-y-auto flex-1 divide-y divide-slate-100">
          {filteredBikes.length === 0 ? (
            <div className="py-12 text-center text-[#a1a1cd] text-xs">No encontramos modelos con ese filtro.</div>
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
                  className={`p-3.5 hover:bg-[#f6f6fa] cursor-pointer rounded-2xl flex items-center justify-between transition-colors my-1 ${
                    isSelected ? "bg-indigo-50/70 border border-indigo-200" : ""
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-bold text-[#151581] flex items-center gap-2">
                      {bike.brand} {bike.model}
                      <span className="text-[10px] bg-white border border-[#e5e5eb] text-slate-600 px-2 py-0.2 rounded-full font-normal">
                        {bike.year}
                      </span>
                    </h4>
                    <p className="text-[11px] text-[#a1a1cd] mt-0.5">
                      Cilindrada: {bike.engine} ? Paso cadena: {bike.chainPitch} ? Aceite: {bike.oilSpec}
                    </p>
                  </div>

                  <div>
                    {isSelected ? (
                      <span className="bg-[#151581] text-white p-1.5 rounded-full flex items-center justify-center">
                        <Check size={12} />
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-[#151581] hover:text-white hover:bg-[#151581] px-3.5 py-1 rounded-full bg-[#f6f6fa] transition-colors">
                        Elegir
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="p-4 bg-[#f6f6fa] border-t border-[#e5e5eb] flex items-center justify-between text-xs text-[#a1a1cd]">
          <span>Se mostrar?n repuestos 100% compatibles.</span>
          <button onClick={onClose} className="px-4 py-1.5 bg-white border border-[#e5e5eb] text-[#151581] rounded-full font-semibold hover:bg-slate-100 cursor-pointer">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
