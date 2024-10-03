import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function LoggedInButtons({ doSignInWithGoogle }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
      <Button
        onClick={() => doSignInWithGoogle()}
        className="text-base text-sky-500 hover:scale-105 hover:text-sky-600 hover:transition-all"
      >
        Login
      </Button>
      <Button
        className="bg-sky-500 text-white hover:scale-105 hover:bg-sky-600 hover:transition-all"
        variant="secondary"
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </Button>
    </div>
  );
}

export default LoggedInButtons;
