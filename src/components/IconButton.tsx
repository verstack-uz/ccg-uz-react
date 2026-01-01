/**
 * Button Component
 * This component renders a button that can function as a link or trigger an action when clicked.
 */

interface IconButtonProps {
  text: string;
  iconName: string;
  href?: string;
  onClick?: () => void;
}

export default function IconButtonProps({
  text,
  iconName,
  href,
  onClick,
}: IconButtonProps) {
  return (
    <a className={"btn btn-primary"} href={href} onClick={onClick}>
      <span className={`${iconName} size-4.5 shrink-0`}></span>
      {text}
    </a>
  );
}
