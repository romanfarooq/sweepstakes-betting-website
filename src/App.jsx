import Dashboard from "@/pages/Dashboard";
import Reports from "@/components/Reports";
import Users from "./components/Users";
import TermsUses from "@/components/TermsUses";
import AuthProvider from "@/contexts/AuthContext";
import AdminLayout from "@/layouts/AdminLayout";
import AppLayout from "@/layouts/AppLayout";
import Event from "@/pages/Event";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Profile from "@/pages/Profile";
import SignUpForm from "@/pages/SignUpForm";
import Wallet from "@/pages/Wallet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ActiveUsers from "./components/ActiveUsers";
import BannedUsers from "./components/BannedUsers";
import EmailUnverifiedUsers from "./components/EmailUnverifiedUsers";
import MobileUnverified from "./components/MobileUnverified";

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
        path: "event/:id",
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
        index: true,
        element: <Navigate to="dashboard" replace={true} />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
        children: [
          {index: true, element: <Navigate to="active" replace={true} />},
          {
            path: 'active',
            element: <ActiveUsers/>
          },
          {
            path: 'banned',
            element: <BannedUsers/>
          },
          {
            path: 'email-unverified',
            element: <EmailUnverifiedUsers/>
          },
          {
            path: 'mobile-unverified',
            element: <MobileUnverified/>
          },
          
        ]
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

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </AuthProvider>
    </QueryClientProvider>
  );
}
