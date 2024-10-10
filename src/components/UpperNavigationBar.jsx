// import React from 'react'
import { GiWorld } from "react-icons/gi";
import { IoIosNotificationsOutline,IoIosArrowDropdown } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Input } from "@/components/ui/input";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UpperNavigationBar() {
  return (
    <div className="w-full border-l border-indigo-700 bg-indigo-950 text-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex w-3/12">
          <Input
            placeholder="Search here...."
            className="border-indigo-900 bg-indigo-900 px-5 py-6 outline-none placeholder:text-indigo-300"
          />
        </div>
        <div className="flex gap-4 text-2xl cursor-pointer">
          <GiWorld />
          <IoIosNotificationsOutline className="animate-swing" />
          <CiSettings />
          <div className="text-base">
          <DropdownMenu className="">
            <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer"><span>admin</span><IoIosArrowDropdown/></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-indigo-950">
              <DropdownMenuLabel className="cursor-pointer">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-indigo-900 focus:bg-indigo-900 cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-indigo-900 focus:bg-indigo-900 cursor-pointer">Password</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-indigo-900 focus:bg-indigo-900 cursor-pointer">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
