import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function TradeCard({ hoveredData }) {
  const [amount, setAmount] = useState(0);
  console.log(hoveredData);

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
          <CardContent>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                <Button className="bg-green-600 px-4 py-2 text-white">
                  Yes 34¢
                </Button>
                <Button className="bg-slate-700 px-4 py-2 text-slate-400">
                  No 66¢
                </Button>
              </div>
              <Button className="text-slate-400">
                <i className="icon-refresh" />
              </Button>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <Button onClick={() => setAmount(amount - 1)}>-</Button>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-slate-900 px-4 py-2 text-center text-white"
              />
              <Button onClick={() => setAmount(amount + 1)}>+</Button>
            </div>

            <Button className="mb-4 w-full bg-blue-500 py-2 text-white">
              Log In
            </Button>
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
          </CardContent>
        </TabsContent>

        {/* Sell Tab Content */}
        <TabsContent value="sell">
          <CardContent>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                <Button className="bg-green-600 px-4 py-2 text-white">
                  Yes 34¢
                </Button>
                <Button className="bg-slate-700 px-4 py-2 text-slate-400">
                  No 64¢
                </Button>
              </div>
              <Button className="text-slate-400">
                <i className="icon-refresh" />
              </Button>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <Button onClick={() => setAmount(amount - 1)}>-</Button>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-slate-900 px-4 py-2 text-center text-white"
              />
              <Button onClick={() => setAmount(amount + 1)}>+</Button>
            </div>

            <Button className="mb-4 w-full bg-blue-500 py-2 text-white">
              Log In
            </Button>
            <div className="text-center text-slate-400">
              <p>
                Avg price: <span className="text-slate-100">0.0¢</span>
              </p>
              <p>
                Est. amount received:{" "}
                <span className="text-slate-100">$0.00</span>
              </p>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
