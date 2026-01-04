import { useNavigate } from "react-router";

import AppPaths from "@/routes/AppPaths";

export default function CompanyPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">
        About Civil Construction Group (CCG)
      </h1>
      <p className="text-lg text-muted-foreground">
        Civil Construction Group (CCG) is a leading construction company
        specializing in infrastructure development, commercial buildings, and
        residential projects. With a commitment to quality, safety, and
        sustainability, CCG has established itself as a trusted partner in the
        construction industry.
      </p>
      <a className="btn btn-accent" onClick={() => navigate(AppPaths.ROOT)}>
        Back to Home
      </a>
    </>
  );
}
