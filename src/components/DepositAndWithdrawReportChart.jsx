import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import {
  addDays,
  eachDayOfInterval,
  eachMonthOfInterval,
  format,
  isSameMonth,
  subDays,
} from "date-fns";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function DepositAndWithdrawReportChart() {
  const [chartLabels, setChartLabels] = useState([]);
  const [filteredData, setFilteredData] = useState({
    deposits: [],
    withdrawals: [],
  });
  const [date, setDate] = useState({
    from: addDays(new Date(), -15),
    to: new Date(),
  });

  useEffect(() => {
    filterDataByRange("Last 15 Days");
  }, []);

  const generateLabelsAndData = (startDate, endDate, isRangeWithinMonth) => {
    let labels;

    if (isRangeWithinMonth) {
      const days = eachDayOfInterval({ start: startDate, end: endDate });
      labels = days.map((day) => format(day, "dd-MMM"));
    } else {
      const months = eachMonthOfInterval({ start: startDate, end: endDate });
      labels = months.map((month) => format(month, "MMM-yyyy"));
    }

    const randomDeposits = labels.map(() => Math.floor(Math.random() * 1000));
    const randomWithdrawals = labels.map(() =>
      Math.floor(Math.random() * 1000),
    );

    setChartLabels(labels);
    setFilteredData({
      deposits: randomDeposits,
      withdrawals: randomWithdrawals,
    });
  };

  const filterDataByRange = (range) => {
    let startDate, endDate;

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

    const isRangeWithinMonth = isSameMonth(startDate, endDate);
    generateLabelsAndData(startDate, endDate, isRangeWithinMonth);
  };

  const filterDataByCustomRange = (selectedDateRange) => {
    const { from, to } = selectedDateRange;
    const startDate = from || new Date();
    const endDate = to || new Date();

    const isRangeWithinMonth = isSameMonth(startDate, endDate);
    generateLabelsAndData(startDate, endDate, isRangeWithinMonth);
  };

  const handleDateSelect = (selected) => {
    setDate(selected);
    if (selected.from && selected.to) {
      filterDataByCustomRange(selected);
    }
  };

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

  return (
    <>
      <div className="w-full rounded-lg bg-white p-4 shadow-lg lg:w-1/2">
        <h2 className="mb-4 text-lg font-semibold">
          Deposit & Withdraw Report
        </h2>
        <div className="mb-4 flex items-center justify-between">
          <Select onValueChange={(value) => filterDataByRange(value)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Last 15 Days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Today">Today</SelectItem>
              <SelectItem value="Yesterday">Yesterday</SelectItem>
              <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
              <SelectItem value="Last 15 Days">Last 15 Days</SelectItem>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="Last Six Month">Last Six Months</SelectItem>
              <SelectItem value="This Year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="font-normal hover:bg-white">
                Choose Custom Range
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start" side="right">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                toDate={new Date()}
                onSelect={handleDateSelect}
              />
            </PopoverContent>
          </Popover>
        </div>
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
    </>
  );
}
