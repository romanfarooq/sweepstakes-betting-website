import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TradeCard({ hoveredData }) {
  const [amount, setAmount] = useState(0);
  const [selectedBet, setSelectedBet] = useState("yes");

  const handleInputChange = (e) => {
    const value = Number(e.target.value.replace(/[^0-9]/g, "")); // Remove non-numeric characters
    if (!isNaN(value) && value >= 0) {
      setAmount(value);
    } else if (e.target.value === "") {
      setAmount(0); // Reset to 0 if input is empty
    }
  };

  return (
    <Card className="mt-4 border border-gray-600 bg-gray-800 text-white shadow-md">
      <Tabs className="p-1" defaultValue="buy">
        <TabsList className="mt-2 flex justify-start gap-5 rounded-none border-b border-gray-100 border-opacity-20 bg-gray-800 px-2 py-5 shadow-none">
          <TabsTrigger
            value="buy"
            className="rounded-none bg-gray-800 pb-[0.6rem] text-base text-slate-400 shadow-none data-[state=active]:border-b-[3px] data-[state=active]:border-blue-400 data-[state=active]:bg-gray-800 data-[state=active]:text-blue-400"
          >
            Buy
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="rounded-none bg-gray-800 pb-[0.6rem] text-base text-slate-400 shadow-none data-[state=active]:border-b-[3px] data-[state=active]:border-blue-400 data-[state=active]:bg-gray-800 data-[state=active]:text-blue-400"
          >
            Sell
          </TabsTrigger>
        </TabsList>

        {/* Buy Tab Content */}
        <TabsContent value="buy">
          <CardContent className="p-4">
            <div className="flex flex-col items-start justify-between gap-2">
              <Label className="text-base">Outcome</Label>
              <div className="flex w-full gap-2">
                <Button
                  className={cn(
                    "group flex-1 items-center justify-center rounded-sm py-6 text-base",
                    selectedBet === "yes"
                      ? "bg-[#22c55e] text-white"
                      : "bg-gray-700 text-gray-400",
                  )}
                  onClick={() => setSelectedBet("yes")}
                >
                  Yes 34¢
                </Button>
                <Button
                  className={cn(
                    "group flex-1 items-center justify-center rounded-sm py-6 text-base",
                    selectedBet === "no"
                      ? "bg-red-600 text-white"
                      : "bg-gray-700 text-gray-400",
                  )}
                  onClick={() => setSelectedBet("no")}
                >
                  No 66¢
                </Button>
              </div>
            </div>

            <div className="my-10 flex flex-col items-start justify-between gap-2">
              <Label className="text-base">Amount</Label>
              <div className="flex w-full items-center">
                <Button
                  className="h-12 rounded-r-none bg-gray-700"
                  onClick={() =>
                    setAmount((prevAmount) => Math.max(0, prevAmount - 10))
                  }
                >
                  -
                </Button>
                <div className="relative flex w-full items-center bg-slate-900 text-white">
                  <span className="absolute px-2">$</span>
                  <Input
                    type="text"
                    value={amount}
                    onChange={handleInputChange}
                    className="h-12 w-full rounded-none border-none bg-slate-900 text-center text-white [appearance:textfield] focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
                <Button
                  className="h-12 rounded-l-none bg-slate-700"
                  onClick={() => setAmount((prevAmount) => prevAmount + 10)}
                >
                  +
                </Button>
              </div>
            </div>

            <Button className="mb-4 w-full bg-blue-500 py-5 text-base text-white">
              Log In
            </Button>
            <div className="text-center text-slate-400 md:text-sm xl:text-base">
              <p className="flex justify-between">
                Avg price: <span className="text-blue-500">0.0¢</span>
              </p>
              <p className="flex justify-between">
                Shares: <span className="text-slate-100">0.00</span>
              </p>
              <p className="flex justify-between">
                Potential return:
                <span className="text-green-500">$0.00 (0.00%)</span>
              </p>
            </div>
          </CardContent>
        </TabsContent>

        {/* Sell Tab Content */}
        <TabsContent value="sell">
          <CardContent className="p-4">
            <div className="flex flex-col items-start justify-between gap-2">
              <Label className="text-base">Outcome</Label>
              <div className="flex w-full gap-2">
                <Button
                  className={cn(
                    "group flex-1 items-center justify-center rounded-sm py-6 text-base",
                    selectedBet === "yes"
                      ? "bg-[#22c55e] text-white"
                      : "bg-gray-700 text-gray-400",
                  )}
                  onClick={() => setSelectedBet("yes")}
                >
                  Yes 34¢
                </Button>
                <Button
                  className={cn(
                    "group flex-1 items-center justify-center rounded-sm py-6 text-base",
                    selectedBet === "no"
                      ? "bg-red-600 text-white"
                      : "bg-gray-700 text-gray-400",
                  )}
                  onClick={() => setSelectedBet("no")}
                >
                  No 66¢
                </Button>
              </div>
            </div>

            <div className="my-10 flex flex-col items-start justify-between gap-2">
              <Label className="text-base">Shares</Label>
              <div className="flex w-full items-center">
                <Button
                  className="h-12 rounded-r-none bg-gray-700"
                  onClick={() =>
                    setAmount((prevAmount) => Math.max(0, prevAmount - 10))
                  }
                >
                  -
                </Button>
                <div className="flex w-full items-center bg-slate-900 text-white">
                  <Input
                    type="text"
                    value={amount}
                    onChange={handleInputChange}
                    className="h-12 w-full rounded-none border-none bg-slate-900 text-center text-white [appearance:textfield] focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
                <Button
                  className="h-12 rounded-l-none bg-slate-700"
                  onClick={() => setAmount((prevAmount) => prevAmount + 10)}
                >
                  +
                </Button>
              </div>
            </div>

            <Button className="mb-4 w-full bg-blue-500 py-5 text-base text-white">
              Log In
            </Button>
            <div className="text-center text-slate-400 md:text-sm xl:text-base">
              <p className="flex justify-between">
                Avg price: <span className="text-blue-400">0.0¢</span>
              </p>
              <p className="flex justify-between">
                Est. amount received:
                <span className="text-slate-100">$0.00</span>
              </p>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
