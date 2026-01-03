import { useNavigate } from "react-router-dom";

import NavLinkGroup from "@/components/elements/Navbar/NavLinkGroup";
import NavLink from "@/components/elements/Navbar/NavLink";
import NavHomeButton from "@components/elements/Navbar/NavHomeButton";
import NavHamburgerButton from "@components/elements/Navbar/NavHamburgerButton";

interface NavbarProps {
  navLinks?: { name: string; path: string }[];
}

export default function Navbar(props: NavbarProps) {
  const navigate = useNavigate();

  return (
    <nav className="navbar bg-base-200 px-4 shadow-base-300/20 shadow-sm">
      <div className="w-full md:flex md:items-center md:gap-2">
        {/* This div shows site logo (button) and hamburger menu button in one row */}
        <div className="flex items-center justify-between">
          <NavHomeButton />
          <NavHamburgerButton />
        </div>

        <NavLinkGroup>
          {props.navLinks?.map((link) => (
            <NavLink
              key={link.name}
              label={link.name}
              onClick={() => navigate(link.path)}
            />
          ))}
        </NavLinkGroup>
      </div>
    </nav>
  );
}
