import React from "react";
import { ShoppingCart, Eye, Sparkles, Check, X } from "lucide-react";

export default function ProductCard({ product, onOpenDetail, onAddToCart }) {
  const isOutOfStock = !product.inStock;
  const hasOptions = product.hasVariations;

  return (
    <div className="group bg-[#131620] border border-[#222839] hover:border-[#FF5500]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#FF5500]/10 flex flex-col justify-between">
      {/* Product Image Container */}
      <div
        onClick={() => onOpenDetail(product)}
        className="relative aspect-square bg-gradient-to-b from-[#181c28] to-[#0f121a] overflow-hidden cursor-pointer flex items-center justify-center p-4"
      >
        <img
          src={product.primaryImage || "https://placehold.co/400x400/181c28/fff?text=MotoRock"}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            if (product.images?.[0]?.originalUrl && e.target.src !== product.images[0].originalUrl) {
              e.target.src = product.images[0].originalUrl;
            }
          }}
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
          {product.onSale && (
            <span className="bg-[#FF5500] text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider">
              Oferta
            </span>
          )}
          {hasOptions && (
            <span className="bg-[#1f2638] text-gray-300 border border-[#313c56] text-[10px] font-semibold px-2 py-0.5 rounded-full">
              Tallas / Opciones
            </span>
          )}
        </div>

        {/* Stock Badge */}
        <div className="absolute top-2.5 right-2.5">
          {product.inStock ? (
            <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Check size={10} /> Stock
            </span>
          ) : (
            <span className="bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <X size={10} /> Agotado
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] text-gray-400 uppercase tracking-wide font-medium block mb-1">
            {product.categories?.[0]?.name || "Repuestos"}
          </span>

          <h3
            onClick={() => onOpenDetail(product)}
            className="text-sm font-bold text-white group-hover:text-[#FF5500] transition-colors line-clamp-2 cursor-pointer leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-4 pt-3 border-t border-[#1f2536] flex items-center justify-between gap-2">
          <div>
            <span className="text-base font-black text-white block">
              {product.priceFormatted}
            </span>
            {product.onSale && (
              <span className="text-[11px] text-gray-500 line-through block">
                {product.regularPriceFormatted}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onOpenDetail(product)}
              className="p-2 rounded-xl bg-[#1e2434] hover:bg-[#283045] text-gray-300 hover:text-white transition-colors"
              title="Ver detalle"
            >
              <Eye size={16} />
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
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-[#FF5500] hover:bg-[#E04800] text-white shadow-md shadow-[#FF5500]/25 transform active:scale-95"
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
