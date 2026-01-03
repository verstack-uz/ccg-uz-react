/**
 * Routes for home page and its sub-pages.
 */

import { RouteObject } from "react-router";

import AppPaths from "@/routes/AppPaths";
import MainLayout from "@/components/layouts/MainLayout";
import HomePage from "@/components/pages/HomePage";
import ErrorBoundary from "@/components/pages/error/ErrorBoundary";

const routes: RouteObject[] = [];

// "/" (home route in address bar)
routes.push({
  path: AppPaths.ROOT,
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
  errorElement: <ErrorBoundary />,
});

export { routes };
