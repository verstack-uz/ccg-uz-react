import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HamburgerMenuProps {
  navLinks: { name: string; path: string }[];
}

export default function HamburgerMenu(props: HamburgerMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
          {props.navLinks.map((link) => (
            <DropdownMenuItem key={link.path} className="text-white">
              <Link
                className="font-normal tracking-wide"
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name.toUpperCase()}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
