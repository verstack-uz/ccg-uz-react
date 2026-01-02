/**
 * Button Component
 * This component renders a button that can function as a link or trigger an action when clicked.
 */

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  text,
  href,
  onClick,
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={"btn btn-primary" + (className ? ` ${className}` : "")}
    >
      {text}
    </a>
  );
}
