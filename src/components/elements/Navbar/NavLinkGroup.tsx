import React from "react";

interface NavLinkGroupProps {
  children: React.ReactNode;
}

/**
 * A group/container for navigation links in the navbar.
 * Example usage:
 * <NavLinkGroup>
 *   <NavLink label="Home" onClick={...} />
 *   <NavLink label="About" onClick={...} />
 * </NavLinkGroup>
 */
export default function NavLinkGroup(props: NavLinkGroupProps) {
  return (
    <div
      id="dropdown-navbar-collapse"
      className="md:navbar-end pt-2 md:pt-0 collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
    >
      <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
        {props.children}
      </ul>
    </div>
  );
}
