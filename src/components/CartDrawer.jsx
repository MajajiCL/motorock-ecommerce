import React from "react";
import { X, Trash2, ShoppingBag, ArrowRight, Truck, MapPin } from "lucide-react";

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  selectedRegion,
  onChangeRegion,
  pickupInStore,
  onTogglePickup
}) {
  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 50000;
  const subtotal = items.reduce((acc, item) => {
    const priceNum = parseInt(item.product.prices?.price || "0");
    return acc + priceNum * item.quantity;
  }, 0);

  const freeProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // Shipping cost
  let shippingCost = 4990;
  if (pickupInStore) {
    shippingCost = 0;
  } else if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    shippingCost = 0;
  } else if (selectedRegion === "maule") {
    shippingCost = 3990;
  }

  const total = subtotal + shippingCost;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#12151f] border-l border-[#272e42] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-[#222738] flex items-center justify-between bg-[#151926]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag size={20} className="text-[#FF5500]" />
              <h3 className="font-bold text-white text-base">Tu Carrito de Compras</h3>
              <span className="bg-[#242b3d] text-gray-300 text-xs px-2 py-0.5 rounded-full font-bold">
                {items.length}
              </span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5">
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="p-4 bg-[#181d2c] border-b border-[#252d42]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Truck size={14} className="text-[#FF5500]" />
                {subtotal >= FREE_SHIPPING_THRESHOLD ? (
                  <span className="text-emerald-400 font-extrabold">¡Felicidades! Tienes Envío GRATIS 🎉</span>
                ) : (
                  <span>Agrega <strong>${remainingForFree.toLocaleString("es-CL")} CLP</strong> para envío gratis</span>
                )}
              </span>
              <span className="text-[11px] text-gray-400 font-bold">{freeProgress}%</span>
            </div>
            <div className="w-full h-2 bg-[#0e111a] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-[#FF5500] rounded-full transition-all duration-500"
                style={{ width: `${freeProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="p-5 overflow-y-auto flex-1 divide-y divide-[#1e2436] space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#1b202e] flex items-center justify-center mx-auto text-gray-500">
                  <ShoppingBag size={28} />
                </div>
                <h4 className="text-sm font-bold text-white">Tu carrito está vacío</h4>
                <p className="text-xs text-gray-400">Explora nuestro catálogo de cascos, transmisiones y accesorios.</p>
                <button
                  onClick={onClose}
                  className="mt-3 px-4 py-2 bg-[#FF5500] hover:bg-[#E04800] text-white rounded-xl text-xs font-bold shadow-md shadow-[#FF5500]/20"
                >
                  Ir a Comprar
                </button>
              </div>
            ) : (
              items.map((item, idx) => {
                const p = item.product;
                const priceNum = parseInt(p.prices?.price || "0");
                const itemTotal = priceNum * item.quantity;
                const variationLabel = item.variation?.attributes?.map((a) => a.value || a.name).join(" - ");

                return (
                  <div key={`${p.id}-${item.variation?.id || "base"}-${idx}`} className="pt-4 first:pt-0 flex gap-3">
                    <img
                      src={p.primaryImage || "https://placehold.co/100x100/181c28/fff?text=Moto"}
                      alt={p.name}
                      className="w-16 h-16 object-contain bg-[#161a25] rounded-xl border border-[#252c3d] p-1 flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white line-clamp-1 leading-snug">{p.name}</h4>
                      {variationLabel && (
                        <span className="text-[11px] text-amber-400 font-semibold block">Talla: {variationLabel}</span>
                      )}
                      <span className="text-xs font-black text-[#FF5500] block mt-1">
                        ${priceNum.toLocaleString("es-CL")} CLP
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center bg-[#181d2a] border border-[#262f44] rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(p.id, item.variation?.id, item.quantity - 1)}
                            className="w-6 h-6 rounded bg-[#202738] text-white text-xs flex items-center justify-center font-bold hover:bg-[#2b344a]"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(p.id, item.variation?.id, item.quantity + 1)}
                            className="w-6 h-6 rounded bg-[#202738] text-white text-xs flex items-center justify-center font-bold hover:bg-[#2b344a]"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(p.id, item.variation?.id)}
                          className="text-gray-400 hover:text-red-400 p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                          title="Eliminar producto"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Calculations */}
          {items.length > 0 && (
            <div className="p-5 bg-[#141724] border-t border-[#222738] space-y-4">
              {/* Pickup vs Delivery Selector */}
              <div className="grid grid-cols-2 gap-2 bg-[#0e111a] p-1 rounded-xl border border-[#222839]">
                <button
                  onClick={() => onTogglePickup(false)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    !pickupInStore
                      ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  🚚 Despacho a Domicilio
                </button>
                <button
                  onClick={() => onTogglePickup(true)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    pickupInStore
                      ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  🏬 Retiro Talca (Gratis)
                </button>
              </div>

              {/* Destination region if delivery */}
              {!pickupInStore && (
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Región de Destino:</span>
                  <select
                    value={selectedRegion}
                    onChange={(e) => onChangeRegion(e.target.value)}
                    className="bg-[#1b202e] text-white text-xs border border-[#2c354b] rounded-lg px-2.5 py-1 focus:outline-none focus:border-[#FF5500]"
                  >
                    <option value="maule">Región del Maule ($3.990)</option>
                    <option value="metropolitana">Región Metropolitana ($4.990)</option>
                    <option value="valparaiso">Región de Valparaíso ($4.990)</option>
                    <option value="biobio_nuble">Biobío / Ñuble ($4.990)</option>
                    <option value="sur">Zona Sur ($5.990)</option>
                    <option value="norte">Zona Norte ($6.990)</option>
                  </select>
                </div>
              )}

              {/* Subtotal, Shipping, Total */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString("es-CL")} CLP</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Costo de Envío</span>
                  <span className={shippingCost === 0 ? "text-emerald-400 font-bold" : ""}>
                    {shippingCost === 0 ? "GRATIS" : `$${shippingCost.toLocaleString("es-CL")} CLP`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#22283a] flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">Total a Pagar</span>
                  <span className="text-xl font-black text-white">
                    ${total.toLocaleString("es-CL")} CLP
                  </span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={onProceedToCheckout}
                className="w-full bg-[#FF5500] hover:bg-[#E04800] text-white py-3.5 px-4 rounded-xl font-black text-sm shadow-xl shadow-[#FF5500]/30 flex items-center justify-center gap-2 transition-all transform active:scale-98"
              >
                <span>Proceder al Pago Seguro</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
