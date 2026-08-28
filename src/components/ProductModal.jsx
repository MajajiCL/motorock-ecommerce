import React, { useState, useEffect } from "react";
import { X, ShoppingCart, Check, ShieldCheck, Truck, RefreshCw, MessageCircle, Star, ArrowRight, CreditCard } from "lucide-react";

export default function ProductModal({ product, isOpen, onClose, onAddToCart, onBuyNow }) {
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
    `Hola MotoRock, tengo una consulta sobre el producto:\n\n*${product.name}*\nPrecio: ${product.priceFormatted}\n${
      selectedVariation ? `Talla/Opci?n: ${selectedVariation.attributes?.map((a) => a.value).join(", ")}\n` : ""
    }URL: ${product.permalink}\n\n?Tienen disponibilidad para retiro en Talca o env?o?`
  );
  const waLink = `https://wa.me/${waPhone}?text=${waText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto flex-1 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gallery */}
            <div className="space-y-3">
              <div className="aspect-square bg-white rounded-xl border border-slate-200 p-6 flex items-center justify-center relative overflow-hidden">
                <img
                  src={currentImgUrl}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x600/ffffff/333?text=MotoRock";
                  }}
                />
                {product.onSale && (
                  <span className="absolute top-3 left-3 bg-[#FF5500] text-white font-bold text-[10px] px-2.5 py-0.5 rounded shadow-sm">
                    OFERTA
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImg(idx)}
                      className={`w-14 h-14 rounded-lg border p-1 bg-white transition-all flex-shrink-0 ${
                        selectedImg === idx ? "border-[#FF5500] ring-2 ring-[#FF5500]/20" : "border-slate-200 hover:border-slate-400"
                      }`}
                    >
                      <img src={img.src} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Column */}
            <div className="flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs mb-1.5">
                  <span className="bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded text-[10px] uppercase">
                    {product.categories?.[0]?.name || "Repuestos"}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">SKU: {product.sku}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 leading-tight">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mt-2 text-xs">
                  <div className="flex text-amber-500">
                    {"?".repeat(5)}
                  </div>
                  <span className="text-slate-500 font-medium">Producto oficial con garant?a</span>
                </div>

                {/* Price */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-black text-slate-900">
                      {product.priceFormatted}
                    </span>
                    {product.onSale && (
                      <span className="text-sm text-slate-400 line-through">
                        {product.regularPriceFormatted}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <CreditCard size={14} className="text-emerald-600" />
                    <span>Hasta <strong>6 cuotas de ${installmentVal.toLocaleString("es-CL")}</strong> sin inter?s</span>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="mt-3">
                  {product.inStock ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
                      <Check size={14} /> En Stock para despacho o retiro en Talca
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-md">
                      Agotado Temporalmente
                    </span>
                  )}
                </div>

                {/* Sizes */}
                {product.variations && product.variations.length > 0 && (
                  <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Seleccionar Talla / Opci?n:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.variations.map((v) => {
                        const attrText = v.attributes?.map((a) => a.value || a.name).join(" - ") || `Opci?n #${v.id}`;
                        const isSelected = selectedVariation?.id === v.id;
                        return (
                          <button
                            key={v.id}
                            onClick={() => setSelectedVariation(v)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                              isSelected
                                ? "bg-[#FF5500] border-[#FF5500] text-white shadow-sm"
                                : "bg-white border-slate-200 text-slate-700 hover:border-slate-400"
                            }`}
                          >
                            {attrText}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-600 uppercase">Cantidad:</span>
                  <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg p-0.5">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 bg-white text-slate-800 rounded font-bold hover:bg-slate-200 flex items-center justify-center text-xs"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-slate-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 bg-white text-slate-800 rounded font-bold hover:bg-slate-200 flex items-center justify-center text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => {
                      onAddToCart(product, quantity, selectedVariation);
                      onClose();
                    }}
                    disabled={!product.inStock}
                    className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 py-3 px-4 rounded-lg font-bold text-xs transition-colors cursor-pointer"
                  >
                    <ShoppingCart size={15} />
                    <span>A?adir al Carrito</span>
                  </button>

                  <button
                    onClick={() => {
                      onAddToCart(product, quantity, selectedVariation);
                      onBuyNow(product, quantity, selectedVariation);
                    }}
                    disabled={!product.inStock}
                    className="flex items-center justify-center gap-2 bg-[#FF5500] hover:bg-[#e64d00] text-white font-bold py-3 px-4 rounded-lg text-xs shadow-sm transition-all cursor-pointer"
                  >
                    <span>Comprar Ahora (Webpay)</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 py-2.5 px-4 rounded-lg font-bold text-xs transition-colors w-full"
                >
                  <MessageCircle size={15} />
                  <span>Consultar por WhatsApp (+56 9 5610 5413)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Descripci?n del Producto
              </h3>
              <div className="text-slate-600 text-xs leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 whitespace-pre-line">
                {product.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
