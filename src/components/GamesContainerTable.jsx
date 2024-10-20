import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { FaPencil } from "react-icons/fa6";
  import { GiSightDisabled } from "react-icons/gi";
  import { TbQuestionMark } from "react-icons/tb";



  import { useSearchParams, useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react";
  import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  import { splitIntoChunks } from "@/lib/utils";
  
  function GamesContainerTable({ data, rowsPerPage }) {
    const [pageNo, setPageNo] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(data)
  
    useEffect(() => {
      const currentPage = parseInt(searchParams.get("page"), 10) || 1;
      setPageNo(currentPage);
    }, [searchParams]);
  
      const totalTableRowsLength = data?.tableRows?.length || 0;
      const perPageData = splitIntoChunks(data?.tableRows || [], rowsPerPage);
      const currentData = perPageData[pageNo - 1] || [];
  
  
    // RESULTS TO SHOW IN TABLE
    const startResult = (pageNo - 1) * rowsPerPage + 1;
    const endResult = Math.min(totalTableRowsLength, pageNo * rowsPerPage);
  
    function setPageNoParams(newPageNo) {
      if (newPageNo < 1 || newPageNo > perPageData.length) return;
      setPageNo(newPageNo);
      setSearchParams({
        page: newPageNo.toString(),
        search: searchParams.get("search") || "",
      });
    }
  
    const generatePaginationItems = () => {
      const totalPages = perPageData.length;
      const paginationItems = [];
  
      let startPage = Math.max(1, pageNo - 3);
      let endPage = Math.min(totalPages, pageNo + 3);
  
      if (endPage - startPage < 6) {
        if (startPage === 1) {
          endPage = Math.min(7, totalPages);
        } else {
          startPage = Math.max(1, endPage - 6);
        }
      }
  
      if (startPage > 1) {
        paginationItems.push(1);
        if (startPage > 2) {
          paginationItems.push("...");
        }
      }
  
      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(i);
      }
  
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          paginationItems.push("...");
        }
        paginationItems.push(totalPages);
      }
  
      return paginationItems;
    };
      return (
        <div className="overflow-hidden rounded-md border">
          <Table className="cursor-pointer">
            <TableHeader className="h-16">
              <TableRow className="bg-indigo-600 hover:bg-indigo-500">
                {data?.tableHeader?.map((header, index) => (
                  <TableHead
                    key={index}
                    className="h-14 pl-4 font-semibold text-white"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((row, index) => (
                <TableRow key={index} className="h-16 border-b last:border-b-0">
                  <TableCell className="pl-4 font-medium">
                    <div className="flex gap-5 items-center">
                      <div className="flex items-center flex-col"><p className="text-gray-800 p-2 bg-gray-200 rounded-full">{row.team1.icon}</p> <p>{row.team1.name}</p></div>
                      <p className="text-lg font-bold">VS</p>
                      <div className="flex items-center flex-col"><p className="text-gray-800 p-2 bg-gray-200 rounded-full">{row.team2.icon}</p> <p>{row.team2.name}</p></div>
                    </div>
                  </TableCell>
                  <TableCell className="flex flex-col justify-center items-center">
                    <p className="font-semibold">{row.league.name}</p>
                    <p className="font-xsm text-gray-500">{row.league.category}</p>
                  </TableCell>
                  <TableCell className="font-bold text-gray-600">
                    {row.gameStartsFrom}
                  </TableCell>
                  <TableCell>{row.betStartsFrom}</TableCell>
                  <TableCell className="font-bold text-gray-600">
                    {row.betEndsAt}
                  </TableCell>
                  <TableCell className="font-bold text-gray-600">
                    {row.markets}
                  </TableCell>
                  <TableCell className="font-bold text-gray-600">
                    {row.status}
                  </TableCell>
                  <TableCell
                    className="flex gap-2 items-center justify-center"
                    
                  >
                   <p className={`px-3 py-1 flex gap-2 items-center hover:text-white rounded-sm hover:bg-indigo-500 ${row.action[0].toLowerCase() === 'edit'?'text-indigo-500 border border-indigo-500': null}`}><FaPencil/><span>{row.action[0]}</span></p>
                   <p className={`px-3 py-1 flex gap-2 items-center hover:text-white rounded-sm hover:bg-orange-500 ${row.action[1].toLowerCase() === 'disable'?'text-orange-500 border border-orange-500': null}`}><GiSightDisabled/><span>{row.action[0]}</span></p>
                   <p className={`px-3 py-1 flex gap-2  items-center hover:text-white rounded-sm hover:bg-sky-500 ${row.action[2].toLowerCase() === 'markets'?'text-sky-500 border border-sky-500': null}`}><TbQuestionMark/><span>{row.action[0]}</span></p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
  
          <div className="flex w-full items-center justify-between px-10 py-10">
            <p className="text-sm">
              Showing{" "}
              <span className="text-md font-bold text-gray-500">
                {startResult}{" "}
              </span>
              to{" "}
              <span className="text-md font-bold text-gray-500">{endResult}</span>{" "}
              of{" "}
              <span className="text-md font-bold text-gray-500">
                {totalTableRowsLength}
              </span>{" "}
              results
            </p>
            <div>
              <Pagination className="cursor-pointer">
                <PaginationContent className="space-x-4">
                  <PaginationItem
                    className="rounded-sm border"
                    onClick={() => setPageNoParams(pageNo - 1)}
                    disabled={pageNo === 1}
                  >
                    <PaginationPrevious />
                  </PaginationItem>
                  {generatePaginationItems().map((item, index) => (
                    <PaginationItem
                      className={`rounded-sm border ${item === pageNo ? "bg-indigo-600 text-white" : ""}`}
                      key={index}
                    >
                      {typeof item === "number" ? (
                        <PaginationLink onClick={() => setPageNoParams(item)}>
                          {item}
                        </PaginationLink>
                      ) : (
                        <PaginationEllipsis />
                      )}
                    </PaginationItem>
                  ))}
                  <PaginationItem
                    className={`rounded-sm border ${pageNo >= perPageData.length ? "cursor-not-allowed opacity-50" : ""}`}
                    onClick={() => setPageNoParams(pageNo + 1)}
                    disabled={pageNo >= perPageData.length}
                  >
                    <PaginationNext />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      );
    }
  
  export default GamesContainerTable;
  