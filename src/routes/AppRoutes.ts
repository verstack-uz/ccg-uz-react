/**
 * Assembles all application routes from different modules
 * (e.g., home, dashboard, settings pages) into a single array.
 *
 * Then, provides the assembled routes array for later use by
 * react-router (see index.tsx file for its usage).
 */

import { RouteObject } from "react-router-dom";

import { routes as homeRoutes } from "@/routes/home";
import { routes as projectRoutes } from "@/routes/projects";
import { routes as companyRoutes } from "@/routes/company";

const AppRoutes: RouteObject[] = [
  // "/" (home page) and its sub-routes
  ...homeRoutes,

  // "/projects" and its sub-routes
  ...projectRoutes,

  // "/company" and its sub-routes
  ...companyRoutes,
];

export default AppRoutes;
