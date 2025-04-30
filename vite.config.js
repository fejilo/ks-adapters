import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "ks-adapters",
      formats: ["es", "umd"],
      fileName: (format) => `ks-adapters.${format}.js`,
    },
  },
});
