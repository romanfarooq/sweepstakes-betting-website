import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AmountPortfolioWallet() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col items-center justify-between gap-6 rounded-md bg-gray-900 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12">
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
        <div className="flex-1 cursor-pointer space-y-2 rounded-md bg-gray-800 px-6 py-4 transition-all sm:space-y-4 sm:px-10 sm:py-6 md:px-14 md:py-8">
          <p className="text-xs sm:text-sm">Portfolio</p>
          <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">$0.00</h1>
        </div>
        <div className="flex-1 cursor-pointer space-y-2 rounded-md bg-gray-800 px-6 py-4 transition-all sm:space-y-4 sm:px-10 sm:py-6 md:px-14 md:py-8">
          <p className="text-xs sm:text-sm">Cash</p>
          <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">$0.00</h1>
        </div>
      </div>
      <div className="flex w-full gap-4 sm:w-auto sm:gap-5">
        <Button
          onClick={() => navigate("/wallet")}
          className="flex-1 bg-sky-700 px-4 py-2 text-sm hover:scale-105 hover:bg-sky-800 active:scale-100 sm:flex-none sm:px-6 sm:py-3 sm:text-base"
        >
          Deposit
        </Button>
        <Button
          onClick={() => navigate("/wallet")}
          className="flex-1 bg-red-700 px-4 py-2 text-sm hover:scale-105 hover:bg-red-800 active:scale-100 sm:flex-none sm:px-6 sm:py-3 sm:text-base"
        >
          Withdraw
        </Button>
      </div>
    </div>
  );
}
