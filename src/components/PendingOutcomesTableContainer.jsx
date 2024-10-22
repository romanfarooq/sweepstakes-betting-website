import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { cn, splitIntoChunks } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PendingOutcomesTableContainer({ data, rowsPerPage }) {
  const [pageNo, setPageNo] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const Navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    const currentPage = parseInt(searchParams.get("page"), 10) || 1;
    setPageNo(currentPage);
  }, [searchParams]);

  const totalTableRowsLength = data?.tableRows?.length || 0;
  const perPageData = splitIntoChunks(data?.tableRows || [], rowsPerPage);
  const currentData = perPageData[pageNo - 1] || [];
  console.log(currentData);

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
          <TableRow className="text-nowrap bg-indigo-600 hover:bg-indigo-500">
            {data?.tableHeader?.map((header, index) => (
              <TableHead
                key={index}
                className={cn("h-14 pl-4 font-semibold text-white", {
                  "text-center": index !== 0,
                })}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((row, index) => (
            <TableRow
              key={index}
              className="h-16 text-nowrap border-b last:border-b-0"
            >
              <TableCell className="pl-4 font-medium">
                <p className="font-semibold text-gray-500">{row.market}</p>
              </TableCell>
              <TableCell className="flex gap-2 pl-4 font-medium">
                <div className="flex flex-col items-center justify-center gap-1">
                  <p>🎯</p>
                  <p className="text-sm font-semibold text-gray-500">
                    {row.match.team1}
                  </p>
                </div>
                <p className="font-bold text-gray-700">VS</p>
                <div className="flex flex-col items-center justify-center gap-1">
                  <p>🎯</p>
                  <p className="text-sm font-semibold text-gray-500">
                    {row.match.team2}
                  </p>
                </div>
              </TableCell>

              <TableCell className="space-y-2">
                <p className="font-semibold text-gray-600">{row.betEndTime}</p>
                <p>{row.timeLeft}</p>
              </TableCell>
              <TableCell className="text-center">{row.betPlaced}</TableCell>
              <TableCell className="flex items-center gap-2">
                <p className="border-inidigo-600 rounded-sm border border-indigo-500 px-3 py-1 text-indigo-600 transition-all hover:bg-indigo-700 hover:text-white">
                  {row.action[0]}
                </p>
                <p className="rounded-sm border border-sky-600 px-3 py-1 text-sky-600 transition-all hover:bg-sky-800 hover:text-white">
                  {row.action[1]}
                </p>
                <p className="border-white-600 rounded-sm border border-black px-3 py-1 transition-all hover:bg-gray-800 hover:text-white">
                  {row.action[2]}
                </p>
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
                <PaginationItem key={index}>
                  {typeof item === "number" ? (
                    <PaginationLink
                      className={cn("rounded-sm border", {
                        "bg-indigo-600 text-white hover:bg-indigo-600 hover:text-white":
                          item === pageNo,
                      })}
                      onClick={() => setPageNoParams(item)}
                    >
                      {item}
                    </PaginationLink>
                  ) : (
                    <PaginationEllipsis />
                  )}
                </PaginationItem>
              ))}
              <PaginationItem
                className={cn("rounded-sm border", {
                  "cursor-not-allowed opacity-50": pageNo >= perPageData.length,
                })}
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
