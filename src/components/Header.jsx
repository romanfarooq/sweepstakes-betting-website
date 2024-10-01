// import React from 'react'
import { Button } from "@/components/ui/button";
// import { CiDark } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Sun, Moon } from "react-icons/wi";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md"; // Import from Material Icons

import { useTheme } from "@/components/ui/ThemeProvider";

function Header() {
  const { setTheme } = useTheme();
  return (
    <div className="flex h-full justify-between bg-primary px-12 py-6 text-white">
      <div>
        <h1 className="text-xl font-bold">Sweep Stakes</h1>
      </div>
      <div className="flex items-center justify-center gap-3">
        
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
        </span>
        <p className="">Live</p>
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
        <Button className="text-sky-500">
          Login
        </Button>
        <Button className="bg-sky-500 text-white" variant="">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Header;
