import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { Observer } from "tailwindcss-intersect";
import "flyonui/flyonui.js";

import "@/styles/main.css";
import getRoutes from "@/routes";

// Initialize intersection observer for tailwindcss-intersect (useful for
// triggering animations or lazy loading content based on element visibility)
Observer.start();

// React router setup
const router = getRoutes();

// Render the SPA
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
