interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <a
      href={props.href}
      onClick={props.onClick}
      className={
        "btn btn-primary" + (props.className ? ` ${props.className}` : "")
      }
    >
      {props.text}
    </a>
  );
}
