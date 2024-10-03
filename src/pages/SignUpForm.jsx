import { useState } from 'react';
import {  doSignInWithGoogle,doSignInWithEmailAndPassword } from "@/firebase/auth";
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/authContext';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';



function SignUpForm() {
  const { userLoggedIn,loading } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  

  const onSubmit = async (e) => {
    e.preventDefault();
   
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password).catch((err) => {
        toast.error(err.message)
      })
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setErrorMessage(err)
        setIsSigningIn(false)
      })
    }
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800 p-8 sm:p-0">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 bg-gray-50 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition duration-200"
          >
            Sign Up
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 mb-2">Or sign up with</p>
          <Button
            onClick={onGoogleSignIn}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
          >
            Continue with Google
          </Button>
        </div>
        {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
      </div>
    </div>
  );
}

export default SignUpForm;
