// import React from 'react'
import SideNavigationBar from "@/components/SideNavigationBar"
import UpperNavigationBar from "@/components/UpperNavigationBar"
import { Outlet } from "react-router-dom"

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <div className="flex-shrink-0 w-1/6">
        <SideNavigationBar/>
      </div>
      <main className="flex flex-col flex-grow bg-indigo-50">
        <UpperNavigationBar />
        <Outlet />
      </main>
    </div>
  )
}
