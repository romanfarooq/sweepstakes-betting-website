import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function AmountPortfolioWallet() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-between gap-6 rounded-md bg-gray-900 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
        <div className="cursor-pointer space-y-2 sm:space-y-4 rounded-md bg-gray-800 px-6 sm:px-10 md:px-14 py-4 sm:py-6 md:py-8 transition-all flex-1">
          <p className="text-xs sm:text-sm">Portfolio</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">$0.00</h1>
        </div>
        <div className="cursor-pointer space-y-2 sm:space-y-4 rounded-md bg-gray-800 px-6 sm:px-10 md:px-14 py-4 sm:py-6 md:py-8 transition-all flex-1">
          <p className="text-xs sm:text-sm">Cash</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">$0.00</h1>
        </div>
      </div>
      <div className="flex gap-4 sm:gap-5 w-full sm:w-auto">
        <Button
          onClick={() => navigate("/wallet")}
          className="flex-1 sm:flex-none bg-sky-700 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base hover:scale-105 hover:bg-sky-800 active:scale-100"
        >
          Deposit
        </Button>
        <Button
          onClick={() => navigate("/wallet")}
          className="flex-1 sm:flex-none bg-red-700 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base hover:scale-105 hover:bg-red-800 active:scale-100"
        >
          Withdraw
        </Button>
      </div>
    </div>
  );
}