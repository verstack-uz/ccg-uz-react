import { RouteObject } from "react-router";

import AppPaths from "@/routes/AppPaths";
import RootLayout from "@/components/layouts/RootLayout";
import HomePage from "@/components/pages/HomePage";
import ErrorPage from "@/components/pages/error/NotFoundPage";

const routes: RouteObject[] = [];

// "/" (home route in address bar)
routes.push({
  path: AppPaths.ROOT,
  element: <RootLayout pageTitle="CCG.uz - Home" />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
  errorElement: <ErrorPage />,
});

export { routes };
