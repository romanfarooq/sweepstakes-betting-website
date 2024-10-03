import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Dashboard from "@/components/Dashboard";
import Settings from "@/components/Settings";
import Reports from "@/components/Reports";
import AdminLayout from "@/layouts/AdminLayout";
import AppLayout from "@/layouts/AppLayout";
import Event from "@/pages/Event";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Profile from "@/pages/Profile";
import SignUpForm from "@/pages/SignUpForm";
import Wallet from "@/pages/Wallet";
import { AuthProvider } from "./contexts/authContext";
import { Toaster } from "react-hot-toast";
import TermsUses from "./components/TermsUses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace={true} />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "Portfolio",
        element: <Portfolio />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "terms",
        element: <TermsUses />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right"/>
    </AuthProvider>
  );
}
