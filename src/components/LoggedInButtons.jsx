// import React from 'react'
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";


function LoggedInButtons({doSignInWithGoogle}) {
  return (
     <div className="flex flex-col  sm:flex-row items-center justify-center gap-3 ">
            <Button
              onClick={() => doSignInWithGoogle()}
              className="text-[1rem] text-sky-500 hover:scale-105 hover:text-sky-600 hover:transition-all"
            >
              Login
            </Button>
            <NavLink to="/signup">
              <Button
                className="bg-sky-500 text-white hover:scale-105 hover:bg-sky-600 hover:transition-all"
                variant="secondary"
              >
                Sign Up
              </Button>
            </NavLink>
          </div>
  )
}

export default LoggedInButtons