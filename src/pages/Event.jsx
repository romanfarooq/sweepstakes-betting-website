import { Button } from "@/components/ui/button";
import { useState } from "react";
import LineChart from "@/components/LineChart";

export default function Event() {
  const [amount, setAmount] = useState(0);

  return (
    <>
      <LineChart />
      <div className="mx-auto max-w-xs rounded-lg bg-slate-800 p-4 text-white shadow-md">
        {/* Buy / Sell tabs */}
        <div className="mb-4 flex items-center justify-between">
          <Button className="rounded-l-md bg-blue-500 text-white">Buy</Button>
          <Button className="text-slate-400">Sell</Button>
        </div>

        {/* Outcome Section */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <Button className="bg-slate-600 px-4 py-2 text-slate-400">
              Yes 86.3¢
            </Button>
            <Button className="bg-red-500 px-4 py-2 text-white">
              No 16.6¢
            </Button>
          </div>
          <Button className="text-slate-400">
            <i className="icon-refresh" />
          </Button>
        </div>

        {/* Amount Section */}
        <div className="mb-4 flex items-center justify-between">
          <Button onClick={() => setAmount(amount - 1)}>-</Button>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-slate-800 px-4 py-2 text-center"
          />
          <Button onClick={() => setAmount(amount + 1)}>+</Button>
        </div>

        {/* Log In Button */}
        <Button className="mb-4 w-full bg-blue-500 py-2 text-white">
          Log In
        </Button>

        {/* Avg Price, Shares, Potential Return */}
        <div className="text-center text-slate-400">
          <p>
            Avg price: <span className="text-slate-100">0.0¢</span>
          </p>
          <p>
            Shares: <span className="text-slate-100">0.00</span>
          </p>
          <p>
            Potential return:{" "}
            <span className="text-green-500">$0.00 (0.00%)</span>
          </p>
        </div>
      </div>
    </>
  );
}
