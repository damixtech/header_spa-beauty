import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/header_spa-beauty/' : '/',

  build: {
    outDir: 'dist', // Carpeta donde se generarán los archivos de producción
    rollupOptions: {
      input: {
        main: 'index.html'
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

