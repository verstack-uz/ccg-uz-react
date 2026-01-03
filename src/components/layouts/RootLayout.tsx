import { useEffect } from "react";
import { Outlet } from "react-router";

import { Preferences } from "@/utilities/Preferences";

export interface RootLayoutProps {
  pageTitle: string;
}

export default function RootLayout(props: RootLayoutProps) {
  useEffect(() => {
    document.title = props.pageTitle;
  }, [props.pageTitle]);

  return (
    <div
      data-theme={Preferences.getTheme()}
      className={"w-screen min-h-screen pb-64 motion-preset-fade"}
    >
      <Outlet />
    </div>
  );
}
