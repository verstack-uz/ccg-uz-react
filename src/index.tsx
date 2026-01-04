import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/index.css";
import AppRoutes from "@/routes/AppRoutes";

// Render the SPA
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={createBrowserRouter(AppRoutes)} />
    </ThemeProvider>
  </React.StrictMode>
);
