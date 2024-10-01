// import React from 'react'
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import NavLinkList from "./NavLinkList";

function Header() {
  return (
    <div className="bg-gray-800 flex h-full items-center justify-between bg-primary px-12 py-6 text-white border-b border-gray-600">
      <div className="flex gap-2">
        <h1 className="text-xl font-bold">Sweep Stakes</h1>
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
        </span>
      </div>
     

      <div className="flex items-center justify-center gap-10">
        <NavLinkList />
        <div className="flex items-center justify-center gap-3">
          
          <Button className="text-[1rem] text-sky-500 hover:scale-105 hover:text-sky-600 hover:transition-all">
            Login
          </Button>
          <NavLink to="/signup">
            <Button
              className="bg-sky-500 text-white hover:scale-105 hover:bg-sky-600 hover:transition-all"
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
