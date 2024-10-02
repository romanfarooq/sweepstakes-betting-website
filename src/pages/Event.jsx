import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

export default function Event() {
  const [amount, setAmount] = useState(0);

  const data = {
    labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5"],
    datasets: [
      {
        data: [75, 60, 45, 34, 34], // Updated values to reflect the example
        fill: false,
        borderColor: "#1f9cf7", // Matching the chart line color
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 75,
        grid: { display: false },
        ticks: { display: false },
      },
      x: {
        grid: { display: false },
      },
    },
    elements: {
      point: { radius: 0 }, // Hides points on the line chart
    },
  };

  return (
    <div className="container flex px-10 md:px-16 py-10">
      {/* Main Event Card */}
      <div className="w-[70%] text-white">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/src/assets/will-israel-enter-lebanon.webp"
              alt="Event Image"
              className="mr-2 h-20 w-20 rounded-md object-cover"
            />
            <div>
              <p className="text-base font-semibold">
                Israel military response against Iran by Friday?
              </p>
              <span className="text-xs text-gray-400">Oct 4, 2024</span>
            </div>
          </div>
          <div className="text-gray-400">$117,065 Vol.</div>
        </div>

        {/* Chart */}
        <Line data={data} options={options} />

        <div className="mt-4 flex justify-between text-blue-400">
          <span className="text-2xl font-semibold">34% chance</span>
          <span className="text-red-500">▼ 38%</span>
        </div>
      </div>

      {/* Buy / Sell Card */}
      <div className="ml-10 mt-4 rounded-lg border border-gray-600 p-4 text-white shadow-md">
        {/* Buy / Sell tabs */}
        <div className="mb-4 flex items-center justify-start border-b border-gray-600">
          <Button className="rounded-l-md text-white">Buy</Button>
          <Button className="text-slate-400">Sell</Button>
        </div>

        {/* Outcome Section */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <Button className="bg-green-600 px-4 py-2 text-white">
              Yes 34¢
            </Button>
            <Button className="bg-slate-700 px-4 py-2 text-slate-400">
              No 67¢
            </Button>
          </div>
          <Button className="text-slate-400">
            <i className="icon-refresh" />
          </Button>
        </div>

        {/* Amount Section */}
        <div className="mb-4 flex items-center justify-between">
          <Button onClick={() => setAmount(amount - 1)}>-</Button>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-slate-800 px-4 py-2 text-center text-white"
          />
          <Button onClick={() => setAmount(amount + 1)}>+</Button>
        </div>

        {/* Log In Button */}
        <Button className="mb-4 w-full bg-blue-500 py-2 text-white">
          Log In
        </Button>

        {/* Avg Price, Shares, Potential Return */}
        <div className="text-center text-slate-400">
          <p>
            Avg price: <span className="text-slate-100">0.0¢</span>
          </p>
          <p>
            Shares: <span className="text-slate-100">0.00</span>
          </p>
          <p>
            Potential return:{" "}
            <span className="text-green-500">$0.00 (0.00%)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
