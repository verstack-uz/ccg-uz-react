import { useRouteError, isRouteErrorResponse } from "react-router";

import NotFoundPage from "@/components/pages/error/NotFoundPage";
import ServerErrorPage from "@/components/pages/error/ServerErrorPage";

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
      <div>
        <h1 className={"text-red-600 text-3xl"}>Bug:</h1>
        <p className={"mt-4 text-xl"}>{error.message}</p>
        <pre className={"mt-4"}>{error.stack}</pre>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className={"text-red-600 text-3xl"}>Unknown error</h1>
        <p className={"mt-4 text-xl"}>No idea ¯\_(ツ)_/¯</p>
      </div>
    );
  }
}
