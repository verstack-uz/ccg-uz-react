/**
 * Assembles all application routes from different modules
 * (e.g., home, dashboard, settings pages) into a single array.
 *
 * Then, provides the assembled routes array for later use by
 * react-router (see index.tsx file for its usage).
 */

import { RouteObject } from "react-router-dom";

import { routes as homeRoutes } from "@routes/home";

const AppRoutes: RouteObject[] = [...homeRoutes];

export default AppRoutes;
