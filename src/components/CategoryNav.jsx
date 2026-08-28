import React from "react";
import { MAIN_CATEGORIES } from "../data/catalogData";

export default function CategoryNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max">
        {MAIN_CATEGORIES.map((cat) => {
          const isActive = String(activeCategory) === String(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#151581] text-white shadow-sm"
                  : "bg-white border border-[#e5e5eb] text-[#292824] hover:border-slate-300 hover:bg-[#f6f6fa]"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
