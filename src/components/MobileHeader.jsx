
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavLinkList from "./NavLinkList";
import { useAuth } from "@/contexts/authContext";
import LoggedOutButtons from "./LoggedOutButtons";
import LoggedInButtons from "./LoggedInButtons";
import { doSignOut } from "@/firebase/auth";
import { doSignInWithGoogle } from "@/firebase/auth";
import { Button } from "./ui/button";


export default function MobileHeader() {
  const { userLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

   function onSignOut() {
    doSignOut();
    navigate(0);
  }

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

            <nav className="mt-6 flex flex-col gap-y-8 text-center text-sm">
              <NavLink
                to="/home"
                className="text-lg transition duration-300 hover:text-gray-300"
                onClick={handleClose}
              >
                Home
              </NavLink>
              
              <NavLink
                to="/wallet"
                className="text-lg transition duration-300 hover:text-gray-300"
                onClick={handleClose}
              >
                Wallet
              </NavLink>
              <NavLink
                to="/profile"
                className="text-lg transition duration-300 hover:text-gray-300"
                onClick={handleClose}
              >
                Profile
              </NavLink>
              <NavLink
                to="/portfolio"
                className="text-lg transition duration-300 hover:text-gray-300"
                onClick={handleClose}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/terms"
                className="text-lg transition duration-300 hover:text-gray-300"
                onClick={handleClose}
              >
                Terms of Use
              </NavLink>
             {userLoggedIn &&  <Button
                className="text-lg transition duration-300 hover:text-gray-300"
                onClick={() => { handleClose(); onSignOut()}}
              >
                Log Out
              </Button>}
            </nav>

            <div className="mx-auto mt-auto flex flex-col gap-2 p-4">
               <div className="flex  items-center justify-center gap-10">
        {userLoggedIn ? <LoggedOutButtons onSignOut={onSignOut} /> : <LoggedInButtons doSignInWithGoogle={doSignInWithGoogle} />}
      </div>
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
