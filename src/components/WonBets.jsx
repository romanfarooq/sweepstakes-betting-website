import ManageBetsTableContainer from "@/components/ManageBetsTableContainer";
import { Input } from "@/components/ui/input";
import { ManageBetsData } from "@/lib/data";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

export default function WonBets() {
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
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-700">Won Bets</h3>
        <div className="relative flex h-11 w-3/12 pr-4">
          <Input
            type="text"
            placeholder="Search By Bet Number"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyPressEvent}
            className="h-full min-w-full border-none bg-gray-100 outline-none ring-1 ring-gray-300 transition duration-300 focus:shadow-[0_0_15px_rgba(99,102,241,0.6)] focus:outline-none focus:ring-0 focus:ring-indigo-600"
          />
          <IoIosSearch
            className="absolute right-4 h-full w-12 rounded-r-md bg-indigo-600 p-2 text-3xl text-white"
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
