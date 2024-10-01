import { Outlet, NavLink } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-center font-bold text-xl border-b border-gray-700">
          Admin Dashboard
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <NavLink to="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded">
            Dashboard
          </NavLink>
          <NavLink to="/admin/settings" className="hover:bg-gray-700 p-2 rounded">
            Settings
          </NavLink>
          <NavLink to="/admin/reports" className="hover:bg-gray-700 p-2 rounded">
            Reports
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
