import { describe, it, expect, expectTypeOf } from "vitest";

import { AppTheme, AppThemes } from "@/styles/AppThemes";

describe("AppTheme(s)", () => {
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
