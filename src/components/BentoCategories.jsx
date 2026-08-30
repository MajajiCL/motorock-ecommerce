import React from "react";
import { ArrowRight } from "lucide-react";

/*
  CUATRO tarjetas, no cinco, y con estos destinos.

  El menú declara diez categorías pero sólo cuatro tienen productos:
  cascos (203), cadenas y transmisiones (322), aceites (72) y chaquetas y
  guantes (6). Frenos, neumáticos, baterías y filtros están a cero. Una
  tarjeta que lleva a una parrilla vacía es peor que no tenerla.

  Antes había además dos errores: CADENAS y REPUESTOS apuntaban al MISMO
  id 47 —dos tarjetas al mismo sitio— y la foto de CADENAS era un casco
  azul.

  Todas las imágenes están recortadas del fondo blanco de catálogo con
  scripts/tratar_producto.py y llevan luz de contra donde el objeto es
  oscuro. Antes se cargaban los JPG tal cual del WordPress y sobre el
  fondo negro se veían como recortes con marco blanco.
*/
const CATEGORIES_GRID = [
  {
    id: "128",
    name: "CASCOS",
    subtitle: "Homologados ECE 22.06",
    image: "./img/hjc-rpha-hero.webp",
  },
  {
    id: "47",
    name: "TRANSMISIÓN",
    subtitle: "Cadenas, coronas y piñones",
    image: "./img/category-sprocket.webp",
  },
  {
    id: "36",
    name: "ACEITES",
    subtitle: "Motul, Liqui Moly, Ipone",
    image: "./img/cat-aceites.webp",
  },
  {
    id: "116",
    name: "INDUMENTARIA",
    subtitle: "Chaquetas y guantes",
    image: "./img/cat-indumentaria.webp",
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
