import Logo from "@/components/Logo";
import ResueableAccordion from "@/components/ResueableAccordion";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { AiOutlineSpotify } from "react-icons/ai";
import { BsTicketDetailed } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { CiBank, CiBoxList } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LuFileSpreadsheet } from "react-icons/lu";
import { PiVirus } from "react-icons/pi";

const ManageBettersAccordionLinks = {
  title: "Manage Betters",
  items: [
    { name: "Active Betters", href: "users/active" },
    { name: "Banned Betters", href: "users/banned" },
    { name: "With Balance", href: "users/with-balance" },
    { name: "All Bettors", href: "users/all-bettors" },
    { name: "Send Notifications", href: "users/send-notifications" },
  ],
};

const SportsConfigAccordionLinks = {
  title: "Sports Config",
  items: [
    { name: "Manage Categories", href: "categories" },
    { name: "Manage Leagues", href: "leagues" },
    { name: "Manage Teams", href: "teams" },
  ],
};

const ManageGamesAccordionLinks = {
  title: "Manage Games",
  items: [
    { name: "Running Games", href: "games/running" },
    { name: "Upcomming Games", href: "games/upcomming" },
    { name: "Ended Games", href: "games/ended" },
    { name: "All Games", href: "games/all" },
  ],
};
const ManageBetsAccordionLinks = {
  title: "Manage Bets",
  items: [
    { name: "Pending Bets", href: "bet/pending" },
    { name: "Won Bets", href: "bet/won" },
    { name: "Lose Bets", href: "bet/lose" },
    { name: "Refunded Bets", href: "bet/refunded" },
    { name: "All Bets", href: "bet/all" },
  ],
};

const DeclareOutcomesAccordionLinks = {
  title: "Declare Outcomes",
  items: [
    { name: "Pending Outcomes", href: "match/market/pending-outcomes" },
    { name: "Declared Outcomes", href: "match/market/declared-outcomes" },
  ],
};

const DepositsAccordionLinks = {
  title: "Deposits",
  items: [
    { name: "Pending Deposits", href: "deposit/pending" },
    { name: "Approved Deposits", href: "deposit/approved" },
    { name: "Successful Deposits", href: "deposit/successful" },
    { name: "Rejected Deposits", href: "deposit/rejected" },
    { name: "Initiated Deposits", href: "deposit/initiated" },
    { name: "All Deposits", href: "deposit/all" },
  ],
};

const WithdrawlsAccordionLinks = {
  title: "Withdrawls",
  items: [
    { name: "Pending Withdrawls", href: "withdrawl/pending" },
    { name: "Approved Withdrwals", href: "withdrawl/approved" },
    { name: "Rejected Withdrwals", href: "withdrawl/rejected" },
    { name: "All Withdrwals", href: "withdrawl/all" },
  ],
};
const SupportTicketAccordionLinks = {
  title: "Support Ticket",
  items: [
    { name: "Pending Ticket", href: "ticket/pending" },
    { name: "Closed Ticket", href: "ticket/closed" },
    { name: "Answered Ticket", href: "ticket/answered" },
    { name: "All Ticket", href: "ticket/all" },
  ],
};
const ReportAccordionLinks = {
  title: "Report",
  items: [
    { name: "Transaction History", href: "report/transaction" },
    { name: "Login History", href: "report/login/history" },
    { name: "Notification History", href: "report/notification/history" },
    { name: "Referral Commisions", href: "report/referal/commission" },
  ],
};

export default function SideNavigationBar() {
  return (
    <div className="custom-scrollbar fixed left-0 top-0 hidden h-screen w-1/5 flex-col items-start gap-4 overflow-y-auto bg-indigo-950 text-white lg:flex 2xl:w-1/6">
      <div className="px-3 py-6">
        <Logo href="/admin/dashboard" />
      </div>

      <div className="flex w-full flex-col items-start text-white">
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            cn(
              "flex w-full items-center gap-3 border-l-4 border-transparent p-3 text-white hover:bg-indigo-600",
              {
                "border-indigo-400 bg-indigo-800": isActive,
              },
            )
          }
        >
          <IoHomeOutline className="h-5 w-5" />
          <span className="text-sm font-semibold">Dashboard</span>
        </NavLink>

        <div className="w-full">
          <ResueableAccordion
            title={ManageBettersAccordionLinks.title}
            items={ManageBettersAccordionLinks.items}
            titleIcon={<IoIosPeople className="h-5 w-5" />}
            manageBettors={true}
          />
        </div>
      </div>

      <div className="w-full">
        <p className="p-3 text-xs font-semibold text-indigo-200">BET SETUP</p>
        <div className="w-full">
          <ResueableAccordion
            title={SportsConfigAccordionLinks.title}
            items={SportsConfigAccordionLinks.items}
            titleIcon={<AiOutlineSpotify className="h-5 w-5" />}
          />
          <ResueableAccordion
            title={ManageGamesAccordionLinks.title}
            items={ManageGamesAccordionLinks.items}
            titleIcon={<CgGames className="h-5 w-5" />}
          />
        </div>
      </div>

      {/* Other sections remain unchanged */}
      <div className="w-full">
        <p className="p-3 text-xs font-semibold text-indigo-200">MANAGE BETS</p>
        <div className="w-full">
          <ResueableAccordion
            title={ManageBetsAccordionLinks.title}
            items={ManageBetsAccordionLinks.items}
            titleIcon={<LuFileSpreadsheet className="h-5 w-5" />}
          />
          <ResueableAccordion
            title={DeclareOutcomesAccordionLinks.title}
            items={DeclareOutcomesAccordionLinks.items}
            titleIcon={<LuFileSpreadsheet className="h-5 w-5" />}
          />
        </div>
      </div>

      <div className="w-full">
        <p className="p-3 text-xs font-semibold text-indigo-200">
          MANAGE FINANCE
        </p>
        <div className="w-full">
          <ResueableAccordion
            title={DepositsAccordionLinks.title}
            items={DepositsAccordionLinks.items}
            titleIcon={<LiaFileInvoiceDollarSolid className="h-5 w-5" />}
          />
          <ResueableAccordion
            title={WithdrawlsAccordionLinks.title}
            items={WithdrawlsAccordionLinks.items}
            titleIcon={<CiBank className="h-5 w-5" />}
          />
        </div>
      </div>

      <div className="w-full">
        <p className="p-3 text-xs font-semibold text-indigo-200">
          SUPPORT & REPORT
        </p>
        <div className="w-full">
          <ResueableAccordion
            title={SupportTicketAccordionLinks.title}
            items={SupportTicketAccordionLinks.items}
            titleIcon={<BsTicketDetailed className="h-5 w-5" />}
          />
          <ResueableAccordion
            title={ReportAccordionLinks.title}
            items={ReportAccordionLinks.items}
            titleIcon={<CiBoxList className="h-5 w-5" />}
          />
        </div>
      </div>

      <div className="mb-14 w-full">
        <p className="p-3 text-xs font-semibold text-indigo-200">SETTINGS</p>
        <div className="flex w-full flex-col items-start text-white">
          <NavLink
            to="system-settings"
            className={({ isActive }) =>
              cn(
                "flex w-full items-center gap-2 border-l-4 border-transparent p-3 text-white hover:bg-indigo-600",
                {
                  "border-indigo-400 bg-indigo-800": isActive,
                },
              )
            }
          >
            <IoSettingsOutline className="h-5 w-5" />
            <span className="text-sm">System Settings</span>
          </NavLink>
          <NavLink
            to="request-report"
            className={({ isActive }) =>
              cn(
                "flex w-full items-center gap-2 border-l-4 border-transparent p-3 text-white hover:bg-indigo-600",
                {
                  "border-indigo-400 bg-indigo-800": isActive,
                },
              )
            }
          >
            <PiVirus className="h-5 w-5" />
            <span className="text-sm">Report & Request</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
