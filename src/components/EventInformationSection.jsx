import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function EventInformationSection({ label, value, variation }) {
  return (
    <div className="mt-4 flex text-blue-400">
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gray-300">{label}</p>
        <div className="flex gap-2">
          <p className="text-2xl font-semibold">{value}% chance</p>
          <div
            className={cn(
              "mt-auto flex",
              variation >= 0 ? "text-green-500" : "text-red-500",
            )}
          >
            {variation >= 0 ? (
              <ArrowUp className="size-4" />
            ) : (
              <ArrowDown className="size-4" />
            )}
            <span className="mt-auto text-xs">{Math.abs(variation) || 0}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
