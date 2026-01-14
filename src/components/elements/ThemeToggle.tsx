import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
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

      <DropdownMenuContent
        className={"w-40 bg-[#404149] border border-gray-500"}
      >
        <DropdownMenuItem
          disabled={theme === "light"}
          className="text-white font-normal tracking-wide"
          onClick={() => setTheme("light")}
        >
          {theme === "light" ? "✓ " : ""}
          {t("Light").toUpperCase()}
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={theme === "dark"}
          className="text-white font-normal tracking-wide"
          onClick={() => setTheme("dark")}
        >
          {theme === "dark" ? "✓ " : ""}
          {t("Dark").toUpperCase()}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
