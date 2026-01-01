/**
 * Header Component
 * Displays page title in a styled header format.
 */

// third-party libraries
import AppIcons from "@/utilities/icons";
import { AppRoute } from "@/routes";
import CircularIconButton from "@/components/CircularIconButton";

interface HeaderProps {
  title: string;
  hideSettingsButton?: boolean;
}

export default function Header({
  title,
  hideSettingsButton = false,
}: HeaderProps) {
  return (
    <div className={"flex flex-row p-4"}>
      <h1 className="text-3xl flex-1">{title}</h1>
      {!hideSettingsButton && (
        <CircularIconButton
          iconName={AppIcons.SETTINGS}
          href={AppRoute.SETTINGS}
        />
      )}
    </div>
  );
}
