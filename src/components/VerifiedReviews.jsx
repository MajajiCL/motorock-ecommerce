import React from "react";
import { CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    name: "Claudio V.",
    location: "Talca, Región del Maule",
    bike: "Yamaha MT-03",
    rating: 5,
    title: "Retiro en tienda en 2 horas impecable",
    body: "Compré el kit de transmisión D.I.D desde la app y en menos de 2 horas ya estaba listo para retirar en el local de 2 Sur. Excelente atención de los mecánicos.",
    date: "Hace 2 días"
  },
  {
    name: "Matías P.",
    location: "Santiago, RM",
    bike: "Honda CB 190R",
    rating: 5,
    title: "Despacho Starken rapidísimo a Santiago",
    body: "Pedí casco HJC y aceite Motul 7100 el martes y me llegó el miércoles a primera hora con el seguimiento en la app. Calce perfecto y todo original con boleta.",
    date: "Hace 4 días"
  },
  {
    name: "Gonzalo R.",
    location: "Concepción, Biobío",
    bike: "Kawasaki Ninja 400",
    rating: 5,
    title: "El filtro por moto me evitó comprar la cadena incorrecta",
    body: "Puse mi modelo en el Garage y me mostró exactamente el paso 520 con los eslabones correctos. La mejor tienda de motos de Chile sin duda.",
    date: "Hace 1 semana"
  }
];

export default function VerifiedReviews() {
  return (
    <section className="my-16">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="text-[11px] font-bold text-[#e60000] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">
          Opiniones Verificadas
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121214] tracking-tight">
          La confianza de miles de motociclistas en Chile
        </h2>
        <p className="text-xs text-zinc-500">
          Calificación promedio de 4.9/5 basada en compras con entrega confirmada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {REVIEWS.map((rev, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[24px] p-6 shadow-motorock border border-[#e4e4e7] flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-[#00bb76] text-sm tracking-tight">
                  {"★".repeat(rev.rating)}
                </div>
                <span className="text-xs font-bold text-[#00bb76] flex items-center gap-1">
                  <CheckCircle2 size={12} /> Verificado
                </span>
              </div>

              <h4 className="text-sm font-bold text-[#121214] leading-snug">
                {rev.title}
              </h4>

              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                "{rev.body}"
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px]">
              <div>
                <strong className="text-[#121214] block">{rev.name}</strong>
                <span className="text-zinc-400">{rev.bike} • {rev.location}</span>
              </div>
              <span className="text-zinc-400">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
