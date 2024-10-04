import LineChart from "@/components/LineChart";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";

export default function Event() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="flex flex-col gap-10 px-10 py-10 md:px-14 lg:flex-row">
      {/* Main Event Card */}
      <div className="lg:w-[70%] text-white">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <p className="pb-1 text-3xl font-semibold">
                Israel military response against Iran by Friday?
              </p>
              <div className="flex space-x-2 text-base text-gray-400">
                <p className="flex items-center space-x-1">
                  <LuClock4 />
                  <span>Oct 4, 2024</span>
                </p>
                <p className="flex items-center space-x-1">
                  <BsCurrencyDollar />
                  <span>5,073,203 Vol.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <LineChart />
      </div>

      {/* Buy / Sell Card */}
      <div className="mt-4 rounded-lg border border-gray-600 p-4 text-white shadow-md">
        {/* Buy / Sell tabs */}
        <div className="mb-4 flex items-center justify-start border-b border-gray-600">
          <Button className="rounded-l-md text-white">Buy</Button>
          <Button className="text-slate-400">Sell</Button>
        </div>

        {/* Outcome Section */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <Button className="bg-green-600 px-4 py-2 text-white">
              Yes 34¢
            </Button>
            <Button className="bg-slate-700 px-4 py-2 text-slate-400">
              No 67¢
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
            className="w-full bg-slate-800 px-4 py-2 text-center text-white"
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
    </div>
  );
}
