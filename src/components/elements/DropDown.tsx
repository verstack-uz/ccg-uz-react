export interface DropDownOption {
  label: string;
  value: any;
  setValue?: (value: any) => void;
}

export interface DropDownProps {
  options: DropDownOption[];
  selectedOption: DropDownOption;
}

export default function DropDown(props: DropDownProps) {
  if (props.options.length === 0) {
    return null; // No options to display
  } else if (
    !props.options.find((option) => option.value === props.selectedOption.value)
  ) {
    throw new Error(
      `Selected option with value ${props.selectedOption.value} is not in the options list.`
    );
  }

  return (
    <div className="dropdown relative inline-flex">
      <button
        id="dropdown-default"
        type="button"
        className="dropdown-toggle btn btn-primary"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        {props.selectedOption.label}
        <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
      </button>

      <ul
        className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-default"
      >
        <li>
          <a className="dropdown-item" href="#">
            My Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Billing
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            FAQs
          </a>
        </li>
      </ul>
    </div>
  );
}
