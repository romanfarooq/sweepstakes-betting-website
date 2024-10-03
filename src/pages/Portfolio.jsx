import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("OpenOrders");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  // Dummy data for Open Orders
  const openOrders = [
    {
      market: "BTC/USD",
      side: "Buy",
      outcome: "BTC",
      price: "$30,000",
      filled: "50%",
      total: "$15,000",
      expiration: "2024-10-05",
      status: "Pending",
    },
    {
      market: "ETH/USD",
      side: "Sell",
      outcome: "ETH",
      price: "$2,000",
      filled: "100%",
      total: "$2,000",
      expiration: "2024-10-10",
      status: "Completed",
    },
    {
      market: "LTC/USD",
      side: "Buy",
      outcome: "LTC",
      price: "$100",
      filled: "0%",
      total: "$0",
      expiration: "2024-10-15",
      status: "Pending",
    },
  ];

  // Dummy data for History
  const history = [
    {
      market: "DOGE/USD",
      side: "Sell",
      outcome: "DOGE",
      price: "$0.05",
      filled: "100%",
      total: "$500",
      date: "2024-09-20",
      status: "Completed",
    },
    {
      market: "XRP/USD",
      side: "Buy",
      outcome: "XRP",
      price: "$0.50",
      filled: "75%",
      total: "$375",
      date: "2024-09-25",
      status: "Completed",
    },
  ];

  // Dummy data for Positions
  const positions = [
    {
      market: "SOL/USD",
      side: "Buy",
      outcome: "SOL",
      price: "$50",
      quantity: "5",
      totalValue: "$250",
      status: "Active",
    },
    {
      market: "ADA/USD",
      side: "Sell",
      outcome: "ADA",
      price: "$1.50",
      quantity: "100",
      totalValue: "$150",
      status: "Active",
    },
    {
      market: "BNB/USD",
      side: "Buy",
      outcome: "BNB",
      price: "$300",
      quantity: "2",
      totalValue: "$600",
      status: "Pending",
    },
    {
      market: "BNB/USD",
      side: "Buy",
      outcome: "BNB",
      price: "$300",
      quantity: "2",
      totalValue: "$600",
      status: "Active",
    },
    {
      market: "BNB/USD",
      side: "Buy",
      outcome: "BNB",
      price: "$300",
      quantity: "2",
      totalValue: "$600",
      status: "Completed",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-800 px-4 py-20 text-gray-100 sm:px-8">
      <div className="w-full max-w-5xl">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4 text-white sm:gap-8">
            <Card className="w-full rounded-lg bg-gradient-to-r from-sky-700 via-sky-600 to-sky-800 p-6 text-white sm:w-72">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$0.00</p>
              </CardContent>
            </Card>
            <Card className="w-full rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 p-6 text-white sm:w-72">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Cash</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$0.00</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Button
              className="w-full bg-black px-4 py-2 text-white sm:w-auto"
              onClick={() => handleModal("Deposit")}
            >
              Deposit
            </Button>
            <Button
              className="w-full bg-white px-4 py-2 text-black sm:w-auto"
              onClick={() => handleModal("Withdraw")}
            >
              Withdraw
            </Button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-6">
          <nav className="flex gap-4 sm:gap-8">
            <button
              className={`text-gray-300 hover:text-white ${activeTab === "Positions" ? "border-b-2 border-white font-bold text-white" : ""}`}
              onClick={() => setActiveTab("Positions")}
            >
              Positions
            </button>
            <button
              className={`text-gray-300 hover:text-white ${activeTab === "OpenOrders" ? "border-b-2 border-white font-bold text-white" : ""}`}
              onClick={() => setActiveTab("OpenOrders")}
            >
              Open Orders
            </button>
            <button
              className={`text-gray-300 hover:text-white ${activeTab === "History" ? "border-b-2 border-white font-bold text-white" : ""}`}
              onClick={() => setActiveTab("History")}
            >
              History
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="rounded-lg bg-gray-800 p-4 sm:p-6">
          {activeTab === "Positions" && (
            <Table className="overflow-hidden rounded-lg border border-gray-600">
              <TableHeader>
                <TableRow className="bg-gray-700 font-semibold text-white">
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Market
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Side
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Outcome
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Price
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Quantity
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Total Value
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {positions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan="7" className="py-4 text-center">
                      No positions found.
                    </TableCell>
                  </TableRow>
                ) : (
                  positions.map((position, index) => (
                    <TableRow key={index} className="border border-gray-600">
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {position.market}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {position.side}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {position.outcome}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {position.price}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {position.quantity}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {position.totalValue}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        <p
                          className={cn("rounded-xl p-[0.5px] text-center", {
                            "bg-green-300 text-sm text-green-800":
                              position.status.toLowerCase() === "active",
                            "bg-sky-300 text-sm text-sky-800":
                              position.status.toLowerCase() === "pending",
                            "bg-red-300 text-sm text-red-800":
                              position.status.toLowerCase() === "completed",
                          })}
                        >
                          {position.status}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
          {activeTab === "OpenOrders" && (
            <Table className="overflow-hidden rounded-lg border border-gray-600">
              <TableHeader>
                <TableRow className="bg-gray-700 font-semibold text-white">
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Market
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Side
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Outcome
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Price
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Filled
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Total
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Expiration
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {openOrders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan="8" className="py-4 text-center">
                      No open orders found.
                    </TableCell>
                  </TableRow>
                ) : (
                  openOrders.map((order, index) => (
                    <TableRow key={index} className="border border-gray-600">
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {order.market}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {order.side}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {order.outcome}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {order.price}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {order.filled}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {order.total}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {order.expiration}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        <p
                          className={`rounded-xl p-[0.5px] text-center ${order.status.toLowerCase() == "active" ? "bg-green-300 text-sm text-green-800" : ""} p-1 text-center ${order.status.toLowerCase() == "pending" ? "bg-sky-300 text-sm text-sky-800" : ""} p-1 text-center ${order.status.toLowerCase() == "completed" ? "bg-red-300 text-sm text-red-800" : ""}`}
                        >
                          {order.status}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
          {activeTab === "History" && (
            <Table className="overflow-hidden rounded-lg border border-gray-600">
              <TableHeader>
                <TableRow className="bg-gray-700 font-semibold text-white">
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Market
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Side
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Outcome
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Price
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Filled
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Total
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Date
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 text-lg font-bold text-white sm:p-6">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {history.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan="8" className="py-4 text-center">
                      No history found.
                    </TableCell>
                  </TableRow>
                ) : (
                  history.map((record, index) => (
                    <TableRow key={index} className="border border-gray-600">
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {record.market}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {record.side}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {record.outcome}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {record.price}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {record.filled}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {record.total}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        {record.date}
                      </TableCell>
                      <TableCell className="border border-gray-600 p-3 sm:p-6">
                        <p
                          className={`rounded-xl p-[0.5px] text-center ${record.status.toLowerCase() == "active" ? "bg-green-300 text-sm text-green-800" : ""} p-1 text-center ${record.status.toLowerCase() == "pending" ? "bg-sky-300 text-sm text-sky-800" : ""} p-1 text-center ${record.status.toLowerCase() == "completed" ? "bg-red-300 text-sm text-red-800" : ""}`}
                        >
                          {record.status}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      {/* Modal for Deposit and Withdraw */}
      <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DialogContent className="rounded-lg bg-gray-800 p-6">
          <DialogTitle className="text-lg font-semibold text-white">
            {modalType}
          </DialogTitle>
          <DialogDescription className="mt-2 text-gray-400">
            {/* Add input fields and buttons for Deposit or Withdraw here */}
            <Input
              placeholder={
                modalType === "Deposit"
                  ? "Amount to Deposit"
                  : "Amount to Withdraw"
              }
              className="mb-4"
            />
            <Button
              className="bg-green-600 text-white"
              onClick={() => console.log(`${modalType} submitted!`)}
            >
              Submit
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}
