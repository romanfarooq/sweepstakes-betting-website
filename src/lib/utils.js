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
  let numFullPages = Math.floor(data.length / rowsPerPage); 
  let remainder = data.length % rowsPerPage; 

  
  for (let i = 0; i < numFullPages; i++) {
    chunks.push(data.slice(i * rowsPerPage, (i + 1) * rowsPerPage));
  }

  
  if (remainder > 0) {
    const extraRowsPerPage = Math.ceil(remainder / numFullPages);
    for (let i = 0; i < numFullPages; i++) {
      const extraRowsStart = numFullPages * rowsPerPage + i * extraRowsPerPage;
      const extraRowsEnd = extraRowsStart + extraRowsPerPage;

      
      if (extraRowsStart < data.length) {
        chunks[i] = [...chunks[i], ...data.slice(extraRowsStart, extraRowsEnd)];
      }
    }
  }

  return chunks;
}
