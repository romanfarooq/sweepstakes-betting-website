import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { IoHomeOutline } from "react-icons/io5";
import ResueableAccordion from "./ResueableAccordion";
import { MdNotStarted } from "react-icons/md";


const sampleAccordionData = {
  title: "Manage Betters",
  items: [
    { name: "Active Betters", href: "active" },
    { name: "Banned Betters", href: "banned" },
    { name: "Email Unverified", href: "email-unverified" },
    { name: "Mobile Unverified", href: "mobile-unverified" },
  ],
};

export default function SideNavigationBar() {
  return (
    <div className="flex h-screen flex-col items-start bg-indigo-950 text-white">
      <div className="px-3 py-6">
        <Logo />
      </div>

      <div className="flex w-full flex-col items-start text-white">
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            `flex w-full items-center gap-2 py-3 px-6 text-white ${
              isActive ? "bg-indigo-900" : ""
            }`
          }
          style={{ textDecoration: "none" }}
        >
          <IoHomeOutline className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>
          
        <div className="w-full">
          <ResueableAccordion
            title={sampleAccordionData.title}
            items={sampleAccordionData.items}
          />
        </div>
      </div>

      <div>
        <p>BET SETUP</p>
      </div>
    </div>
  );
}
