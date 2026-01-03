import { useRouteError, isRouteErrorResponse } from "react-router";

import NotFoundPage from "@components/pages/error/NotFoundPage";
import ServerErrorPage from "@components/pages/error/ServerErrorPage";
import { Preferences } from "@/utilities/Preferences";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    console.log(
      "ErrorBoundary caught an error:",
      error.status,
      error.statusText,
      error.data
    );

    if (error.status === 404) {
      return <NotFoundPage />; // bad URL
    } else {
      return <ServerErrorPage />; // assume 500 error by default
    }
  } else if (error instanceof Error) {
    return (
      <div data-theme={Preferences.getTheme()}>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return (
      <div data-theme={Preferences.getTheme()}>
        <h1>Unknown Error</h1>
      </div>
    );
  }
}
