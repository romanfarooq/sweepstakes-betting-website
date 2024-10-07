import LineChart from "@/components/LineChart";
import TradeCard from "@/components/TradeCard";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";

export default function Event() {
  return (
    <div className="flex flex-col gap-10 px-10 py-10 justify-between md:px-14 lg:flex-row">
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
      <TradeCard />
    </div>
  );
}
