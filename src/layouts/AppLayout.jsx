import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-800">
        <Header />
        <MobileHeader />
      </header>
      <main className="flex-grow bg-gray-800 text-gray-200">
        <Outlet />
      </main>
      <footer className="h-16 bg-gray-800">
        <Footer />
      </footer>
    </div>
  );
}
