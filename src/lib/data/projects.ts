import { languageCodes } from "@/i18n";
import { Project } from "@/lib/types/Project";
import projectsJson from "@/lib/data/projects.json";

// cast json to Project
const projectsList: Project[] = projectsJson as Project[];

// Singleton class to manage projects
export default class Projects {
  private static instance: Projects; // Singleton instance

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): Projects {
    if (!Projects.instance) {
      Projects.instance = new Projects();
    }
    Projects.instance.validateProjects();
    return Projects.instance;
  }

  private validateProjects() {
    // Verify projects.json
    if (projectsList === undefined || projectsList === null) {
      throw new Error("Projects list is missing or invalid.");
    } else if (projectsList.length === 0) {
      throw new Error("Projects list is empty.");
    }

    // Verify each project entry
    for (const project of projectsList) {
      for (const field of ["id", "title", "imageUrls"]) {
        if (!(field in project)) {
          throw new Error(`Project entry is missing required field: ${field}`);
        }
      }

      // Check that title has all supported languages
      for (const languageCode of languageCodes) {
        if (!(languageCode in project.title)) {
          throw new Error(
            `Project entry with id '${project.id}' is missing title for language: ${languageCode}`
          );
        } else if (project.title[languageCode].trim().length === 0) {
          throw new Error(
            `Project entry with id '${project.id}' has empty title for language: ${languageCode}`
          );
        }
      }
    }
  }

  public get length(): number {
    return projectsList.length;
  }

  public map<T>(callback: (project: Project, index: number) => T): T[] {
    return projectsList.map(callback);
  }
}
