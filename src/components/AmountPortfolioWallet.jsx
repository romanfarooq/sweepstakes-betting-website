// import React from 'react'

import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function AmountPortfolioWallet() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex min-w-4/6 items-center justify-between gap-6 rounded-md bg-gray-900 px-20 py-12 flex-col">
      <div className="flex gap-6 p-4">
        <div className="cursor-pointer space-y-4 rounded-md bg-gray-800 px-14 py-8 transition-all">
          <p className="text-sm">Portfolio</p>
          <h1 className="text-3xl font-bold">$0.00</h1>
        </div>
        <div className="cursor-pointer space-y-4 rounded-md bg-gray-800 px-14 py-8 transition-all">
          <p className="text-sm">Cash</p>
          <h1 className="text-3xl font-bold">$0.00</h1>
        </div>
      </div>
      <div className="flex gap-5">
        <Button
          onClick={() => navigate("/wallet")}
          className="bg-sky-700 p-6 hover:scale-105 hover:bg-sky-800 active:scale-100"
        >
          Deposit
        </Button>
        <Button
          onClick={() => navigate("/wallet")}
          className="bg-red-700 p-6 hover:scale-105 hover:bg-red-800 active:scale-100"
        >
          Withdraw
        </Button>
      </div>
    </div>
  );
}
