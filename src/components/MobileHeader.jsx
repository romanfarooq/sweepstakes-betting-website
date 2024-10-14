import DepositWithDrawBtn from "@/components/DepositWithDrawBtn";
import LoggedInButtons from "@/components/LoggedInButtons";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AlignJustify, BadgeDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { doSignInWithGoogle, doSignOut } from "@/firebase/auth";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <AlignJustify
            className="cursor-pointer"
            onClick={handleOpen}
            size={24}
          />
        </SheetTrigger>
        <SheetContent
          className="flex h-full w-full flex-col justify-between overflow-y-auto border-none bg-gray-800 text-white"
          side="left"
        >
          <div className="flex items-center gap-2">
            <SheetTitle
              className="flex flex-1 cursor-pointer items-center justify-center text-3xl font-extrabold text-white sm:text-4xl"
              onClick={handleClose}
            >
              <BadgeDollarSign className="mr-2 inline-block size-8 pt-1" />
              <span> Sweep Stakes</span>
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
              Terms & Uses
            </NavLink>

            {userLoggedIn && (
              <Button
                className="mx-auto w-48 bg-gray-600 bg-opacity-60 text-white transition-all hover:bg-gray-500 sm:w-auto"
                onClick={() => {
                  handleClose();
                  onSignOut();
                }}
              >
                Log Out
              </Button>
            )}
          </nav>

          <div className="mx-auto mt-auto flex flex-col gap-2 p-4">
            <div className="flex items-center justify-center gap-10">
              {userLoggedIn ? (
                <DepositWithDrawBtn />
              ) : (
                <LoggedInButtons doSignInWithGoogle={doSignInWithGoogle} />
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex flex-1 items-center justify-between">
        <h1 className="flex flex-1 items-center justify-center text-2xl font-bold">
          <BadgeDollarSign className="mr-2 inline-block size-8" />
          <span> Sweep Stakes</span>
        </h1>
        {userLoggedIn && (
          <Avatar className="ml-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  );
}
