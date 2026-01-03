interface NavLinkProps {
  label: string;
  onClick: () => void;
}

/**
 * A single navigation link component.
 * Example usage:
 * <NavLink label="Home" onClick={() => navigate('/home')} />
 */
export default function NavLink(props: NavLinkProps) {
  return (
    <li>
      <a onClick={props.onClick}>{props.label}</a>
    </li>
  );
}
