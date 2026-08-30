import React, { useState, useEffect, useMemo, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import BrandsCarousel from "./components/BrandsCarousel";
import DiffusedBrandsBackground from "./components/DiffusedBrandsBackground";
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
import MobileBottomNav from "./components/MobileBottomNav";
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

  const searchInputRef = useRef(null);

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

  const handleFocusSearch = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 300);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-[#0f172a] flex flex-col justify-between relative overflow-x-hidden w-full max-w-[100vw]">
      {/* 1. Diffused Background Mesh */}
      <DiffusedBrandsBackground />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 bg-[#0f172a] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-2xl font-bold text-xs flex items-center gap-2 animate-in slide-in-from-bottom duration-200 border border-white/20">
          <Check size={14} className="text-[#00bb76]" />
          <span className="font-heading">{toast}</span>
        </div>
      )}

      {/* Header */}
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
        searchInputRef={searchInputRef}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex-1 w-full relative z-10 pb-24 md:pb-10">
        {/* 1. Hero Banner */}
        <HeroBanner
          onSelectCategory={(catId) => setActiveCategory(catId)}
          onOpenGarage={() => setIsGarageOpen(true)}
          onOpenAppModal={() => setIsAppModalOpen(true)}
        />

        {/* 2. Official Brands Ribbon */}
        <BrandsCarousel />

        {/* 3. App Feature Section */}
        <AppFeatureSection
          onOpenAppModal={() => setIsAppModalOpen(true)}
          onSelectCategory={(catId) => setActiveCategory(catId)}
        />

        {/* 4. Bento Categories Showcase */}
        <BentoCategories
          onSelectCategory={(catId) => setActiveCategory(catId)}
        />

        {/* Selected Bike Notification Banner */}
        {selectedBike && (
          <div className="mb-6 p-4 sm:p-5 bg-red-50/80 backdrop-blur-md border border-red-200 rounded-[20px] sm:rounded-[24px] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-2xl">🏍️</span>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-black text-[#0f172a] font-heading truncate">
                  Repuestos para: <span className="text-[#e60000]">{selectedBike.brand} {selectedBike.model}</span>
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                  Paso: {selectedBike.chainPitch} • Aceite: {selectedBike.oilSpec}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => setIsGarageOpen(true)}
                className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 bg-white hover:bg-slate-100 text-xs font-bold rounded-full border border-slate-200 text-[#0f172a]"
              >
                Cambiar
              </button>
              <button
                onClick={() => setSelectedBike(null)}
                className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 bg-red-50 hover:bg-red-100 text-[#e60000] text-xs font-bold rounded-full border border-red-200"
              >
                Quitar
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
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-3 sm:p-4 glass-panel rounded-[20px] sm:rounded-[24px]">
          <div className="flex items-center gap-2 text-xs flex-wrap">
            <span className="font-black text-[#0f172a] flex items-center gap-1.5 font-heading">
              <Filter size={13} className="text-[#e60000]" />
              Catálogo ({totalItemsCount})
            </span>

            <button
              onClick={() => setInStockOnly(!inStockOnly)}
              className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold border transition-colors cursor-pointer ${
                inStockOnly
                  ? "bg-emerald-50 border-emerald-200 text-[#00bb76]"
                  : "glass-pill text-[#0f172a] hover:bg-white"
              }`}
            >
              ✓ En Stock
            </button>

            <button
              onClick={() => setOnSaleOnly(!onSaleOnly)}
              className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold border transition-colors cursor-pointer ${
                onSaleOnly
                  ? "bg-red-50 border-red-200 text-[#e60000]"
                  : "glass-pill text-[#0f172a] hover:bg-white"
              }`}
            >
              🔥 Ofertas
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 text-[11px] flex items-center gap-1"><ArrowUpDown size={11} /> Orden:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-white text-[#0f172a] border border-slate-200 rounded-full px-2.5 py-1 text-[11px] font-bold focus:outline-none focus:border-[#e60000]"
            >
              <option value="popular">Destacados</option>
              <option value="price_asc">Menor Precio</option>
              <option value="price_desc">Mayor Precio</option>
              <option value="name">Nombre A-Z</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {paginatedProducts.length === 0 ? (
          <div className="py-12 sm:py-16 text-center space-y-2 glass-panel rounded-[28px] sm:rounded-[32px] p-6 sm:p-8">
            <span className="text-3xl">🔍</span>
            <h3 className="text-sm font-black text-[#0f172a] font-heading">No encontramos repuestos con esos filtros</h3>
            <p className="text-xs text-slate-500">Prueba con otros términos de búsqueda o restablece los filtros.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setSelectedBike(null);
                setInStockOnly(false);
                setOnSaleOnly(false);
              }}
              className="mt-2 bg-[#e60000] hover:bg-[#cc0000] text-white px-5 py-2 rounded-full text-xs font-black shadow-racing"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full glass-pill text-xs font-bold text-[#0f172a] disabled:opacity-40 hover:bg-white shadow-sm cursor-pointer"
            >
              <ChevronLeft size={14} /> Anterior
            </button>

            <span className="text-xs font-medium text-slate-500 px-2">
              <strong className="text-[#0f172a]">{currentPage}</strong> / <strong className="text-[#0f172a]">{totalPages}</strong>
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full glass-pill text-xs font-bold text-[#0f172a] disabled:opacity-40 hover:bg-white shadow-sm cursor-pointer"
            >
              Siguiente <ChevronRight size={14} />
            </button>
          </div>
        )}

        {/* 5. Verified Reviews Section */}
        <VerifiedReviews />

        {/* 6. Physical Showroom & Workshop Section in Talca */}
        <StoreLocation />
      </main>

      {/* Mobile Sticky Floating Navigation Bar */}
      <MobileBottomNav
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        selectedBike={selectedBike}
        onOpenGarage={() => setIsGarageOpen(true)}
        onOpenAppModal={() => setIsAppModalOpen(true)}
        onFocusSearch={handleFocusSearch}
      />

      {/* Modals & Drawers */}
      <AppDownloadModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
      />

      <GarageSelector
        isOpen={isGarageOpen}
        onClose={() => setIsGarageOpen(false)}
        onSelectBike={(bike) => {
          setSelectedBike(bike);
          showToast(`Moto: ${bike.brand} ${bike.model}`);
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

      {/* Footer */}
      <Footer onOpenAppModal={() => setIsAppModalOpen(true)} />
    </div>
  );
}
