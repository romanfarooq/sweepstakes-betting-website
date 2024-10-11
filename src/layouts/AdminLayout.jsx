import MobileSideNavigationBar from "@/components/MobileSideNavigationBar";
import SideNavigationBar from "@/components/SideNavigationBar";
import UpperNavigationBar from "@/components/UpperNavigationBar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <SideNavigationBar />
      <main className="hidden flex-grow flex-col bg-indigo-50 md:flex">
        <UpperNavigationBar />
        <Outlet />
      </main>
    </div>
  );
}
