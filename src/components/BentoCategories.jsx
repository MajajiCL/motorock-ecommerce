import React from "react";
import { ArrowRight } from "lucide-react";

const CATEGORIES_GRID = [
  {
    id: "128",
    name: "CASCOS",
    subtitle: "Encuentra tu estilo",
    image: "https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg",
  },
  {
    id: "36",
    name: "ACEITES",
    subtitle: "Máximo rendimiento",
    image: "https://motorock.cl/wp-content/uploads/2026/06/MOTUL-7100-10W-40.png",
  },
  {
    id: "47",
    name: "CADENAS",
    subtitle: "Alta resistencia",
    image: "https://motorock.cl/wp-content/uploads/2026/08/1-24-300x300.webp",
  },
  {
    id: "47",
    name: "REPUESTOS",
    subtitle: "Todo para tu moto",
    // Antes repetía la MISMA foto que CADENAS. Dos tarjetas contiguas con
    // idéntica imagen se leen como un error de montaje. Ahora lleva una
    // corona genérica: la tarjeta representa la categoría entera, no un
    // kit concreto con SKU y precio.
    image: "./img/category-sprocket.webp",
  },
  {
    id: "116",
    name: "ACCESORIOS",
    subtitle: "Viaja seguro",
    // Llevaba la foto de un bolso Rhinowalk puntual. Mismo criterio: la
    // tarjeta es la categoría, no ese producto.
    image: "./img/category-topcase.webp",
  },
];

export default function BentoCategories({ onSelectCategory }) {
  return (
    <section className="my-10 sm:my-14 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase font-heading">
          CATEGORÍAS PRINCIPALES
        </h2>
        <button
          onClick={() => onSelectCategory("all")}
          className="text-xs font-bold text-[#e60000] hover:text-white flex items-center gap-1 transition-colors font-heading cursor-pointer"
        >
          <span>Ver todas las categorías</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* 5 Cards Horizontal Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {CATEGORIES_GRID.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => onSelectCategory(cat.id)}
            className="bg-[#121318] border border-[#1e2028] hover:border-red-600/60 rounded-xl p-4 flex flex-col justify-between group cursor-pointer transition-all duration-300 min-h-[195px] relative overflow-hidden shadow-lg"
          >
            {/* Top Info */}
            <div>
              <h3 className="text-sm font-black text-white group-hover:text-[#e60000] transition-colors font-heading tracking-wider uppercase">
                {cat.name}
              </h3>
              <p className="text-[11px] text-zinc-400 mt-0.5">{cat.subtitle}</p>
            </div>

            {/* Bottom: Left Arrow & Right Product Image */}
            <div className="flex items-end justify-between mt-4">
              <span className="text-zinc-600 group-hover:text-[#e60000] transition-colors pb-1">
                <ArrowRight size={16} />
              </span>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
