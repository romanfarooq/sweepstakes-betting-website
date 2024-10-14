import Logo from "@/components/Logo";
import ResueableAccordionMobile from "@/components/ResueableAccordionMobile";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { CgGames } from "react-icons/cg";
import { GiWorld } from "react-icons/gi";
import { CiBoxList } from "react-icons/ci";
import { BsTicketDetailed } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSpotify } from "react-icons/ai";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiBank, CiSettings } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineBugReport } from "react-icons/md";
import { MdOutlineSettingsOverscan } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import {
  IoIosArrowDropdown,
  IoIosNotificationsOutline,
  IoIosPeople,
} from "react-icons/io";
import { Input } from "@/components/ui/input";
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

const sampleAccordionData = {
  title: "Manage Betters",
  items: [
    { name: "Active Betters", href: "users/active" },
    { name: "Banned Betters", href: "users/banned" },
    { name: "Email Unverified", href: "users/email-unverified" },
    { name: "Mobile Unverified", href: "users/mobile-unverified" },
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
          <div className="flex items-center justify-between px-8 py-4">
            <SheetTrigger asChild>
              <div className="mr-4 flex cursor-pointer text-2xl">
                <AlignJustify
                  className="cursor-pointer"
                  size={24}
                  onClick={handleOpen}
                />
              </div>
            </SheetTrigger>
            <div className="flex w-full">
              <Input
                placeholder="Search here...."
                className="border-indigo-900 bg-indigo-900 px-5 py-5 outline-none placeholder:text-indigo-300"
              />
            </div>
          </div>
          <div className="flex items-center justify-between px-8 pb-5">
            <div className="flex gap-5">
              <GiWorld className="size-6" />
              <IoIosNotificationsOutline className="size-6 animate-swing" />
              <CiSettings className="size-6" />
            </div>
            <div className="text-base">
              <DropdownMenu>
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
        </div>
        <SheetContent
          side="left"
          className="custom-scrollbar flex h-full w-full flex-col items-start gap-4 bg-indigo-950 text-white"
        >
          <div className="px-3 py-6">
            <Logo />
          </div>

          <div className="flex w-full flex-col items-start text-white">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                cn(
                  "flex w-full items-center gap-2 p-3 text-white hover:bg-indigo-600",
                  {
                    "border-l-4 border-indigo-400 bg-indigo-800": isActive,
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
              <ResueableAccordionMobile
                title={sampleAccordionData.title}
                items={sampleAccordionData.items}
                titleIcon={<IoIosPeople className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <SheetTitle className="p-3 text-sm font-semibold text-indigo-200">
              BET SETUP
            </SheetTitle>
            <div className="w-full">
              <ResueableAccordionMobile
                title={"Sports Config"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<AiOutlineSpotify className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordionMobile
                title={"Manage Games"}
                items={sampleAccordionData.items} // Replace with actual items
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
              <ResueableAccordionMobile
                title={"Manage Bets"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<LuFileSpreadsheet className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordionMobile
                title={"Declare Outcomes"}
                items={sampleAccordionData.items} // Replace with actual items
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
              <ResueableAccordionMobile
                title={"Deposits"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<LiaFileInvoiceDollarSolid className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordionMobile
                title={"Withdrawals"}
                items={sampleAccordionData.items} // Replace with actual items
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
              <ResueableAccordionMobile
                title={"Support Tickets"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<BsTicketDetailed className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordionMobile
                title={"Reports"}
                items={sampleAccordionData.items} // Replace with actual items
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
              <ResueableAccordionMobile
                title={"System Settings"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<IoSettingsOutline className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <SheetTitle className="p-3 text-sm font-semibold text-indigo-200">
              EXTRA
            </SheetTitle>
            <div className="w-full">
              <ResueableAccordionMobile
                title={"Extra"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<MdOutlineSettingsOverscan className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordionMobile
                title={"Report & Request"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<MdOutlineBugReport className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Outlet />
    </main>
  );
}
