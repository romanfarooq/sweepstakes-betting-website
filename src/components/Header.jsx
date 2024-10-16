import LoggedInButtons from "@/components/LoggedInButtons";
import LoggedOutButtons from "@/components/LoggedOutButtons";
import NavLinkList from "@/components/NavLinkList";
import { useAuth } from "@/contexts/AuthContext";
import { doSignInWithGoogle, doSignOut } from "@/firebase/auth";
import { BadgeDollarSign } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  function onSignOut() {
    doSignOut();
    navigate(0);
  }

  return (
    <div className="hidden h-full items-center justify-between border-b border-gray-600 px-6 py-6 text-white md:flex md:gap-6 lg:px-12">
      <Logo />
      <div className="flex items-center justify-center gap-10">
        <NavLinkList />
        {userLoggedIn ? (
          <LoggedOutButtons onSignOut={onSignOut} />
        ) : (
          <LoggedInButtons doSignInWithGoogle={doSignInWithGoogle} />
        )}
      </div>
    </div>
  );
}

export default Header;
