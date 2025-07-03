import { Outlet } from "react-router";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import VerificationDialog from "@/components/VerificationDailog";

export default function Layout() {
  return (
    <main className="">
      <ScrollToTop />

      <Navbar />

      <Outlet />

      <Footer />

      <VerificationDialog />
    </main>
  );
}
