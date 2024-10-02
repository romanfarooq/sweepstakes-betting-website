// import React from 'react'
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

function LoggedOutButtons({ onSignOut }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="space-x-4">
        <Button className="bg-sky-500">Deposit</Button>
        <Button className="bg-red-600">Withdraw</Button>
      </div>
      
      <div className="flex cursor-pointer flex-col items-center justify-between gap-2 text-sm">
        <DropdownMenu className="w-28">
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to="profile">
              {" "}
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <Link to="settings">
              {" "}
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </Link>
            <Link to="wallet">
              {" "}
              <DropdownMenuItem>Wallet</DropdownMenuItem>
            </Link>
            <Link to="terms">
              {" "}
              <DropdownMenuItem>Terms of Use</DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={onSignOut}>Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default LoggedOutButtons;
