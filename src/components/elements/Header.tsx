import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AppPaths from "@/routes/AppPaths";
import ThemeToggle from "@/components/elements/ThemeToggle";
import LanguageSelector from "@/components/elements/LanguageSelector";
import HamburgerMenu from "@/components/elements/HamburgerMenu";
import Navbar from "@/components/elements/Navbar";
import {
  TypographyH1,
  TypographyH4,
  TypographyLarge,
} from "@/components/elements/Typography";

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
      <nav className="absolute top-0 left-0 right-0">
        {/* Navigation bar */}
        <div className="flex mt-6 mb-4 h-16 items-center px-4 md:px-16">
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
        <div className="mt-6 md:mt-16 flex flex-col space-y-4 text-white w-full text-center">
          <TypographyH1 text={t("header.heroText").toUpperCase()} />
          <TypographyLarge text={t("header.heroSubText").toUpperCase()} />
        </div>
      </nav>
    </header>
  );
}
