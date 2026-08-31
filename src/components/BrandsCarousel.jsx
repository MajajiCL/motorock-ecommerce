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

        {/* Cada logotipo dentro de su propia cápsula, como en la referencia:
            así se lee como una placa de marca y no como una marca de agua
            perdida sobre el fondo. Y a plena opacidad — en gris al 55% se
            veían apagados y desaparecían contra el negro. */}
        <ul className="marquesina flex items-center gap-4 sm:gap-6 w-max">
          {cinta.map((m, i) => (
            <li key={`${m.id}-${i}`} className="flex-shrink-0">
              {/* Cápsula CLARA con el logotipo en oscuro, como en la
                  referencia del cliente. En gris sobre negro los logos se
                  apagaban y se leían como marca de agua; sobre claro se ven
                  como las placas de marca de una tienda.
                  Los archivos vienen en trazo claro para fondo oscuro, así
                  que se invierten con un filtro en vez de pedirle al cliente
                  veinte archivos nuevos. */}
              <span
                className="marca-caja flex items-center justify-center overflow-hidden"
                style={{
                  // Medidas y color en `style`. Es la tercera vez en este
                  // proyecto que una utilidad escrita dentro de un
                  // className partido en líneas no llega al CSS: aquí dejó
                  // la cápsula oscura y, con el logotipo ya invertido a
                  // negro, los logos desaparecieron del todo.
                  height: "62px", width: "150px", padding: "0 16px",
                  borderRadius: "8px", background: "#f2f2f3",
                }}
              >
                {/* object-contain con ancho Y alto acotados. Sólo con
                    max-h la imagen conserva su ancho natural de 827 px y
                    se sale de la cápsula: los logotipos salieron del
                    tamaño de media pantalla. */}
                <img
                  src={`./brands/${m.id}.png`}
                  alt={i < MARCAS.length ? m.nombre : ""}
                  aria-hidden={i >= MARCAS.length}
                  loading="lazy"
                  width="827"
                  height="472"
                  className="w-full h-full object-contain"
                  style={{ filter: "invert(1) brightness(0.28) contrast(1.5)" }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
