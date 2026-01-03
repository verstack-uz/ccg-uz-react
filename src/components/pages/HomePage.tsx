import React from "react";
import { useNavigate } from "react-router";

import Header from "@components/elements/Header";
import { Preferences } from "@utils/utils";
import AppPaths from "@/routes/AppPaths";

export default function HomePage() {
  let navigate = useNavigate();

  return (
    <div
      data-theme={Preferences.getTheme()}
      className={"w-screen min-h-screen pb-64 motion-preset-fade"}
    >
      <Header title={"CCG.uz - Home"} />
      <div className={"bg-base-100 h-full px-4 pt-4 flex flex-col space-y-4"}>
        <h1 className={"text-2xl font-bold"}>
          Welcome to Civil Construction Group (CCG)
        </h1>

        <a className="btn btn-accent" onClick={() => navigate(AppPaths.COMPANY)}>
          Company
        </a>
      </div>
    </div>
  );
}
