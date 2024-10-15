import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { differenceInDays, format, isSameMonth, subDays } from "date-fns";
import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function DashboardCharts() {
  const [range, setRange] = useState("Last 15 Days");
  const [customRange, setCustomRange] = useState(null); // Custom Range State
  const [filteredData, setFilteredData] = useState({
    deposits: [],
    withdrawals: [],
  });
  const [chartLabels, setChartLabels] = useState([]);
  const [isMonthly, setIsMonthly] = useState(false); // Determines if the labels should show months or days

  useEffect(() => {
    if (range !== "Custom Range") {
      filterDataByRange(range);
    }
  }, [range]);

  const handleSelectChange = (value) => {
    if (value === "Custom Range") {
      setCustomRange(true); // Open calendar for custom date range selection
    } else {
      setRange(value);
      setCustomRange(false); // Hide calendar
    }
  };

  const filterDataByRange = (range) => {
    let startDate, endDate;

    // Determine date range based on selected option
    switch (range) {
      case "Today":
        startDate = new Date();
        endDate = new Date();
        break;
      case "Yesterday":
        startDate = subDays(new Date(), 1);
        endDate = subDays(new Date(), 1);
        break;
      case "Last 7 Days":
        startDate = subDays(new Date(), 7);
        endDate = new Date();
        break;
      case "Last 15 Days":
        startDate = subDays(new Date(), 15);
        endDate = new Date();
        break;
      case "This Month":
        startDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1,
        );
        endDate = new Date();
        break;
      case "Last Six Month":
        startDate = subDays(new Date(), 180);
        endDate = new Date();
        break;
      case "This Year":
        startDate = new Date(new Date().getFullYear(), 0, 1);
        endDate = new Date();
        break;
      default:
        startDate = new Date();
        endDate = new Date();
    }

    const isRangeWithinMonth =
      isSameMonth(startDate, endDate) ||
      differenceInDays(endDate, startDate) < 30;
    setIsMonthly(!isRangeWithinMonth);

    // Example data for this case
    const backendData = {
      deposits: [
        500, 400, 700, 300, 600, 200, 800, 100, 1000, 0, 0, 0, 0, 0, 1200,
      ],
      withdrawals: [
        300, 200, 100, 400, 300, 500, 100, 600, 0, 0, 0, 0, 0, 0, 0,
      ],
      timestamps: [
        1696204800000, 1696291200000, 1696377600000, 1696464000000,
        1696550400000, 1696636800000, 1696723200000, 1696809600000,
        1696896000000, 1696982400000, 1697068800000, 1697155200000,
        1697241600000, 1697328000000, 1697414400000,
      ],
    };

    const labels = backendData.timestamps.map((timestamp) =>
      isRangeWithinMonth
        ? format(new Date(timestamp), "dd-MMM")
        : format(new Date(timestamp), "MMM-yyyy"),
    );

    setChartLabels(labels);
    setFilteredData({
      deposits: backendData.deposits,
      withdrawals: backendData.withdrawals,
    });
  };

  console.log("Filtered Data: ", filteredData);
  console.log("Chart Labels: ", chartLabels);

  const barData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Deposited",
        backgroundColor: "rgba(75, 192, 192, 1)",
        data: filteredData.deposits,
      },
      {
        label: "Withdrawn",
        backgroundColor: "rgba(255, 99, 132, 1)",
        data: filteredData.withdrawals,
      },
    ],
  };

  const lineData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Plus Transactions",
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        data: filteredData.deposits,
        fill: true,
      },
      {
        label: "Minus Transactions",
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        data: filteredData.withdrawals,
        fill: true,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      {/* Left Bar Chart */}
      <div className="w-full rounded-lg bg-white p-4 shadow-lg lg:w-1/2">
        <h2 className="mb-4 text-lg font-semibold">
          Deposit & Withdraw Report
        </h2>
        <div className="mb-4 flex items-center justify-between">
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Today">Today</SelectItem>
              <SelectItem value="Yesterday">Yesterday</SelectItem>
              <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
              <SelectItem value="Last 15 Days">Last 15 Days</SelectItem>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="Last Six Month">Last Six Months</SelectItem>
              <SelectItem value="This Year">This Year</SelectItem>
              <SelectItem value="Custom Range">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {customRange && (
          <div className="mb-4">
            <Calendar
              mode="range"
              className="rounded border p-4"
              onSelect={(selectedRange) => {
                console.log("Selected Range: ", selectedRange);
              }}
            />
          </div>
        )}
        <Bar
          data={barData}
          options={{
            scales: {
              y: {
                title: {
                  display: true,
                  text: "USD",
                },
              },
            },
          }}
        />
      </div>

      {/* Right Line Chart */}
      <div className="w-full rounded-lg bg-white p-4 shadow-lg lg:w-1/2">
        <h2 className="mb-4 text-lg font-semibold">Transactions Report</h2>
        <div className="mb-4 flex items-center justify-between">
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Today">Today</SelectItem>
              <SelectItem value="Yesterday">Yesterday</SelectItem>
              <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
              <SelectItem value="Last 15 Days">Last 15 Days</SelectItem>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="Last Six Month">Last Six Months</SelectItem>
              <SelectItem value="This Year">This Year</SelectItem>
              <SelectItem value="Custom Range">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {customRange && (
          <div className="mb-4">
            <Calendar
              mode="range"
              className="rounded border p-4"
              onSelect={(selectedRange) => {
                console.log("Selected Range: ", selectedRange);
              }}
            />
          </div>
        )}
        <Line
          data={lineData}
          options={{
            scales: {
              y: {
                title: {
                  display: true,
                  text: "USD",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
