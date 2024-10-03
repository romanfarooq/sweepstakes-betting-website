import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, RefreshCw, Info, Copy, Check } from 'lucide-react'; // Import Check icon
import { toast } from 'react-hot-toast';

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
    <div className="bg-gray-800 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="bg-gray-900 text-white border-gray-700">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold">Deposit USDC (Polygon)</h2>
              <span className="text-xs bg-sky-800 text-white px-2 py-1 rounded-full mt-2 sm:mt-0">EASIEST METHOD</span>
            </div>
            <p className="text-sm text-gray-400">1 MINUTE • FREE</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-sky-800 hover:bg-sky-700 transition-colors rounded-full p-1.5 text-xs font-bold">1</div>
              <p className="flex-grow">Buy USDC on Coinbase, Binance or another exchange.</p>
              <CreditCard className="text-blue-500 flex-shrink-0" size={24} />
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-sky-800 hover:bg-sky-700 transition-colors rounded-full p-1.5 text-xs font-bold">2</div>
              <p>Send/withdraw USDC to the address below and select <span className="text-purple-400 font-semibold">Polygon</span> as the network.</p>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded">
              <Input 
                value={address}
                readOnly 
                className="bg-transparent border-none text-gray-300 flex-grow"
              />
              <Button variant="secondary" size="sm" className="flex-shrink-0 bg-sky-800 hover:bg-sky-700 text-white" onClick={copyToClipboard}>
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

        <Card className="bg-gray-900 text-white border-gray-700">
          <CardContent className="py-4">
            <p className="text-sm font-semibold mb-2">OTHER METHODS</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-gray-400">No crypto?</p>
              <Button variant="primary" size="sm" className="bg-sky-800 hover:bg-sky-700 text-white">Buy USDC</Button>
              <div className="flex space-x-2">
                <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/888/888848.png" alt="Apple Pay" className="h-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="Google Pay" className="h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "USDC", network: "Ethereum", color: "blue" },
            { name: "USDT", network: "Ethereum", color: "green" },
            { name: "Other", network: "", color: "purple" }
          ].map((item, index) => (
            <Card key={index} className="bg-gray-900 text-white border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
              <CardContent className="flex items-center justify-center py-6">
                <div className={`w-10 h-10 rounded-full bg-${item.color}-500 bg-opacity-20 flex items-center justify-center mr-3`}>
                  <CreditCard className={`text-${item.color}-500`} size={24} />
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  {item.network && <p className="text-sm text-gray-400">{item.network}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-900 text-white border-gray-700">
          <CardContent className="flex justify-between items-center py-6">
            <div>
              <p className="text-3xl font-bold">$0.00</p>
              <p className="text-sm text-gray-400">Balance</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="border-gray-700 bg-gray-800 hover:bg-gray-70">
                <RefreshCw size={18} />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-700 bg-gray-800 hover:bg-gray-70">
                <Info size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 text-white border-gray-700">
          <CardContent className="py-4">
            <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 bg-transparent text-white hover:text-white py-6">
              Chat with a human
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 text-white border-gray-700">
          <CardHeader>
            <h3 className="font-semibold text-lg">TUTORIALS</h3>
          </CardHeader>
          <CardContent className="space-y-2">
            {['Coinbase', 'Robinhood', 'Paypal', 'ETH', "I don't have any crypto"].map((item, index) => (
              <p key={index} className="text-blue-400 cursor-pointer hover:underline hover:text-blue-300 transition-colors">{item}</p>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
