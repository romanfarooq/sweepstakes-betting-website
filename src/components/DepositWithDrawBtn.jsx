import { Button } from "./ui/button";

export default function DepositWithDrawBtn() {
  return (
    <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
      <Button className="w-48 bg-sky-500 bg-opacity-60 transition-all hover:bg-sky-400 sm:w-auto">
        Deposit
      </Button>
      <Button className="w-48 bg-red-500 bg-opacity-70 transition-all hover:bg-red-600 sm:w-auto">
        Withdraw
      </Button>
    </div>
  );
}
