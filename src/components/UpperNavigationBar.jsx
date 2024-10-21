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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function UpperNavigationBar() {
  return (
    <main className="ml-[20%] hidden flex-grow flex-col bg-indigo-50 lg:flex 2xl:ml-[16.666667%]">
      <div className="w-full bg-indigo-950 text-white">
        <div className="flex items-center justify-between p-4">
          <div className="flex w-3/12">
            <Input
              placeholder="Search here...."
              className="border-indigo-900 bg-indigo-900 px-5 py-5 outline-none placeholder:text-indigo-300"
            />
          </div>
          <div className="flex cursor-pointer gap-6 mr-6 text-2xl">
          <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <GiWorld />
                </TooltipTrigger>
                <TooltipContent className="bg-indigo-500 text-white">
                  <p>Go to Website</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
           
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <div className="relative">
                  <IoIosNotificationsOutline className="animate-swing" />
                  <div className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full text-xs text-white flex items-center justify-center">2</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className=" bg-indigo-500 text-white">
                  <p>See unread notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
           
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <CiSettings />
                </TooltipTrigger>
                <TooltipContent className="bg-indigo-500 text-white">
                  <p>System Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

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
