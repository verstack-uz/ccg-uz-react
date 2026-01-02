import { vi, describe, it, beforeEach, expect, expectTypeOf } from "vitest";

import { Preferences } from "@/utilities/utils";
import { AppTheme, AppThemes, DefaultAppTheme } from "@/styles/AppTheme";

describe("AppThemes", () => {
  it("should be an array", () => {
    expect(Array.isArray(AppThemes)).toBe(true);
  });

  it("should contain only strings", () => {
    for (const theme of AppThemes) expectTypeOf(theme).toBeString();
  });

  it("should contain unique themes", () => {
    const uniqueThemes = new Set(AppThemes);
    expect(uniqueThemes.size).toBe(AppThemes.length);
  });

  it("should contain 'corporate' theme", () => {
    expect(AppThemes).toContain("corporate");
  });

  it("should have at least at least ≥1 theme available", () => {
    expect(AppThemes.length).toBeGreaterThanOrEqual(1);
  });

  it("should have type AppTheme for each theme", () => {
    for (const theme of AppThemes)
      expectTypeOf(theme).toEqualTypeOf<AppTheme>();
  });
});

describe("Preferences.setTheme()", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should not throw error when setting valid theme", () => {
    for (const theme of AppThemes)
      expect(() => Preferences.setTheme(theme)).not.toThrowError();
  });

  it("should throw error when providing invalid app theme", () => {
    // Some invalid themes (not in AppThemes)
    const invalidThemes = [
      "invalid",
      "blue",
      "red",
      "",
      "123",
      true,
      null,
      undefined,
    ];

    for (const theme of invalidThemes) {
      // Ensure the theme is indeed invalid
      expect(
        AppThemes.indexOf(theme as AppTheme),
        `Problem in the test: ${theme} is a valid theme!`
      ).toBe(-1);

      // Expect setStoredTheme to throw an error when called with invalid theme
      expect(
        () => Preferences.setTheme(theme as AppTheme),
        `Passing an invalid theme (${theme}) should throw an error!`
      ).toThrowError();
    }
  });

  it("should invokle localStorage.setItem when setting theme", () => {
    const theme = DefaultAppTheme;
    const setItemSpy = vi.spyOn(localStorage, localStorage.setItem.name);
    Preferences.setTheme(theme);
    expect(setItemSpy).toHaveBeenCalledWith(Preferences.Key.THEME, theme);
  });

  it("should actually set the theme in localStorage", () => {
    const theme = DefaultAppTheme;
    Preferences.setTheme(theme);
    const storedTheme = localStorage.getItem(Preferences.Key.THEME);
    expect(storedTheme).toBe(theme);
  });
});

describe("Preferences.getTheme()", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should invokle localStorage.getItem when called", () => {
    const getItemSpy = vi.spyOn(localStorage, localStorage.getItem.name);
    Preferences.getTheme();
    expect(getItemSpy).toHaveBeenCalledWith(Preferences.Key.THEME);
  });

  it("should return the theme previously set by setTheme", () => {
    for (const theme of AppThemes) {
      Preferences.setTheme(theme);
      const retrievedTheme = Preferences.getTheme();
      expect(retrievedTheme).toBe(theme);
    }
  });

  it("should return a valid (non-null) theme even if no theme was set before", () => {
    const theme = Preferences.getTheme();
    expect(theme).not.toBeNull();
    expect(AppThemes.indexOf(theme)).not.toBe(-1);
  });

  it("should return default theme 'corporate' if no theme was set before", () => {
    const theme = Preferences.getTheme();
    expect(theme).toBe("corporate");
  });
});
