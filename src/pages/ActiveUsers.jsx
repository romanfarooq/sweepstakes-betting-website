import TableContainer from "@/components/TableContainer";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import axios from "@/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { TableData as d } from "@/lib/data";

export default function ActiveUsers() {
  const { data: TableData, error, isLoading, isError } = useQuery({
    queryKey: ["bettors"],
    queryFn: () => axios.get("/bettors").then((res) => res.data),
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    setSearchTerm(currentSearch);
  }, [searchParams]);

  const filteredData = {
    ...TableData,
    tableRows: TableData?.tableRows?.filter((row) => {
      const search = searchTerm.toLowerCase();
      return (
        row.bettor.toLowerCase().includes(search) ||
        row.email.toLowerCase().includes(search)
      );
    }),
  };

  function handleSearchChange(e) {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setSearchParams({ search: newSearchTerm, page: "1" });
  }

  function handleKeyPressEvent(event) {
    if (event.key === "Enter") {
      setSearchParams({ search: searchTerm, page: "1" });
    }
  }

  // Show loading spinner when loading
  if (isLoading) return <div className="flex justify-center py-20"><span className="loader">Loading...</span></div>;
  
  // Show error message when there is an error
  if (isError) return <div className="flex justify-center py-20 text-red-500">Error loading data: {error.message}</div>;

  return (
    <div className="space-y-10 px-6 py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-700">Active Bettors</h3>
        <div className="relative flex h-11 w-3/12 pr-4">
          <Input
            type="text"
            placeholder="Username/ Email"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyPressEvent}
            className="placeholder:text-gray-500 tracking-wide h-full min-w-full border-none bg-gray-100 outline-none ring-1 ring-gray-300 transition duration-300 focus:shadow-[0_0_15px_rgba(99,102,241,0.6)] focus:outline-none focus:ring-0 focus:ring-indigo-600"
          />
          <IoIosSearch
            className="absolute right-4 h-full w-12 rounded-r-md bg-indigo-600 p-2 text-3xl text-white"
            onClick={() => setSearchParams({ search: searchTerm, page: "1" })}
          />
        </div>
      </div>

      <div className="bg-white">
        <TableContainer
          data={filteredData?.tableRows?.length > 0 ? filteredData : TableData}
          rowsPerPage={10}
        />
      </div>
    </div>
  );
}
