import { TableCell, TableRow } from "@/components/ui/table";

// TableRows Component to accept data as props
function TableRows({ data }) {
  return (
    <>
      {data.map((invoice, index) => (
        <TableRow key={index} className="border-b border-gray-500">
          <TableCell className="font-medium py-4">{invoice.id}</TableCell>
          <TableCell className="py-4">{invoice.status}</TableCell>
          <TableCell className="py-4">{invoice.name}</TableCell>
          <TableCell className="py-4">{invoice.method}</TableCell>
          <TableCell className="text-right py-4">{invoice.amount}</TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default TableRows;
