import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import DepositWithDrawBtn from "./DepositWithDrawBtn";

function LoggedOutButtons({ onSignOut }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between gap-5">
       <DepositWithDrawBtn/>
      <div className="flex cursor-pointer flex-col items-center justify-between gap-2 text-sm">
        <DropdownMenu className="">
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-5 w-[10rem] border-gray-600">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => navigate("profile")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => navigate("settings")}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => navigate("wallet")}>
              Wallet
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => navigate("terms")}>
              Terms of Use
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                onSignOut();
              }}
            >
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default LoggedOutButtons;
