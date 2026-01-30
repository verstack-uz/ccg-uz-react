import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={"mt-16"}>
      <div
        className={"mt-4 h-16 border-[#404149] dark:border-t-white border-t"}
      >
        <div
          className={
            "container mx-auto flex flex-col md:flex-row gap-4 justify-between pt-4 pb-8"
          }
        >
          <div className={"flex flex-row gap-x-1 items-center justify-center"}>
            <span>&copy;</span>
            <span>{new Date().getFullYear()}</span>
            <span>{t("Civil Construction Group")}</span>
          </div>

          <div className={"flex flex-row gap-x-2 items-center justify-center"}>
            <span>{t("Texnik xizmat ko'rsatuvchi")}:</span>
            <Button
              variant="ghost"
              className={"px-3 py-2 rounded-sm bg-[#020381] cursor-pointer"}
            >
              <Link to={"https://verstack.uz"}>
                <img
                  src="/icons/verstack_logo.svg"
                  className={"h-6 object-contain"}
                  alt="Verstack Logo"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
