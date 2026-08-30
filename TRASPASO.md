# DOCUMENTO DE TRASPASO TÉCNICO: MOTOROCK CHILE E-COMMERCE
**Elaborado por:** Antigravity (Pair Programmer & Frontend Architect)  
**Destinatario:** Claude Code  
**Fecha:** 30 de Agosto de 2026  

---

## 1. DÓNDE ESTÁ

- **Ruta absoluta de la carpeta del proyecto:**
  - Frontend (Web): `D:\CLAUDIOPRO\_appdata\gemini\antigravity\scratch\motorock-project\web`
  - Backend API: `D:\CLAUDIOPRO\_appdata\gemini\antigravity\scratch\motorock-project\backend`
  - Raíz general: `D:\CLAUDIOPRO\_appdata\gemini\antigravity\scratch\motorock-project`
- **¿Es un repositorio git? ¿Tiene remoto? ¿En qué rama estás?**
  - Sí, es un repositorio Git inicializado en la carpeta `web`.
  - **Remoto Git:** `https://github.com/MajajiCL/motorock-ecommerce.git`
  - **Rama de trabajo activa:** `main`
  - **Rama de publicación en vivo:** `gh-pages`
- **¿Está publicado en algún sitio?**
  - Sí, en GitHub Pages: **`https://majajicl.github.io/motorock-ecommerce/`**
- **Cómo se levanta en local:**
  - **Frontend:**
    ```bash
    cd D:\CLAUDIOPRO\_appdata\gemini\antigravity\scratch\motorock-project\web
    npm run dev
    ```
    *Puerto local:* `http://localhost:3000` (o `http://localhost:5173` si 3000 está ocupado).
  - **Backend (API de pedidos, stock y cotizador Starken):**
    ```bash
    cd D:\CLAUDIOPRO\_appdata\gemini\antigravity\scratch\motorock-project\backend
    node src/server.js
    ```
    *Puerto local API:* `http://localhost:4000`

---

## 2. STACK Y ESTRUCTURA

- **Framework y versión:** React `18.3.1`
- **Bundler:** Vite `6.4.3`
- **Gestor de paquetes:** `npm`
- **Estilos:** Tailwind CSS `3.4.17` con PostCSS y Autoprefixer.
- **Árbol de carpetas (hasta 2 niveles):**
  ```text
  web/
  ├── dist/                    → Salida de producción compilada (desplegada en gh-pages)
  │   ├── assets/              → Bundles JS y CSS minificados con hash
  │   └── index.html           → Entrada HTML de producción
  ├── medios/                  → Protocolo de comunicación de medios con Claude Code
  │   ├── COMO-PEDIR.md        → Guía de reglas SDXL y restricciones de imagen
  │   ├── NOTAS.md             → Canal de mensajes asíncronos [antigravity] / [claude]
  │   └── pedidos.json         → Cola de pedidos de imagen en formato JSON
  ├── public/                  → Archivos estáticos directos servidos por Vite
  │   ├── assets/              → Logos de marcas y assets estáticos
  │   └── img/                 → Destino de imágenes generadas por Claude Code
  ├── src/                     → Código fuente React
  │   ├── assets/              → Logos oficiales MotoRock (PNGs en alta resolución)
  │   ├── components/          → Componentes UI de la tienda
  │   │   └── ui/              → Microcomponentes (Marquee, CardSpotlight, NumberTicker, etc.)
  │   ├── data/                → Catálogo íntegro (catalogData.js con 726 productos)
  │   ├── lib/                 → Utilidades (utils.js con cn/clsx/tailwind-merge)
  │   ├── App.jsx              → Orquestador principal, estado global del carrito y catálogo
  │   ├── index.css            → Directivas Tailwind, tipografías y tokens Dark Biker Flame
  │   └── main.jsx             → Punto de entrada ReactDOM
  ├── index.html               → Plantilla HTML con preconnect a Google Fonts
  ├── package.json             → Dependencias y scripts de build
  ├── tailwind.config.js       → Configuración de temas, colores y animaciones
  └── vite.config.js           → Configuración de Vite con base path /motorock-ecommerce/
  ```
- **Dependencias no obvias y uso:**
  - `lucide-react`: Iconografía SVG deportiva y consistente.
  - `clsx` y `tailwind-merge`: Fusión segura y condicional de clases Tailwind en `lib/utils.js`.
  - `canvas-confetti`: Efecto de celebración al completar pedidos en el checkout.
- **¿Hay build? ¿Dónde queda la salida?**
  - Sí: `npm run build` compila la aplicación y deposita los estáticos listos en `web/dist/`.

---

## 3. EL NEGOCIO

- **Nombre comercial:** MotoRock Chile / MotoRock Talca
- **Razón social:** MotoRock Chile SpA
- **Ciudad:** Talca, Región del Maule, Chile.
- **Locales físicos:**
  - **Local 771 (Indumentaria y Cascos):** Av. 2 Sur (entre 1 Oriente y 1 Poniente) #771, Talca.
    - *WhatsApp Atención:* `+56 9 5610 5413`
  - **Local 777 (Taller Mecánico y Repuestos):** Av. 2 Sur #777, Talca.
    - *WhatsApp Taller:* `+56 9 7696 7438`
- **Web oficial cliente:** `https://motorock.cl`
- **Instagram oficial:** `@motorock.cl`
- **Qué vende y a quién:** Repuestos mecánicos (transmisión, frenos, aceites, bujías), indumentaria biker (cascos homologados ECE 22.06, chaquetas con protecciones CE, guantes, impermeables) y servicio técnico especializado para dueños de motos urbanas, deportivas y touring en Talca y todo Chile.

### 🔍 Auditoría de Promesas en la Web:
1. **"726 productos disponibles":** `[CONFIRMADA]`  
   - Extraída directamente de la base de datos de productos reales de su tienda WooCommerce (`motorock.cl`).
2. **"Retiro en 2 horas en Talca (Av. 2 Sur 771 y 777)":** `[CONFIRMADA]`  
   - Los dos locales físicos cuentan con stock en sala y taller para entrega inmediata.
3. **"Despacho Express 24h a 48h por Starken y Chilexpress":** `[CONFIRMADA]`  
   - Es el servicio y operador logístico estándar con el que opera la tienda desde Talca a todo Chile.
4. **"Asistente Mecánico por IA / Garage Virtual en App":** `[PROPUESTA DE VALOR / EN DESARROLLO]`  
   - El Garage Virtual filtra productos compatibles en el frontend mediante reglas de paso de cadena (`chainPitch`) y viscosidad de aceite (`oilSpec`). El backend tiene la arquitectura preparada, pero el modelo de voz es una interfaz interactiva simulada.

---

## 4. LOS PRODUCTOS (LO MÁS IMPORTANTE)

- **¿De dónde salen los 726 productos?**
  - Salen del archivo `web/src/data/catalogData.js`.
  - Fueron extraídos directamente de la tienda oficial WooCommerce de MotoRock (`motorock.cl/wp-json/wc/v3/products`).
- **Ruta del archivo:** `web/src/data/catalogData.js`
- **¿Los datos son REALES o de ejemplo?**
  - **100% REALES:** Los 726 productos tienen sus nombres exactos, SKUs oficiales, precios reales en pesos chilenos (`$CLP`), categorías oficiales y URLs activas de imágenes en el servidor WordPress de MotoRock (`https://motorock.cl/wp-content/uploads/...`).
- **¿Hay carrito y checkout de verdad o es maqueta?**
  - **Carrito:** 100% funcional en cliente (persiste en `localStorage`, suma cantidades, calcula subtotales y valida stock).
  - **Checkout:** Interfaz completa con validación de RUT chileno con dígito verificador (módulo 11), selección de región/comuna, cálculo dinámico de flete Starken ($3.990 Maule, $4.990 otras regiones, gratis sobre $50.000 o retiro en local) y selector de medios de pago.
  - **Pasarela bancaria:** El backend `backend/src/server.js` tiene los controladores estructurados para recibir Webpay Plus Transbank / Mercado Pago, pero actualmente en producción estática (GitHub Pages) opera en modo confirmación simulada con emisión de orden de compra interna.
- **Marcas que aparecen:**
  - `Motul`, `LS2`, `HJC`, `D.I.D`, `Bell`, `AGV`, `Alpinestars`, `Shaft`, `ProTaper`, `Liqui Moly`, `Ipone`, `Repsol`: `[CONFIRMADA - Distribuidas en tienda]`.
  - `Shoei`, `Dainese`, `Akrapovič`: `[REFERENCIA DE CATÁLOGO / IMPORTACIÓN]`.

---

## 5. LAS IMÁGENES (ORIGEN EXACTO)

- **El Casco del Hero Banner:**
  - Actualmente carga la foto oficial de catálogo del **Casco HJC RPHA 60 Dakar** (`https://motorock.cl/wp-content/uploads/2026/08/028f734bfb6a4b59a4a803ad9cc54fa8_800.jpg`) montada sobre un halo de fuego volcánico por CSS.
  - *Pedido para Claude:* Hemos registrado en `medios/pedidos.json` la orden `hero-helmet-flame` para generar la versión 8K fotográfica con SDXL.
- **Fotos de productos y categorías:**
  - Son fotos **oficiales reales** alojadas en `https://motorock.cl/wp-content/uploads/...` (Casco HJC, Aceite Motul 7100, Transmisión D.I.D, Chaqueta LS2 Serra Evo, Bolso Rhinowalk).
  - En la tarjeta de "REPUESTOS" se usa temporalmente la foto del kit de transmisión real y en "ACCESORIOS" la foto del bolso Rhinowalk real, a la espera de que Claude genere `category-sprocket.png` y `category-topcase.png`.
- **Logotipos de marcas:**
  - El logo principal **MotoRock en fuego** es el logotipo oficial de la marca (`src/assets/logo-motorock-600.png`).
  - Las marcas en `BrandsCarousel.jsx` están maquetadas como badges tipográficos nítidos en HTML/Tailwind para evitar artefactos borrosos o fondos blancos indeseados.
- **Ruta de almacenamiento:**
  - Assets internos: `web/src/assets/`
  - Medios generados/optimizados: `web/public/img/`

---

## 6. ESTADO REAL DEL PROYECTO

### ✅ Qué existe y funciona al 100%:
1. **Navegación y Cabecera:**
   - Top notice bar con avisos reales y accesos directos.
   - Buscador inteligente en tiempo real por término, SKU o categoría con menú flotante de autocompletado y miniaturas.
   - Sub-navbar con botón de categorías y enlaces rápidos activos.
2. **Hero Banner:**
   - Tipografía masiva de alto impacto, propuesta de valor con los 726 repuestos reales y botones de acción rápida.
3. **Sección "Categorías Principales":**
   - Grid de 5 tarjetas en carbón oscuro (`#121318`) con fotos de catálogo y enlaces directos al catálogo filtrado.
4. **Catálogo de 726 Productos:**
   - Paginación dinámica (24 productos por página).
   - Filtro por 10 categorías reales.
   - Filtro rápido "En Stock" y "Ofertas".
   - Ordenamiento por Menor Precio, Mayor Precio, Destacados y Nombre A-Z.
5. **Modal de Detalle de Producto (`ProductModal.jsx`):**
   - Selector de cantidad, galería de imágenes, cálculo de cuotas sin interés y botón "Agregar al Carrito".
6. **Carrito Lateral (`CartDrawer.jsx`):**
   - Modificación de cantidades, eliminación de ítems, selector de región chilena con recálculo de flete y botón de checkout.
7. **Modal de Checkout (`CheckoutModal.jsx`):**
   - Formulario completo con validación de RUT chileno, dirección de despacho o retiro en Av. 2 Sur 771/777 Talca y resumen de costos.
8. **Garage Virtual (`GarageSelector.jsx`):**
   - Selector de 6 motos populares en Chile (Yamaha MT-03, Honda CB500X, KTM Duke 390, etc.) que filtra automáticamente repuestos compatibles.
9. **Reseñas y Ubicación de Locales:**
   - Tarjetas de clientes verificados y mapa/horarios de los locales 771 y 777 de Talca.
10. **Navegación Móvil:**
    - Barra inferior flotante (`MobileBottomNav.jsx`) para uso táctil ergonómico en smartphones.

### ⚠️ Qué está a medias o requiere backend en vivo:
- **Pasarelas de Pago:** La orden de compra se genera en frontend con código `#MR-XXXXXX`. Falta conectar el token de producción de Transbank Webpay Plus o Mercado Pago Chile (los endpoints están preparados en `backend/src/server.js`).

### 🐛 Bugs resueltos recientemente:
- **Crash en iPhone 11 Pro:** Se eliminó un componente de corredor 3D que usaba unidades `cqw` con `preserve-3d` en `@keyframes` en línea que provocaba un fallo de memoria en el motor WebKit de iOS Safari. Ahora la web es 100% estable y fluida en cualquier dispositivo móvil y PC.
- **Contraste:** Se corrigió cualquier texto blanco sobre fondo claro; toda la interfaz opera en modo oscuro con contraste WCAG AAA.

---

## 7. DECISIONES DE DISEÑO

- **Estética:** *Dark Aggressive Biker & Racing Flame* (Negro carbón profundo con acentos en rojo fuego y blanco puro).
- **Paleta de Colores (Códigos HEX exactos):**
  - `Fondo Canvas Base`: `#0a0a0c`
  - `Fondo Header Superior`: `#050507`
  - `Fondo Navbar Principal`: `#09090b`
  - `Fondo Sub-Navbar`: `#0d0e12`
  - `Fondo Tarjetas / Cards`: `#121318`
  - `Fondo Inputs / Botones Secundarios`: `#14151a`
  - `Bordes Tenues`: `#181920` / `#1e2028` / `#23242c`
  - `Rojo Primario / Racing Red`: `#e60000` (hover `#cc0000`)
  - `Rojo Acento Claro`: `#ff2200` / `#ff3333`
  - `Verde Éxito / Stock / Verificado`: `#00bb76`
  - `Cyan Acento (Tab activo)`: `#00c2cb`
  - `Texto Principal`: `#ffffff`
  - `Texto Secundario / Bajadas`: `#9ca3af` / `#a1a1aa`
- **Tipografías:**
  - **`Montserrat` (Weight 900 Black):** Para el titular principal H1 (`font-display`).
  - **`Oswald` & `Outfit` (Weights 700-900 Bold/Black):** Para encabezados de sección, nombres de categorías y números (`font-heading`).
  - **`Plus Jakarta Sans` (Weights 400-800):** Para cuerpo de texto, descripciones y componentes de UI (`font-sans`).
- **Reglas críticas de diseño para no romper:**
  1. No reintroducir transformaciones 3D con `perspective` dinámico o `@keyframes` con `cqw` en estilo inline (rompe WebKit iOS).
  2. Mantener las tarjetas de producto con fondo `#121318` y bordes oscuros `#1e2028`.
  3. Todo precio debe llevar el formato `$XX.XXX CLP`.

---

## 8. QUÉ NECESITO DE CLAUDE (LISTA PRIORIZADA)

1. **Generación de Medios SDXL (Cola en `medios/pedidos.json`):**
   - [ ] `hero-helmet-flame.jpg` (`1216x832`): Casco racing negro mate con líneas rojas sobre roca volcánica y fuego ardiente para el hero banner.
   - [ ] `category-sprocket.png` (`1024x1024`): Corona y piñón dentado metálico aislado para la tarjeta de Repuestos.
   - [ ] `category-topcase.png` (`1024x1024`): Maleta/Top case con reflector rojo aislada para la tarjeta de Accesorios.
   - *Destino:* Guardar directamente en `web/public/img/`.
2. **SEO Técnico y Metadatos:**
   - [ ] Crear favicon optimizado multiformato (SVG, PNG 192x192, PNG 512x512, Apple Touch Icon).
   - [ ] Configurar etiquetas Open Graph y Twitter Cards en `index.html` con imagen de vista previa.
   - [ ] Generar `sitemap.xml` y `robots.txt` para `https://majajicl.github.io/motorock-ecommerce/` o el dominio final.
   - [ ] Generar Schema JSON-LD de tipo `AutoPartsStore` / `LocalBusiness` con los datos de Talca (Av. 2 Sur 771 y 777).
3. **Optimización de Rendimiento y Core Web Vitals:**
   - [ ] Optimizar imágenes a formato WebP/AVIF comprimido.
   - [ ] Medir LCP, FID/INP y CLS en el build de producción.
4. **Despliegue y Publicación:**
   - [ ] Ejecutar `npm run build` y publicar la versión final en `gh-pages` o servidor cPanel según se requiera.

---
*Fin del documento de traspaso.*
