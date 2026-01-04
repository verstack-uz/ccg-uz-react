import { Languages } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { changeLanguage } from "i18next";
import { languages } from "@/i18n";

export default function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full p-6 text-white">
          <Languages className="size-6" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 bg-[#404149] border-0 shadow-lg">
        {Object.entries(languages).map(([languageCode, { languageName }]) => (
          <DropdownMenuItem
            key={languageCode}
            className="text-white cursor-pointer"
            onClick={() => changeLanguage(languageCode)}
          >
            {languageName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
