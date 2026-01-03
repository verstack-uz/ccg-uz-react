import { useRouteError } from "react-router";

import NotFoundPage from "@components/pages/error/NotFoundPage";
import ServerErrorPage from "@components/pages/error/ServerErrorPage";

export default function ErrorPage() {
  // Get error information from react-router
  let error = useRouteError();
  let statusCode = (error as any)?.status || 500;
  console.error(error);

  // Render error page based on status code (404 or 500)
  if (statusCode === 404) {
    return <NotFoundPage />; // bad URL
  } else {
    return <ServerErrorPage />; // assume 500 error by default
  }
}
