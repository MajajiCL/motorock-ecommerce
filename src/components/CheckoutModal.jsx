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
      <div className="bg-white rounded-[32px] w-full max-w-2xl shadow-motorock border border-[#e4e4e7] overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 border-b border-[#e4e4e7] flex items-center justify-between bg-[#f8f9fa]">
          <div>
            <h3 className="font-bold text-[#121214] text-sm">Pago Seguro • MotoRock Chile</h3>
            <p className="text-xs text-zinc-400">Webpay Plus • Mercado Pago • Starken Express</p>
          </div>
          {step !== 3 && (
            <button onClick={onClose} className="text-zinc-400 hover:text-[#121214] p-1.5 rounded-full hover:bg-zinc-200 cursor-pointer">
              <X size={18} />
            </button>
          )}
        </div>

        {step !== 3 && (
          <div className="bg-red-50/70 px-5 py-2 border-b border-red-100 flex items-center justify-between text-xs text-[#121214]">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock size={13} className="text-[#e60000]" />
              Stock reservado para tu compra:
            </span>
            <span className="font-mono font-bold text-[#e60000] bg-white px-2.5 py-0.5 rounded-full border border-red-200">
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
              <h4 className="text-xs font-bold text-[#121214] uppercase tracking-wider">
                1. Datos de Contacto y Despacho
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[#121214] font-bold mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Claudio Andrés"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full bg-[#f8f9fa] border border-[#e4e4e7] rounded-full px-3.5 py-2 text-[#121214] focus:outline-none focus:border-[#e60000]"
                  />
                </div>

                <div>
                  <label className="block text-[#121214] font-bold mb-1">RUT Chileno</label>
                  <input
                    type="text"
                    placeholder="Ej: 18.456.789-K"
                    value={customer.rut}
                    onChange={(e) => setCustomer({ ...customer, rut: e.target.value })}
                    className="w-full bg-[#f8f9fa] border border-[#e4e4e7] rounded-full px-3.5 py-2 text-[#121214] focus:outline-none focus:border-[#e60000]"
                  />
                </div>

                <div>
                  <label className="block text-[#121214] font-bold mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.cl"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full bg-[#f8f9fa] border border-[#e4e4e7] rounded-full px-3.5 py-2 text-[#121214] focus:outline-none focus:border-[#e60000]"
                  />
                </div>

                <div>
                  <label className="block text-[#121214] font-bold mb-1">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+56 9 1234 5678"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full bg-[#f8f9fa] border border-[#e4e4e7] rounded-full px-3.5 py-2 text-[#121214] focus:outline-none focus:border-[#e60000]"
                  />
                </div>

                {!pickupInStore ? (
                  <>
                    <div className="sm:col-span-2">
                      <label className="block text-[#121214] font-bold mb-1">Dirección de Entrega *</label>
                      <input
                        type="text"
                        placeholder="Calle, Número, Depto / Villa"
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className="w-full bg-[#f8f9fa] border border-[#e4e4e7] rounded-full px-3.5 py-2 text-[#121214] focus:outline-none focus:border-[#e60000]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#121214] font-bold mb-1">Comuna / Ciudad</label>
                      <input
                        type="text"
                        placeholder="Ej: Talca, Santiago, Concepción..."
                        value={customer.commune}
                        onChange={(e) => setCustomer({ ...customer, commune: e.target.value })}
                        className="w-full bg-[#f8f9fa] border border-[#e4e4e7] rounded-full px-3.5 py-2 text-[#121214] focus:outline-none focus:border-[#e60000]"
                      />
                    </div>
                  </>
                ) : (
                  <div className="sm:col-span-2 p-3.5 bg-emerald-50 border border-emerald-100 rounded-2xl text-xs text-[#00bb76] font-bold">
                    ✓ Retiro en Tienda Talca: Av. 2 Sur Locales 771 y 777. Listo en 2 horas hábiles.
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#121214] uppercase tracking-wider">
                2. Selecciona Medio de Pago
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setPaymentMethod("webpay_plus")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === "webpay_plus"
                      ? "bg-red-50 border-[#e60000]"
                      : "bg-white border-[#e4e4e7] hover:border-zinc-300"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-red-100 text-[#e60000] flex items-center justify-center font-bold text-xs">
                    TBK
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#121214]">Webpay Plus (Redcompra)</h5>
                    <p className="text-[11px] text-zinc-500">Tarjetas de Débito, Crédito y Prepago.</p>
                  </div>
                </div>

                <div
                  onClick={() => setPaymentMethod("mercadopago")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === "mercadopago"
                      ? "bg-red-50 border-[#e60000]"
                      : "bg-white border-[#e4e4e7] hover:border-zinc-300"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    MP
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#121214]">Mercado Pago Chile</h5>
                    <p className="text-[11px] text-zinc-500">Hasta 6 cuotas sin interés y saldo en cuenta.</p>
                  </div>
                </div>

                <div
                  onClick={() => setPaymentMethod("transferencia")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 sm:col-span-2 ${
                    paymentMethod === "transferencia"
                      ? "bg-red-50 border-[#e60000]"
                      : "bg-white border-[#e4e4e7] hover:border-zinc-300"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#00bb76] flex items-center justify-center font-bold text-xs">
                    🏦
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#121214]">Transferencia Bancaria Directa</h5>
                    <p className="text-[11px] text-zinc-500">Datos para transferencia electrónica inmediata.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#f8f9fa] rounded-2xl border border-[#e4e4e7] space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-600">
                  <span>Productos ({items.length})</span>
                  <span>${subtotalCLP.toLocaleString("es-CL")} CLP</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Despacho</span>
                  <span>{pickupInStore ? "GRATIS" : `$${(totalCLP - subtotalCLP).toLocaleString("es-CL")} CLP`}</span>
                </div>
                <div className="pt-2 border-t border-[#e4e4e7] flex justify-between font-extrabold text-sm text-[#121214]">
                  <span>Total Final:</span>
                  <span className="text-[#e60000]">${totalCLP.toLocaleString("es-CL")} CLP</span>
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
                <h3 className="text-xl font-bold text-[#121214]">¡Pedido Confirmado con Éxito!</h3>
                <p className="text-xs text-zinc-500 mt-0.5">Hemos registrado tu orden en MotoRock Chile</p>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e4e4e7] rounded-[24px] p-5 text-left text-xs space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-[#e4e4e7]">
                  <span className="text-zinc-500">Número de Orden:</span>
                  <span className="font-mono font-bold text-[#121214]">{confirmedOrder.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Cliente:</span>
                  <span className="font-bold text-[#121214]">{confirmedOrder.customer.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Email:</span>
                  <span className="text-zinc-700">{confirmedOrder.customer.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Código de Despacho Starken:</span>
                  <span className="font-mono font-bold text-[#00bb76]">{confirmedOrder.trackingNumber}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#e4e4e7] text-sm font-bold">
                  <span className="text-[#121214]">Monto Total:</span>
                  <span className="text-[#e60000]">{confirmedOrder.totalFormatted}</span>
                </div>
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-[#f8f9fa] hover:bg-zinc-200 text-[#121214] rounded-full text-xs font-bold"
                >
                  <Printer size={14} /> Imprimir Comprobante
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#e60000] hover:bg-[#cc0000] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-motorock-red cursor-pointer"
                >
                  Volver a la Tienda
                </button>
              </div>
            </div>
          )}
        </div>

        {step !== 3 && (
          <div className="p-5 bg-[#f8f9fa] border-t border-[#e4e4e7] flex items-center justify-between">
            {step === 2 ? (
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-white border border-[#e4e4e7] text-[#121214] hover:bg-zinc-100 rounded-full text-xs font-bold cursor-pointer"
              >
                Volver
              </button>
            ) : (
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <ShieldCheck size={14} className="text-[#00bb76]" />
                <span>Transacción Segura 256-bit</span>
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
                className="bg-[#e60000] hover:bg-[#cc0000] text-white px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-motorock-red cursor-pointer"
              >
                <span>Continuar al Pago</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={handleConfirmPayment}
                disabled={loading || timeLeft === 0}
                className="bg-[#e60000] hover:bg-[#cc0000] text-white px-7 py-2.5 rounded-full font-bold text-xs shadow-motorock-red flex items-center gap-1.5 cursor-pointer"
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
