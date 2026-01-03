import React from "react";

import { AppTheme, AppThemes } from "@/styles/AppThemes";

interface ThemeSelectorProps {
  theme: AppTheme;
  setTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
}

export default function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  return (
    <div className={"flex flex-col space-y-4"}>
      <p className={"text-2xl"}>Theme</p>
      <div className={"flex flex-row flex-wrap space-x-2 space-y-2"}>
        {AppThemes.map((_theme: AppTheme, idx: number) => (
          <input
            className={"btn btn-soft flex-1 min-w-24"}
            data-theme={_theme}
            type="radio"
            key={`theme-selector-${idx}`}
            name="theme-selector-group"
            aria-label={_theme}
            defaultChecked={_theme === theme}
            onClick={() => {
              setTheme(_theme);
              localStorage.setItem("theme", _theme);
            }}
          />
        ))}
      </div>
    </div>
  );
}
