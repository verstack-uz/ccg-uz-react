import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AppPaths from "@/routes/AppPaths";
import ThemeToggle from "@/components/elements/ThemeToggle";
import LanguageSelector from "@/components/elements/LanguageSelector";
import HamburgerMenu from "@/components/elements/HamburgerMenu";
import Navbar from "@/components/elements/Navbar";

interface HeaderProps {
  title?: string;
  subTitle?: string;
  bgImageUrl?: string;
}

export default function Header(props: HeaderProps) {
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
    <header className={`relative h-80 md:h-96`}>
      {/* Background image */}
      <div className={"absolute inset-0 overflow-hidden"}>
        <img
          src={props.bgImageUrl ? props.bgImageUrl : "images/header-bg.jpeg"}
          alt={t("Image of construction company employees working on site")}
          className="w-full h-full object-cover"
        />
        <div
          className={
            "absolute inset-0 opacity-60 bg-[#404149] dark:bg-[#202129]"
          }
        ></div>
      </div>

      {/* Navigation bar */}
      <nav className="absolute mt-2.5 inset-0 flex flex-col">
        {/* Navigation bar */}
        <div className="container mx-auto flex p-2 h-16 items-center">
          {/* Site logo - home button */}
          <Link to={AppPaths.ROOT}>
            <img
              src="/icons/ccg-logo-transparent.svg"
              alt={t("CCG Logo")}
              aria-label={t("Go to homepage")}
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
        {(props.title || props.subTitle) && (
          <div className="px-2 flex flex-col flex-1 justify-center space-y-3 md:space-y-4.5 text-white">
            {props.title && (
              <h1
                className={"text-3xl md:text-4xl text-center tracking-normal"}
              >
                {props.title.toUpperCase()}
              </h1>
            )}
            {props.subTitle && (
              <h4
                className={
                  "text-lg md:text-xl text-center font-light tracking-normal"
                }
              >
                {props.subTitle.toUpperCase()}
              </h4>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
