import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

// Flattened backend data
const backendData = [
  { timestamp: "2024-11-01T00:00:00", yes: 75, no: 25 },
  { timestamp: "2024-11-01T03:00:00", yes: 60, no: 40 },
  { timestamp: "2024-11-01T06:00:00", yes: 45, no: 55 },
  { timestamp: "2024-11-01T09:00:00", yes: 34, no: 66 },
  { timestamp: "2024-11-01T12:00:00", yes: 34, no: 66 },
  { timestamp: "2024-11-01T15:00:00", yes: 50, no: 50 },
  { timestamp: "2024-11-01T18:00:00", yes: 48, no: 52 },
  { timestamp: "2024-11-01T21:00:00", yes: 62, no: 38 },
  { timestamp: "2024-11-02T00:00:00", yes: 80, no: 20 },
  { timestamp: "2024-11-02T03:00:00", yes: 75, no: 25 },
  { timestamp: "2024-11-02T06:00:00", yes: 70, no: 30 },
  { timestamp: "2024-11-02T09:00:00", yes: 55, no: 45 },
  { timestamp: "2024-11-02T12:00:00", yes: 40, no: 60 },
  { timestamp: "2024-11-02T15:00:00", yes: 30, no: 70 },
  { timestamp: "2024-11-02T18:00:00", yes: 20, no: 80 },
  { timestamp: "2024-11-02T21:00:00", yes: 10, no: 90 },
  { timestamp: "2024-11-03T00:00:00", yes: 65, no: 35 },
  { timestamp: "2024-11-03T03:00:00", yes: 70, no: 30 },
  { timestamp: "2024-11-03T06:00:00", yes: 75, no: 25 },
  { timestamp: "2024-11-03T09:00:00", yes: 60, no: 40 },
  { timestamp: "2024-11-03T12:00:00", yes: 55, no: 45 },
  { timestamp: "2024-11-03T15:00:00", yes: 50, no: 50 },
  { timestamp: "2024-11-03T18:00:00", yes: 45, no: 55 },
  { timestamp: "2024-11-03T21:00:00", yes: 40, no: 60 },
  { timestamp: "2024-11-04T00:00:00", yes: 80, no: 20 },
  { timestamp: "2024-11-04T03:00:00", yes: 70, no: 30 },
  { timestamp: "2024-11-04T06:00:00", yes: 60, no: 40 },
  { timestamp: "2024-11-04T09:00:00", yes: 50, no: 50 },
  { timestamp: "2024-11-04T12:00:00", yes: 55, no: 45 },
  { timestamp: "2024-11-04T15:00:00", yes: 65, no: 35 },
  { timestamp: "2024-11-04T18:00:00", yes: 70, no: 30 },
  { timestamp: "2024-11-04T21:00:00", yes: 75, no: 25 },
  { timestamp: "2024-11-05T00:00:00", yes: 55, no: 45 },
  { timestamp: "2024-11-05T03:00:00", yes: 60, no: 40 },
  { timestamp: "2024-11-05T06:00:00", yes: 50, no: 50 },
  { timestamp: "2024-11-05T09:00:00", yes: 40, no: 60 },
  { timestamp: "2024-11-05T12:00:00", yes: 30, no: 70 },
  { timestamp: "2024-11-05T15:00:00", yes: 20, no: 80 },
  { timestamp: "2024-11-05T18:00:00", yes: 10, no: 90 },
  { timestamp: "2024-11-05T21:00:00", yes: 5, no: 95 },
  { timestamp: "2024-11-06T00:00:00", yes: 70, no: 30 },
  { timestamp: "2024-11-06T03:00:00", yes: 65, no: 35 },
  { timestamp: "2024-11-06T06:00:00", yes: 75, no: 25 },
  { timestamp: "2024-11-06T09:00:00", yes: 80, no: 20 },
  { timestamp: "2024-11-06T12:00:00", yes: 85, no: 15 },
  { timestamp: "2024-11-06T15:00:00", yes: 90, no: 10 },
  { timestamp: "2024-11-06T18:00:00", yes: 95, no: 5 },
  { timestamp: "2024-11-06T21:00:00", yes: 100, no: 0 },
  { timestamp: "2024-11-07T00:00:00", yes: 75, no: 25 },
  { timestamp: "2024-11-07T03:00:00", yes: 60, no: 40 },
  { timestamp: "2024-11-07T06:00:00", yes: 50, no: 50 },
  { timestamp: "2024-11-07T09:00:00", yes: 40, no: 60 },
  { timestamp: "2024-11-07T12:00:00", yes: 30, no: 70 },
  { timestamp: "2024-11-07T15:00:00", yes: 20, no: 80 },
  { timestamp: "2024-11-07T18:00:00", yes: 10, no: 90 },
  { timestamp: "2024-11-07T21:00:00", yes: 5, no: 95 },
];

// Transform backend data to chart-friendly format
function transformData(backendData) {
  const labels = [];
  const yesData = [];
  const noData = [];

  backendData.forEach((item) => {
    const date = new Date(item.timestamp);
    const timeLabel = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    const dateLabel = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    // Combine date and time for full label (e.g., "Nov 1 12 AM")
    labels.push(`${dateLabel} , ${timeLabel}`);
    yesData.push(item.yes);
    noData.push(item.no);
  });

  return {
    labels,
    datasets: [
      {
        label: "YES",
        data: yesData,
        fill: false,
        borderColor: "#1f9cf7", // Blue line
        tension: 0.1,
      },
      {
        label: "NO",
        data: noData,
        fill: false,
        borderColor: "#ff6384", // Red line
        tension: 0.1,
      },
    ],
  };
}

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem) {
          const value = tooltipItem.raw;
          return `  ${value}¢`; // Show cent symbol
        },
      },
    },
    legend: {
      display: false, // No legend
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100, // Adjusted to fit both lines
      position: "right", // Move labels to the right
      grid: {
        drawBorder: false, // Removes the right border
        color: (context) => {
          if (
            context.tick.value === 25 ||
            context.tick.value === 50 ||
            context.tick.value === 75
          ) {
            return "#d1e7ff"; // Light blue grid lines
          }
          return "transparent"; // Hide other grid lines
        },
        lineWidth: 0.1, // Thin grid lines
      },
      ticks: {
        stepSize: 25, // Steps of 25% on the y-axis
        callback: (value) => {
          if (value === 0 || value === 100) {
            return ""; // Hide 0% and 100% labels
          }
          return `${value}%`; // Show percentage labels
        },
        align: "end", // Align labels at the end of grid lines
      },
      border: {
        display: false, // Remove y-axis border
      },
    },
    x: {
      ticks: {
        autoSkip: false, // Prevents automatic skipping of ticks
        callback: function (value, index) {
          // Show label only for the first tick of each day
          const dayIndex = Math.floor(index / 8); // Since we have 8 data points per day
          return index % 8 === 0
            ? data.labels[dayIndex * 8].split(" ")[0] +
                " " +
                data.labels[dayIndex * 8].split(" ")[1]
            : "";
        },
        maxRotation: 0, // Prevent rotation
        minRotation: 0, // Prevent rotation
      },
      grid: { display: false }, // No vertical grid lines
      border: {
        display: false, // Remove x-axis border
      },
    },
  },
  elements: {
    point: {
      radius: 2, // Default radius (hide the dots)
      hoverRadius: 5, // Radius on hover (show the dot)
      backgroundColor: (context) => {
        const datasetIndex = context.datasetIndex; // Get the dataset index

        // Set the point color based on the dataset and value
        if (datasetIndex === 0) {
          // YES dataset
          return "#1f9cf7"; // Blue for YES above 50, white otherwise
        } else if (datasetIndex === 1) {
          // NO dataset
          return "#ff6384"; // Red for NO above 50, white otherwise
        }
        return "#fff"; // Fallback color
      },
      borderColor: "#1f9cf7", // Border color of the dot (you can change it if needed)
      borderWidth: 2, // Border width of the dot
    },
  },
  layout: {
    padding: {
      top: 10,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
};

// Processed data for the chart
const data = transformData(backendData);

const backendDataLength = backendData.length;

const initialData = {
  yes: backendData[backendDataLength - 1].yes,
  no: backendData[backendDataLength - 1].no,
};

const initialPercentageVariation = {
  yes: parseFloat(
    ((initialData.yes - backendData[backendDataLength - 2].yes) /
      backendData[backendDataLength - 2].yes) *
      100,
  ).toFixed(1),

  no: parseFloat(
    ((initialData.no - backendData[backendDataLength - 2].no) /
      backendData[backendDataLength - 2].no) *
      100,
  ).toFixed(1),
};

// LineChart component
export default function LineChart() {
  const chartRef = useRef(null); // Create a ref to access the chart
  const [hoveredData, setHoveredData] = useState(initialData);
  const [hoveredDataVariation, setHoveredDataVariation] = useState(
    initialPercentageVariation,
  );

  useEffect(() => {
    const chart = chartRef.current; // Access the chart instance
    const canvas = chart.canvas; // Get the canvas element

    const handleMouseMove = (event) => {
      const elements = chart.getElementsAtEventForMode(
        event,
        "index", // Change to 'index' mode
        { intersect: false }, // No need to directly hover over the point
        false,
      );

      if (elements.length) {
        const index = elements[0].index; // Get the index of the hovered point
        setHoveredData({
          yes: data.datasets[0].data[index],
          no: data.datasets[1].data[index],
        });
        setHoveredDataVariation({
          yes: parseFloat(
            (
              ((data.datasets[0].data[index] -
                data.datasets[0].data[index - 1]) /
                data.datasets[0].data[index - 1]) *
              100
            ).toFixed(1),
          ),
          no: parseFloat(
            (
              ((data.datasets[1].data[index] -
                data.datasets[1].data[index - 1]) /
                data.datasets[1].data[index - 1]) *
              100
            ).toFixed(1),
          ),
        });
      } else {
        setHoveredData(initialData); // Reset if not hovering over a point
        setHoveredDataVariation(initialPercentageVariation);
      }
    };

    // Add the event listener to the canvas
    canvas.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [data]);

  return (
    <>
      <div className="flex justify-between">
        {/* YES Section */}
        <div className="mt-4 flex text-blue-400">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-300">YES</p>
            <div className="flex gap-2">
              <p className="text-2xl font-semibold">
                {hoveredData.yes}% chance
              </p>
              <div
                className={cn(
                  "mt-auto flex",
                  hoveredDataVariation.yes >= 0
                    ? "text-green-500"
                    : "text-red-500",
                )}
              >
                {hoveredDataVariation.yes >= 0 ? (
                  <ArrowUp className="size-4" />
                ) : (
                  <ArrowDown className="size-4" />
                )}
                <span className="mt-auto text-xs">
                  {Math.abs(hoveredDataVariation.yes) || 0}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* NO Section */}
        <div className="ml-auto mt-4 flex text-blue-400">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-300">NO</p>
            <div className="flex gap-2">
              <p className="text-2xl font-semibold">{hoveredData.no}% chance</p>
              <div
                className={cn(
                  "mt-auto flex",
                  hoveredDataVariation.no >= 0
                    ? "text-green-500"
                    : "text-red-500",
                )}
              >
                {hoveredDataVariation.no >= 0 ? (
                  <ArrowUp className="size-4" />
                ) : (
                  <ArrowDown className="size-4" />
                )}
                <span className="mt-auto text-xs">
                  {Math.abs(hoveredDataVariation.no) || 0}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Line data={data} ref={chartRef} options={options} />
    </>
  );
}
