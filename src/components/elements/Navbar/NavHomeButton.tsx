import { useNavigate } from "react-router-dom";

import AppPaths from "@/routes/AppPaths";

export default function NavHomeButton() {
  const navigate = useNavigate();

  return (
    <div className="navbar-start items-center justify-between max-md:w-full">
      <a onClick={() => navigate(AppPaths.ROOT)} className="btn px-2 py-1">
        <img
          src="icons/ccg-logo-transparent.svg"
          alt="CCG Logo"
          className="h-full"
        />
      </a>
    </div>
  );
}
