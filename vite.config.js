import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "ks-adapters",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `ks-adapters.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          "socket.io-client": "io",
          moment: "moment",
        },
      },
    },
  },
});
