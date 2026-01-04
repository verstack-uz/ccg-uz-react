import { Link } from "react-router-dom";
import { Sun, Languages, Menu, X, Moon } from "lucide-react";
import { useState } from "react";

import AppPaths from "@/routes/AppPaths";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Company", path: AppPaths.COMPANY },
    { name: "Projects", path: AppPaths.PROJECTS },
    { name: "What we do", path: AppPaths.WHAT_WE_DO },
    { name: "Career", path: AppPaths.CAREER },
    { name: "Equipments", path: AppPaths.EQUIPMENTS },
    { name: "Contact", path: AppPaths.CONTACT },
  ];
  const languages = [
    "O'zbekcha (Lotin)",
    "Ўзбекча (Кирилл)",
    "Русский",
    "English",
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

          {/* Desktop navigation menu - right side */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <NavigationMenuLink asChild className="text-white text-md">
                      <Link to={link.path}>{link.name.toUpperCase()}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="ml-8 flex items-center gap-2">
            {/* Dark/light mode toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-6 text-white">
                  {theme === "dark" ? (
                    <Moon className="size-6" />
                  ) : (
                    <Sun className="size-6" />
                  )}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40 bg-[#404149] border-0 shadow-lg">
                <DropdownMenuItem
                  className="text-white"
                  onClick={() => setTheme("light")}
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-white"
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-6 text-white">
                  <Languages className="size-6" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40 bg-[#404149] border-0 shadow-lg">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang} className="text-white">
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile hamburger button and menu (only visible on small screens) */}
            <div className={"flex md:hidden"}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="rounded-full p-6 text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? (
                      <X className="size-6" />
                    ) : (
                      <Menu className="size-6" />
                    )}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="w-40 bg-[#404149] border-0 shadow-lg py-1 md:hidden"
                  sideOffset={10}
                >
                  {navLinks.map((link) => (
                    <DropdownMenuItem key={link.path} className="text-white">
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
