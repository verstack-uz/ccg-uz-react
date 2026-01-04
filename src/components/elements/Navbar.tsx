import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface NavbarProps {
  navLinks: { name: string; path: string }[];
}

export default function Navbar(props: NavbarProps) {
  return (
    <div className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {props.navLinks.map((link) => (
            <NavigationMenuItem key={link.path}>
              <NavigationMenuLink asChild className="text-white text-md">
                <Link className="font-normal tracking-wide" to={link.path}>
                  {link.name.toUpperCase()}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
