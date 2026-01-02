import { AppTheme, AppThemes } from "@/styles/AppTheme";

export namespace Preferences {
  export enum Key {
    THEME = "theme",
  }

  export function getTheme(): AppTheme {
    let storedTheme = localStorage.getItem(Key.THEME) as AppTheme;

    // If no theme is stored, default to "corporate" and store it
    if (!storedTheme || !AppThemes.includes(storedTheme)) {
      storedTheme = "corporate";
      localStorage.setItem(Key.THEME, storedTheme);
    }

    return storedTheme;
  }

  export function setTheme(theme: AppTheme): void {
    if (AppThemes.includes(theme)) {
      localStorage.setItem(Key.THEME, theme);
    } else {
      throw new Error(
        `Invalid theme: ${theme}, must be one of ${AppThemes.join(", ")}`
      );
    }
  }
}
