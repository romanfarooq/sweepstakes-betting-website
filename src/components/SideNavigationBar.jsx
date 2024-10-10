// import React from 'react'

import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { IoIosPeople } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";


// import Logo from "./Logo";

export default function SideNavigationBar() {
    console.log(NavLink)

  return (
    <div className="flex h-screen w-72 flex-col items-center bg-indigo-950 text-white">
      <div className="px-3 py-6">
        <Logo />
      </div>

      <div className="flex w-full flex-col items-center text-white">
        <NavLink
          to="dashboard"
          className={({isActive}) => `flex items-center gap-2 p-3 w-full text-white ${isActive ? 'bg-indigo-900' : ''}`}
        >
          <IoHomeOutline />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="users"
          className={({isActive}) => `flex items-center gap-2 p-3 w-full text-white ${isActive ? 'bg-indigo-900' : ''}`}
        >
          <IoIosPeople />
         <span>Manage Betters</span>
        </NavLink>
      </div>
    </div>
  );
}



