// import React from 'react'
import { Button } from "@/components/ui/button";
import {  NavLink} from "react-router-dom";
// import { CiDark } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";

import { useTheme } from "@/components/ui/ThemeProvider";
import NavLinkList from "./NavLinkList";

function Header() {
  const { setTheme } = useTheme();
  return (
    <div className="flex h-full items-center justify-between bg-primary px-12 py-6 text-white">
      <div className="flex gap-2">
        <h1 className="text-xl font-bold dark:text-black">Sweep Stakes</h1>
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
        </span>
      </div>
    
      <div className="flex items-center justify-center gap-10">
        <NavLinkList />
        <div className="flex items-center justify-center gap-3">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MdOutlineWbSunny className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-black transition-all dark:-rotate-90 dark:scale-0" />
                <MdOutlineNightlight className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button className="text-[1rem] text-sky-500 hover:text-sky-600 hover:scale-105 hover:transition-all">Login</Button>
        <NavLink to="/signup">
           <Button
          className="bg-sky-500 text-white hover:bg-sky-600 hover:scale-105 hover:transition-all"
          variant="secondary"
        >
          Sign Up
        </Button>
       </NavLink>
        </div>
        </div>
    </div>
  );
}

export default Header;
