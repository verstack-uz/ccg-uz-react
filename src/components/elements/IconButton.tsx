interface IconButtonProps {
  text: string;
  iconName: string;
  href?: string;
  onClick?: () => void;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <a className={"btn btn-primary"} href={props.href} onClick={props.onClick}>
      <span className={`${props.iconName} size-4.5 shrink-0`}></span>
      {props.text}
    </a>
  );
}
