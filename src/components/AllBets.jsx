import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { ManageBetsData } from "@/lib/data";
import { useSearchParams } from "react-router-dom";
import ManageBetsTableContainer from "./ManageBetsTableContainer";

export default function AllBets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedData, setSearchedData] = useState(ManageBetsData);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    setSearchTerm(currentSearch);
    handleSearchedData(currentSearch);
  }, [searchParams]);

  function handleSearchedData(currentSearch) {
    const searchTerm = currentSearch.toLowerCase();
    const searched = ManageBetsData.tableRows.filter((row) => {
      return row.betNumber.toLowerCase().includes(searchTerm);
    });

    setSearchedData({
      ...ManageBetsData,
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
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-0 sm:justify-between">
        <h3 className="text-xl font-bold text-gray-700">All Bets</h3>
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
      </div>
      <div className="bg-white">
        <ManageBetsTableContainer
          data={
            searchedData && searchedData.tableRows.length > 0
              ? searchedData
              : ManageBetsData
          }
          rowsPerPage={10}
        />
      </div>
    </div>
  );
}
