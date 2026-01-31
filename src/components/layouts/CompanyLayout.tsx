import { Outlet, ScrollRestoration } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";
import ScrollToTopButton from "@/components/elements/ScrollToTopButton";

export default function CompanyLayout() {
  const { t } = useTranslation();

  return (
    <>
      <ScrollRestoration />
      <Header
        title={t("Kompaniya haqida").toUpperCase()}
        bgImageUrl={"/images/company-header-bg.jpeg"}
      />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
