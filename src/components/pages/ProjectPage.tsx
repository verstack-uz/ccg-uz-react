import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";

import Gallery from "@/components/elements/ProjectPhotoGallery";
import ProjectsCarousel from "@/components/elements/ProjectsCarousel";
import { Project } from "@/lib/types/Project";

export default function ProjectPage() {
  const project = useOutletContext<Project>();
  const { t } = useTranslation();

  return (
    <div>
      <h1
        className={
          "mt-16 mb-4 md:mt-24 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Project photos")}
      </h1>
      <Gallery imageUrls={project.imageUrls} />

      <h1
        className={
          "mt-16 mb-4 md:mt-24 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Other projects")}
      </h1>
      <ProjectsCarousel />
    </div>
  );
}
