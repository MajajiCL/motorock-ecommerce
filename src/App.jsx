import React, { useState, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import BrandsCarousel from "./components/BrandsCarousel";
import BentoCategories from "./components/BentoCategories";
import GarageSelector from "./components/GarageSelector";
import CategoryNav from "./components/CategoryNav";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import StoreLocation from "./components/StoreLocation";
import Footer from "./components/Footer";
import { Filter, ArrowUpDown, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { ALL_PRODUCTS, ALL_CATEGORIES, ALL_BIKES } from "./data/catalogData";

export default function App() {
  // Filters State
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBike, setSelectedBike] = useState(null);
  const [sortOption, setSortOption] = useState("popular");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 24;

  // Modals & Drawers State
  const [isGarageOpen, setIsGarageOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cart State (Persisted in localStorage)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("motorock_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Shipping & Region
  const [selectedRegion, setSelectedRegion] = useState("maule");
  const [pickupInStore, setPickupInStore] = useState(false);

  // Toast Notification
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

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, selectedBike, sortOption, inStockOnly, onSaleOnly]);

  // High-Performance Client-Side Filtering
  const filteredProducts = useMemo(() => {
    let result = [...ALL_PRODUCTS];

    // 1. Garage Filter
    if (selectedBike) {
      const keywords = selectedBike.keywords || [];
      const chain = selectedBike.chainPitch;
      result = result.filter((p) => {
        const text = (p.name + " " + p.shortDescription + " " + p.description).toLowerCase();
        if (keywords.some((k) => text.includes(k))) return true;
        if (text.includes("cadena") || text.includes("transmision") || text.includes("catalina") || text.includes("pi??n")) {
          if (text.includes(chain)) return true;
        }
        if (text.includes("aceite") || text.includes("lubricante") || text.includes("motul")) {
          if (text.includes("4t") || text.includes("10w40") || text.includes("15w50")) return true;
        }
        const universalCats = ["CASCOS", "INDUMENTARIA", "BOLSOS", "SEGURIDAD", "ANTIPARRAS", "INTERCOMUNICADORES", "LIMPIEZA"];
        return (p.categories || []).some((c) => universalCats.includes(c.name));
      });
    }

    // 2. Search Query
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

    // 3. Category Filter
    if (activeCategory !== "all") {
      result = result.filter((p) => {
        return (p.categories || []).some(
          (c) => String(c.id) === String(activeCategory) || c.slug === activeCategory || c.name.toLowerCase() === activeCategory.toLowerCase()
        );
      });
    }

    // 4. In Stock Filter
    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    // 5. On Sale Filter
    if (onSaleOnly) {
      result = result.filter((p) => p.onSale);
    }

    // 6. Sorting
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

  // Pagination Calculation
  const totalItemsCount = filteredProducts.length;
  const totalPages = Math.ceil(totalItemsCount / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Cart Actions
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

    showToast(`"${product.name.slice(0, 24)}..." agregado al carrito`);
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

  // Pricing & Shipping
  const subtotalCLP = cart.reduce((acc, item) => {
    return acc + (item.product.price || 0) * item.quantity;
  }, 0);

  let shippingCost = 4990;
  if (pickupInStore || subtotalCLP >= 50000) {
    shippingCost = 0;
  } else if (selectedRegion === "maule") {
    shippingCost = 3990;
  }

  const totalCLP = subtotalCLP + shippingCost;
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl font-bold text-xs flex items-center gap-2 animate-in slide-in-from-bottom duration-200">
          <Check size={16} className="text-[#FF5500]" />
          <span>{toast}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        selectedBike={selectedBike}
        onOpenGarage={() => setIsGarageOpen(true)}
        onClearGarage={() => setSelectedBike(null)}
        searchQuery={searchQuery}
        onSearchChange={(q) => setSearchQuery(q)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full">
        {/* Hero Section with Magic UI BorderBeam & ShimmerButton */}
        <HeroBanner
          onSelectCategory={(catId) => setActiveCategory(catId)}
          onOpenGarage={() => setIsGarageOpen(true)}
        />

        {/* Brand Showcase with Magic UI Marquee */}
        <BrandsCarousel />

        {/* Aceternity UI Bento Grid Categories */}
        <BentoCategories
          onSelectCategory={(catId) => setActiveCategory(catId)}
        />

        {/* Selected Bike Notification Banner */}
        {selectedBike && (
          <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">???</span>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Repuestos compatibles para: <span className="text-[#FF5500]">{selectedBike.brand} {selectedBike.model}</span>
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Paso de Cadena: {selectedBike.chainPitch} ? Aceite recomendado: {selectedBike.oilSpec}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsGarageOpen(true)}
                className="px-3 py-1.5 bg-white hover:bg-slate-100 text-xs font-semibold rounded border border-slate-200 text-slate-800"
              >
                Cambiar Moto
              </button>
              <button
                onClick={() => setSelectedBike(null)}
                className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded border border-red-200"
              >
                Quitar Filtro
              </button>
            </div>
          </div>
        )}

        {/* Category Navigation Pills */}
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={(catId) => setActiveCategory(catId)}
        />

        {/* Filters & Sorting Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-3.5 bg-white border border-slate-200 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <Filter size={14} className="text-[#FF5500]" />
              Cat?logo ({totalItemsCount} productos)
            </span>

            {/* In stock toggle */}
            <button
              onClick={() => setInStockOnly(!inStockOnly)}
              className={`px-3 py-1 rounded-md text-[11px] font-bold border transition-colors cursor-pointer ${
                inStockOnly
                  ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              ? En Stock
            </button>

            {/* On sale toggle */}
            <button
              onClick={() => setOnSaleOnly(!onSaleOnly)}
              className={`px-3 py-1 rounded-md text-[11px] font-bold border transition-colors cursor-pointer ${
                onSaleOnly
                  ? "bg-orange-50 border-orange-300 text-[#FF5500]"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              ?? En Oferta
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 flex items-center gap-1"><ArrowUpDown size={12} /> Ordenar:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-slate-50 text-slate-800 border border-slate-300 rounded px-2.5 py-1 text-xs font-medium focus:outline-none focus:border-[#FF5500]"
            >
              <option value="popular">Destacados</option>
              <option value="price_asc">Menor Precio</option>
              <option value="price_desc">Mayor Precio</option>
              <option value="name">Nombre A-Z</option>
            </select>
          </div>
        </div>

        {/* Product Grid with CardSpotlight */}
        {paginatedProducts.length === 0 ? (
          <div className="py-16 text-center space-y-2 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-3xl">??</span>
            <h3 className="text-sm font-bold text-slate-900">No encontramos productos con esos filtros</h3>
            <p className="text-xs text-slate-500">Prueba con otros t?rminos de b?squeda o restablece los filtros.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setSelectedBike(null);
                setInStockOnly(false);
                setOnSaleOnly(false);
              }}
              className="mt-2 bg-[#FF5500] hover:bg-[#e64d00] text-white px-4 py-2 rounded-lg text-xs font-bold"
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40 hover:bg-slate-50 shadow-sm"
            >
              <ChevronLeft size={15} /> Anterior
            </button>

            <span className="text-xs font-medium text-slate-500 px-2">
              P?gina <strong className="text-slate-900">{currentPage}</strong> de <strong className="text-slate-900">{totalPages}</strong>
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40 hover:bg-slate-50 shadow-sm"
            >
              Siguiente <ChevronRight size={15} />
            </button>
          </div>
        )}

        {/* Physical Store Section */}
        <StoreLocation />
      </main>

      {/* Modals */}
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
          showToast("?Pedido completado con ?xito!");
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
