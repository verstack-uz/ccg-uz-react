import { vi, describe, it, beforeEach, expect } from "vitest";

import { Preferences } from "@/utilities/Preferences";
import { AppTheme, AppThemes, DefaultAppTheme } from "@/styles/AppThemes";

describe("Preferences", () => {
  beforeEach(() => {
    Preferences.clear();
    vi.restoreAllMocks();
  });

  it("should clean up localStorage when clear() is called", () => {
    localStorage.setItem("testKey", "testValue");

    const clearSpy = vi.spyOn(Storage.prototype, "clear");
    Preferences.clear();
    expect(clearSpy).toHaveBeenCalled();

    expect(localStorage.getItem("testKey")).toBeNull();
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

  it("should invoke localStorage.setItem when setting theme", () => {
    const theme = DefaultAppTheme;
    // Set a spy on localStorage.setItem method. Note that Storage.prototype
    // is used because localStorage is an instance of Storage, and we can't
    // spy directly on localStorage in some environments.
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
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
    vi.restoreAllMocks();
  });

  it("should invoke localStorage.getItem when called", () => {
    // Set a spy on localStorage.getItem method. Note that Storage.prototype
    // is used because localStorage is an instance of Storage, and we can't
    // spy directly on localStorage in some environments.
    const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
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
