import MobileSideNavigationBar from "@/components/MobileSideNavigationBar";
import SideNavigationBar from "@/components/SideNavigationBar";
import UpperNavigationBar from "@/components/UpperNavigationBar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen w-full bg-indigo-50 lg:ml-[20%] lg:w-4/5 2xl:ml-[16.666667%] 2xl:w-5/6">
      <header>
        <SideNavigationBar />
        <MobileSideNavigationBar />
      </header>
      <main>
        <UpperNavigationBar />
        <Outlet />
      </main>
    </div>
  );
}
