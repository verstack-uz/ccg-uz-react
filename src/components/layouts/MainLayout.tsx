import { Outlet } from "react-router-dom";

import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";
import Statistics from "@/components/elements/Statistics";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Statistics />
      <Outlet />
      <Footer />
    </>
  );
}
