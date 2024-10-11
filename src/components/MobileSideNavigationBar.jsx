import Logo from "./Logo";
import ResueableAccordion from "./ResueableAccordion";
import { useState } from "react"; // Import useState from React
import { NavLink, Outlet } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSpotify } from "react-icons/ai";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiBank } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { CgGames } from "react-icons/cg";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsTicketDetailed } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSettingsOverscan } from "react-icons/md";
import { MdOutlineBugReport } from "react-icons/md";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
    <main className="flex flex-grow flex-col bg-indigo-50 md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <AlignJustify
            className="cursor-pointer"
            size={24}
            onClick={handleOpen}
          />
        </SheetTrigger>
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
                `flex w-full items-center gap-2 px-3 py-3 text-white ${
                  isActive ? "border-l-4 border-indigo-400 bg-indigo-800" : ""
                }`
              }
              onClick={handleClose}
              style={{ textDecoration: "none" }}
            >
              <IoHomeOutline className="h-5 w-5" />
              <span className="text-sm">Dashboard</span>
            </NavLink>

            <div className="w-full">
              <ResueableAccordion
                title={sampleAccordionData.title}
                items={sampleAccordionData.items}
                titleIcon={<IoIosPeople className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <p className="p-3 text-sm font-semibold text-indigo-200">
              BET SETUP
            </p>
            <div className="w-full">
              <ResueableAccordion
                title={"Sports Config"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<AiOutlineSpotify className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordion
                title={"Manage Games"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<CgGames className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <p className="p-3 text-sm font-semibold text-indigo-200">
              MANAGE BETS
            </p>
            <div className="w-full">
              <ResueableAccordion
                title={"Manage Bets"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<LuFileSpreadsheet className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordion
                title={"Declare Outcomes"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<LuFileSpreadsheet className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <p className="p-3 text-sm font-semibold text-indigo-200">
              MANAGE FINANCE
            </p>
            <div className="w-full">
              <ResueableAccordion
                title={"Deposits"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<LiaFileInvoiceDollarSolid className="h-5 w-5" />}
                isOpen={isOpen} // Pass isOpen to the ResueableAccordion
                setIsOpen={setIsOpen} // Pass setIsOpen to the ResueableAccordion
              />
              <ResueableAccordion
                title={"Withdrawals"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<CiBank className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <p className="p-3 text-sm font-semibold text-indigo-200">
              SUPPORT & REPORT
            </p>
            <div className="w-full">
              <ResueableAccordion
                title={"Support Tickets"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<BsTicketDetailed className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordion
                title={"Reports"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<CiBoxList className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <p className="p-3 text-sm font-semibold text-indigo-200">
              SETTINGS
            </p>
            <div className="w-full">
              <ResueableAccordion
                title={"System Settings"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<IoSettingsOutline className="h-5 w-5" />}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="w-full">
            <p className="p-3 text-sm font-semibold text-indigo-200">EXTRA</p>
            <div className="w-full">
              <ResueableAccordion
                title={"Extra"}
                items={sampleAccordionData.items} // Replace with actual items
                titleIcon={<MdOutlineSettingsOverscan className="h-5 w-5" />}
                onClick={handleClose}
              />
              <ResueableAccordion
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
