// import React from 'react'
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



function LoggedOutButtons({onSignOut}) {
  return (
    <div className="flex gap-3 items-center justify-between ">
           
            <Button className="text-lg" onClick={onSignOut}>
              Logout
            </Button>
            <div className="flex flex-col gap-2 items-center justify-between text-sm">
             <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              </div>
          </div>
  )
}

export default LoggedOutButtons;