export default function NavHamburgerButton() {
  return (
    <div className="md:hidden">
      <button
        type="button"
        className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
        data-collapse="#dropdown-navbar-collapse"
        aria-controls="dropdown-navbar-collapse"
        aria-label="Toggle navigation"
      >
        <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
        <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
      </button>
    </div>
  );
}
