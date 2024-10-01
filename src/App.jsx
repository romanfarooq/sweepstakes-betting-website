import Dashboard from "@/components/Dashboard";
import AdminLayout from "@/layouts/AdminLayout";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Profile from "@/pages/Profile";
import SignUpForm from "@/pages/SignUpForm";
import Wallet from "@/pages/Wallet";


import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

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
        path: "home",
        element: <Home />,
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
    ],
  },
  {
    path: "signup",
    element: <SignUpForm />,
  },
]);

export default function App() {
  return <AuthProvider><RouterProvider router={router} /></AuthProvider>
}
