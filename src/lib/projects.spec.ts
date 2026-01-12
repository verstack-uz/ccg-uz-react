import { describe, expect, it, beforeEach, vi } from "vitest";

import Projects from "@/lib/projects";

describe("Projects class", () => {
  beforeEach(() => {
    // Reset singleton instance before each test
    (Projects as any).instance = null;

    // Mock projects.json data
    vi.mock("@public/projects/projects.json", () => [
      {
        id: "project1",
        title: {
          "uz-latin": "Loyiha 1",
          "uz-cyrillic": "Лойиха 1",
          ru: "Проект 1",
          en: "Project 1",
        },
      },
      {
        id: "project2",
        title: {
          "uz-latin": "Loyiha 2",
          "uz-cyrillic": "Лойиха 2",
          ru: "Проект 2",
          en: "Project 2",
        },
      },
    ]);
  });

  it("should work fine for valid projects.json file", () => {
    expect(() => {
      Projects.getInstance();
    }).not.toThrow();
  });
});
