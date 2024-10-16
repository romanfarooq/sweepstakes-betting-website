import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, RefreshCw, Info, Copy, Check } from "lucide-react";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";

const Wallet = () => {
  const [address] = useState("0x3538F7B63F30C82fC4aAb3aA2401D4AD0bf9ICB1");
  const [copied, setCopied] = useState(false); // State to track copy status

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true); // Set copied state to true
      toast.success("Copied successfully");

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <Card className="border-gray-700 bg-gray-900 text-white">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold">Deposit USDC (Polygon)</h2>
              <span className="mt-2 rounded-full bg-sky-800 px-2 py-1 text-xs text-white sm:mt-0">
                EASIEST METHOD
              </span>
            </div>
            <p className="text-sm text-gray-400">1 MINUTE • FREE</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-sky-800 p-1.5 text-xs font-bold transition-colors hover:bg-sky-700">
                1
              </div>
              <p className="flex-grow">
                Buy USDC on Coinbase, Binance or another exchange.
              </p>
              <CreditCard className="flex-shrink-0 text-blue-500" size={24} />
            </div>
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-sky-800 p-1.5 text-xs font-bold transition-colors hover:bg-sky-700">
                2
              </div>
              <p>
                Send/withdraw USDC to the address below and select{" "}
                <span className="font-semibold text-purple-400">Polygon</span>{" "}
                as the network.
              </p>
            </div>
            <div className="flex items-center space-x-2 rounded bg-gray-800 p-2">
              <Input
                value={address}
                readOnly
                className="flex-grow border-none bg-transparent text-gray-300"
              />
              <Button
                variant="secondary"
                size="sm"
                className="flex-shrink-0 bg-sky-800 text-white hover:bg-sky-700"
                onClick={copyToClipboard}
              >
                {copied ? ( // Conditionally render based on copied state
                  <Check size={16} className="mr-2" />
                ) : (
                  <Copy size={16} className="mr-2" />
                )}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-900 text-white">
          <CardContent className="py-4">
            <p className="mb-2 text-sm font-semibold">OTHER METHODS</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-gray-400">No crypto?</p>
              <Button
                variant="primary"
                size="sm"
                className="bg-sky-800 text-white hover:bg-sky-700"
              >
                Buy USDC
              </Button>
              <div className="flex space-x-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                  alt="Visa"
                  className="h-6"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
                  alt="Mastercard"
                  className="h-6"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888848.png"
                  alt="Apple Pay"
                  className="h-6"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png"
                  alt="Google Pay"
                  className="h-6"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "USDC", network: "Ethereum", color: "blue" },
            { name: "USDT", network: "Ethereum", color: "green" },
            { name: "Other", network: "", color: "purple" },
          ].map((item, index) => (
            <Card
              key={index}
              className="cursor-pointer border-gray-700 bg-gray-900 text-white transition-colors hover:border-gray-600"
            >
              <CardContent className="flex items-center justify-center py-6">
                <div
                  className={cn(
                    "mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-opacity-20",
                    `bg-${item.color}-500`,
                  )}
                >
                  <CreditCard className={`text-${item.color}-500`} size={24} />
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  {item.network && (
                    <p className="text-sm text-gray-400">{item.network}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-gray-700 bg-gray-900 text-white">
          <CardContent className="flex items-center justify-between py-6">
            <div>
              <p className="text-3xl font-bold">$0.00</p>
              <p className="text-sm text-gray-400">Balance</p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-gray-70 border-gray-700 bg-gray-800"
              >
                <RefreshCw size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-gray-70 border-gray-700 bg-gray-800"
              >
                <Info size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-900 text-white">
          <CardContent className="py-4">
            <Button
              variant="outline"
              className="w-full border-gray-700 bg-transparent py-6 text-white hover:bg-gray-800 hover:text-white"
            >
              Chat with a human
            </Button>
          </CardContent>
        </Card>

        <Card className="border-gray-700 bg-gray-900 text-white">
          <CardHeader>
            <h3 className="text-lg font-semibold">TUTORIALS</h3>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              "Coinbase",
              "Robinhood",
              "Paypal",
              "ETH",
              "I don't have any crypto",
            ].map((item, index) => (
              <p
                key={index}
                className="cursor-pointer text-blue-400 transition-colors hover:text-blue-300 hover:underline"
              >
                {item}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
