import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "ks-adapters",
      fileName: (format) => `ks-adapters.${format}.js`,
      formats: ["es", "cjs", "umd"], // ESM, CJS y UMD
    },
    rollupOptions: {
      // Externaliza solo dependencias que NO deben incluirse
      external: [],
      output: {
        // Incluye todas las dependencias en el bundle
        inlineDynamicImports: true,
        // Exportaciones nombradas como en tu index.js
        exports: "named",
        // No necesitamos globals ya que todo está incluido
        globals: {},
      },
    },
    // Opciones de optimización
    minify: true, // Minificar el código
    sourcemap: true, // Generar source maps
    emptyOutDir: true, // Limpiar directorio antes de build
    target: "es2020", // Nivel de compatibilidad ES
  },
  optimizeDeps: {
    include: ["socket.io-client"], // Asegurar que socket.io se optimice
  },
});
