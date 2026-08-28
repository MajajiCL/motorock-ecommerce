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

  const subtotal = items.reduce((acc, it) => acc + (it.product.price || 0) * it.quantity, 0);
  const freeShippingThreshold = 50000;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  let shippingCost = 4990;
  if (pickupInStore || subtotal >= freeShippingThreshold) {
    shippingCost = 0;
  } else if (selectedRegion === "maule") {
    shippingCost = 3990;
  }

  const total = subtotal + shippingCost;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border-l border-[#e4e4e7] w-full max-w-md h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="p-5 border-b border-[#e4e4e7] flex items-center justify-between bg-[#f8f9fa]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-red-50 text-[#e60000] flex items-center justify-center font-bold">
              <ShoppingBag size={16} />
            </div>
            <div>
              <h3 className="font-bold text-[#121214] text-sm">Tu Carrito de Repuestos</h3>
              <p className="text-xs text-zinc-400">{items.length} productos agregados</p>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-[#121214] p-1.5 rounded-full hover:bg-zinc-200 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        <div className="bg-red-50/70 p-4 border-b border-red-100">
          <div className="flex items-center justify-between text-xs font-semibold text-[#121214] mb-1.5">
            <span className="flex items-center gap-1.5">
              <Truck size={14} className="text-[#e60000]" />
              {remainingForFreeShipping > 0
                ? `Agrega $${remainingForFreeShipping.toLocaleString("es-CL")} más para Envío Gratis`
                : "¡Tienes Despacho Express Gratis a todo Chile!"}
            </span>
            <span className="text-[10px] font-bold text-[#e60000]">{progressToFreeShipping}%</span>
          </div>
          <div className="w-full h-1.5 bg-red-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#e60000] transition-all duration-300 rounded-full"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        <div className="p-4 overflow-y-auto flex-1 divide-y divide-zinc-100">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#f8f9fa] text-zinc-400 flex items-center justify-center mx-auto text-xl">
                🛒
              </div>
              <h4 className="text-sm font-bold text-[#121214]">Tu carrito está vacío</h4>
              <p className="text-xs text-zinc-400">Agrega repuestos para continuar con tu pedido.</p>
            </div>
          ) : (
            items.map((it) => (
              <div key={`${it.product.id}-${it.variation?.id}`} className="py-3.5 flex gap-3 items-center">
                <img
                  src={it.product.primaryImage}
                  alt={it.product.name}
                  className="w-14 h-14 object-contain rounded-2xl bg-[#f8f9fa] border border-[#e4e4e7] p-1.5 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-[#121214] truncate">{it.product.name}</h4>
                  {it.variation && (
                    <p className="text-[10px] text-zinc-400">
                      Talla: {it.variation.attributes?.map((a) => a.value).join(" ")}
                    </p>
                  )}
                  <span className="text-xs font-bold text-[#e60000] block mt-0.5">
                    ${(it.product.price * it.quantity).toLocaleString("es-CL")} CLP
                  </span>

                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex items-center bg-[#f8f9fa] rounded-full border border-[#e4e4e7] px-1.5 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(it.product.id, it.variation?.id, it.quantity - 1)}
                        className="text-xs px-1 text-[#121214] hover:text-[#e60000] font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold px-1.5 text-[#121214]">{it.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(it.product.id, it.variation?.id, it.quantity + 1)}
                        className="text-xs px-1 text-[#121214] hover:text-[#e60000] font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(it.product.id, it.variation?.id)}
                      className="text-zinc-400 hover:text-[#e60000] p-1 text-xs"
                      title="Eliminar"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-[#e4e4e7] bg-[#f8f9fa] space-y-3">
            <div className="p-3 bg-white border border-[#e4e4e7] rounded-2xl space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={pickupInStore}
                  onChange={(e) => onTogglePickup(e.target.checked)}
                  className="rounded text-[#e60000] focus:ring-[#e60000]"
                />
                <span className="font-bold text-[#121214] flex items-center gap-1">
                  <MapPin size={13} className="text-[#e60000]" /> Retirar gratis en local de Talca (2 horas)
                </span>
              </label>

              {!pickupInStore && (
                <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                  <span className="text-zinc-400">Región de despacho:</span>
                  <select
                    value={selectedRegion}
                    onChange={(e) => onChangeRegion(e.target.value)}
                    className="bg-[#f8f9fa] border border-[#e4e4e7] text-[#121214] text-xs font-semibold rounded-full px-3 py-1 focus:outline-none focus:border-[#e60000]"
                  >
                    <option value="maule">Maule ($3.990)</option>
                    <option value="metropolitana">Metropolitana ($4.990)</option>
                    <option value="valparaiso">Valparaíso ($4.990)</option>
                    <option value="biobio">Biobío ($4.990)</option>
                    <option value="otra">Otras Regiones ($5.990)</option>
                  </select>
                </div>
              )}
            </div>

            <div className="space-y-1 text-xs text-zinc-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-[#121214]">${subtotal.toLocaleString("es-CL")} CLP</span>
              </div>
              <div className="flex justify-between">
                <span>Despacho:</span>
                <span className="font-bold text-[#e60000]">
                  {shippingCost === 0 ? "GRATIS" : `$${shippingCost.toLocaleString("es-CL")} CLP`}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#121214] pt-2 border-t border-[#e4e4e7]">
                <span>Total:</span>
                <span className="text-[#e60000]">${total.toLocaleString("es-CL")} CLP</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full bg-[#e60000] hover:bg-[#cc0000] text-white py-3.5 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-motorock-red transition-all cursor-pointer"
            >
              <span>Continuar al Pago</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
