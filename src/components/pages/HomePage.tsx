import { useTranslation } from "react-i18next";

import ProjectsCarousel from "@/components/elements/ProjectsCarousel";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className={"mt-8 md:mt-0"}>
      <h1 className={"text-2xl md:text-4xl text-center tracking-normal"}>
        {t("Current projects").toUpperCase()}
      </h1>
      <ProjectsCarousel />
    </div>
  );
}
