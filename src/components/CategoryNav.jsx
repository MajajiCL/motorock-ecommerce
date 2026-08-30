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
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-heading ${
                isActive
                  ? "bg-[#e60000] text-white shadow-racing-red"
                  : "bg-[#121318] text-zinc-300 border border-[#202128] hover:border-red-600/50 hover:text-white"
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
