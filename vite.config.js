import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        // El catálogo son 726 productos con SKU, precio e imágenes: 1,4 MB
        // de los 1,5 que pesa el bundle. Mezclado con el código de la app,
        // cada corrección de una tarjeta obliga al visitante a volver a
        // descargarlo entero.
        //
        // Separado, el catálogo tiene su propio hash: cambia cuando cambia
        // el stock, no cuando tocamos un botón. Quien ya visitó la tienda
        // se ahorra la descarga grande en cada despliegue.
        //
        // OJO: esto NO acelera la PRIMERA visita. El chunk sigue siendo
        // dependencia síncrona del arranque. Para que la página pinte antes
        // de tener el catálogo hay que cargarlo con import() y sostener un
        // estado de carga en App y en el buscador del Navbar — eso toca la
        // lógica de la tienda y conviene acordarlo antes de hacerlo.
        manualChunks(id) {
          if (id.includes('src/data/catalogData')) return 'catalogo';
          if (id.includes('node_modules/react')) return 'react';
        },
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:4000',
      '/images': 'http://localhost:4000'
    }
  }
});
