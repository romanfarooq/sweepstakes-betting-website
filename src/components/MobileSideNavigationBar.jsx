import Logo from "@/components/Logo";
import ResueableAccordion from "@/components/ResueableAccordion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { CgGames } from "react-icons/cg";
import { GiWorld } from "react-icons/gi";
import { BsTicketDetailed } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSpotify } from "react-icons/ai";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiBank, CiSettings, CiBoxList } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSettingsOverscan, MdOutlineBugReport } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import {
  IoIosArrowDropdown,
  IoIosNotificationsOutline,
  IoIosPeople,
} from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

export default function MobileSideNavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <main className="flex flex-grow flex-col bg-indigo-50 lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="w-full bg-indigo-950 text-white">
          <div className="flex items-center justify-between px-4 py-4 sm:px-8">
            <SheetTrigger asChild>
              <AlignJustify
                className="mr-4 cursor-pointer"
                onClick={handleOpen}
              />
            </SheetTrigger>
            <Input
              placeholder="Search here...."
              className="w-full border-indigo-900 bg-indigo-900 px-5 py-5 outline-none placeholder:text-indigo-300"
            />
          </div>
          <div className="flex items-center justify-between px-4 pb-5 sm:px-8">
            <div className="flex gap-5">
              <GiWorld className="size-6" />
              <IoIosNotificationsOutline className="size-6 animate-swing" />
              <CiSettings className="size-6" />
            </div>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1">
                <span>admin</span>
                <IoIosArrowDropdown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-indigo-950">
                <DropdownMenuLabel className="cursor-pointer">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer hover:bg-indigo-900 focus:bg-indigo-900">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-indigo-900 focus:bg-indigo-900">
                  Password
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-indigo-900 focus:bg-indigo-900">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <SheetContent
          side="left"
          aria-describedby={undefined}
          className="custom-scrollbar flex h-full w-full flex-col items-start gap-4 bg-indigo-950 text-white"
        >
          <div className="px-3 py-6">
            <Logo href="/admin/dashboard" onClick={handleClose} />
          </div>

          <div className="flex w-full flex-col items-start text-white">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                cn(
                  "flex w-full items-center gap-2 border-l-4 border-transparent p-3 text-white hover:bg-indigo-600",
                  {
                    "border-indigo-400 bg-indigo-800": isActive,
                  },
                )
              }
              onClick={handleClose}
              style={{ textDecoration: "none" }}
            >
              <IoHomeOutline className="h-5 w-5" />
              <SheetTitle className="text-sm text-white">Dashboard</SheetTitle>
            </NavLink>

            <div className="w-full">
              <ResueableAccordion
                title={ManageBettersAccordionLinks.title}
                items={ManageBettersAccordionLinks.items}
                titleIcon={<IoIosPeople className="h-5 w-5" />}
                onClick={handleClose}
                manageBettors={true}
              />
            </div>
          </div>

          <div className="w-full">
            <SheetTitle className="p-3 text-sm font-semibold text-indigo-200">
              BET SETUP
            </SheetTitle>
            <div className="w-full">
              <ResueableAccordion
                title={SportsConfigAccordionLinks.title}
                items={SportsConfigAccordionLinks.items} // Replace with actual items
                titleIcon={<AiOutlineSpotify className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordion
                title={ManageGamesAccordionLinks.title}
                items={ManageGamesAccordionLinks.items} // Replace with actual items
                titleIcon={<CgGames className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <SheetTitle className="p-3 text-sm font-semibold text-indigo-200">
              MANAGE BETS
            </SheetTitle>
            <div className="w-full">
              <ResueableAccordion
                title={ManageBetsAccordionLinks.title}
                items={ManageBetsAccordionLinks.items} // Replace with actual items
                titleIcon={<LuFileSpreadsheet className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordion
                title={DeclareOutcomesAccordionLinks.title}
                items={DeclareOutcomesAccordionLinks.items} // Replace with actual items
                titleIcon={<LuFileSpreadsheet className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <SheetTitle className="p-3 text-sm font-semibold text-indigo-200">
              MANAGE FINANCE
            </SheetTitle>
            <div className="w-full">
              <ResueableAccordion
                title={DepositsAccordionLinks.title}
                items={DepositsAccordionLinks.items} // Replace with actual items
                titleIcon={<LiaFileInvoiceDollarSolid className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordion
                title={WithdrawlsAccordionLinks.title}
                items={WithdrawlsAccordionLinks.items} // Replace with actual items
                titleIcon={<CiBank className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <SheetTitle className="p-3 text-sm font-semibold text-indigo-200">
              SUPPORT & REPORT
            </SheetTitle>
            <div className="w-full">
              <ResueableAccordion
                title={SupportTicketAccordionLinks.title}
                items={SupportTicketAccordionLinks.items} // Replace with actual items
                titleIcon={<BsTicketDetailed className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordion
                title={ReportAccordionLinks.title}
                items={ReportAccordionLinks.items} // Replace with actual items
                titleIcon={<CiBoxList className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <SheetTitle className="p-3 text-sm font-semibold text-indigo-200">
              SETTINGS
            </SheetTitle>
            <div className="w-full">
              <NavLink
                onClick={handleClose}
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
                onClick={handleClose}
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
                <IoSettingsOutline className="h-5 w-5" />
                <span className="text-sm">Report & Request</span>
              </NavLink>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Outlet />
    </main>
  );
}
