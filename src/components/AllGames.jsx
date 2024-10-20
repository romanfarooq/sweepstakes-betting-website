import CustomizeableButton from "./CustomizeableButton";
import GamesContainerTable from "./GamesContainerTable";
import { RunningGamesData } from "@/lib/data";
import { FiPlus } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";



export default function AllGames() {
  return (
    <div className="p-10 px-12 space-y-8">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl text-gray-600">All Games</h3>
        <div className="flex gap-3">
          <CustomizeableButton icon={<CiFilter/>} label="Filter" onClick={() => console.log("Data Filtered")} />
          <CustomizeableButton icon={<FiPlus/>} label="Add New" onClick={() => console.log("Add New")} />
          
        </div>
      </div>

      <div className="bg-white">
        <GamesContainerTable data={RunningGamesData} rowsPerPage={10} />
      </div>
    </div>
  );
}
