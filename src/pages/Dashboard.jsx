import DepositAndWithdrawReport from "@/components/DepositAndWithdrawReport";
import TransactionsReport from "@/components/TransactionsReport";
import NumbersCard from "@/components/NumbersCard";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { BsTicketDetailed } from "react-icons/bs";

export default function Dashboard() {
  return (
    <div className="space-y-10 p-4 lg:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-indigo-950">Dashboard</h2>
        <p className="flex cursor-pointer items-center justify-between gap-2 rounded-sm border border-indigo-600 p-1 text-indigo-500 transition-all hover:bg-indigo-600 hover:text-indigo-200">
          <BsTicketDetailed />
          <span className="text-sm">Cron Setup</span>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-4">
        <NumbersCard
          title="Total Bettors"
          totalBettors={3431}
          icon={<IoIosPeople />}
          textColor="text-indigo-600"
          iconBgColor="bg-indigo-100"
          borderColor="border border-indigo-700"
          border={true}
        />
        <NumbersCard
          title="Active Bettors"
          totalBettors={3430}
          icon={<IoPeopleOutline />}
          textColor="text-green-600"
          iconBgColor="bg-green-100"
          borderColor="border border-green-700"
          border={true}
        />
        <NumbersCard
          title="Email Unverified Bettors"
          totalBettors={0}
          icon={<AiOutlineMail />}
          textColor="text-red-600"
          iconBgColor="bg-red-100"
          borderColor="border border-red-700"
          border={true}
        />
        <NumbersCard
          title="Mobile Unverified Bettors"
          totalBettors={0}
          icon={<BiMessage />}
          textColor="text-orange-600"
          iconBgColor="bg-orange-100"
          borderColor="border border-orange-500"
          border={true}
        />
      </div>
      <div className="grid grid-cols-1 gap-2 2xl:grid-cols-2">
        <div className="space-y-3 rounded-md bg-white p-4">
          <h2 className="text-xl font-bold text-indigo-950">Deposits</h2>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            <div className="border-b border-r border-gray-200">
              <NumbersCard
                title="Total Deposited"
                totalBettors={87332}
                icon={<BiMessage />}
                textColor="text-orange-600"
                iconBgColor="bg-orange-100"
                hover={true}
                hoverEffect="hover:bg-gray-50"
              />
            </div>
            <div className="border-b border-gray-200">
              <NumbersCard
                title="Pending Deposits"
                totalBettors={59}
                icon={<BiMessage />}
                textColor="text-orange-600"
                iconBgColor="bg-orange-100"
                hover={true}
                hoverEffect="hover:bg-gray-50"
              />
            </div>
            <div className="border-b border-r border-gray-200">
              <NumbersCard
                title="Rejected Deposits"
                totalBettors={0}
                icon={<BiMessage />}
                textColor="text-orange-600"
                iconBgColor="bg-orange-100"
                hover={true}
                hoverEffect="hover:bg-gray-50"
              />
            </div>
            <div className="border-b border-gray-200">
              <NumbersCard
                title="Deposited Charge"
                totalBettors={835.9}
                icon={<BiMessage />}
                textColor="text-orange-600"
                iconBgColor="bg-orange-100"
                hover={true}
                hoverEffect="hover:bg-gray-50"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3 rounded-md bg-white p-4">
          <h2 className="text-xl font-bold text-indigo-950">Withdrawals</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="border-b border-r border-gray-200">
              <NumbersCard
                title="Total Withdrawn"
                totalBettors={3000}
                icon={<BiMessage />}
                textColor="text-orange-600"
                iconBgColor="bg-orange-100"
                hover={true}
                hoverEffect="hover:bg-gray-50"
              />
            </div>
            <div className="border-b border-gray-200">
              <NumbersCard
                title="Pending Withdrawals"
                totalBettors={49}
                icon={<BiMessage />}
                textColor="text-orange-600"
                iconBgColor="bg-orange-100"
                hover={true}
                hoverEffect="hover:bg-gray-50"
              />
            </div>
            <div className="border-b border-r border-gray-200">
              <NumbersCard
                title="Rejected Withdrawals"
                totalBettors={1}
                icon={<BiMessage />}
                textColor="text-orange-600"
                iconBgColor="bg-orange-100"
                hover={true}
                hoverEffect="hover:bg-gray-50"
              />
            </div>
            <div className="border-gray-20 border-b">
              <NumbersCard
                title="Withdrawal Charge"
                totalBettors={21.2}
                icon={<BiMessage />}
                textColor="text-orange-600"
                iconBgColor="bg-orange-100"
                hover={true}
                hoverEffect="hover:bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-4">
        <NumbersCard
          title="Pending Bet"
          totalBettors={514}
          icon={<IoIosPeople />}
          textColor="text-indigo-600"
          iconBgColor="bg-indigo-100"
          borderColor="border border-indigo-700"
        />
        <NumbersCard
          title="Pending Deposits"
          totalBettors={59}
          icon={<IoPeopleOutline />}
          textColor="text-green-600"
          iconBgColor="bg-green-100"
          borderColor="border border-green-700"
        />
        <NumbersCard
          title="Pending Withdrawls"
          totalBettors={0}
          icon={<AiOutlineMail />}
          textColor="text-red-600"
          iconBgColor="bg-red-100"
          borderColor="border border-red-700"
        />
        <NumbersCard
          title="Pending Tickets"
          totalBettors={49}
          icon={<BiMessage />}
          textColor="text-orange-600"
          iconBgColor="bg-orange-100"
          borderColor="border border-orange-500"
        />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <DepositAndWithdrawReport />
        <TransactionsReport />
      </div>
    </div>
  );
}
