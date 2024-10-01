import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with fixed height */}
      <header className="bg-background">
        <Header />
      </header>
      
      {/* Main content (Outlet) grows to fill available space */}
      <main className="flex-grow bg-background">
        <Outlet />
      </main>
      
      {/* Footer with fixed height */}
      <footer className="h-16 bg-background">
        <Footer />
      </footer>
    </div>
  );
}
