import Icon, { IconProps } from "@components/elements/Icon";

interface CircularIconButtonProps {
  iconProps: IconProps;
  href?: string;
  onClick?: () => void;
}

export default function CircularIconButton(props: CircularIconButtonProps) {
  return (
    <a
      className={"btn btn-circle btn-primary"}
      href={props.href}
      onClick={props.onClick}
    >
      <Icon {...props.iconProps} />
    </a>
  );
}
