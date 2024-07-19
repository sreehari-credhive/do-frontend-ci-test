import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    ui: true,
    setupFiles: "./src/tests/setup.ts",
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});
