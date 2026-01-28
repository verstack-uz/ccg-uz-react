import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import AppPaths from "@/routes/AppPaths";
import ProjectsCarousel from "@/components/elements/ProjectsCarousel";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Highlighter } from "@/components/ui/highlighter";
import Services from "@/components/elements/Services";

export default function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* Joriy loyihalar karuseli */}
      {/* md:mt-24, but since previous element (statistics) translates upward, no need */}
      <h1
        className={
          "mt-16 mb-4 md:mt-0 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Current projects").toUpperCase()}
      </h1>
      <ProjectsCarousel isCompleted={false} />

      {/* Bog'lanish tugmasi */}
      <div
        className={
          "flex flex-row mt-16 mb-4 md:mt-24 md:mb-8 bg-[#f7644a] text-white"
        }
      >
        <div
          className={
            "container mx-auto flex flex-col md:flex-row gap-4 items-center px-3 py-8"
          }
        >
          <div className={"grow flex flex-col gap-2"}>
            <h1 className={"text-3xl"}>
              <Highlighter action="underline" color="yellow">
                {t("Let's build together").toUpperCase()}
              </Highlighter>
            </h1>
            <p className={"text-2xl"}>
              {t("Start your construction project today!").toUpperCase()}
            </p>
          </div>
          <div className={"w-full md:w-auto"}>
            <ShinyButton
              className={"w-full md:w-auto bg-white text-[#333]"}
              onClick={() => navigate(AppPaths.CONTACT)}
            >
              {t("Contact").toUpperCase()}
            </ShinyButton>
          </div>
        </div>
      </div>

      {/* Bizning xizmatlarimiz */}
      <h1
        className={
          "mt-16 mb-4 md:mt-24 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Xizmatlar").toUpperCase()}
      </h1>
      <Services />

      {/* Tugallangan loyihalar karuseli */}
      <h1
        className={
          "mt-16 mb-4 md:mt-24 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Tugallangan loyihalar").toUpperCase()}
      </h1>
      <ProjectsCarousel isCompleted={true} />
    </>
  );
}
