/**
 * Routes for company page and its sub-pages.
 */

import { RouteObject } from "react-router";

import AppPaths from "@/routes/AppPaths";
import CompanyPage from "@/components/pages/CompanyPage";
import ErrorBoundary from "@/components/pages/error/ErrorBoundary";
import CompanyLayout from "@/components/layouts/CompanyLayout";

const routes: RouteObject[] = [];

// "/company" (company route in address bar)
routes.push({
  path: AppPaths.COMPANY,
  element: <CompanyLayout />,
  children: [
    {
      index: true,
      element: <CompanyPage />,
    },
  ],
  errorElement: <ErrorBoundary />,
});

export { routes };
