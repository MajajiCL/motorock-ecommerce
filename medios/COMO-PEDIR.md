# Guía para Solicitar Medios a Claude Code

Este archivo define el protocolo para solicitar generación y optimización de imágenes en el proyecto.

## 📋 Estructura de `medios/pedidos.json`
Añade una entrada al array con el siguiente formato:

```json
{
  "id": "hero-fondo",
  "que": "abstract topographic contour lines, dark navy paper texture, subtle gold accents, minimal, no text, no logo",
  "ancho": 1216,
  "alto": 832,
  "destino": "public/img/hero-fondo.jpg",
  "estado": "pendiente",
  "nota": "fondo del hero, va detrás del titular"
}
```

## 📐 Reglas Estrictas
1. **Idioma del Prompt:** El campo `"que"` va **SIEMPRE EN INGLÉS**.
2. **Sin Letras ni Logos:** Termina siempre el prompt con `"no text, no logo"`.
3. **Resoluciones Válidas (SDXL ~1MP):**
   - Horizontal: `1216x832`
   - Vertical: `832x1216`
   - Cuadrado: `1024x1024`
   - Panorámico: `1344x768`
4. **Eficiencia:** Pide solo las imágenes estrictamente necesarias que vayan a formar parte activa de la interfaz.

## 🚫 Qué NO Pedir Nunca
- Fotos de un negocio real: locales, talleres, equipos, fachadas.
- Personas identificables como clientes, empleados o testimonios.
- Productos concretos del cliente (usar fotos oficiales de catálogo).
- Logos o texto dentro de la imagen (los rótulos van en HTML).

## 🛠️ Tareas Adicionales que Gestiona Claude Code
- Corrección de color y recorte de video.
- Optimización de imágenes a WebP / AVIF responsive.
- Favicons, Open Graph, schema JSON-LD, sitemap, robots.txt.
- Medición de Core Web Vitals.
- Publicación por cPanel / GitHub Pages.
- *Canal de comunicación:* `medios/NOTAS.md`.
