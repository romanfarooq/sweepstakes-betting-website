import { Outlet } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { GiWorld } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline, IoIosArrowDropdown } from "react-icons/io";
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
    <main className="hidden ml-[20%] w-4/5 flex-grow flex-col bg-indigo-50 lg:flex">
      <div className="w-full bg-indigo-950 text-white">
        <div className="flex items-center justify-between p-4">
          <div className="flex w-3/12">
            <Input
              placeholder="Search here...."
              className="border-indigo-900 bg-indigo-900 px-5 py-5 outline-none placeholder:text-indigo-300"
            />
          </div>
          <div className="flex cursor-pointer gap-4 text-2xl">
            <GiWorld />
            <IoIosNotificationsOutline className="animate-swing" />
            <CiSettings />
            <div className="text-base">
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
        </div>
      </div>
      <Outlet />
    </main>
  );
}
