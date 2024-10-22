import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

function TableRows({ data }) {
  return (
    <>
      {data.map((invoice, index) => (
        <TableRow key={index} className="border-b border-gray-500">
          <TableCell className="py-2 text-xs sm:py-4 sm:text-sm">
            {invoice.id}
          </TableCell>
          <TableCell className="py-2 text-xs sm:py-4 sm:text-sm">
            <span
              className={cn("rounded-full px-2 py-[0.7px]", {
                "bg-green-600 text-green-200":
                  invoice.status.toLowerCase() === "paid" ||
                  invoice.status.toLowerCase() === "completed" ||
                  invoice.status.toLowerCase() === "processing",
                "bg-emerald-600 text-emerald-200":
                  invoice.status.toLowerCase() === "shipped",
                "bg-red-600 text-red-200":
                  invoice.status.toLowerCase() === "failed" ||
                  invoice.status.toLowerCase() === "cancelled",
                "bg-yellow-600 text-yellow-200":
                  invoice.status.toLowerCase() === "pending",
                "bg-sky-600 text-sky-200":
                  invoice.status.toLowerCase() === "refunded",
              })}
            >
              {" "}
              {invoice.status}
            </span>
          </TableCell>
          <TableCell className="py-2 text-xs sm:py-4 sm:text-sm">
            {invoice.name}
          </TableCell>
          <TableCell className="py-2 text-xs sm:py-4 sm:text-sm">
            {invoice.method}
          </TableCell>
          <TableCell className="py-2 text-xs sm:py-4 sm:text-sm">
            {invoice.amount}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default TableRows;
