import { Outlet, ScrollRestoration } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";
import Statistics from "@/components/elements/Statistics";

export default function MainLayout() {
  const { t } = useTranslation();

  const title = t("header.heroText");
  const subTitle = t("header.heroSubText");

  return (
    <>
      <ScrollRestoration />
      <Header title={title} subTitle={subTitle} />
      <Statistics />
      <Outlet />
      <Footer />
    </>
  );
}
