import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function TableContainer({ tableHeader, tableRows, pagination }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Function to update query params
  const handleSetQueryParams = (pageNo) => {
    const newParams = { page: pageNo };
    setSearchParams(newParams);
    navigate(`?page=${pageNo}`);
  };

  // Function to retrieve query params
  const handleGetQueryParams = () => {
    const page = searchParams.get("page");
    const search = searchParams.get("search");
    console.log("Page:", page); // Logs the page number from query params
    console.log("Search:", search); // Logs the search term from query params
  };

  function handlePrev() {
    console.log("prev");
  }

  function handleNext() {
    console.log("next");
  }

  return (
    <div className="overflow-hidden rounded-md border">
      <Table className="cursor-pointer">
        <TableHeader className="h-16">
          <TableRow className="bg-indigo-600 hover:bg-indigo-500">
            {tableHeader.map((header, index) => (
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
          {tableRows.map((row, index) => (
            <TableRow key={index} className="h-16 border-b last:border-b-0">
              <TableCell className="pl-4 font-medium">{row.bettor}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell className="font-bold text-gray-600">
                {row.country}
              </TableCell>
              <TableCell>{row.joinedAt}</TableCell>
              <TableCell className="font-bold text-gray-600">
                ${row.balance}
              </TableCell>
              <TableCell>
                <button
                  className="rounded border border-indigo-600 px-4 py-1 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                  onClick={() => navigate(`/admin/users/details/${row.bettor}`)}
                >
                  {row.action}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex w-full items-center justify-between px-10 py-10">
        <p className="text-sm">
          Showing <span className="text-md font-bold text-gray-500">1 </span>
          to <span className="text-md font-bold text-gray-500">15</span> of{" "}
          <span className="text-md font-bold text-gray-500">
            {pagination.totalPages}
          </span>{" "}
          results
        </p>
        <div>
          <Pagination>
            <PaginationContent className="space-x-4">
              <PaginationItem className="cursor-pointer rounded-sm border">
                <PaginationPrevious onClick={handlePrev} />
              </PaginationItem>
              {Array.from({ length: pagination.totalPages }, (_, index) =>
                index + 1 > 7 ? null : (
                  <PaginationItem
                    className="cursor-pointer rounded-sm border"
                    key={index}
                  >
                    <PaginationLink>{index + 1}</PaginationLink>
                  </PaginationItem>
                ),
              )}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem className="cursor-pointer border">
                <PaginationNext onClick={handleNext} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default TableContainer;
