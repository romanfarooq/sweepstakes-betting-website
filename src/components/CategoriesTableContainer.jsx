import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

function CategoriesTableContainer({ data }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-md border">
      <Table className="cursor-pointer">
        <TableHeader className="h-16">
          <TableRow className="bg-indigo-600 hover:bg-indigo-500">
            {data?.headers?.map((header, index) => (
              <TableHead
                key={index}
                className="h-14 pl-4 font-semibold text-white"
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.rows?.map((row, index) => (
            <TableRow key={index} className="h-16 border-b last:border-b-0">
              <TableCell className="pl-4 font-medium">{row.name}</TableCell>
              <TableCell>{row.slug}</TableCell>
              <TableCell className="font-bold text-gray-600">
                {row.icon}
              </TableCell>
              <TableCell>{row.leagues}</TableCell>
              <TableCell>{row.teams}</TableCell>
              <TableCell className="font-bold text-gray-600">
                {row.status}
              </TableCell>
              <TableCell className="font-bold text-gray-600">
                {row.actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    className="mr-2 rounded border border-indigo-600 px-2 py-1 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                    onClick={() => {
                      if (action === "Edit") {
                        navigate(`/admin/categories/edit/${row.slug}`);
                      } else {
                        console.log(`${action} category: ${row.name}`);
                      }
                    }}
                  >
                    {action}
                  </button>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CategoriesTableContainer;
