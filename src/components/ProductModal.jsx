import React, { useState, useEffect } from "react";
import { X, ShoppingCart, Check, ShieldCheck, Truck, MessageCircle, ArrowRight, CreditCard } from "lucide-react";

export default function ProductModal({ product, isOpen, onClose, onAddToCart, onBuyNow, onOpenAppModal }) {
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setSelectedImg(0);
      setQuantity(1);
      if (product.variations && product.variations.length > 0) {
        setSelectedVariation(product.variations[0]);
      } else {
        setSelectedVariation(null);
      }
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const images = product.images || [];
  const currentImgUrl = images[selectedImg]?.src || product.primaryImage;
  const installmentVal = Math.round(product.price / 6);

  const waPhone = "56956105413";
  const waText = encodeURIComponent(
    `Hola MotoRock, tengo una consulta sobre el producto:

*${product.name}*
Precio: ${product.priceFormatted}
${
      selectedVariation ? `Talla/Opción: ${selectedVariation.attributes?.map((a) => a.value).join(", ")}
` : ""
    }URL: ${product.permalink}

¿Tienen disponibilidad para retiro en Talca o despacho express?`
  );
  const waLink = `https://wa.me/${waPhone}?text=${waText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-[32px] w-full max-w-4xl shadow-motorock border border-[#e4e4e7] overflow-hidden flex flex-col max-h-[92vh] relative">
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 text-zinc-400 hover:text-[#121214] bg-[#f8f9fa] hover:bg-zinc-200 p-2 rounded-full transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto flex-1 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Galería */}
            <div className="space-y-3">
              <div className="aspect-square bg-[#f8f9fa] rounded-[24px] border border-[#e4e4e7] p-6 flex items-center justify-center relative overflow-hidden">
                <img
                  src={currentImgUrl}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x600/ffffff/333?text=MotoRock";
                  }}
                />
                {product.onSale && (
                  <span className="absolute top-4 left-4 bg-[#e60000] text-white font-bold text-[10px] px-3 py-1 rounded-full shadow-sm">
                    OFERTA
                  </span>
                )}
              </div>

              {/* Miniaturas */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImg(idx)}
                      className={`w-14 h-14 rounded-xl border p-1 bg-white transition-all flex-shrink-0 cursor-pointer ${
                        selectedImg === idx ? "border-[#e60000] ring-2 ring-[#e60000]/20" : "border-[#e4e4e7] hover:border-zinc-400"
                      }`}
                    >
                      <img src={img.src} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Columna Info */}
            <div className="flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs mb-1.5">
                  <span className="bg-red-50 text-[#e60000] font-bold px-3 py-0.5 rounded-full text-[10px] uppercase border border-red-100">
                    {product.categories?.[0]?.name || "Repuestos"}
                  </span>
                  <span className="text-zinc-400 font-mono text-[11px]">SKU: {product.sku}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#121214] leading-tight">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mt-2 text-xs">
                  <div className="flex text-[#00bb76]">
                    {"★★★★★"}
                  </div>
                  <span className="text-zinc-500 font-medium">Producto oficial con garantía MotoRock</span>
                </div>

                {/* Precio */}
                <div className="mt-4 p-4 rounded-[20px] bg-[#f8f9fa] border border-[#e4e4e7] space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-extrabold text-[#e60000]">
                      {product.priceFormatted}
                    </span>
                    {product.onSale && (
                      <span className="text-sm text-zinc-400 line-through">
                        {product.regularPriceFormatted}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-600 font-medium">
                    <CreditCard size={14} className="text-[#00bb76]" />
                    <span>Hasta <strong>6 cuotas de ${installmentVal.toLocaleString("es-CL")}</strong> sin interés</span>
                  </div>
                </div>

                {/* Estado Stock */}
                <div className="mt-3">
                  {product.inStock ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00bb76] bg-emerald-50 border border-emerald-100 px-3.5 py-1 rounded-full">
                      <Check size={14} /> En Stock para despacho express o retiro en Talca
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 bg-zinc-100 px-3.5 py-1 rounded-full">
                      Agotado Temporalmente
                    </span>
                  )}
                </div>

                {/* Variaciones */}
                {product.variations && product.variations.length > 0 && (
                  <div className="mt-4 p-3.5 bg-[#f8f9fa] border border-[#e4e4e7] rounded-2xl">
                    <label className="block text-xs font-bold text-[#121214] uppercase tracking-wider mb-2">
                      Seleccionar Talla / Medida:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.variations.map((v) => {
                        const attrText = v.attributes?.map((a) => a.value || a.name).join(" - ") || `Opción #${v.id}`;
                        const isSelected = selectedVariation?.id === v.id;
                        return (
                          <button
                            key={v.id}
                            onClick={() => setSelectedVariation(v)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                              isSelected
                                ? "bg-[#e60000] border-[#e60000] text-white shadow-motorock-red"
                                : "bg-white border-[#e4e4e7] text-zinc-700 hover:border-zinc-400"
                            }`}
                          >
                            {attrText}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Cantidad */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xs font-semibold text-zinc-600 uppercase">Cantidad:</span>
                  <div className="flex items-center bg-[#f8f9fa] border border-[#e4e4e7] rounded-full p-0.5">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 bg-white text-zinc-800 rounded-full font-bold hover:bg-zinc-200 flex items-center justify-center text-xs"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-[#121214]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 bg-white text-zinc-800 rounded-full font-bold hover:bg-zinc-200 flex items-center justify-center text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Acciones */}
              <div className="space-y-2.5 pt-3 border-t border-zinc-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => {
                      onAddToCart(product, quantity, selectedVariation);
                      onClose();
                    }}
                    disabled={!product.inStock}
                    className="flex items-center justify-center gap-2 bg-[#f8f9fa] hover:bg-zinc-200 text-[#121214] border border-[#e4e4e7] py-3 px-4 rounded-full font-bold text-xs transition-colors cursor-pointer"
                  >
                    <ShoppingCart size={15} />
                    <span>Añadir al Carrito</span>
                  </button>

                  <button
                    onClick={() => {
                      onAddToCart(product, quantity, selectedVariation);
                      onBuyNow(product, quantity, selectedVariation);
                    }}
                    disabled={!product.inStock}
                    className="flex items-center justify-center gap-2 bg-[#e60000] hover:bg-[#cc0000] text-white font-bold py-3 px-4 rounded-full text-xs shadow-motorock-red transition-all cursor-pointer"
                  >
                    <span>Comprar con Webpay</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-[#00bb76] border border-emerald-100 py-2.5 px-4 rounded-full font-bold text-xs transition-colors w-full"
                >
                  <MessageCircle size={15} />
                  <span>Consultar por WhatsApp (+56 9 5610 5413)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Descripción */}
          {product.description && (
            <div className="mt-6 pt-6 border-t border-zinc-100">
              <h3 className="text-xs font-bold text-[#121214] uppercase tracking-wider mb-2">
                Especificaciones del Repuesto
              </h3>
              <div className="text-zinc-600 text-xs leading-relaxed bg-[#f8f9fa] p-4 rounded-2xl border border-[#e4e4e7] whitespace-pre-line">
                {product.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
