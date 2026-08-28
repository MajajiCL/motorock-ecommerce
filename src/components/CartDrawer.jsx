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
      <div className="bg-white border-l border-[#e5e5eb] w-full max-w-md h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="p-5 border-b border-[#e5e5eb] flex items-center justify-between bg-[#f6f6fa]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-indigo-50 text-[#151581] flex items-center justify-center font-bold">
              <ShoppingBag size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-[#151581] text-sm">Tu Carrito de Repuestos</h3>
              <p className="text-xs text-[#a1a1cd]">{items.length} productos agregados</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-[#151581] p-1.5 rounded-full hover:bg-slate-200 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        <div className="bg-indigo-50/70 p-4 border-b border-indigo-100">
          <div className="flex items-center justify-between text-xs font-semibold text-[#151581] mb-1.5">
            <span className="flex items-center gap-1.5">
              <Truck size={14} className="text-[#00bb76]" />
              {remainingForFreeShipping > 0
                ? `Agrega $${remainingForFreeShipping.toLocaleString("es-CL")} m?s para Env?o Gratis`
                : "?Tienes Despacho Express Gratis a todo Chile!"}
            </span>
            <span className="text-[10px] text-[#a1a1cd]">{progressToFreeShipping}%</span>
          </div>
          <div className="w-full h-1.5 bg-indigo-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#00bb76] transition-all duration-300 rounded-full"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        <div className="p-4 overflow-y-auto flex-1 divide-y divide-slate-100">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#f6f6fa] text-slate-400 flex items-center justify-center mx-auto text-xl">
                ??
              </div>
              <h4 className="text-sm font-semibold text-[#151581]">Tu carrito est? vac?o</h4>
              <p className="text-xs text-[#a1a1cd]">Agrega repuestos para continuar con tu pedido.</p>
            </div>
          ) : (
            items.map((it) => (
              <div key={`${it.product.id}-${it.variation?.id}`} className="py-3.5 flex gap-3 items-center">
                <img
                  src={it.product.primaryImage}
                  alt={it.product.name}
                  className="w-14 h-14 object-contain rounded-2xl bg-[#f6f6fa] border border-[#e5e5eb] p-1.5 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-[#151581] truncate">{it.product.name}</h4>
                  {it.variation && (
                    <p className="text-[10px] text-[#a1a1cd]">
                      Talla: {it.variation.attributes?.map((a) => a.value).join(" ")}
                    </p>
                  )}
                  <span className="text-xs font-bold text-[#151581] block mt-0.5">
                    ${(it.product.price * it.quantity).toLocaleString("es-CL")} CLP
                  </span>

                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex items-center bg-[#f6f6fa] rounded-full border border-[#e5e5eb] px-1.5 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(it.product.id, it.variation?.id, it.quantity - 1)}
                        className="text-xs px-1 text-[#151581] hover:text-black font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold px-1.5 text-[#151581]">{it.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(it.product.id, it.variation?.id, it.quantity + 1)}
                        className="text-xs px-1 text-[#151581] hover:text-black font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(it.product.id, it.variation?.id)}
                      className="text-slate-400 hover:text-red-600 p-1 text-xs"
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
          <div className="p-5 border-t border-[#e5e5eb] bg-[#f6f6fa] space-y-3">
            <div className="p-3 bg-white border border-[#e5e5eb] rounded-2xl space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={pickupInStore}
                  onChange={(e) => onTogglePickup(e.target.checked)}
                  className="rounded text-[#151581] focus:ring-[#151581]"
                />
                <span className="font-semibold text-[#151581] flex items-center gap-1">
                  <MapPin size={13} className="text-[#00bb76]" /> Retirar gratis en local de Talca (2 horas)
                </span>
              </label>

              {!pickupInStore && (
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="text-[#a1a1cd]">Regi?n de despacho:</span>
                  <select
                    value={selectedRegion}
                    onChange={(e) => onChangeRegion(e.target.value)}
                    className="bg-[#f6f6fa] border border-[#e5e5eb] text-[#151581] text-xs rounded-full px-3 py-1 focus:outline-none focus:border-[#151581]"
                  >
                    <option value="maule">Maule ($3.990)</option>
                    <option value="metropolitana">Metropolitana ($4.990)</option>
                    <option value="valparaiso">Valpara?so ($4.990)</option>
                    <option value="biobio">Biob?o ($4.990)</option>
                    <option value="otra">Otras Regiones ($5.990)</option>
                  </select>
                </div>
              )}
            </div>

            <div className="space-y-1 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-[#151581]">${subtotal.toLocaleString("es-CL")} CLP</span>
              </div>
              <div className="flex justify-between">
                <span>Despacho:</span>
                <span className="font-bold text-[#151581]">
                  {shippingCost === 0 ? "GRATIS" : `$${shippingCost.toLocaleString("es-CL")} CLP`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#151581] pt-2 border-t border-[#e5e5eb]">
                <span>Total:</span>
                <span>${total.toLocaleString("es-CL")} CLP</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full bg-[#151581] hover:bg-[#0e0e5a] text-white py-3 rounded-full font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
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
