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
/*
  Subtítulos de TRES O CUATRO PALABRAS. Con "Cadenas, coronas y piñones" o
  "Motul, Liqui Moly, Ipone" la columna de texto queda tan estrecha junto a
  la foto que cada palabra cae en su propio renglón y la tarjeta se lee como
  una lista rota.

  La foto de CASCOS no puede ser un casco negro: recortado sobre el fondo
  oscuro desaparece, que es lo mismo que pasó en el hero. Va un Nolan rojo,
  que se ve entero y además pega con la paleta de la marca.
*/
const CATEGORIES_GRID = [
  {
    id: "128",
    name: "CASCOS",
    subtitle: "Encuentra tu estilo",
    image: "./img/cat-cascos.webp",
  },
  {
    id: "47",
    name: "TRANSMISIÓN",
    subtitle: "Alta resistencia",
    image: "./img/category-sprocket.webp",
  },
  {
    id: "36",
    name: "ACEITES",
    subtitle: "Máximo rendimiento",
    image: "./img/cat-aceites.webp",
  },
  {
    id: "116",
    name: "INDUMENTARIA",
    subtitle: "Viaja protegido",
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
            {/* Texto a la izquierda y producto a la derecha, en la misma
                fila. Antes el texto iba arriba y la imagen abajo, y la
                tarjeta quedaba con el producto arrinconado y pequeño. Así
                la foto ocupa la mitad de la tarjeta y es lo primero que se
                ve, que es de lo que va una tarjeta de categoría. */}
            {/* Rótulo arriba, producto debajo ocupando el ancho.
                Se probó con texto y foto en la misma fila y la foto,
                aunque llevara max-h, estiraba la tarjeta a 490 px de alto
                y se desbordaba: dentro de un flex con `items-center` el
                max-h del hijo no frena el crecimiento del contenedor. Con
                una caja de altura FIJA para la imagen, la tarjeta mide
                siempre lo mismo y las cuatro quedan a la par. */}
            <div className="flex flex-col h-full">
              <div>
                <h3 className="text-sm font-black text-white group-hover:text-[#e60000] transition-colors font-heading tracking-wider uppercase">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-zinc-400 mt-0.5">{cat.subtitle}</p>
              </div>

              {/* Alto en `style` y no en clase. Con `h-24` la caja medía
                  302 px: en este proyecto las utilidades escritas dentro de
                  un className partido en varias líneas no llegan al CSS
                  compilado —ya ocurrió con los gradientes del hero— y el
                  contenedor se estiraba al tamaño natural de la imagen,
                  dejando tarjetas de 548 px. */}
              <div
                className="my-3 flex items-center justify-center"
                style={{ height: "108px" }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{
                    maxHeight: "100%", maxWidth: "100%", width: "auto",
                    filter: "drop-shadow(0 8px 20px rgba(230,0,0,0.30))",
                  }}
                />
              </div>

              <span className="mt-auto text-zinc-600 group-hover:text-[#e60000] transition-colors">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
