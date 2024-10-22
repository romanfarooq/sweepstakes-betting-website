import ManageDepositsOrWithdrawlsTableContainer from "@/components/ManageDepositsOrWithdrawlsTableContainer";
import { Input } from "@/components/ui/input";
import { WithdrawlsData } from "@/lib/data";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

export default function AllWithdrawls() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedData, setSearchedData] = useState(WithdrawlsData);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    setSearchTerm(currentSearch);
    handleSearchedData(currentSearch);
  }, [searchParams]);

  function handleSearchedData(currentSearch) {
    const searchTerm = currentSearch.toLowerCase();
    const searched = WithdrawlsData.tableRows.filter((row) => {
      return row.userId.toLowerCase().includes(searchTerm);
    });

    setSearchedData({
      ...WithdrawlsData,
      tableRows: searched,
    });
  }

  function handleSearchChange(e) {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setSearchParams({ search: newSearchTerm, page: "1" });
  }

  function handleKeyPressEvent(event) {
    if (event.key === "Enter") {
      handleSearchedData(searchTerm);
    }
  }

  return (
    <div className="space-y-10 px-6 py-12">
      <div className="flex w-full flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-0">
        <h3 className="text-xl font-bold text-gray-700">All Withdrawls</h3>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex h-11">
            <Input
              type="text"
              placeholder="Username / Email"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPressEvent}
              className="h-full w-full border-none bg-gray-100 pr-12 outline-none ring-1 ring-gray-300 transition duration-300 focus:shadow-[0_0_15px_rgba(99,102,241,0.6)] focus:outline-none focus:ring-0 focus:ring-indigo-600"
            />
            <IoIosSearch
              className="absolute right-0 top-1/2 h-full w-12 -translate-y-1/2 transform cursor-pointer rounded-r bg-indigo-600 p-2 text-white"
              onClick={() => handleSearchedData(searchTerm)}
            />
          </div>
          <div className="relative flex h-11">
            <Input
              type="text"
              placeholder="Start Date - End Date"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPressEvent}
              className="h-full w-full border-none bg-gray-100 pr-12 outline-none ring-1 ring-gray-300 transition duration-300 focus:shadow-[0_0_15px_rgba(99,102,241,0.6)] focus:outline-none focus:ring-0 focus:ring-indigo-600"
            />
            <IoIosSearch
              className="absolute right-0 top-1/2 h-full w-12 -translate-y-1/2 transform cursor-pointer rounded-r bg-indigo-600 p-2 text-white"
              onClick={() => handleSearchedData(searchTerm)}
            />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <ManageDepositsOrWithdrawlsTableContainer
          type="withdrawl"
          data={
            searchedData && searchedData.tableRows.length > 0
              ? searchedData
              : WithdrawlsData
          }
          rowsPerPage={10}
        />
      </div>
    </div>
  );
}
