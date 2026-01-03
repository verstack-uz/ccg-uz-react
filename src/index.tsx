import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

import "@/styles/index.css";
import AppRoutes from "@/routes/AppRoutes";

// Render the SPA
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(AppRoutes)} />
  </React.StrictMode>,
);
