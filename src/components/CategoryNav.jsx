import React from "react";
import { Shield, Cog, Fuel, Shirt, Navigation, Package, Grid } from "lucide-react";

const CATEGORY_MAP = [
  { id: "all", name: "Todos los Productos", count: 726, icon: Grid },
  { id: "128", name: "Cascos", count: 247, icon: Shield },
  { id: "47", name: "Transmisiones", count: 322, icon: Cog },
  { id: "33", name: "Repuestos", count: 335, icon: Navigation },
  { id: "36", name: "Aceites y Lubricantes", count: 73, icon: Fuel },
  { id: "116", name: "Indumentaria", count: 28, icon: Shirt },
  { id: "149", name: "Motocross / Enduro", count: 37, icon: Package }
];

export default function CategoryNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORY_MAP.map((cat) => {
          const Icon = cat.icon;
          const isActive = String(activeCategory) === String(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                isActive
                  ? "bg-[#FF5500] border-[#FF5500] text-white shadow-sm"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
              }`}
            >
              <Icon size={15} className={isActive ? "text-white" : "text-[#FF5500]"} />
              <span>{cat.name}</span>
              <span
                className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                  isActive ? "bg-black/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
