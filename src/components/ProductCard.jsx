import React from "react";
import { ShoppingCart, Eye, Sparkles, Check, X, Star, MessageCircle } from "lucide-react";

export default function ProductCard({ product, onOpenDetail, onAddToCart }) {
  const isOutOfStock = !product.inStock;
  const hasOptions = product.hasVariations;

  const installmentVal = Math.round(product.price / 6);
  const waPhone = "56956105413";
  const waText = encodeURIComponent(`Hola MotoRock, me interesa el producto: ${product.name} ($${product.priceFormatted})`);
  const waLink = `https://wa.me/${waPhone}?text=${waText}`;

  return (
    <div className="group relative glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-[#FF5500]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF5500]/15 flex flex-col justify-between">
      {/* Product Image Container */}
      <div
        onClick={() => onOpenDetail(product)}
        className="relative aspect-square bg-gradient-to-b from-[#141824] via-[#0f131c] to-[#0a0d14] overflow-hidden cursor-pointer flex items-center justify-center p-5 group-hover:bg-[#161c28] transition-colors"
      >
        <img
          src={product.primaryImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "https://placehold.co/400x400/141824/fff?text=MotoRock";
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.onSale && (
            <span className="bg-[#FF5500] text-black font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md">
              OFERTA
            </span>
          )}
          {hasOptions && (
            <span className="bg-[#181f2f]/90 backdrop-blur-md text-gray-200 border border-white/10 text-[9px] font-bold px-2 py-0.5 rounded-full">
              Tallas S - XXL
            </span>
          )}
        </div>

        {/* Stock Status Badge */}
        <div className="absolute top-3 right-3 z-10">
          {product.inStock ? (
            <span className="bg-emerald-500/15 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[9px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Check size={10} /> EN STOCK
            </span>
          ) : (
            <span className="bg-red-500/15 backdrop-blur-md border border-red-500/30 text-red-400 text-[9px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <X size={10} /> AGOTADO
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#0b0e15]/90">
        <div>
          {/* Category and Rating */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] text-[#FF5500] font-black uppercase tracking-wider truncate">
              {product.categories?.[0]?.name || "Repuestos"}
            </span>
            <div className="flex items-center gap-1 text-amber-400 text-[10px] font-bold">
              <Star size={11} fill="currentColor" />
              <span>4.9</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenDetail(product)}
            className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF5500] transition-colors line-clamp-2 cursor-pointer leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-4 pt-3.5 border-t border-white/5 space-y-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-black text-white">
                {product.priceFormatted}
              </span>
              {product.onSale && (
                <span className="text-[11px] text-gray-500 line-through">
                  {product.regularPriceFormatted}
                </span>
              )}
            </div>
            <span className="text-[10px] text-gray-400 block mt-0.5 font-medium">
              o 6 cuotas de <strong className="text-gray-200">${installmentVal.toLocaleString("es-CL")}</strong> sin inter?s
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetail(product)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-[#141a27] hover:bg-[#1f283a] text-gray-200 hover:text-white border border-white/5 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
            >
              <Eye size={14} />
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
              className={`p-2.5 rounded-xl font-bold transition-all ${
                isOutOfStock
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-[#FF5500] hover:bg-[#E04800] text-white shadow-lg shadow-[#FF5500]/25 transform active:scale-95"
              }`}
              title={hasOptions ? "Seleccionar talla" : "Agregar al carrito"}
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
