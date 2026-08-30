import React from "react";

/*
  Los logotipos REALES de las marcas, no badges de texto.

  Estaban desde el principio en `public/brands/` —veinte archivos PNG con
  canal alfa y el trazo ya en gris claro, listos para fondo oscuro— pero el
  carrusel los sustituía por cajitas con el nombre escrito a mano, con un
  triángulo rojo para Dainese y un emoji de escorpión para Akrapovič. Un
  logotipo dibujado con tipografía genérica no representa a la marca: se
  parece más a una imitación que a una distribución oficial.

  QUÉ MARCAS SE MUESTRAN Y POR QUÉ ESTAS
  El traspaso separa las marcas que la tienda DISTRIBUYE de las que sólo
  aparecen como referencia de catálogo o importación puntual (Shoei,
  Dainese, Akrapovič). Aquí sólo van las distribuidas y de las que existe
  logotipo. Poner en la misma fila una marca que no se vende es prometer
  algo que no está en la bodega, y con marcas que defienden su red de
  distribución no es un detalle menor.

  HJC y D.I.D sí se distribuyen pero no hay archivo de logotipo; entran en
  cuanto el cliente los facilite.
*/
const MARCAS = [
  { id: "motul", nombre: "Motul" },
  { id: "ls2", nombre: "LS2 Helmets" },
  { id: "bell", nombre: "Bell Helmets" },
  { id: "agv", nombre: "AGV" },
  { id: "alpinestars", nombre: "Alpinestars" },
  { id: "liqui-moly", nombre: "Liqui Moly" },
  { id: "ipone", nombre: "Ipone" },
  { id: "repsol", nombre: "Repsol" },
  { id: "protaper", nombre: "ProTaper" },
  { id: "shaft", nombre: "Shaft" },
  { id: "cardo", nombre: "Cardo" },
  { id: "pirelli", nombre: "Pirelli" },
];

export default function BrandsCarousel() {
  // Duplicado para que la cinta pueda desplazarse sin costura: cuando la
  // primera mitad termina de pasar, la segunda ya está en su sitio.
  const cinta = [...MARCAS, ...MARCAS];

  return (
    <section
      className="bg-[#09090b] border-b border-[#181920] py-5 overflow-hidden"
      aria-label="Marcas que trabajamos"
    >
      <div className="relative">
        {/* Difuminado en los extremos: la cinta se desvanece en vez de
            cortarse de golpe contra el borde de la pantalla. */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10"
          style={{ background: "linear-gradient(to right, #09090b, transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10"
          style={{ background: "linear-gradient(to left, #09090b, transparent)" }}
        />

        <ul className="marquesina flex items-center gap-10 sm:gap-16 w-max">
          {cinta.map((m, i) => (
            <li key={`${m.id}-${i}`} className="flex-shrink-0">
              <img
                src={`./brands/${m.id}.png`}
                alt={i < MARCAS.length ? m.nombre : ""}
                aria-hidden={i >= MARCAS.length}
                loading="lazy"
                width="827"
                height="472"
                className="h-8 sm:h-10 w-auto object-contain opacity-55 hover:opacity-100 transition-opacity duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
