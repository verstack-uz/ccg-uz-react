import AppPaths from "@/routes/AppPaths";
import CircularIconButton from "@components/elements/CircularIconButton";
import { IconNames } from "@components/elements/Icon";

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
          iconProps={{ iconName: IconNames.STAR }}
          href={AppPaths.ROOT}
        />
      )}
    </div>
  );
}
