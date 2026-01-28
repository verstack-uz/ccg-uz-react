import { describe, expect, it, beforeEach, vi } from "vitest";

import { LanguageCode, languageCodes } from "@/i18n";
import { Project } from "@/lib/types/Project";

describe("Projects class - Singleton", () => {
  beforeEach(async () => {
    vi.resetModules();
    vi.resetAllMocks();
  });

  it("should return the same instance on multiple calls", async () => {
    vi.doMock("@/lib/data/projects.json", () => ({
      default: [
        {
          id: 1,
          title: languageCodes.reduce(
            (acc, code) => {
              acc[code] = `Title in ${code}`;
              return acc;
            },
            {} as Record<LanguageCode, string>,
          ),
          description: languageCodes.reduce(
            (acc, code) => {
              acc[code] = `Description in ${code}`;
              return acc;
            },
            {} as Record<LanguageCode, string>,
          ),
          imageUrls: ["image1.png"],
          isCompleted: true,
        } as Project,
      ],
    }));

    // This dynamic import reloads projects.json mock above
    const { default: Projects } = await import("@/lib/data/projects");

    const instance1 = Projects.getInstance();
    const instance2 = Projects.getInstance();

    expect(instance1).toBe(instance2);
  });

  it("should throw error if projects.json is empty", async () => {
    for (const testCase of [undefined, null, [], {}]) {
      vi.doMock("@/lib/data/projects.json", () => ({
        default: testCase,
      }));

      // This dynamic import reloads projects.json mock above
      const { default: Projects } = await import("@/lib/data/projects");

      expect(() => {
        Projects.getInstance();
      }).toThrow();

      vi.resetAllMocks();
    }
  });

  it("should throw error if any field is missing in projects.json", async () => {
    const testCases = [
      {
        // Missing all fields
      },
      {
        // Missing id field
        title: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Title in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        description: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Description in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        imageUrls: ["image1.png"],
        isCompleted: true,
      },
      {
        id: 1,
        // Missing title field
        description: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Description in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        imageUrls: ["image1.png"],
        isCompleted: false,
      },
      {
        id: 2,
        // Missing title for a specific language
        title: languageCodes.reduce(
          (acc, code, index) => {
            acc[code] = index === 0 ? "   " : `Title in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        description: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Description in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        imageUrls: ["image1.png"],
        isCompleted: false,
      },
      {
        id: 3,
        title: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Title in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        // Missing description field
        imageUrls: ["image1.png"],
        isCompleted: true,
      },
      {
        id: 4,
        title: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Title in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        // Missing description for a specific language
        description: languageCodes.reduce(
          (acc, code, index) => {
            acc[code] = index === 0 ? "   " : `Description in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        imageUrls: ["image1.png"],
        isCompleted: false,
      },
      {
        id: 5,
        title: languageCodes
          .filter((code) => code !== languageCodes[0])
          .reduce(
            (acc, code) => {
              acc[code] = `Title in ${code}`;
              return acc;
            },
            {} as Record<LanguageCode, string>,
          ),
        description: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Description in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        // Missing imageUrls field
        isCompleted: true,
      },
      {
        id: 6,
        title: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Title in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        description: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Description in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        imageUrls: [], // Empty imageUrls
        isCompleted: false,
      },
      {
        id: 7,
        title: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Title in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        description: languageCodes.reduce(
          (acc, code) => {
            acc[code] = `Description in ${code}`;
            return acc;
          },
          {} as Record<LanguageCode, string>,
        ),
        imageUrls: ["image1.png"],
        // Missing isCompleted field
      },
    ];

    for (const invalidData of testCases) {
      vi.doMock("@/lib/data/projects.json", () => ({
        default: [invalidData],
      }));

      // This dynamic import reloads projects.json mock above
      const { default: Projects } = await import("@/lib/data/projects");

      expect(() => {
        Projects.getInstance();
      }).toThrow();
    }
  });

  it("should create instance if projects.json is valid", async () => {
    const projectIds = [1, 2, 3];
    vi.doMock("@/lib/data/projects.json", () => ({
      default: projectIds.map((projectId) => {
        return {
          id: projectId,
          title: languageCodes.reduce(
            (acc, code) => {
              acc[code] = `Title in ${code}`;
              return acc;
            },
            {} as Record<LanguageCode, string>,
          ),
          description: languageCodes.reduce(
            (acc, code) => {
              acc[code] = `Description in ${code}`;
              return acc;
            },
            {} as Record<LanguageCode, string>,
          ),
          imageUrls: ["image1.png"],
          isCompleted: true,
        } as Project;
      }),
    }));

    // This dynamic import reloads projects.json mock above
    const { default: Projects } = await import("@/lib/data/projects");

    expect(() => {
      const instance = Projects.getInstance();
      expect(instance).toBeDefined();
    }).not.toThrow();

    expect(Projects.getInstance().length).toBe(projectIds.length);
  });
});
