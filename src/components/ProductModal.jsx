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
    `?Hola MotoRock! Me interesa este producto:\n\n*${product.name}*\nPrecio: ${product.priceFormatted}\n${
      selectedVariation ? `Talla/Opci?n: ${selectedVariation.attributes?.map((a) => a.value).join(", ")}\n` : ""
    }URL: ${product.permalink}\n\n?Tienen disponibilidad para retiro en Talca o despacho?`
  );
  const waLink = `https://wa.me/${waPhone}?text=${waText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bg-[#0b0e15] border border-white/10 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white bg-[#141a27] hover:bg-[#1f283a] p-2 rounded-full transition-all"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto flex-1 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gallery Column */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-b from-[#141824] via-[#0f131c] to-[#0a0d14] rounded-3xl border border-white/5 p-6 flex items-center justify-center relative overflow-hidden shadow-inner">
                <img
                  src={currentImgUrl}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x600/141824/fff?text=MotoRock";
                  }}
                />
                {product.onSale && (
                  <span className="absolute top-3 left-3 bg-[#FF5500] text-black font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                    OFERTA DESTACADA
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImg(idx)}
                      className={`w-16 h-16 rounded-2xl border p-1 bg-[#121622] transition-all flex-shrink-0 ${
                        selectedImg === idx ? "border-[#FF5500] ring-2 ring-[#FF5500]/30" : "border-white/10 hover:border-gray-500"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info Column */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs mb-2">
                  <span className="bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/30 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                    {product.categories?.[0]?.name || "Repuestos"}
                  </span>
                  <span className="text-gray-400 font-mono text-[11px]">SKU: {product.sku}</span>
                </div>

                <h2 className="text-xl md:text-2xl font-display font-black text-white leading-tight">
                  {product.name}
                </h2>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-amber-400 text-xs">
                    {"?".repeat(5)}
                  </div>
                  <span className="text-xs text-gray-400 font-semibold">(4.9 / 5 estrellas ? 100% Calidad Garantizada)</span>
                </div>

                {/* Price Display */}
                <div className="mt-4 p-4 rounded-2xl bg-[#121622] border border-white/5 space-y-1.5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl md:text-3xl font-black text-white">
                      {product.priceFormatted}
                    </span>
                    {product.onSale && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.regularPriceFormatted}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300 font-semibold">
                    <CreditCard size={14} className="text-emerald-400" />
                    <span>Paga en hasta <strong>6 cuotas de ${installmentVal.toLocaleString("es-CL")}</strong> sin inter?s</span>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="mt-3 flex items-center gap-2">
                  {product.inStock ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                      <Check size={14} /> En Stock para Despacho Express o Retiro en Talca
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-full">
                      Agotado Temporalmente
                    </span>
                  )}
                </div>

                {/* Variations / Sizes Selector */}
                {product.variations && product.variations.length > 0 && (
                  <div className="mt-5 p-4 bg-[#141a27] border border-white/10 rounded-2xl">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2.5">
                      Selecciona Talla / Opci?n:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.variations.map((v) => {
                        const attrText = v.attributes?.map((a) => a.value || a.name).join(" - ") || `Opci?n #${v.id}`;
                        const isSelected = selectedVariation?.id === v.id;
                        return (
                          <button
                            key={v.id}
                            onClick={() => setSelectedVariation(v)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                              isSelected
                                ? "bg-[#FF5500] border-[#FF5500] text-black font-black shadow-lg shadow-[#FF5500]/25"
                                : "bg-[#1c2436] border-white/10 text-gray-300 hover:text-white hover:border-gray-400"
                            }`}
                          >
                            {attrText}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity Controls */}
                <div className="mt-5 flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-400 uppercase">Cantidad:</span>
                  <div className="flex items-center bg-[#121622] border border-white/10 rounded-xl p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg bg-[#1c2436] text-white flex items-center justify-center font-bold hover:bg-[#28344e]"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-black text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-[#1c2436] text-white flex items-center justify-center font-bold hover:bg-[#28344e]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      onAddToCart(product, quantity, selectedVariation);
                      onClose();
                    }}
                    disabled={!product.inStock}
                    className="flex items-center justify-center gap-2 bg-[#161c28] hover:bg-[#20293b] text-white border border-white/10 py-3.5 px-4 rounded-2xl font-bold text-xs transition-all"
                  >
                    <ShoppingCart size={17} />
                    <span>Agregar al Carrito</span>
                  </button>

                  <button
                    onClick={() => {
                      onAddToCart(product, quantity, selectedVariation);
                      onBuyNow(product, quantity, selectedVariation);
                    }}
                    disabled={!product.inStock}
                    className="flex items-center justify-center gap-2 bg-[#FF5500] hover:bg-[#E04800] text-black font-black py-3.5 px-4 rounded-2xl text-xs shadow-xl shadow-[#FF5500]/30 transition-all transform active:scale-95 uppercase tracking-wide"
                  >
                    <span>Comprar Ahora (Webpay)</span>
                    <ArrowRight size={17} />
                  </button>
                </div>

                {/* WhatsApp Consultation Button */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-500/30 py-3 px-4 rounded-2xl font-bold text-xs transition-all w-full"
                >
                  <MessageCircle size={16} />
                  <span>Consultar con un Asesor por WhatsApp</span>
                </a>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-gray-400 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Truck size={14} className="text-[#FF5500]" />
                    <span>Env?os Todo Chile</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>Garant?a Oficial</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <RefreshCw size={14} className="text-amber-400" />
                    <span>Cambios F?ciles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <div className="mt-8 pt-8 border-t border-white/5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Descripci?n & Caracter?sticas T?cnicas
              </h3>
              <div className="text-gray-300 text-xs sm:text-sm leading-relaxed bg-[#10141f] p-6 rounded-2xl border border-white/5 whitespace-pre-line">
                {product.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
