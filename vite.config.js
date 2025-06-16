import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./", // Rutas relativas para GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

