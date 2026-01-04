// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["dist/", "coverage/", "node_modules/", "*.config.js", "*.config.ts"],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
);
