/**
 * A circular button component that displays an icon.
 * It can function as a link or trigger an action when clicked.
 * Can be used for actions like "Settings", "Add", "Edit", "Close", etc.
 */

interface CircularIconButtonProps {
  iconName: string;
  href?: string;
  onClick?: () => void;
}

export default function CircularIconButton({
  iconName,
  href,
  onClick,
}: CircularIconButtonProps) {
  return (
    <a className={"btn btn-circle btn-primary"} href={href} onClick={onClick}>
      <span className={`${iconName} size-4.5 shrink-0`}></span>
    </a>
  );
}
