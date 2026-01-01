import React from "react";
import { useNavigate } from "react-router";

import Header from "@/components/Header";
import { Preferences } from "@/utilities/utilities";
import { AppRoute } from "@/routes";

export default function CompanyPage() {
  // Prepare navigation hook
  let navigate = useNavigate();

  // Set page title
  const pageTitle = "CCG company";
  React.useEffect(() => {
    document.title = pageTitle;
  });

  // Render component
  return (
    <div
      data-theme={Preferences.getTheme()}
      className={"w-screen min-h-screen pb-64 motion-preset-fade"}
    >
      <Header title={pageTitle} />
      <div className={"bg-base-100 h-full px-4 pt-4 flex flex-col space-y-4"}>
        <h1 className={"text-2xl font-bold"}>
          About Civil Construction Group (CCG)
        </h1>

        <a className="btn btn-accent" onClick={() => navigate(AppRoute.HOME)}>
          Home
        </a>
      </div>
    </div>
  );
}
