import React from "react";
import { ShoppingCart, Star, Shield, Zap } from "lucide-react";

export default function ProductCard({ product, onOpenDetail, onAddToCart }) {
  const primaryCategory = product.categories?.[0]?.name || "Repuestos";

  return (
    <div
      onClick={() => onOpenDetail(product)}
      className="bg-[#121318] border border-[#202128] hover:border-red-600/50 rounded-xl p-3.5 flex flex-col justify-between group cursor-pointer transition-all duration-200 shadow-md"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-1 mb-2">
          {product.onSale ? (
            <span className="bg-[#e60000] text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
              Oferta
            </span>
          ) : (
            <span className="text-[10px] text-zinc-500 font-bold uppercase truncate">
              {primaryCategory}
            </span>
          )}

          {product.inStock && (
            <span className="text-[9px] text-[#00bb76] font-bold">✓ En Stock</span>
          )}
        </div>

        {/* Product Image */}
        {/* La caja de la foto va CLARA, no negra.
            Las 726 fotos vienen del catálogo WooCommerce recortadas sobre
            blanco, y sobre un fondo negro cada una se ve como un cuadrado
            blanco pegado. No se pueden reprocesar una a una —están en el
            servidor del cliente y son 726—, así que se normaliza aquí: con
            la caja clara el fondo de la foto se funde y el producto queda
            limpio, que es lo que hace cualquier tienda con tema oscuro. */}
        <div className="w-full h-36 sm:h-44 bg-[#f4f4f5] rounded-lg p-2 flex items-center justify-center overflow-hidden mb-3 border border-[#1a1b22]">
          <img
            src={product.primaryImage}
            alt={product.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Title */}
        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#e60000] transition-colors line-clamp-2 leading-tight font-heading">
          {product.name}
        </h4>
      </div>

      {/* Price & Add Button */}
      <div className="mt-3 pt-2.5 border-t border-[#1a1b22] flex items-center justify-between gap-2">
        <div>
          <span className="text-sm sm:text-base font-black text-[#e60000] block font-heading">
            {product.priceFormatted}
          </span>
          <span className="text-[9px] text-zinc-400 block">3 cuotas sin interés</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="bg-[#e60000] hover:bg-[#cc0000] text-white p-2 sm:px-3 sm:py-2 rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
          title="Añadir al carrito"
        >
          <ShoppingCart size={14} />
          <span className="hidden sm:inline">Agregar</span>
        </button>
      </div>
    </div>
  );
}
