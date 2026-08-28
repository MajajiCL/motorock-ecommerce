import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Clock, AlertTriangle, ArrowRight, Printer } from "lucide-react";

export default function CheckoutModal({
  isOpen,
  onClose,
  items,
  totalCLP,
  subtotalCLP,
  shippingQuote,
  pickupInStore,
  onOrderCompleted
}) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(600);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const [customer, setCustomer] = useState({
    name: "",
    rut: "",
    email: "",
    phone: "",
    address: "",
    commune: "Talca",
    notes: ""
  });

  const [paymentMethod, setPaymentMethod] = useState("webpay_plus");

  useEffect(() => {
    if (isOpen && items.length > 0 && step === 1) {
      setTimeLeft(600);
    }
  }, [isOpen, items]);

  useEffect(() => {
    if (!isOpen || step === 3) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setError("El tiempo para completar la compra ha expirado.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, step]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleConfirmPayment = () => {
    if (!customer.name || !customer.email || !customer.phone) {
      setError("Por favor completa los datos obligatorios.");
      return;
    }

    setLoading(true);
    setError(null);

    setTimeout(() => {
      const localOrder = {
        orderId: "MR-" + Math.floor(100000 + Math.random() * 900000),
        createdAt: new Date().toISOString(),
        status: paymentMethod === "transferencia" ? "PENDIENTE" : "PAGADO",
        customer,
        items,
        shipping: shippingQuote,
        paymentMethod,
        total: totalCLP,
        totalFormatted: `$${totalCLP.toLocaleString("es-CL")} CLP`,
        trackingNumber: "STK-" + Math.floor(10000000 + Math.random() * 90000000)
      };
      setConfirmedOrder(localOrder);
      setStep(3);
      setLoading(false);
      if (onOrderCompleted) onOrderCompleted();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Pago Seguro ? MotoRock Chile</h3>
            <p className="text-xs text-slate-500">Webpay Plus ? Mercado Pago ? Starken / Chilexpress</p>
          </div>
          {step !== 3 && (
            <button onClick={onClose} className="text-slate-400 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-200">
              <X size={18} />
            </button>
          )}
        </div>

        {/* Timer Bar */}
        {step !== 3 && (
          <div className="bg-orange-50 px-4 py-2 border-b border-orange-100 flex items-center justify-between text-xs text-slate-700">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#FF5500]" />
              Stock reservado para tu compra:
            </span>
            <span className="font-mono font-bold text-[#FF5500] bg-white px-2 py-0.5 rounded border border-orange-200">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
        )}

        {/* Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-5">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
              <AlertTriangle size={15} className="text-red-500 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                1. Datos de Contacto y Despacho
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Claudio Andr?s"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">RUT Chileno</label>
                  <input
                    type="text"
                    placeholder="Ej: 18.456.789-K"
                    value={customer.rut}
                    onChange={(e) => setCustomer({ ...customer, rut: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Correo Electr?nico *</label>
                  <input
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.cl"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Tel?fono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+56 9 1234 5678"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                {!pickupInStore ? (
                  <>
                    <div className="sm:col-span-2">
                      <label className="block text-slate-700 font-semibold mb-1">Direcci?n de Entrega *</label>
                      <input
                        type="text"
                        placeholder="Calle, N?mero, Depto / Villa"
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Comuna / Ciudad</label>
                      <input
                        type="text"
                        placeholder="Ej: Talca, Santiago, Concepci?n..."
                        value={customer.commune}
                        onChange={(e) => setCustomer({ ...customer, commune: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>
                  </>
                ) : (
                  <div className="sm:col-span-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800">
                    Retiro en Tienda MotoRock: Av. 2 Sur Locales 771 y 777, Talca. Listo en 2 horas h?biles.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                2. Selecciona Medio de Pago
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div
                  onClick={() => setPaymentMethod("webpay_plus")}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === "webpay_plus"
                      ? "bg-orange-50 border-[#FF5500]"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">
                    TBK
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Webpay Plus (Redcompra)</h5>
                    <p className="text-[11px] text-slate-500">Tarjetas de D?bito, Cr?dito y Prepago.</p>
                  </div>
                </div>

                <div
                  onClick={() => setPaymentMethod("mercadopago")}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === "mercadopago"
                      ? "bg-orange-50 border-[#FF5500]"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    MP
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Mercado Pago Chile</h5>
                    <p className="text-[11px] text-slate-500">Hasta 6 cuotas sin inter?s y saldo en cuenta.</p>
                  </div>
                </div>

                <div
                  onClick={() => setPaymentMethod("transferencia")}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 sm:col-span-2 ${
                    paymentMethod === "transferencia"
                      ? "bg-orange-50 border-[#FF5500]"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    ??
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Transferencia Bancaria Directa</h5>
                    <p className="text-[11px] text-slate-500">Datos bancarios para transferencia inmediata.</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Productos ({items.length})</span>
                  <span>${subtotalCLP.toLocaleString("es-CL")} CLP</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Despacho</span>
                  <span>{pickupInStore ? "GRATIS" : `$${(totalCLP - subtotalCLP).toLocaleString("es-CL")} CLP`}</span>
                </div>
                <div className="pt-1.5 border-t border-slate-200 flex justify-between font-bold text-sm text-slate-900">
                  <span>Total Final:</span>
                  <span className="text-[#FF5500]">${totalCLP.toLocaleString("es-CL")} CLP</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && confirmedOrder && (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">?Compra Realizada con ?xito!</h3>
                <p className="text-xs text-slate-500 mt-0.5">Hemos registrado tu pedido en MotoRock Chile</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">N?mero de Orden:</span>
                  <span className="font-mono font-bold text-[#FF5500]">{confirmedOrder.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Cliente:</span>
                  <span className="font-semibold text-slate-900">{confirmedOrder.customer.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Email:</span>
                  <span className="text-slate-700">{confirmedOrder.customer.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Medio de Pago:</span>
                  <span className="font-semibold text-slate-900 uppercase">{confirmedOrder.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">C?digo de Despacho:</span>
                  <span className="font-mono font-bold text-emerald-700">{confirmedOrder.trackingNumber}</span>
                </div>
                <div className="flex justify-between pt-1.5 border-t border-slate-200 text-sm font-bold">
                  <span className="text-slate-900">Monto Total:</span>
                  <span className="text-[#FF5500]">{confirmedOrder.totalFormatted}</span>
                </div>
              </div>

              <div className="flex gap-2.5 justify-center pt-2">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold"
                >
                  <Printer size={14} /> Imprimir Comprobante
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#FF5500] hover:bg-[#e64d00] text-white px-5 py-2 rounded-lg text-xs font-bold"
                >
                  Volver a la Tienda
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        {step !== 3 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            {step === 2 ? (
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 rounded-lg text-xs font-semibold"
              >
                Volver a Datos
              </button>
            ) : (
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck size={15} className="text-emerald-600" />
                <span>Transacci?n Segura 256-bit</span>
              </div>
            )}

            {step === 1 ? (
              <button
                onClick={() => {
                  if (!customer.name || !customer.email || !customer.phone) {
                    setError("Por favor completa los datos obligatorios.");
                    return;
                  }
                  setError(null);
                  setStep(2);
                }}
                className="bg-[#FF5500] hover:bg-[#e64d00] text-white px-5 py-2.5 rounded-lg font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Continuar al Pago</span>
                <ArrowRight size={15} />
              </button>
            ) : (
              <button
                onClick={handleConfirmPayment}
                disabled={loading || timeLeft === 0}
                className="bg-[#FF5500] hover:bg-[#e64d00] text-white px-6 py-2.5 rounded-lg font-bold text-xs shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>{loading ? "Procesando..." : `Pagar $${totalCLP.toLocaleString("es-CL")} CLP`}</span>
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
