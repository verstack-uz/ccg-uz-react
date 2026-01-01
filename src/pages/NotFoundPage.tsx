import React from "react";

export default function NotFoundPage() {
  // Set page title
  React.useEffect(() => {
    document.title = "Not Found";
  }, []);

  // Render component
  return (
    <div className={"w-screen min-h-screen pb-64 motion-preset-fade"}>
      <div className={"bg-base-100 h-full px-4 pt-4 flex flex-col space-y-4"}>
        <h1 className={"text-2xl font-bold"}>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
