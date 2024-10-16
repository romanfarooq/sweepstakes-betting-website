import MobileSideNavigationBar from "@/components/MobileSideNavigationBar";
import SideNavigationBar from "@/components/SideNavigationBar";
import UpperNavigationBar from "@/components/UpperNavigationBar";


export default function AdminLayout() {
  return (
    <div className="flex">
      <SideNavigationBar />
      <MobileSideNavigationBar />
      <UpperNavigationBar />
    </div>
  );
}
