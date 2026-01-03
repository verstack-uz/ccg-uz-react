import path from "path";

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Path aliases (same as vite.config.ts)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@utils": path.resolve(__dirname, "src/utilities"),
    },
  },

  // React component testing in browsers
  plugins: [react()],
  test: {
    // Great environment for testing
    // and debugging DOM-related code
    environment: "jsdom",
  },
});
