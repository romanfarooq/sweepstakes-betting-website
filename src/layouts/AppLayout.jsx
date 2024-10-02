import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header with fixed height */}
      <header className="bg-gray-800">
        <Header />
        <MobileHeader />
      </header>

      {/* Main content (Outlet) grows to fill available space */}
      <main className="flex-grow bg-gray-800">
        <Outlet />
      </main>

      {/* Footer with fixed height */}
      <footer className="h-16 bg-gray-800">
        <Footer />
      </footer>
    </div>
  );
}
