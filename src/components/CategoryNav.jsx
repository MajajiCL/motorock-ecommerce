import React from "react";
import { Shield, Cog, Fuel, Shirt, Navigation, Package, Sparkles } from "lucide-react";

const CATEGORY_MAP = [
  { id: "all", name: "Todos los Repuestos", count: 726, icon: Sparkles },
  { id: "128", name: "Cascos", count: 247, icon: Shield },
  { id: "47", name: "Transmisiones", count: 322, icon: Cog },
  { id: "33", name: "Repuestos", count: 335, icon: Navigation },
  { id: "36", name: "Lubricantes & Aceites", count: 73, icon: Fuel },
  { id: "116", name: "Indumentaria", count: 28, icon: Shirt },
  { id: "149", name: "Indumentaria MX", count: 37, icon: Package }
];

export default function CategoryNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORY_MAP.map((cat) => {
          const Icon = cat.icon;
          const isActive = String(activeCategory) === String(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-black tracking-wide whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                isActive
                  ? "liquid-btn text-white shadow-lg shadow-[#FF5500]/30 border-transparent transform scale-102"
                  : "bg-white/80 hover:bg-white text-slate-700 hover:text-slate-950 border-slate-200/80 shadow-sm hover:shadow"
              }`}
            >
              <Icon size={16} className={isActive ? "text-white" : "text-[#FF5500]"} />
              <span>{cat.name}</span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
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
