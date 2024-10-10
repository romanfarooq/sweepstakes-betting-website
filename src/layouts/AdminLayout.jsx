// import React from 'react'
import SideNavigationBar from "@/components/SideNavigationBar"
import UpperNavigationBar from "@/components/UpperNavigationBar"
import { Outlet } from "react-router-dom"

export default function AdminLayout() {
  return (
    <div className="flex">
      <nav className="flex">
        <SideNavigationBar/>
       
      </nav>
      <main className="flex flex-col bg-indigo-50 w-screen">
      <UpperNavigationBar/>
        <Outlet/>
      </main>
    </div>
  )
}
