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
      output: {
        globals: {
          "socket.io-client": "io",
        },
      },
    },
  },
});
