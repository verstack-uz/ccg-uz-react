import { Outlet } from "react-router-dom";

import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container min-h-screen px-4 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
