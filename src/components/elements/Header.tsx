import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AppPaths from "@/routes/AppPaths";
import ThemeToggle from "@/components/elements/ThemeToggle";
import LanguageSelector from "@/components/elements/LanguageSelector";
import HamburgerMenu from "@/components/elements/HamburgerMenu";
import Navbar from "@/components/elements/Navbar";

export default function Header() {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("navbar.company"), path: AppPaths.COMPANY },
    { name: t("navbar.projects"), path: AppPaths.PROJECTS },
    { name: t("navbar.services"), path: AppPaths.WHAT_WE_DO },
    { name: t("navbar.career"), path: AppPaths.CAREER },
    { name: t("navbar.equipments"), path: AppPaths.EQUIPMENTS },
    { name: t("navbar.contact"), path: AppPaths.CONTACT },
  ];

  return (
    <header className="relative h-80 md:h-96">
      {/* Background image */}
      <div className={"absolute inset-0 overflow-hidden"}>
        <img
          src="images/header-bg.jpg"
          alt={t("Image of construction company employees working on site")}
          className="w-full h-full object-cover dark:opacity-60"
        />
        <div
          className={"absolute inset-0 opacity-60 dark:opacity-40 bg-[#404149]"}
        ></div>
      </div>

      {/* Navigation bar */}
      <nav className="absolute pt-2 inset-0 flex flex-col">
        {/* Navigation bar */}
        <div className="flex p-2 h-16 items-center">
          {/* Site logo - home button */}
          <Link to={AppPaths.ROOT}>
            <img
              src="/icons/ccg-logo-transparent.svg"
              alt={t("CCG Logo")}
              className="p-1 h-10"
            />
          </Link>

          {/* Space to push elements to the right */}
          <div className="flex-1"></div>

          {/* Navbar for desktop */}
          <Navbar navLinks={navLinks} />

          <ThemeToggle />

          <LanguageSelector />

          {/* Hamburger menu for mobile */}
          <HamburgerMenu navLinks={navLinks} />
        </div>

        {/* Hero text */}
        <div className="px-2 flex flex-col flex-1 justify-center space-y-3 md:space-y-4.5 text-white">
          <h1 className={"text-3xl md:text-4xl text-center tracking-normal"}>
            {t("header.heroText").toUpperCase()}
          </h1>
          <h4
            className={
              "text-lg md:text-xl text-center font-light tracking-normal"
            }
          >
            {t("header.heroSubText").toUpperCase()}
          </h4>
        </div>
      </nav>
    </header>
  );
}
