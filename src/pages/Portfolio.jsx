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
    {
      id: "INV001",
      name: "Team 1 vs Team 2",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
    },
    {
      id: "INV002",
      name: "Team 1 vs Team 2",
      status: "Pending",
      method: "PayPal",
      amount: "$150.00",
    },
    {
      id: "INV003",
      name: "Team 1 vs Team 2",
      status: "Paid",
      method: "Bank Transfer",
      amount: "$300.00",
    },
    {
      id: "INV004",
      name: "Dolphins vs Gladiators",
      status: "Failed",
      method: "Credit Card",
      amount: "$450.00",
    },
    {
      id: "INV005",
      name: "Team 1 vs Team 2",
      status: "Refunded",
      method: "Debit Card",
      amount: "$100.00",
    },
  ];

  // Dummy data for open orders
  const openOrdersData = [
    {
      id: "ORD001",
      name: "Team 1 vs Team 2",
      status: "Processing",
      method: "Credit Card",
      amount: "$500.00",
    },
    {
      id: "ORD002",
      name: "Team 1 vs Team 2",
      status: "Shipped",
      method: "PayPal",
      amount: "$350.00",
    },
  ];

  // Dummy data for history
  const historyData = [
    {
      id: "HIS001",
      name: "Team 1 vs Team 2",
      status: "Completed",
      method: "Credit Card",
      amount: "$400.00",
    },
    {
      id: "HIS002",
      name: "Team 1 vs Team 2",
      status: "Cancelled",
      method: "PayPal",
      amount: "$200.00",
    },
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
  const filteredPositions = positionsData.filter(
    (item) =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredOpenOrders = openOrdersData.filter(
    (item) =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredHistory = historyData.filter(
    (item) =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 xl:px-16">
      <AmountPortfolioWallet />
      <div className="mt-8 flex flex-col">
        <div className="w-full">
          <Tabs defaultValue="positions" className="w-full">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <TabsList className="grid h-full grid-cols-3 bg-gray-900">
                  <TabsTrigger
                    className="py-2 text-sm data-[state=active]:bg-sky-700 data-[state=active]:text-white sm:text-base"
                    value="positions"
                  >
                    Positions
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 text-sm data-[state=active]:bg-sky-700 data-[state=active]:text-white sm:text-base"
                    value="openOrders"
                  >
                    Open Orders
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 text-sm data-[state=active]:bg-sky-700 data-[state=active]:text-white sm:text-base"
                    value="history"
                  >
                    History
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <Input
                  className="w-full bg-gray-900 sm:w-72"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleSearch}
                />
                {/* <Button
                  className="w-full sm:w-auto flex items-center justify-center bg-sky-800 text-white rounded px-4 py-2 transition duration-300 ease-in-out hover:bg-sky-600"
                  onClick={handleSearch}
                >
                  <IoMdSearch className="text-xl mr-2" />
                  <span className="sm:hidden">Search</span>
                </Button> */}
              </div>
            </div>
            <TabsContent value="positions">
              <div className="overflow-x-auto">
                <Table className="w-full overflow-hidden rounded-lg border border-gray-500">
                  <TableCaption>A list of your recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow className="bg-gray-800">
                      <TableHead className="w-[120px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="w-[140px]">
                        Payment Method
                      </TableHead>
                      <TableHead className="w-[120px] text-right">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRows data={filteredPositions} />
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="openOrders">
              <div className="overflow-x-auto">
                <Table className="w-full overflow-hidden rounded-lg border border-gray-500">
                  <TableCaption>A list of your open orders.</TableCaption>
                  <TableHeader>
                    <TableRow className="bg-gray-800">
                      <TableHead className="w-[120px]">Order ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="w-[140px]">
                        Payment Method
                      </TableHead>
                      <TableHead className="w-[120px] text-right">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRows data={filteredOpenOrders} />
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="history">
              <div className="overflow-x-auto">
                <Table className="w-full overflow-hidden rounded-lg border border-gray-500">
                  <TableCaption>Your transaction history.</TableCaption>
                  <TableHeader>
                    <TableRow className="bg-gray-800">
                      <TableHead className="w-[120px]">History ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="w-[140px]">
                        Payment Method
                      </TableHead>
                      <TableHead className="w-[120px] text-right">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRows data={filteredHistory} />
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
