import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { Observer } from "tailwindcss-intersect";
import "flyonui/flyonui.js";

import "@/styles/main.css";
import AppRoutes from "@/routes/AppRoutes";

// Initialize intersection observer for tailwindcss-intersect (useful for
// triggering animations or lazy loading content based on element visibility)
Observer.start();

// Render the SPA
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(AppRoutes)} />
  </React.StrictMode>
);
