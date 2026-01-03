import Navbar, { NavLink } from "@/components/elements/Navbar/Navbar";
import { Preferences } from "@/utilities/Preferences";
import AppPaths from "@/routes/AppPaths";

export default function HomePage() {
  const navLinks: NavLink[] = [
    { name: "Company", path: AppPaths.COMPANY },
    { name: "Projects", path: AppPaths.PROJECTS },
    { name: "What we do", path: AppPaths.WHAT_WE_DO },
    { name: "Career", path: AppPaths.CAREER },
    { name: "Equipments", path: AppPaths.EQUIPMENTS },
    { name: "Contact", path: AppPaths.CONTACT },
  ];

  return (
    <div data-theme={Preferences.getTheme()}>
      <Navbar navLinks={navLinks} />
    </div>
  );
}
