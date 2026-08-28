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
    <div className="group relative glass-aero glass-aero-hover rounded-3xl overflow-hidden flex flex-col justify-between">
      {/* Product Image Container on White Pedestal */}
      <div
        onClick={() => onOpenDetail(product)}
        className="relative aspect-square bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 overflow-hidden cursor-pointer flex items-center justify-center p-6 border-b border-slate-100"
      >
        <img
          src={product.primaryImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "https://placehold.co/400x400/ffffff/333?text=MotoRock";
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.onSale && (
            <span className="bg-[#FF5500] text-white font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm shadow-[#FF5500]/30">
              OFERTA
            </span>
          )}
          {hasOptions && (
            <span className="bg-white/90 backdrop-blur-md text-slate-700 border border-slate-200 text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm">
              Tallas S - XXL
            </span>
          )}
        </div>

        {/* Stock Status Badge */}
        <div className="absolute top-3 right-3 z-10">
          {product.inStock ? (
            <span className="bg-emerald-50 backdrop-blur-md border border-emerald-200 text-emerald-700 text-[9px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              <Check size={10} /> EN STOCK
            </span>
          ) : (
            <span className="bg-red-50 backdrop-blur-md border border-red-200 text-red-600 text-[9px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              <X size={10} /> AGOTADO
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white/60">
        <div>
          {/* Category & Star Rating */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] text-[#FF5500] font-black uppercase tracking-wider truncate">
              {product.categories?.[0]?.name || "Repuestos"}
            </span>
            <div className="flex items-center gap-1 text-amber-500 text-[10px] font-bold">
              <Star size={11} fill="currentColor" />
              <span>4.9</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onOpenDetail(product)}
            className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#FF5500] transition-colors line-clamp-2 cursor-pointer leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-3">
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
            <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">
              o 6 cuotas de <strong className="text-slate-800">${installmentVal.toLocaleString("es-CL")}</strong> sin inter?s
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetail(product)}
              className="flex-1 py-2.5 px-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
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
              className={`p-2.5 rounded-full font-bold transition-all ${
                isOutOfStock
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "liquid-btn text-white shadow-md shadow-[#FF5500]/30 transform active:scale-95 cursor-pointer"
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
