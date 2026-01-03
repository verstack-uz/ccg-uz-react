import { AppTheme, AppThemes } from "@/styles/AppThemes";

export class Preferences {
  // Prevent instantiation from this class (allow accessing static methods only)
  private constructor() {}

  // Note: don't forget to add your keys here when adding new preferences
  public static Key = {
    THEME: "theme",
  };

  public static clear(): void {
    localStorage.clear();
  }

  public static setTheme(theme: AppTheme): void {
    if (AppThemes.includes(theme)) {
      localStorage.setItem(Preferences.Key.THEME, theme);
    } else {
      throw new Error(
        `Invalid theme: ${theme}, must be one of ${AppThemes.join(", ")}`
      );
    }
  }

  public static getTheme(): AppTheme {
    let storedTheme = localStorage.getItem(Preferences.Key.THEME) as AppTheme;

    // If no theme is stored, default to "corporate" and store it
    if (!storedTheme || !AppThemes.includes(storedTheme)) {
      storedTheme = "corporate";
      localStorage.setItem(Preferences.Key.THEME, storedTheme);
    }

    return storedTheme;
  }
}
