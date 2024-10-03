import { useState } from "react";
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
} from "@/components/ui/table"; // Importing Shadcn Table components

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
      status: "Active",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-800 py-20 px-4 sm:px-8 text-gray-100">
      <div className="w-full max-w-5xl">
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-8 text-white">
            <Card className="w-full sm:w-72 rounded-lg bg-gradient-to-r from-sky-700 via-sky-600 to-sky-800 p-6 text-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$0.00</p>
              </CardContent>
            </Card>
            <Card className="w-full sm:w-72 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 p-6 text-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Cash</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$0.00</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button
              className="bg-black px-4 py-2 text-white w-full sm:w-auto"
              onClick={() => handleModal("Deposit")}
            >
              Deposit
            </Button>
            <Button
              className="bg-white px-4 py-2 text-black w-full sm:w-auto"
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
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Market
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Side
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Outcome
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Price
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Quantity
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Total Value
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
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
                        {position.status}
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
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Market
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Side
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Outcome
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Price
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Filled
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Total
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Expiration
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
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
                        {order.status}
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
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Market
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Side
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Outcome
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Price
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Filled
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Total
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
                    Date
                  </TableHead>
                  <TableHead className="border border-gray-600 p-3 sm:p-6 text-lg font-bold text-white">
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
                        {record.status}
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
        <DialogContent className="bg-gray-800 rounded-lg p-6">
          <DialogTitle className="text-lg font-semibold text-white">
            {modalType}
          </DialogTitle>
          <DialogDescription className="mt-2 text-gray-400">
            {/* Add input fields and buttons for Deposit or Withdraw here */}
            <Input placeholder={modalType === "Deposit" ? "Amount to Deposit" : "Amount to Withdraw"} className="mb-4" />
            <Button className="bg-green-600 text-white" onClick={() => console.log(`${modalType} submitted!`)}>
              Submit
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}
