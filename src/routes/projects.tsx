/**
 * Routes for project page and its sub-pages.
 */

import { RouteObject } from "react-router";

import AppPaths from "@/routes/AppPaths";
import ProjectLayout from "@/components/layouts/ProjectLayout";
import ProjectPage from "@/components/pages/ProjectPage";
import ErrorBoundary from "@/components/pages/error/ErrorBoundary";

const routes: RouteObject[] = [];

// "/projects/:id" (project page route in address bar)
routes.push({
  path: `${AppPaths.PROJECTS}/:projectId`,
  element: <ProjectLayout />,
  children: [
    {
      index: true,
      element: <ProjectPage />,
    },
  ],
  errorElement: <ErrorBoundary />,
});

export { routes };
