import { Link } from "react-router-dom";
import { Sun, Languages, Menu, X } from "lucide-react";
import { useState } from "react";

import AppPaths from "@/routes/AppPaths";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Company", path: AppPaths.COMPANY },
    { name: "Projects", path: AppPaths.PROJECTS },
    { name: "What we do", path: AppPaths.WHAT_WE_DO },
    { name: "Career", path: AppPaths.CAREER },
    { name: "Equipments", path: AppPaths.EQUIPMENTS },
    { name: "Contact", path: AppPaths.CONTACT },
  ];

  return (
    <header className="relative h-48 md:h-96">
      <div className={"absolute inset-0 overflow-hidden"}>
        <img
          src="images/header-bg.jpg"
          alt="Image of construction company employees working on site"
          className="w-full h-full object-cover"
        />
        <div className={"absolute inset-0 opacity-82 bg-[#404149]"}></div>
      </div>

      <nav className="absolute top-0 left-0 right-0">
        <div className="flex my-4 h-16 items-center px-4 md:px-16">
          {/* Site logo (home button) */}
          <Link to={AppPaths.ROOT}>
            <img
              src="/icons/ccg-logo-transparent.svg"
              alt="CCG Logo"
              className="h-8"
            />
          </Link>

          {/* Maximum possible space between home and navigation/action buttons */}
          <div className="flex-1"></div>

          {/* Desktop Navigation Menu - Right Side */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <Link to={link.path}>
                      <NavigationMenuLink className="text-white text-md">
                        {link.name.toUpperCase()}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="ml-8 flex items-center gap-4">
            {/* Dark/light mode toggle */}
            <button>
              <Sun className="h-5 w-5 text-white" />
            </button>

            {/* Language dropdown */}
            <button className="inline-flex items-center justify-center">
              <Languages className="h-5 w-5 text-white" />
              <span className="ml-1 text-sm font-medium hidden sm:inline text-white">
                UZ
              </span>
            </button>

            {/* Mobile hamburger menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu (only visible on small screens) */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="container px-4 py-4 space-y-2 bg-[#404149]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
