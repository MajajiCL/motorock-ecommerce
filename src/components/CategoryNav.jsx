import React from "react";
import { Shield, Cog, Fuel, Shirt, Navigation, Package, Grid } from "lucide-react";

const CATEGORY_MAP = [
  { id: "all", name: "Todos los Repuestos", count: 726, icon: Grid },
  { id: "128", name: "Cascos", count: 247, icon: Shield },
  { id: "47", name: "Transmisiones", count: 322, icon: Cog },
  { id: "33", name: "Repuestos Taller", count: 335, icon: Navigation },
  { id: "36", name: "Aceites y Lubricantes", count: 73, icon: Fuel },
  { id: "116", name: "Indumentaria Biker", count: 28, icon: Shirt },
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
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                isActive
                  ? "bg-[#151581] border-[#151581] text-white shadow-sm"
                  : "bg-white border-[#e5e5eb] text-[#292824] hover:border-[#151581] hover:bg-[#f6f6fa]"
              }`}
            >
              <Icon size={14} className={isActive ? "text-white" : "text-[#5465ff]"} />
              <span>{cat.name}</span>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-[#f6f6fa] text-[#a1a1cd]"
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
