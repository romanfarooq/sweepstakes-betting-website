import TableContainer from "@/components/TableContainer";
import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";

const TableData = {
  tableHeader: [
    "Bettor",
    "Email-Mobile",
    "Country",
    "Joined At",
    "Balance",
    "Action",
  ],
  pagination: {
    currentPage: 1,
    rowsPerPage: 20,
    totalRows: 20,
    totalPages: Math.ceil(200 / 5),
  },
  tableRows: [
    {
      bettor: "Jane Smith",
      email: "jane.smith@example.com",
      country: "USA",
      joinedAt: "2020-05-12",
      balance: 1500.75,
      action: "Details",
    },
    {
      bettor: "Ali Hassan",
      email: "ali.hassan@example.com",
      country: "Pakistan",
      joinedAt: "2021-02-10",
      balance: 200.5,
      action: "Details",
    },
    {
      bettor: "Maria Garcia",
      email: "maria.garcia@example.com",
      country: "Spain",
      joinedAt: "2019-08-24",
      balance: 320.0,
      action: "Details",
    },
    {
      bettor: "Tom Brown",
      email: "tom.brown@example.com",
      country: "UK",
      joinedAt: "2022-01-15",
      balance: 980.3,
      action: "Details",
    },
    {
      bettor: "Yuki Tanaka",
      email: "yuki.tanaka@example.com",
      country: "Japan",
      joinedAt: "2020-11-03",
      balance: 0,
      action: "Details",
    },
    {
      bettor: "Carlos Mendez",
      email: "carlos.mendez@example.com",
      country: "Mexico",
      joinedAt: "2018-06-28",
      balance: 4000.12,
      action: "Details",
    },
    {
      bettor: "Sarah Williams",
      email: "sarah.williams@example.com",
      country: "Canada",
      joinedAt: "2019-09-11",
      balance: 1250.0,
      action: "Details",
    },
    {
      bettor: "Mikhail Petrov",
      email: "mikhail.petrov@example.com",
      country: "Russia",
      joinedAt: "2022-05-18",
      balance: 50.89,
      action: "Details",
    },
    {
      bettor: "Chen Wei",
      email: "chen.wei@example.com",
      country: "China",
      joinedAt: "2021-04-07",
      balance: 700.65,
      action: "Details",
    },
    {
      bettor: "Angela Martin",
      email: "angela.martin@example.com",
      country: "Germany",
      joinedAt: "2020-12-22",
      balance: 123.45,
      action: "Details",
    },
    {
      bettor: "Ravi Kumar",
      email: "ravi.kumar@example.com",
      country: "India",
      joinedAt: "2023-07-01",
      balance: 890.0,
      action: "Details",
    },
    {
      bettor: "Sophie Dubois",
      email: "sophie.dubois@example.com",
      country: "France",
      joinedAt: "2018-10-10",
      balance: 2300.5,
      action: "Details",
    },
    {
      bettor: "Luis Martinez",
      email: "luis.martinez@example.com",
      country: "Argentina",
      joinedAt: "2021-06-16",
      balance: 150.0,
      action: "Details",
    },
    {
      bettor: "Isabella Rossi",
      email: "isabella.rossi@example.com",
      country: "Italy",
      joinedAt: "2022-08-05",
      balance: 780.99,
      action: "Details",
    },
    {
      bettor: "Mohamed Salah",
      email: "mohamed.salah@example.com",
      country: "Egypt",
      joinedAt: "2019-03-21",
      balance: 0,
      action: "Details",
    },
    {
      bettor: "Emily Johnson",
      email: "emily.johnson@example.com",
      country: "Australia",
      joinedAt: "2020-07-14",
      balance: 950.6,
      action: "Details",
    },
    {
      bettor: "Ahmed Al-Farsi",
      email: "ahmed.alfarsi@example.com",
      country: "UAE",
      joinedAt: "2021-11-30",
      balance: 130.5,
      action: "Details",
    },
    {
      bettor: "Lucas Pereira",
      email: "lucas.pereira@example.com",
      country: "Brazil",
      joinedAt: "2018-01-22",
      balance: 2150.8,
      action: "Details",
    },
    {
      bettor: "Anna Novak",
      email: "anna.novak@example.com",
      country: "Poland",
      joinedAt: "2023-03-03",
      balance: 600.4,
      action: "Details",
    },
    {
      bettor: "David Thompson",
      email: "david.thompson@example.com",
      country: "South Africa",
      joinedAt: "2017-12-19",
      balance: 520.15,
      action: "Details",
    },
  ],
};

export default function ActiveUsers() {
  const getSearchTermsFunction = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="space-y-10 px-6 py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-700">Active Bettors</h3>
        <div className="relative flex h-11 w-3/12 pr-4">
          <Input
            type="text"
            onChange={getSearchTermsFunction}
            placeholder="Username/Email"
            className="h-full min-w-full border-none bg-gray-100 outline-none ring-1 ring-gray-300 transition duration-300 focus:shadow-[0_0_15px_rgba(99,102,241,0.6)] focus:outline-none focus:ring-0 focus:ring-indigo-600"
          />

          <IoIosSearch className="absolute right-4 h-full w-12 rounded-r-md bg-indigo-600 p-2 text-3xl text-white" />
        </div>
      </div>
      <div className="bg-white">
        <TableContainer
          tableHeader={TableData.tableHeader}
          tableRows={TableData.tableRows}
          pagination={TableData.pagination}
        />
      </div>
    </div>
  );
}
