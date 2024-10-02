import NavLinkList from "@/components/NavLinkList";
import { useNavigate } from "react-router-dom";
import { doSignInWithGoogle } from "@/firebase/auth";
import { useAuth } from "@/contexts/authContext";
import { doSignOut } from "@/firebase/auth";
import LoggedInButtons from "./LoggedInButtons";
import LoggedOutButtons from "./LoggedOutButtons";

// import { useAuth } from "@/contexts/authContext";

function Header() {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  function onSignOut() {
    doSignOut();
    navigate(0);
  }

  return (
    <div className="hidden md:flex h-full items-center justify-between border-b border-gray-600 bg-gray-800 bg-primary px-12 py-6 text-white">
      <div className="flex gap-2">
        <h1 className="text-xl font-bold">Sweep Stakes</h1>
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
        </span>
      </div>

      <div className="flex items-center justify-center gap-10">
        <NavLinkList />
        {userLoggedIn ? <LoggedOutButtons onSignOut={onSignOut} /> : <LoggedInButtons doSignInWithGoogle={doSignInWithGoogle} />}
      </div>
    </div>
  );
}

export default Header;
