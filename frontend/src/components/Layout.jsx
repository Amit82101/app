import { Outlet } from "react-router-dom";
import EmergencyBanner from "./EmergencyBanner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFCFF]" data-testid="app-layout">
      <EmergencyBanner />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
