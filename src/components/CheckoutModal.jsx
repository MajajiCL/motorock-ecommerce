import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Clock, AlertTriangle, ArrowRight, Printer } from "lucide-react";
import confetti from "canvas-confetti";

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

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}

      if (onOrderCompleted) onOrderCompleted();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-[32px] w-full max-w-2xl shadow-lovi border border-[#e5e5eb] overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 border-b border-[#e5e5eb] flex items-center justify-between bg-[#f6f6fa]">
          <div>
            <h3 className="font-semibold text-[#151581] text-sm">Pago Seguro ? MotoRock Chile</h3>
            <p className="text-xs text-[#a1a1cd]">Webpay Plus ? Mercado Pago ? Starken Express</p>
          </div>
          {step !== 3 && (
            <button onClick={onClose} className="text-slate-400 hover:text-[#151581] p-1.5 rounded-full hover:bg-slate-200 cursor-pointer">
              <X size={18} />
            </button>
          )}
        </div>

        {step !== 3 && (
          <div className="bg-indigo-50/70 px-5 py-2 border-b border-indigo-100 flex items-center justify-between text-xs text-[#151581]">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#5465ff]" />
              Stock reservado para tu compra:
            </span>
            <span className="font-mono font-bold text-[#151581] bg-white px-2.5 py-0.5 rounded-full border border-indigo-200">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
        )}

        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {error && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-700 flex items-center gap-2">
              <AlertTriangle size={15} className="text-red-500 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#151581] uppercase tracking-wider">
                1. Datos de Contacto y Despacho
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[#151581] font-semibold mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Claudio Andr?s"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full bg-[#f6f6fa] border border-[#e5e5eb] rounded-full px-3.5 py-2 text-[#151581] focus:outline-none focus:border-[#151581]"
                  />
                </div>

                <div>
                  <label className="block text-[#151581] font-semibold mb-1">RUT Chileno</label>
                  <input
                    type="text"
                    placeholder="Ej: 18.456.789-K"
                    value={customer.rut}
                    onChange={(e) => setCustomer({ ...customer, rut: e.target.value })}
                    className="w-full bg-[#f6f6fa] border border-[#e5e5eb] rounded-full px-3.5 py-2 text-[#151581] focus:outline-none focus:border-[#151581]"
                  />
                </div>

                <div>
                  <label className="block text-[#151581] font-semibold mb-1">Correo Electr?nico *</label>
                  <input
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.cl"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full bg-[#f6f6fa] border border-[#e5e5eb] rounded-full px-3.5 py-2 text-[#151581] focus:outline-none focus:border-[#151581]"
                  />
                </div>

                <div>
                  <label className="block text-[#151581] font-semibold mb-1">Tel?fono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+56 9 1234 5678"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full bg-[#f6f6fa] border border-[#e5e5eb] rounded-full px-3.5 py-2 text-[#151581] focus:outline-none focus:border-[#151581]"
                  />
                </div>

                {!pickupInStore ? (
                  <>
                    <div className="sm:col-span-2">
                      <label className="block text-[#151581] font-semibold mb-1">Direcci?n de Entrega *</label>
                      <input
                        type="text"
                        placeholder="Calle, N?mero, Depto / Villa"
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className="w-full bg-[#f6f6fa] border border-[#e5e5eb] rounded-full px-3.5 py-2 text-[#151581] focus:outline-none focus:border-[#151581]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#151581] font-semibold mb-1">Comuna / Ciudad</label>
                      <input
                        type="text"
                        placeholder="Ej: Talca, Santiago, Concepci?n..."
                        value={customer.commune}
                        onChange={(e) => setCustomer({ ...customer, commune: e.target.value })}
                        className="w-full bg-[#f6f6fa] border border-[#e5e5eb] rounded-full px-3.5 py-2 text-[#151581] focus:outline-none focus:border-[#151581]"
                      />
                    </div>
                  </>
                ) : (
                  <div className="sm:col-span-2 p-3.5 bg-emerald-50 border border-emerald-100 rounded-2xl text-xs text-[#00bb76] font-semibold">
                    ? Retiro en Tienda Talca: Av. 2 Sur Locales 771 y 777. Listo en 2 horas h?biles.
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#151581] uppercase tracking-wider">
                2. Selecciona Medio de Pago
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setPaymentMethod("webpay_plus")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === "webpay_plus"
                      ? "bg-indigo-50 border-[#151581]"
                      : "bg-white border-[#e5e5eb] hover:border-slate-300"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs">
                    TBK
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#151581]">Webpay Plus (Redcompra)</h5>
                    <p className="text-[11px] text-[#a1a1cd]">Tarjetas de D?bito, Cr?dito y Prepago.</p>
                  </div>
                </div>

                <div
                  onClick={() => setPaymentMethod("mercadopago")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === "mercadopago"
                      ? "bg-indigo-50 border-[#151581]"
                      : "bg-white border-[#e5e5eb] hover:border-slate-300"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    MP
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#151581]">Mercado Pago Chile</h5>
                    <p className="text-[11px] text-[#a1a1cd]">Hasta 6 cuotas sin inter?s y saldo en cuenta.</p>
                  </div>
                </div>

                <div
                  onClick={() => setPaymentMethod("transferencia")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 sm:col-span-2 ${
                    paymentMethod === "transferencia"
                      ? "bg-indigo-50 border-[#151581]"
                      : "bg-white border-[#e5e5eb] hover:border-slate-300"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#00bb76] flex items-center justify-center font-bold text-xs">
                    ??
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#151581]">Transferencia Bancaria Directa</h5>
                    <p className="text-[11px] text-[#a1a1cd]">Datos para transferencia electr?nica inmediata.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#f6f6fa] rounded-2xl border border-[#e5e5eb] space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Productos ({items.length})</span>
                  <span>${subtotalCLP.toLocaleString("es-CL")} CLP</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Despacho</span>
                  <span>{pickupInStore ? "GRATIS" : `$${(totalCLP - subtotalCLP).toLocaleString("es-CL")} CLP`}</span>
                </div>
                <div className="pt-2 border-t border-[#e5e5eb] flex justify-between font-bold text-sm text-[#151581]">
                  <span>Total Final:</span>
                  <span>${totalCLP.toLocaleString("es-CL")} CLP</span>
                </div>
              </div>
            </div>
          )}

          {step === 3 && confirmedOrder && (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#00bb76] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <h3 className="text-xl font-normal text-[#151581]">?Pedido Confirmado con ?xito!</h3>
                <p className="text-xs text-[#a1a1cd] mt-0.5">Hemos registrado tu orden en MotoRock Chile</p>
              </div>

              <div className="bg-[#f6f6fa] border border-[#e5e5eb] rounded-[24px] p-5 text-left text-xs space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-[#e5e5eb]">
                  <span className="text-[#a1a1cd]">N?mero de Orden:</span>
                  <span className="font-mono font-bold text-[#151581]">{confirmedOrder.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a1a1cd]">Cliente:</span>
                  <span className="font-semibold text-[#151581]">{confirmedOrder.customer.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a1a1cd]">Email:</span>
                  <span className="text-slate-700">{confirmedOrder.customer.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a1a1cd]">C?digo de Despacho Starken:</span>
                  <span className="font-mono font-bold text-[#00bb76]">{confirmedOrder.trackingNumber}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#e5e5eb] text-sm font-bold">
                  <span className="text-[#151581]">Monto Total:</span>
                  <span className="text-[#151581]">{confirmedOrder.totalFormatted}</span>
                </div>
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-[#f6f6fa] hover:bg-slate-200 text-[#151581] rounded-full text-xs font-semibold"
                >
                  <Printer size={14} /> Imprimir Comprobante
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#151581] hover:bg-[#0e0e5a] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-sm cursor-pointer"
                >
                  Volver a la Tienda
                </button>
              </div>
            </div>
          )}
        </div>

        {step !== 3 && (
          <div className="p-5 bg-[#f6f6fa] border-t border-[#e5e5eb] flex items-center justify-between">
            {step === 2 ? (
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-white border border-[#e5e5eb] text-[#151581] hover:bg-slate-100 rounded-full text-xs font-semibold cursor-pointer"
              >
                Volver
              </button>
            ) : (
              <div className="flex items-center gap-1.5 text-xs text-[#a1a1cd]">
                <ShieldCheck size={14} className="text-[#00bb76]" />
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
                className="bg-[#151581] hover:bg-[#0e0e5a] text-white px-6 py-2.5 rounded-full font-semibold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Continuar al Pago</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={handleConfirmPayment}
                disabled={loading || timeLeft === 0}
                className="bg-[#151581] hover:bg-[#0e0e5a] text-white px-7 py-2.5 rounded-full font-bold text-xs shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>{loading ? "Procesando..." : `Pagar $${totalCLP.toLocaleString("es-CL")} CLP`}</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
