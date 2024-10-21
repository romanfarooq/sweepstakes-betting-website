import toast from "react-hot-toast";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  doSignInWithGoogle,
  doSignInWithEmailAndPassword,
} from "@/firebase/auth";

function SignUpForm() {
  const { userLoggedIn, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password).catch((err) => {
        toast.error(err.message);
      });
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setErrorMessage(err);
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-800 p-8 sm:p-0">
      <div className="w-full max-w-md rounded-lg bg-gray-100 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">Sign Up</h2>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-md bg-sky-500 py-2 text-white transition duration-200 hover:bg-sky-600"
          >
            Sign Up
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="mb-2 text-sm text-gray-500">Or sign up with</p>
          <Button
            onClick={onGoogleSignIn}
            className="w-full rounded-md bg-red-500 py-2 text-white transition duration-200 hover:bg-red-600"
          >
            Continue with Google
          </Button>
        </div>
        {userLoggedIn && <Navigate to={"/home"} replace={true} />}
      </div>
    </div>
  );
}

export default SignUpForm;
