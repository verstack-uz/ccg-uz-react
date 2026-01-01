import { createBrowserRouter } from "react-router";

import HomePage from "@/pages/HomePage";
import CompanyPage from "@/pages/CompanyPage";

// Define routes and re-use them across the app
export enum AppRoute {
  HOME = "/",
  COMPANY = "/company",
  PROJECTS = "/projects",
  EQUIPMENTS = "/equipments",
  VACANCIES = "/vacancies",
}

// Map route to components (react router)
function getRoutes() {
  return createBrowserRouter([
    {
      path: AppRoute.HOME,
      element: <HomePage />,
    },
    {
      path: AppRoute.COMPANY,
      element: <CompanyPage />,
    },
  ]);
}
export default getRoutes;
