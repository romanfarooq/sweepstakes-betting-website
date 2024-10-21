import AllBets from "@/components/AllBets";
import AllBettors from "@/components/AllBettors";
import AllDeposits from "@/components/AllDeposits";
import AllGames from "@/components/AllGames";
import AllTicket from "@/components/AllTicket";
import AllWithdrawls from "@/components/AllWithdrawls";
import AnswerTicket from "@/components/AnswerTicket";
import ApprovedDeposits from "@/components/ApprovedDeposits";
import ApprovedWithdrawls from "@/components/ApprovedWithdrawls";
import BannedUsers from "@/components/BannedUsers";
import BetParent from "@/components/BetParent";
import ClosedTicket from "@/components/ClosedTicket";
import DecalredOutcomes from "@/components/DecalredOutcomes";
import DepositParent from "@/components/DepositParent";
import EndedGames from "@/components/EndedGames";
import InitiatedDeposits from "@/components/InitiatedDeposits";
import LoseBets from "@/components/LoseBets";
import OutcomesParent from "@/components/OutcomesParent";
import PendingBets from "@/components/PendingBets";
import PendingDeposits from "@/components/PendingDeposits";
import PendingOutcomes from "@/components/PendingOutcomes";
import PendingTicket from "@/components/PendingTicket";
import PendingWithdrawls from "@/components/PendingWithdrawls";
import RefundedBets from "@/components/RefundedBets";
import RejectedDeposits from "@/components/RejectedDeposits";
import RejectedWithdrawls from "@/components/RejectedWithdrawls";
import ReportLoginHistory from "@/components/ReportLoginHistory";
import ReportNotificationHistory from "@/components/ReportNotificationHistory";
import ReportParent from "@/components/ReportParent";
import ReportReferalCommission from "@/components/ReportReferalCommission";
import RequestReportIssues from "@/components/RequestReportIssues";
import RunningGames from "@/components/RunningGames";
import RunningGamesParent from "@/components/RunningGamesParent";
import SendNotifcations from "@/components/SendNotifcations";
import SuccessfulDeposits from "@/components/SuccessfulDeposits";
import SupportTicketParent from "@/components/SupportTicketParent";
import SystemSettings from "@/components/SystemSettings";
import TermsUses from "@/components/TermsUses";
import TransactionReport from "@/components/TransactionReport";
import UpcommingGames from "@/components/UpcommingGames";
import WithBalance from "@/components/WithBalance";
import WithDrawlParent from "@/components/WithDrawlParent";
import WonBets from "@/components/WonBets";
import AuthProvider from "@/contexts/AuthContext";
import AdminLayout from "@/layouts/AdminLayout";
import AppLayout from "@/layouts/AppLayout";
import ActiveUsers from "@/pages/ActiveUsers";
import Dashboard from "@/pages/Dashboard";
import Event from "@/pages/Event";
import Home from "@/pages/Home";
import ManageCategories from "@/pages/ManageCategories";
import ManageLeagues from "@/pages/ManageLeagues";
import ManageTeams from "@/pages/ManageTeams";
import Portfolio from "@/pages/Portfolio";
import Profile from "@/pages/Profile";
import SignUpForm from "@/pages/SignUpForm";
import Users from "@/pages/Users";
import UsersDetails from "@/pages/UsersDetails";
import Wallet from "@/pages/Wallet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

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
    path: "admin",
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
          {
            index: true,
            element: <Navigate to="all-betters" replace={true} />,
          },
          {
            path: "active",
            element: <ActiveUsers />,
          },
          {
            path: "banned",
            element: <BannedUsers />,
          },
          {
            path: "with-balance",
            element: <WithBalance />,
          },
          {
            path: "all-bettors",
            element: <AllBettors />,
          },
          {
            path: "send-nofiications",
            element: <SendNotifcations />,
          },
          {
            path: "details/:id",
            element: <UsersDetails />,
          },
        ],
      },
      {
        path: "categories",
        element: <ManageCategories />,
      },
      {
        path: "leagues",
        element: <ManageLeagues />,
      },
      {
        path: "teams",
        element: <ManageTeams />,
      },
      {
        path: "games",
        element: <RunningGamesParent />,
        children: [
          { index: true, element: <Navigate to="running" replace={true} /> },
          {
            path: "running",
            element: <RunningGames />,
          },
          {
            path: "upcomming",
            element: <UpcommingGames />,
          },
          {
            path: "ended",
            element: <EndedGames />,
          },
          {
            path: "all",
            element: <AllGames />,
          },
        ],
      },
      {
        path: "bet",
        element: <BetParent />,
        children: [
          {
            path: "pending",
            element: <PendingBets />,
          },
          {
            path: "won",
            element: <WonBets />,
          },
          {
            path: "lose",
            element: <LoseBets />,
          },
          {
            path: "refunded",
            element: <RefundedBets />,
          },
          {
            path: "all",
            element: <AllBets />,
          },
        ],
      },
      {
        path: "match/market",
        element: <OutcomesParent />,
        children: [
          {
            index: true,
            element: <Navigate to="declared-outcomes" replace={true} />,
          },
          {
            path: "declared-outcomes",
            element: <DecalredOutcomes />,
          },
          {
            path: "pending-outcomes",
            element: <PendingOutcomes />,
          },
        ],
      },
      {
        path: "deposit",
        element: <DepositParent />,
        children: [
          {
            index: true,
            element: <Navigate to="approved" replace={true} />,
          },
          {
            path: "approved",
            element: <ApprovedDeposits />,
          },
          {
            path: "pending",
            element: <PendingDeposits />,
          },
          {
            path: "successful",
            element: <SuccessfulDeposits />,
          },
          {
            path: "rejected",
            element: <RejectedDeposits />,
          },
          {
            path: "initiated",
            element: <InitiatedDeposits />,
          },
          {
            path: "all",
            element: <AllDeposits />,
          },
        ],
      },
      {
        path: "withdrawl",
        element: <WithDrawlParent />,
        children: [
          {
            index: true,
            element: <Navigate to="pending" replace={true} />,
          },
          {
            path: "pending",
            element: <PendingWithdrawls />,
          },
          {
            path: "approved",
            element: <ApprovedWithdrawls />,
          },
          {
            path: "rejected",
            element: <RejectedWithdrawls />,
          },
          {
            path: "all",
            element: <AllWithdrawls />,
          },
        ],
      },
      {
        path: "ticket",
        element: <SupportTicketParent />,
        children: [
          {
            index: true,
            element: <Navigate to="pending" replace={true} />,
          },
          {
            path: "pending",
            element: <PendingTicket />,
          },
          {
            path: "closed",
            element: <ClosedTicket />,
          },
          {
            path: "answered",
            element: <AnswerTicket />,
          },
          {
            path: "all",
            element: <AllTicket />,
          },
        ],
      },
      {
        path: "report",
        element: <ReportParent />,
        children: [
          {
            index: true,
            element: <Navigate to="transaction" replace={true} />,
          },
          {
            path: "transaction",
            element: <TransactionReport />,
          },
          {
            path: "login/history",
            element: <ReportLoginHistory />,
          },
          {
            path: "notification/history",
            element: <ReportNotificationHistory />,
          },
          {
            path: "referal/commission",
            element: <ReportReferalCommission />,
          },
        ],
      },
      {
        path: "system-settings",
        element: <SystemSettings />,
      },
      {
        path: "request-report",
        element: <RequestReportIssues />,
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
