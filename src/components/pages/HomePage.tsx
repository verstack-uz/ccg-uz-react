import { useTranslation } from "react-i18next";

import ProjectsCarousel from "@/components/elements/ProjectsCarousel";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      {/* md:mt-24, but since previous element (statistics) translates upward, no need */}
      <h1
        className={
          "mt-16 mb-4 md:mt-0 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Current projects").toUpperCase()}
      </h1>

      <ProjectsCarousel />
    </>
  );
}
