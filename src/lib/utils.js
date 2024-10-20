import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function calculateBetPercentages(match) {
  const { total_yes_bets, total_no_bets } = match;

  const total_bets = total_yes_bets + total_no_bets;

  const yes_percentage = total_bets > 0 ? (total_yes_bets / total_bets) * 100 : 0;
  const no_percentage = total_bets > 0 ? (total_no_bets / total_bets) * 100 : 0;

  return {
    total_bets,
    yes_percentage: yes_percentage.toFixed(1),
    no_percentage: no_percentage.toFixed(1)   
  };
}

export function convertToAmPm(timeString) {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function splitIntoChunks(data, rowsPerPage) {
  const chunks = [];

  // If rowsPerPage is greater than or equal to data length, return the whole data as a single chunk
  if (rowsPerPage >= data.length) {
    return [data];
  }

  // Iterate through data and slice it into chunks of the specified size
  for (let i = 0; i < data.length; i += rowsPerPage) {
    chunks.push(data.slice(i, i + rowsPerPage));
  }

  return chunks;
}
