import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, LogOut } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="flex h-16 items-center justify-between px-4 text-white md:hidden">
      <div className="flex items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <AlignJustify
              className="cursor-pointer"
              onClick={handleOpen}
              size={24}
            />
          </SheetTrigger>
          <SheetContent
            className="flex w-full flex-col justify-between border-none bg-gray-800 text-white"
            side="left"
          >
            <div className="flex items-center gap-2">
              <SheetTitle className="flex-1 text-center text-3xl font-extrabold text-white sm:text-4xl">
                Sweep Stakes
              </SheetTitle>
            </div>

            <nav className="mt-6 flex flex-col gap-y-8 text-center">
              <NavLink
                to="/home"
                className="text-2xl transition duration-300 hover:text-gray-300"
                onClick={handleClose}
              >
                Home
              </NavLink>
              <NavLink
                to="/portfolio"
                className="text-2xl transition duration-300 hover:text-gray-300"
                onClick={handleClose}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/wallet"
                className="text-2xl transition duration-300 hover:text-gray-300"
                onClick={handleClose}
              >
                Wallet
              </NavLink>
              <NavLink
                to="/profile"
                className="text-2xl transition duration-300 hover:text-gray-300"
                onClick={handleClose}
              >
                Profile
              </NavLink>
            </nav>

            <div className="mx-auto mt-auto flex flex-col gap-2 p-4">
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
          </SheetContent>
        </Sheet>
      </div>

      {/* Heading in the center */}
      <div className="flex flex-1 justify-center">
        <h1 className="text-3xl font-bold">Sweep Stakes</h1>
      </div>
    </div>
  );
}
