import React from "react";
import { Shield, Cog, Fuel, Shirt, Navigation, Package, Sparkles } from "lucide-react";

const CATEGORY_MAP = [
  { id: "all", name: "Todos", count: 726, icon: Sparkles },
  { id: "128", name: "Cascos", count: 247, icon: Shield },
  { id: "47", name: "Transmisiones", count: 322, icon: Cog },
  { id: "33", name: "Repuestos", count: 335, icon: Navigation },
  { id: "36", name: "Lubricantes", count: 73, icon: Fuel },
  { id: "116", name: "Indumentaria", count: 28, icon: Shirt },
  { id: "149", name: "Indumentaria MX", count: 37, icon: Package }
];

export default function CategoryNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {CATEGORY_MAP.map((cat) => {
          const Icon = cat.icon;
          const isActive = String(activeCategory) === String(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                isActive
                  ? "bg-[#FF5500] border-[#FF5500] text-white shadow-lg shadow-[#FF5500]/25 scale-102"
                  : "bg-[#141722] border-[#22283a] text-gray-300 hover:border-gray-600 hover:text-white hover:bg-[#1b202e]"
              }`}
            >
              <Icon size={16} className={isActive ? "text-white" : "text-[#FF5500]"} />
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-black/30 text-white" : "bg-[#202638] text-gray-400"
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
