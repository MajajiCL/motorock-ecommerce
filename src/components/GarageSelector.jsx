import React, { useState } from "react";
import { X, Check, Search, Bike } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-base font-bold text-slate-900">Selecciona tu Motocicleta</h3>
            <p className="text-xs text-slate-500">Filtra repuestos, transmisiones y aceites compatibles con tu modelo</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-200">
            <X size={18} />
          </button>
        </div>

        {/* Brand Tabs */}
        <div className="p-4 border-b border-slate-100 bg-white space-y-3">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedBrand === brand
                    ? "bg-[#FF5500] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {brand === "ALL" ? "Todas las marcas" : brand}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar modelo (ej: XR 150, FZ 25, MT-03, Tornado...)"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 text-xs text-slate-900 pl-9 pr-4 py-2 rounded-lg focus:outline-none focus:border-[#FF5500]"
            />
          </div>
        </div>

        {/* Bikes List */}
        <div className="p-3 overflow-y-auto flex-1 divide-y divide-slate-100">
          {filteredBikes.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">No se encontraron modelos con ese filtro.</div>
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
                  className={`p-3 hover:bg-slate-50 cursor-pointer rounded-lg flex items-center justify-between transition-colors my-1 ${
                    isSelected ? "bg-orange-50 border border-orange-200" : ""
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      {bike.brand} {bike.model}
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-normal">
                        {bike.year}
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Cilindrada: {bike.engine} ? Paso cadena: {bike.chainPitch} ? Aceite: {bike.oilSpec}
                    </p>
                  </div>

                  <div>
                    {isSelected ? (
                      <span className="bg-[#FF5500] text-white p-1 rounded-full flex items-center justify-center">
                        <Check size={12} />
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1 rounded bg-slate-100">
                        Elegir
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Se mostrar?n repuestos compatibles al seleccionar.</span>
          <button onClick={onClose} className="px-4 py-1.5 bg-slate-200 text-slate-800 rounded font-semibold hover:bg-slate-300">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
