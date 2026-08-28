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
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border-l border-slate-200 w-full max-w-md h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5500] flex items-center justify-center font-bold">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Carrito de Compras</h3>
              <p className="text-xs text-slate-500">{items.length} productos agregados</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-200">
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="bg-orange-50 p-3.5 border-b border-orange-100">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
            <span className="flex items-center gap-1.5 text-[#FF5500]">
              <Truck size={14} />
              {remainingForFreeShipping > 0
                ? `Agrega $${remainingForFreeShipping.toLocaleString("es-CL")} m?s para Env?o Gratis`
                : "?Tienes Env?o Gratis a todo Chile!"}
            </span>
            <span className="text-[10px] text-slate-500">{progressToFreeShipping}%</span>
          </div>
          <div className="w-full h-1.5 bg-orange-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF5500] transition-all duration-300 rounded-full"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="p-4 overflow-y-auto flex-1 divide-y divide-slate-100">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl">
                ??
              </div>
              <h4 className="text-sm font-bold text-slate-900">Tu carrito est? vac?o</h4>
              <p className="text-xs text-slate-500">Agrega productos para continuar con tu compra.</p>
            </div>
          ) : (
            items.map((it) => (
              <div key={`${it.product.id}-${it.variation?.id}`} className="py-3 flex gap-3 items-center">
                <img
                  src={it.product.primaryImage}
                  alt={it.product.name}
                  className="w-14 h-14 object-contain rounded-lg bg-slate-50 border border-slate-200 p-1 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{it.product.name}</h4>
                  {it.variation && (
                    <p className="text-[10px] text-slate-500">
                      Talla: {it.variation.attributes?.map((a) => a.value).join(" ")}
                    </p>
                  )}
                  <span className="text-xs font-bold text-[#FF5500] block mt-0.5">
                    ${(it.product.price * it.quantity).toLocaleString("es-CL")} CLP
                  </span>

                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex items-center bg-slate-100 rounded border border-slate-200 px-1 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(it.product.id, it.variation?.id, it.quantity - 1)}
                        className="text-xs px-1.5 text-slate-600 hover:text-slate-900 font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold px-1 text-slate-900">{it.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(it.product.id, it.variation?.id, it.quantity + 1)}
                        className="text-xs px-1.5 text-slate-600 hover:text-slate-900 font-bold"
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
            {/* Pickup toggle */}
            <div className="p-2.5 bg-white border border-slate-200 rounded-lg space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={pickupInStore}
                  onChange={(e) => onTogglePickup(e.target.checked)}
                  className="rounded text-[#FF5500] focus:ring-[#FF5500]"
                />
                <span className="font-semibold text-slate-800 flex items-center gap-1">
                  <MapPin size={13} className="text-[#FF5500]" /> Retirar gratis en local de Talca (Av. 2 Sur 771-777)
                </span>
              </label>

              {!pickupInStore && (
                <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
                  <span className="text-slate-500">Regi?n de env?o:</span>
                  <select
                    value={selectedRegion}
                    onChange={(e) => onChangeRegion(e.target.value)}
                    className="bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded px-2 py-1 focus:outline-none focus:border-[#FF5500]"
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

            {/* Totals */}
            <div className="space-y-1 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-slate-900">${subtotal.toLocaleString("es-CL")} CLP</span>
              </div>
              <div className="flex justify-between">
                <span>Despacho:</span>
                <span className="font-bold text-slate-900">
                  {shippingCost === 0 ? "GRATIS" : `$${shippingCost.toLocaleString("es-CL")} CLP`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-900 pt-1.5 border-t border-slate-200">
                <span>Total:</span>
                <span className="text-[#FF5500]">${total.toLocaleString("es-CL")} CLP</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full bg-[#FF5500] hover:bg-[#e64d00] text-white py-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
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
