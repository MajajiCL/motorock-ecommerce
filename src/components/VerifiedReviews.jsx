import React from "react";
import { Star, CheckCircle2, ThumbsUp } from "lucide-react";

const REVIEWS = [
  {
    name: "Rodrigo Morales",
    city: "Talca, Maule",
    bike: "Yamaha MT-03",
    rating: 5,
    date: "Hace 2 días",
    comment: "Compré el kit de transmisión DID y aceite Motul 7100. Retiré en 1 hora y media en el local de 2 Sur. Excelente atención de los mecánicos.",
    verified: true,
  },
  {
    name: "Matías Silva",
    city: "Curicó, Maule",
    bike: "Honda CB500X",
    rating: 5,
    date: "Hace 4 días",
    comment: "Despacho por Starken llegó al día siguiente a Curicó. El casco HJC impecable con su certificación ECE 22.06. 100% recomendados.",
    verified: true,
  },
  {
    name: "Felipe Araya",
    city: "Santiago, RM",
    bike: "KTM Duke 390",
    rating: 5,
    date: "Hace 1 semana",
    comment: "La mejor tienda de motos. El garage de compatibilidad me ahorró comprar la cadena equivocada. Llegó todo bien embalado.",
    verified: true,
  }
];

export default function VerifiedReviews() {
  return (
    <section className="my-12 sm:my-16 max-w-7xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <span className="text-[10px] font-black text-[#e60000] uppercase tracking-widest bg-red-600/10 border border-red-600/20 px-3 py-0.5 rounded">
            EXPERIENCIAS REALES
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-1 tracking-tight uppercase font-heading">
            Opiniones de la Comunidad Biker
          </h2>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span className="font-bold text-white">4.9 / 5.0</span>
          <span>(Más de 850 clientes)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {REVIEWS.map((rev, idx) => (
          <div
            key={idx}
            className="bg-[#121318] border border-[#202128] rounded-xl p-5 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[10px] text-zinc-500">{rev.date}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-3 border-t border-[#1a1b22] flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white font-heading">{rev.name}</h4>
                <p className="text-[10px] text-zinc-500">{rev.city} • <strong className="text-zinc-400">{rev.bike}</strong></p>
              </div>
              <span className="text-[9px] font-bold text-[#00bb76] flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded">
                <CheckCircle2 size={11} /> Verificado
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
