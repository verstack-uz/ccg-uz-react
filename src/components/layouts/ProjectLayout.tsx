import { Outlet, ScrollRestoration, useParams } from "react-router-dom";

import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";
import Projects from "@/lib/data/projects";
import i18n, { LanguageCode } from "@/i18n";

export default function ProjectLayout() {
  const params = useParams();
  const projects = Projects.getInstance();
  const langCode: LanguageCode = i18n.language as LanguageCode;

  if (!params.projectId) {
    throw new Error("Project ID is missing in the URL parameters.");
  } else if (isNaN(Number(params.projectId))) {
    throw new Error("Project ID must be a number.");
  }

  const project = projects.get(Number(params.projectId));
  if (project === undefined) {
    throw new Error("Project not found.");
  }

  return (
    <>
      <ScrollRestoration />
      <Header
        title={project.title[langCode]}
        bgImageUrl={project.imageUrls[0]}
      />
      <Outlet context={project} />
      <Footer />
    </>
  );
}
