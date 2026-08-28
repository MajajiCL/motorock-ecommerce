import React from "react";
import { CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    name: "Claudio V.",
    location: "Talca, Regi?n del Maule",
    bike: "Yamaha MT-03",
    rating: 5,
    title: "Retiro en tienda en 2 horas impecable",
    body: "Compr? el kit de transmisi?n D.I.D desde la app y en menos de 2 horas ya estaba listo para retirar en el local de 2 Sur. Excelente atenci?n de los mec?nicos.",
    date: "Hace 2 d?as"
  },
  {
    name: "Mat?as P.",
    location: "Santiago, RM",
    bike: "Honda CB 190R",
    rating: 5,
    title: "Despacho Starken rapid?simo a Santiago",
    body: "Ped? casco HJC y aceite Motul 7100 el martes y me lleg? el mi?rcoles a primera hora con el seguimiento en la app. Calce perfecto y todo original con boleta.",
    date: "Hace 4 d?as"
  },
  {
    name: "Gonzalo R.",
    location: "Concepci?n, Biob?o",
    bike: "Kawasaki Ninja 400",
    rating: 5,
    title: "El filtro por moto me evit? comprar la cadena incorrecta",
    body: "Puse mi modelo en el Garage y me mostr? exactamente el paso 520 con los eslabones correctos. La mejor tienda de motos de Chile sin duda.",
    date: "Hace 1 semana"
  }
];

export default function VerifiedReviews() {
  return (
    <section className="my-16">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="text-[11px] font-bold text-[#00bb76] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          Opiniones Verificadas
        </span>
        <h2 className="text-2xl sm:text-3xl font-normal text-[#151581] tracking-tight">
          La confianza de miles de motociclistas en Chile
        </h2>
        <p className="text-xs text-[#a1a1cd]">
          Calificaci?n promedio de 4.9/5 basada en compras con entrega confirmada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {REVIEWS.map((rev, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[24px] p-6 shadow-sm border border-[#e5e5eb] flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Top Row: 5 Green Stars & Verified Tag */}
              <div className="flex items-center justify-between">
                <div className="flex text-[#00bb76] text-sm tracking-tight">
                  {"?".repeat(rev.rating)}
                </div>
                <span className="text-xs font-semibold text-[#00bb76] flex items-center gap-1">
                  <CheckCircle2 size={12} /> Verificado
                </span>
              </div>

              <h4 className="text-sm font-semibold text-[#151581] leading-snug">
                {rev.title}
              </h4>

              <p className="text-xs text-[#292824]/85 leading-relaxed font-normal">
                "{rev.body}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <div>
                <strong className="text-[#151581] block">{rev.name}</strong>
                <span className="text-[#a1a1cd]">{rev.bike} ? {rev.location}</span>
              </div>
              <span className="text-[#a1a1cd]">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
