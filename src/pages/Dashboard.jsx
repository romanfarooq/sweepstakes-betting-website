import { IoIosPeople } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";

import NumbersCard from "@/components/NumbersCard";
import { BsTicketDetailed } from "react-icons/bs";

export default function Dashboard() {
  return (
    <div className="space-y-10 p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-indigo-950">Dashboard</h2>
        <p className="flex items-center justify-between gap-2 rounded-sm border border-indigo-600 p-1 text-indigo-500 cursor-pointer hover:bg-indigo-600 hover:text-indigo-200 transition-all">
          <BsTicketDetailed />
          <span className="text-sm">Cron Setup</span>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <NumbersCard
          title="Total Bettors"
          totalBettors={3431}
          icon={<IoIosPeople />}
          textColor="text-indigo-600"
          iconBgColor="bg-indigo-100"
          borderColor="border-indigo-700"
        />
        <NumbersCard
          title="Active Bettors"
          totalBettors={3430}
          icon={<IoPeopleOutline />}
          textColor="text-green-600"
          iconBgColor="bg-green-100"
          borderColor="border-green-700"
        />
        <NumbersCard
          title="Email Unverified Bettors"
          totalBettors={0}
          icon={<AiOutlineMail />}
          textColor="text-red-600"
          iconBgColor="bg-red-100"
          borderColor="border-red-700"
        />
        <NumbersCard
          title="Mobile Unverified Bettors"
          totalBettors={0}
          icon={<BiMessage />}
          textColor="text-orange-600"
          iconBgColor="bg-orange-100"
          borderColor="border-orange-500"
        />
      </div>
    </div>
  );
}
