import React from "react";
import { ShoppingCart, Eye, Check, X, Star } from "lucide-react";

export default function ProductCard({ product, onOpenDetail, onAddToCart }) {
  const isOutOfStock = !product.inStock;
  const hasOptions = product.hasVariations;
  const installmentVal = Math.round(product.price / 6);

  return (
    <div className="moto-card overflow-hidden flex flex-col justify-between group">
      {/* Product Image Container */}
      <div
        onClick={() => onOpenDetail(product)}
        className="relative aspect-square bg-white overflow-hidden cursor-pointer flex items-center justify-center p-5 border-b border-slate-100"
      >
        <img
          src={product.primaryImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "https://placehold.co/400x400/ffffff/333?text=MotoRock";
          }}
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.onSale && (
            <span className="bg-[#FF5500] text-white font-bold text-[10px] px-2 py-0.5 rounded shadow-sm">
              OFERTA
            </span>
          )}
          {hasOptions && (
            <span className="bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded">
              Varias Tallas
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="absolute top-2.5 right-2.5 z-10">
          {product.inStock ? (
            <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
              <Check size={10} /> En Stock
            </span>
          ) : (
            <span className="bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
              Agotado
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Category */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider truncate">
              {product.categories?.[0]?.name || "Repuestos"}
            </span>
            <div className="flex items-center gap-0.5 text-amber-500 text-[10px] font-bold">
              <Star size={10} fill="currentColor" />
              <span>4.9</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onOpenDetail(product)}
            className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#FF5500] transition-colors line-clamp-2 cursor-pointer leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-3 pt-3 border-t border-slate-100 space-y-2.5">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-black text-slate-900">
                {product.priceFormatted}
              </span>
              {product.onSale && (
                <span className="text-[11px] text-slate-400 line-through">
                  {product.regularPriceFormatted}
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-500 block font-medium">
              Hasta 6 cuotas de <strong>${installmentVal.toLocaleString("es-CL")}</strong> sin inter?s
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetail(product)}
              className="flex-1 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
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
              className={`p-2 rounded-lg font-bold transition-all ${
                isOutOfStock
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-[#FF5500] hover:bg-[#e64d00] text-white shadow-sm cursor-pointer"
              }`}
              title={hasOptions ? "Seleccionar talla" : "A?adir al carrito"}
            >
              <ShoppingCart size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
