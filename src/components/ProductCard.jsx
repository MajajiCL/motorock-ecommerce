import React from "react";
import { ShoppingCart, Eye } from "lucide-react";

export default function ProductCard({ product, onOpenDetail, onAddToCart }) {
  const isOutOfStock = !product.inStock;
  const hasOptions = product.hasVariations;
  const installmentVal = Math.round(product.price / 6);

  return (
    <div className="glass-panel glass-panel-hover rounded-[24px] overflow-hidden flex flex-col justify-between group">
      {/* Contenedor Imagen */}
      <div
        onClick={() => onOpenDetail(product)}
        className="relative aspect-square bg-white/50 overflow-hidden cursor-pointer flex items-center justify-center p-6 border-b border-white/60"
      >
        <img
          src={product.primaryImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          onError={(e) => {
            e.target.src = "https://placehold.co/400x400/ffffff/333?text=MotoRock";
          }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.onSale && (
            <span className="bg-[#e60000] text-white font-extrabold text-[9px] px-2.5 py-0.5 rounded-full shadow-sm">
              OFERTA
            </span>
          )}
          {hasOptions && (
            <span className="glass-pill text-[#121214] text-[9px] font-bold px-2 py-0.5 rounded-full">
              Tallas
            </span>
          )}
        </div>

        {/* Estado Stock */}
        <div className="absolute top-3 right-3 z-10">
          {product.inStock ? (
            <span className="glass-pill text-[#00bb76] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              ✓ En Stock
            </span>
          ) : (
            <span className="glass-pill text-zinc-400 text-[10px] font-medium px-2 py-0.5 rounded-full">
              Agotado
            </span>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Categoría */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider truncate">
              {product.categories?.[0]?.name || "Repuestos"}
            </span>
            <div className="flex items-center gap-0.5 text-[#00bb76] text-[10px] font-bold">
              <span>★</span>
              <span>4.9</span>
            </div>
          </div>

          {/* Nombre */}
          <h3
            onClick={() => onOpenDetail(product)}
            className="text-xs sm:text-sm font-bold text-[#121214] group-hover:text-[#e60000] transition-colors line-clamp-2 cursor-pointer leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        {/* Precios & Acciones */}
        <div className="mt-4 pt-3 border-t border-white/60 space-y-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-extrabold text-[#e60000]">
                {product.priceFormatted}
              </span>
              {product.onSale && (
                <span className="text-[11px] text-zinc-400 line-through">
                  {product.regularPriceFormatted}
                </span>
              )}
            </div>
            <span className="text-[10px] text-zinc-500 block font-normal">
              6 cuotas de <strong>${installmentVal.toLocaleString("es-CL")}</strong> sin interés
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetail(product)}
              className="flex-1 py-2 px-3 rounded-full glass-pill hover:bg-white text-[#121214] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Eye size={13} />
              <span>Ver Detalle</span>
            </button>

            <button
              onClick={() => {
                if (hasOptions) {
                  onOpenDetail(product);
                } else {
                  onAddToCart(product);
                }
              }}
              disabled={isOutOfStock}
              className={`p-2.5 rounded-full font-bold transition-all ${
                isOutOfStock
                  ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                  : "bg-[#e60000] hover:bg-[#cc0000] text-white shadow-racing cursor-pointer"
              }`}
              title={hasOptions ? "Seleccionar talla" : "Añadir al carrito"}
            >
              <ShoppingCart size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
