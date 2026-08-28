import React, { useState, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import BrandsCarousel from "./components/BrandsCarousel";
import AppFeatureSection from "./components/AppFeatureSection";
import BentoCategories from "./components/BentoCategories";
import GarageSelector from "./components/GarageSelector";
import CategoryNav from "./components/CategoryNav";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import VerifiedReviews from "./components/VerifiedReviews";
import StoreLocation from "./components/StoreLocation";
import Footer from "./components/Footer";
import AppDownloadModal from "./components/AppDownloadModal";
import { Filter, ArrowUpDown, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { ALL_PRODUCTS } from "./data/catalogData";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBike, setSelectedBike] = useState(null);
  const [sortOption, setSortOption] = useState("popular");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 24;

  const [isGarageOpen, setIsGarageOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("motorock_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedRegion, setSelectedRegion] = useState("maule");
  const [pickupInStore, setPickupInStore] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    try {
      localStorage.setItem("motorock_cart", JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, selectedBike, sortOption, inStockOnly, onSaleOnly]);

  const filteredProducts = useMemo(() => {
    let result = [...ALL_PRODUCTS];

    if (selectedBike) {
      const keywords = selectedBike.keywords || [];
      const chain = selectedBike.chainPitch;
      result = result.filter((p) => {
        const text = (p.name + " " + p.shortDescription + " " + p.description).toLowerCase();
        if (keywords.some((k) => text.includes(k))) return true;
        if (text.includes("cadena") || text.includes("transmision") || text.includes("catalina") || text.includes("piñón")) {
          if (text.includes(chain)) return true;
        }
        if (text.includes("aceite") || text.includes("lubricante") || text.includes("motul")) {
          if (text.includes("4t") || text.includes("10w40") || text.includes("15w50")) return true;
        }
        const universalCats = ["CASCOS", "INDUMENTARIA", "BOLSOS", "SEGURIDAD", "ANTIPARRAS", "INTERCOMUNICADORES", "LIMPIEZA"];
        return (p.categories || []).some((c) => universalCats.includes(c.name));
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) => {
        const name = (p.name || "").toLowerCase();
        const desc = (p.shortDescription || p.description || "").toLowerCase();
        const sku = (p.sku || "").toLowerCase();
        const cats = (p.categories || []).map((c) => c.name.toLowerCase()).join(" ");
        return name.includes(q) || desc.includes(q) || sku.includes(q) || cats.includes(q);
      });
    }

    if (activeCategory !== "all") {
      result = result.filter((p) => {
        return (p.categories || []).some(
          (c) => String(c.id) === String(activeCategory) || c.slug === activeCategory || c.name.toLowerCase() === activeCategory.toLowerCase()
        );
      });
    }

    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    if (onSaleOnly) {
      result = result.filter((p) => p.onSale);
    }

    if (sortOption === "price_asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price_desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "popular") {
      result.sort((a, b) => (b.onSale ? 1 : 0) - (a.onSale ? 1 : 0));
    }

    return result;
  }, [activeCategory, searchQuery, selectedBike, sortOption, inStockOnly, onSaleOnly]);

  const totalItemsCount = filteredProducts.length;
  const totalPages = Math.ceil(totalItemsCount / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleAddToCart = (product, quantity = 1, variation = null) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (it) => it.product.id === product.id && it.variation?.id === variation?.id
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity, variation }];
      }
    });

    showToast(`"${product.name.slice(0, 24)}..." añadido al carrito`);
  };

  const handleUpdateQuantity = (productId, variationId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId, variationId);
      return;
    }
    setCart((prev) =>
      prev.map((it) => {
        if (it.product.id === productId && it.variation?.id === variationId) {
          return { ...it, quantity: newQuantity };
        }
        return it;
      })
    );
  };

  const handleRemoveFromCart = (productId, variationId) => {
    setCart((prev) =>
      prev.filter((it) => !(it.product.id === productId && it.variation?.id === variationId))
    );
    showToast("Producto eliminado del carrito");
  };

  const handleBuyNow = (product, quantity = 1, variation = null) => {
    setIsCartOpen(false);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  const subtotalCLP = cart.reduce((acc, item) => acc + (item.product.price || 0) * item.quantity, 0);

  let shippingCost = 4990;
  if (pickupInStore || subtotalCLP >= 50000) {
    shippingCost = 0;
  } else if (selectedRegion === "maule") {
    shippingCost = 3990;
  }

  const totalCLP = subtotalCLP + shippingCost;
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#121214] flex flex-col justify-between">
      {/* Notificación Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121214] text-white px-5 py-3 rounded-full shadow-motorock font-bold text-xs flex items-center gap-2 animate-in slide-in-from-bottom duration-200 border border-zinc-700">
          <Check size={15} className="text-[#00bb76]" />
          <span>{toast}</span>
        </div>
      )}

      {/* Cabecera */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        selectedBike={selectedBike}
        onOpenGarage={() => setIsGarageOpen(true)}
        onClearGarage={() => setSelectedBike(null)}
        searchQuery={searchQuery}
        onSearchChange={(q) => setSearchQuery(q)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onOpenAppModal={() => setIsAppModalOpen(true)}
      />

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full">
        {/* 1. Hero con Showcase Interactivo de Fotos Reales */}
        <HeroBanner
          onSelectCategory={(catId) => setActiveCategory(catId)}
          onOpenGarage={() => setIsGarageOpen(true)}
          onOpenAppModal={() => setIsAppModalOpen(true)}
        />

        {/* 2. Marquee de Marcas Oficiales */}
        <BrandsCarousel />

        {/* 3. Sección de 3 Pilares: App, Delivery Express y Taller */}
        <AppFeatureSection
          onOpenAppModal={() => setIsAppModalOpen(true)}
          onSelectCategory={(catId) => setActiveCategory(catId)}
        />

        {/* 4. Bento Grid de Categorías Principales */}
        <BentoCategories
          onSelectCategory={(catId) => setActiveCategory(catId)}
        />

        {/* Notificación de Moto Seleccionada */}
        {selectedBike && (
          <div className="mb-6 p-5 bg-red-50 border border-red-200 rounded-[24px] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏍️</span>
              <div>
                <h4 className="text-xs font-bold text-[#e60000]">
                  Filtrando repuestos compatibles para: <span className="text-[#121214]">{selectedBike.brand} {selectedBike.model}</span>
                </h4>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  Paso de Cadena: {selectedBike.chainPitch} • Aceite recomendado: {selectedBike.oilSpec}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsGarageOpen(true)}
                className="px-4 py-1.5 bg-white hover:bg-zinc-100 text-xs font-bold rounded-full border border-[#e4e4e7] text-[#121214]"
              >
                Cambiar Moto
              </button>
              <button
                onClick={() => setSelectedBike(null)}
                className="px-4 py-1.5 bg-red-100 hover:bg-red-200 text-[#e60000] text-xs font-bold rounded-full"
              >
                Quitar Filtro
              </button>
            </div>
          </div>
        )}

        {/* Píldoras de Categorías */}
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={(catId) => setActiveCategory(catId)}
        />

        {/* Barra de Filtros y Ordenamiento */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-4 bg-white border border-[#e4e4e7] rounded-[24px] shadow-sm">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-[#121214] flex items-center gap-1.5">
              <Filter size={14} className="text-[#e60000]" />
              Catálogo ({totalItemsCount} repuestos)
            </span>

            <button
              onClick={() => setInStockOnly(!inStockOnly)}
              className={`px-3.5 py-1 rounded-full text-[11px] font-bold border transition-colors cursor-pointer ${
                inStockOnly
                  ? "bg-emerald-50 border-emerald-200 text-[#00bb76]"
                  : "bg-[#f8f9fa] border-[#e4e4e7] text-zinc-700 hover:text-[#e60000]"
              }`}
            >
              ✓ En Stock
            </button>

            <button
              onClick={() => setOnSaleOnly(!onSaleOnly)}
              className={`px-3.5 py-1 rounded-full text-[11px] font-bold border transition-colors cursor-pointer ${
                onSaleOnly
                  ? "bg-red-50 border-red-200 text-[#e60000]"
                  : "bg-[#f8f9fa] border-[#e4e4e7] text-zinc-700 hover:text-[#e60000]"
              }`}
            >
              🔥 Ofertas
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-zinc-400 flex items-center gap-1"><ArrowUpDown size={12} /> Ordenar:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-[#f8f9fa] text-[#121214] border border-[#e4e4e7] rounded-full px-3 py-1 text-xs font-semibold focus:outline-none focus:border-[#e60000]"
            >
              <option value="popular">Destacados</option>
              <option value="price_asc">Menor Precio</option>
              <option value="price_desc">Mayor Precio</option>
              <option value="name">Nombre A-Z</option>
            </select>
          </div>
        </div>

        {/* Grilla de Productos */}
        {paginatedProducts.length === 0 ? (
          <div className="py-16 text-center space-y-2 bg-white border border-[#e4e4e7] rounded-[32px] p-8 shadow-sm">
            <span className="text-3xl">🔍</span>
            <h3 className="text-sm font-bold text-[#121214]">No encontramos repuestos con esos filtros</h3>
            <p className="text-xs text-zinc-400">Prueba con otros términos de búsqueda o restablece los filtros.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setSelectedBike(null);
                setInStockOnly(false);
                setOnSaleOnly(false);
              }}
              className="mt-2 bg-[#e60000] hover:bg-[#cc0000] text-white px-5 py-2 rounded-full text-xs font-bold shadow-motorock-red"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={(p) => setSelectedProduct(p)}
                onAddToCart={(p) => handleAddToCart(p, 1)}
              />
            ))}
          </div>
        )}

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 rounded-full bg-white border border-[#e4e4e7] text-xs font-bold text-[#121214] disabled:opacity-40 hover:bg-[#f8f9fa] shadow-sm cursor-pointer"
            >
              <ChevronLeft size={14} /> Anterior
            </button>

            <span className="text-xs font-medium text-zinc-400 px-3">
              Página <strong className="text-[#121214]">{currentPage}</strong> de <strong className="text-[#121214]">{totalPages}</strong>
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 rounded-full bg-white border border-[#e4e4e7] text-xs font-bold text-[#121214] disabled:opacity-40 hover:bg-[#f8f9fa] shadow-sm cursor-pointer"
            >
              Siguiente <ChevronRight size={14} />
            </button>
          </div>
        )}

        {/* 5. Reseñas Verificadas de Motociclistas */}
        <VerifiedReviews />

        {/* 6. Showroom Físico y Taller en Talca */}
        <StoreLocation />
      </main>

      {/* Modales */}
      <AppDownloadModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
      />

      <GarageSelector
        isOpen={isGarageOpen}
        onClose={() => setIsGarageOpen(false)}
        onSelectBike={(bike) => {
          setSelectedBike(bike);
          showToast(`Moto seleccionada: ${bike.brand} ${bike.model}`);
        }}
        selectedBike={selectedBike}
      />

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        onOpenAppModal={() => {
          setSelectedProduct(null);
          setIsAppModalOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        selectedRegion={selectedRegion}
        onChangeRegion={setSelectedRegion}
        pickupInStore={pickupInStore}
        onTogglePickup={setPickupInStore}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        subtotalCLP={subtotalCLP}
        totalCLP={totalCLP}
        shippingQuote={{
          cost: shippingCost,
          pickupInStore,
          regionId: selectedRegion
        }}
        pickupInStore={pickupInStore}
        onOrderCompleted={() => {
          setCart([]);
          showToast("¡Pedido completado con éxito!");
        }}
      />

      {/* Pie de Página */}
      <Footer onOpenAppModal={() => setIsAppModalOpen(true)} />
    </div>
  );
}
