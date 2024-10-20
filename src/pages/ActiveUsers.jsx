// import React from 'react'
import TableContainer from "@/components/TableContainer";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import {TableData,DummyPersistentData} from "@/lib/data";



export default function ActiveUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedData, setSearchedData] = useState({});


  // FOR TESTING DUMMY PERSISTENT DATA
  // const tableData = DummyPersistentData;
  
  function handleSearchedData(){
    const searched = TableData.tableRows.filter((row) => {
      return row.bettor.toLowerCase().includes(searchTerm.toLowerCase()) || row.email.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchedData( {
      ...TableData,
     tableRows: searched
    })
  }

  useEffect(()=>{
    console.log("Table REal data: " ,TableData)
    console.log(searchedData)
  },[searchedData])

  function handleKeyPressEvent(event) {
    if (event.key === "Enter") {
      handleSearchedData();
    }
  }

  return (
    <div className="space-y-10 px-6 py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-700">Active Bettors</h3>
        <div className="relative flex h-11 w-3/12 pr-4">
          <Input
            type="text"
            placeholder="Username/Email"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPressEvent}
            className="h-full min-w-full border-none bg-gray-100 outline-none ring-1 ring-gray-300 transition duration-300 focus:shadow-[0_0_15px_rgba(99,102,241,0.6)] focus:outline-none focus:ring-0 focus:ring-indigo-600"
          />

          <IoIosSearch
            className="absolute right-4 h-full w-12 rounded-r-md bg-indigo-600 p-2 text-3xl text-white"
            onClick={handleSearchedData}
          />
        </div>
      </div>
      <div className="bg-white">
        <TableContainer
          data={TableData}
          rowsPerPage={15}
        />
      </div>
    </div>
  );
}
