import AddOrSubtractBalanceDialog from "@/components/AddOrSubtractBalanceDialog";
import BanBetterDialog from "@/components/BanBetterDialog";
import NumbersCardDetails from "@/components/NumbersCardDetails";
import SelectCountry from "@/components/SelectCountry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BellIcon, UserIcon } from "lucide-react";
import { BsBank2 } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GrCurrency } from "react-icons/gr";
import { IoGameControllerOutline, IoWalletOutline } from "react-icons/io5";
import { LuArrowLeftRight } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";

export default function UsersDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen space-y-10 p-4 lg:p-8">
      <h2 className="text-xl font-bold text-gray-700 2xl:text-2xl">
        Better Details - {id}
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-2">
        <NumbersCardDetails
          title="Balance"
          totalAmount="$0.00"
          icon={<GrCurrency />}
          bgColor="bg-indigo-800"
          iconBgColor="bg-indigo-600"
        />
        <NumbersCardDetails
          title="Deposits"
          totalAmount="$0.00"
          icon={<IoWalletOutline />}
          iconBgColor="bg-emerald-300"
          bgColor="bg-emerald-500"
        />
        <NumbersCardDetails
          title="Withdrawals"
          totalAmount="$0.00"
          icon={<BsBank2 />}
          iconBgColor="bg-amber-500"
          bgColor="bg-amber-700"
        />
        <NumbersCardDetails
          title="Transactions"
          totalAmount="0"
          icon={<LuArrowLeftRight />}
          iconBgColor="bg-indigo-700"
          bgColor="bg-indigo-900"
        />
        <NumbersCardDetails
          title="Bet Placed"
          totalAmount="0"
          icon={<IoGameControllerOutline />}
          iconBgColor="bg-teal-500"
          bgColor="bg-teal-700"
        />
        <NumbersCardDetails
          title="Returned Amount"
          totalAmount="$0.00"
          icon={<FaHandHoldingDollar />}
          iconBgColor="bg-green-500"
          bgColor="bg-green-700"
        />
      </div>
      <div className="flex w-full flex-wrap justify-between gap-2">
        <AddOrSubtractBalanceDialog type="Add" />

        <AddOrSubtractBalanceDialog type="Subtract" />

        <Button
          onClick={() => navigate("/admin/report/login/history")}
          className="flex-grow transform rounded-sm bg-blue-500 py-5 text-base font-normal text-white shadow-none transition-transform duration-300 hover:-translate-y-[2px] hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 2xl:h-16"
        >
          <UserIcon className="mt-[2px]" />
          Logins
        </Button>

        <Button className="font- flex-grow transform rounded-sm bg-gray-500 py-5 text-base text-white shadow-none transition-transform duration-300 hover:-translate-y-[2px] hover:bg-gray-500 hover:shadow-lg hover:shadow-gray-500/20 2xl:h-16">
          <BellIcon className="mt-[2px]" />
          Notifications
        </Button>

        <BanBetterDialog />
      </div>

      <div className="w-full rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-xl font-bold">Information of {id}</h2>

        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <Label htmlFor="firstName" className="mb-2 text-sm font-semibold">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="rounded-sm border border-gray-300 p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="lastName" className="mb-2 text-sm font-semibold">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="rounded-sm border border-gray-300 p-2"
              required
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <Label htmlFor="email" className="mb-2 text-sm font-semibold">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="rounded-sm border border-gray-300 p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="mobile" className="mb-2 text-sm font-semibold">
              Mobile Number <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center">
              <span className="flex h-9 items-center rounded-md rounded-r-none border border-gray-300 bg-gray-200 px-4 text-lg">
                +
              </span>
              <Input
                id="mobile"
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-sm rounded-l-none border border-gray-300 p-2 focus-visible:ring-0"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="address" className="mb-2 text-sm font-semibold">
            Address
          </Label>
          <Input
            id="address"
            type="text"
            placeholder="Address"
            className="w-full rounded-sm border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <Label htmlFor="email" className="mb-2 text-sm font-semibold">
              City
            </Label>
            <Input
              id="city"
              placeholder="City"
              className="rounded-sm border border-gray-300 p-2"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="email" className="mb-2 text-sm font-semibold">
              State
            </Label>
            <Input
              id="state"
              placeholder="State"
              className="rounded-sm border border-gray-300 p-2"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="email" className="mb-2 text-sm font-semibold">
              Zip/Postal
            </Label>
            <Input
              id="zip"
              placeholder="Zip/Postal"
              className="rounded-sm border border-gray-300 p-2"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="email" className="mb-2 text-sm font-semibold">
              Country <span className="text-red-500">*</span>
            </Label>
            <SelectCountry />
          </div>
        </div>

        <Button className="w-full rounded-sm bg-blue-600 py-2 text-base text-white hover:bg-blue-700">
          Submit
        </Button>
      </div>
    </div>
  );
}
