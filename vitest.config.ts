import path from "path";

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Path aliases (same as vite.config.ts)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // React component testing in browsers
  plugins: [react()],
  test: {
    // Great environment for testing
    // and debugging DOM-related code
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html", "lcov"],
    },
  },
});
