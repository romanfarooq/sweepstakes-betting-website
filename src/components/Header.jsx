import NavLinkList from "@/components/NavLinkList";
import { Link, useNavigate } from "react-router-dom";
import { doSignInWithGoogle } from "@/firebase/auth";
import { useAuth } from "@/contexts/authContext";
import { doSignOut } from "@/firebase/auth";
import LoggedInButtons from "./LoggedInButtons";
import LoggedOutButtons from "./LoggedOutButtons";
import { BadgeDollarSign } from "lucide-react";


// import { useAuth } from "@/contexts/authContext";

function Header() {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  function onSignOut() {
    doSignOut();
    navigate(0);
  }

  return (
    <div className="hidden h-full items-center justify-between border-b border-gray-600 bg-gray-800 bg-primary px-12 py-6 text-white md:flex md:gap-6">
      <Link 
      to="/home" 
      className="flex items-center text-lg md:text-xl lg:text-2xl font-bold"
    >
      <BadgeDollarSign className="mr-2 h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" /> {/* Responsive icon size */}
      Sweep Stakes
    </Link>


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
