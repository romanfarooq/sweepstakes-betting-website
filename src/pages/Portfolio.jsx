import { useState } from "react"; // Import useState for state management
import AmountPortfolioWallet from "@/components/AmountPortfolioWallet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableRows from "@/components/TableRows";
import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  // Dummy data for positions
  const positionsData = [
    { id: "INV001", name: "Team 1 vs Team 2", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { id: "INV002", name: "Team 1 vs Team 2", status: "Pending", method: "PayPal", amount: "$150.00" },
    { id: "INV003", name: "Team 1 vs Team 2", status: "Paid", method: "Bank Transfer", amount: "$300.00" },
    { id: "INV004", name: "Dolphins vs Gladiators", status: "Failed", method: "Credit Card", amount: "$450.00" },
    { id: "INV005", name: "Team 1 vs Team 2", status: "Refunded", method: "Debit Card", amount: "$100.00" },
  ];

  // Dummy data for open orders
  const openOrdersData = [
    { id: "ORD001", name: "Team 1 vs Team 2", status: "Processing", method: "Credit Card", amount: "$500.00" },
    { id: "ORD002", name: "Team 1 vs Team 2", status: "Shipped", method: "PayPal", amount: "$350.00" },
  ];

  // Dummy data for history
  const historyData = [
    { id: "HIS001", name: "Team 1 vs Team 2", status: "Completed", method: "Credit Card", amount: "$400.00" },
    { id: "HIS002", name: "Team 1 vs Team 2", status: "Cancelled", method: "PayPal", amount: "$200.00" },
  ];

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Filter function to search through the data
  const filterData = () => {
    // Here you can set your filtered states, for example
    // setFilteredPositions(filteredPositions); etc.
  };

  // Handle search on button click, Enter key press, or input change
  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      filterData();
    }
  };

  // Filter functions for positions, open orders, and history
  const filteredPositions = positionsData.filter(item =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOpenOrders = openOrdersData.filter(item =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredHistory = historyData.filter(item =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-40 py-10">
      <AmountPortfolioWallet />
      <div className="flex flex-col">
        <div className="mx-auto flex w-4/6 items-center justify-between gap-6 py-12">
          <Tabs defaultValue="positions" className="w-full">
            <div className="flex flex-col gap-6">
              <div>
                <TabsList className="grid w-full grid-cols-2 bg-gray-900 lg:grid-cols-5">
                  <TabsTrigger className="data-[state=active]:bg-sky-700 data-[state=active]:text-white" value="positions">Positions</TabsTrigger>
                  <TabsTrigger className="data-[state=active]:bg-sky-700 data-[state=active]:text-white" value="openOrders">Open Orders</TabsTrigger>
                  <TabsTrigger className="data-[state=active]:bg-sky-700 data-[state=active]:text-white" value="history">History</TabsTrigger>
                </TabsList>
              </div>
              <div className="self-end flex items-center justify-between gap-4">
                <Input
                  className="w-72 bg-gray-900"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleSearch} // Call handleSearch on key press
                />
                <Button
                  className="flex items-center justify-center bg-sky-800 text-white rounded px-4 py-2 transition duration-300 ease-in-out hover:bg-sky-600"
                  onClick={handleSearch} // Call handleSearch on button click
                >
                  <IoMdSearch className="text-xl" />
                </Button>
              </div>
            </div>
            <TabsContent value="positions">
              <Table className="border border-gray-500 rounded-lg overflow-hidden">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow className="bg-gray-800">
                    <TableHead className="w-[120px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="w-[140px]">Payment Method</TableHead>
                    <TableHead className="text-right w-[120px]">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRows data={filteredPositions} />
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="openOrders">
              <Table className="border border-gray-500 rounded-lg overflow-hidden">
                <TableCaption>A list of your open orders.</TableCaption>
                <TableHeader>
                  <TableRow className="bg-gray-800">
                    <TableHead className="w-[120px]">Order ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="w-[140px]">Payment Method</TableHead>
                    <TableHead className="text-right w-[120px]">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRows data={filteredOpenOrders} />
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="history">
              <Table className="border border-gray-500 rounded-lg overflow-hidden">
                <TableCaption>Your transaction history.</TableCaption>
                <TableHeader>
                  <TableRow className="bg-gray-800">
                    <TableHead className="w-[120px]">History ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="w-[140px]">Payment Method</TableHead>
                    <TableHead className="text-right w-[120px]">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRows data={filteredHistory} />
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
