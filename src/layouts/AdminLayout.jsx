import SideNavigationBar from "@/components/SideNavigationBar";
import UpperNavigationBar from "@/components/UpperNavigationBar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <div className="h-screen flex-shrink-0 w-1/6 overflow-x-scroll overflow-y-hidden custom-scrollbar">
        <SideNavigationBar />
      </div>
      <main className="flex flex-col flex-grow bg-indigo-50">
        <UpperNavigationBar />
        <Outlet />
      </main>
    </div>
  );
}
