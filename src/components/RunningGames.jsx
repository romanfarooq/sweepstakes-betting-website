import CustomizeableButton from "@/components/CustomizeableButton";
import GamesContainerTable from "@/components/GamesContainerTable";
import { RunningGamesData } from "@/lib/data";
import { FiPlus } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";

export default function RunningGames() {
  return (
    <div className="space-y-8 p-10 px-12">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold text-gray-600">Running Games</h3>
        <div className="flex gap-3">
          <CustomizeableButton
            icon={<CiFilter />}
            label="Filter"
            onClick={() => console.log("Data Filtered")}
          />
          <CustomizeableButton
            icon={<FiPlus />}
            label="Add New"
            onClick={() => console.log("Add New")}
          />
        </div>
      </div>

      <div className="bg-white">
        <GamesContainerTable data={RunningGamesData} rowsPerPage={10} />
      </div>
    </div>
  );
}
