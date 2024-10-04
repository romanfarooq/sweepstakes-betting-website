// import React from 'react'

import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function AmountPortfolioWallet() {
    const navigate = useNavigate();
  return (
      <div className="flex gap-6 w-4/6 justify-between mx-auto items-center px-20 py-12  bg-gray-900 rounded-md">
          <div className="flex gap-6 p-4">
      <div className=" space-y-4   px-14 py-8 rounded-md bg-gray-800  cursor-pointer transition-all">
        <p className="text-sm">Portfolio</p>
        <h1 className="font-bold text-3xl">$0.00</h1>
      </div>
      <div className="space-y-4  px-14 py-8 rounded-md bg-gray-800  cursor-pointer transition-all">
        <p className="text-sm">Cash</p>
        <h1 className="font-bold text-3xl">$0.00</h1>
              </div>
              </div>
          <div className="space-x-5">
            <Button onClick={()=>navigate("/wallet")} className="bg-sky-700 py-6 px-8 hover:bg-sky-800 hover:scale-105 active:scale-100">Deposit</Button>
            <Button onClick={()=>navigate("/wallet")} className="bg-red-700 py-6 px-10 hover:bg-red-800 hover:scale-105 active:scale-100">Withdraw</Button>
            
          </div>
    </div>
  );
}
