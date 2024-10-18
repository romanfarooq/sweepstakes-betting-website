import NumbersCardDetails from "@/components/NumbersCardDetails";
import SelectCountry from "@/components/SelectCountry";
import { BsBank2 } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GrCurrency } from "react-icons/gr";
import { IoGameControllerOutline, IoWalletOutline } from "react-icons/io5";
import { LuArrowLeftRight } from "react-icons/lu";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BellIcon, UserIcon, BanIcon } from "lucide-react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export default function UsersDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="space-y-10 p-4 lg:p-8">
      <h2 className="text-xl font-semibold text-indigo-950">
        Better Details - {id}
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-4">
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex-grow transform rounded-sm bg-green-500 py-5 text-base font-normal text-white shadow-none transition-transform duration-300 hover:-translate-y-[2px] hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/20">
              <FiPlusCircle className="mt-[2px]" />
              Balance
            </Button>
          </DialogTrigger>
          <DialogContent className="px-0 py-4 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="px-6 text-gray-700">
                Add Balance
              </DialogTitle>
            </DialogHeader>
            <Separator />
            <div className="grid gap-4 px-6 py-4">
              <div className="flex items-center">
                <Label htmlFor="amount" className="text-right">
                  Amount <span className="text-red-500">*</span>
                </Label>
              </div>
              <div className="flex w-full items-center">
                <Input
                  id="amount"
                  type="number"
                  min="0"
                  required
                  placeholder="Please enter positive amount"
                  className="h-10 w-full rounded-r-none focus-visible:ring-0"
                />
                <span className="flex h-10 items-center rounded-md rounded-l-none border border-gray-300 bg-gray-200 px-2">
                  USD
                </span>
              </div>
              <div className="flex items-center">
                <Label htmlFor="remarks" className="text-right">
                  Remarks <span className="text-red-500">*</span>
                </Label>
              </div>
              <div>
                <Textarea
                  id="remarks"
                  rows="4"
                  required
                  placeholder="Enter remarks here"
                  className="w-full rounded-md border p-2 focus-visible:ring-0"
                />
              </div>
            </div>
            <Separator />
            <DialogFooter className="px-6">
              <Button
                type="submit"
                className="flex-grow bg-blue-700 py-5 hover:bg-blue-600"
              >
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex-grow transform rounded-sm bg-red-500 py-5 text-base font-normal text-white shadow-none transition-transform duration-300 hover:-translate-y-[2px] hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/20">
              <FiMinusCircle className="mt-[2px]" />
              Balance
            </Button>
          </DialogTrigger>
          <DialogContent className="px-0 py-4 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="px-6 text-gray-700">
                Subtract Balance
              </DialogTitle>
            </DialogHeader>
            <Separator />
            <div className="grid gap-4 px-6 py-4">
              <div className="flex items-center">
                <Label htmlFor="amount" className="text-right">
                  Amount <span className="text-red-500">*</span>
                </Label>
              </div>
              <div className="flex w-full items-center">
                <Input
                  id="amount"
                  type="number"
                  min="0"
                  required
                  placeholder="Please enter positive amount"
                  className="h-10 w-full rounded-r-none focus-visible:ring-0"
                />
                <span className="flex h-10 items-center rounded-md rounded-l-none border border-gray-300 bg-gray-200 px-2">
                  USD
                </span>
              </div>
              <div className="flex items-center">
                <Label htmlFor="remarks" className="text-right">
                  Remarks <span className="text-red-500">*</span>
                </Label>
              </div>
              <div>
                <Textarea
                  id="remarks"
                  rows="4"
                  required
                  placeholder="Enter remarks here"
                  className="w-full rounded-md border p-2 focus-visible:ring-0"
                />
              </div>
            </div>
            <Separator />
            <DialogFooter className="px-6">
              <Button
                type="submit"
                className="flex-grow bg-blue-700 py-5 hover:bg-blue-600"
              >
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Button
          onClick={() => navigate("/admin/report/login/history")}
          className="flex-grow transform rounded-sm bg-blue-500 py-5 text-base font-normal text-white shadow-none transition-transform duration-300 hover:-translate-y-[2px] hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <UserIcon className="mt-[2px]" />
          Logins
        </Button>

        <Button className="font- flex-grow transform rounded-sm bg-gray-500 py-5 text-base text-white shadow-none transition-transform duration-300 hover:-translate-y-[2px] hover:bg-gray-500 hover:shadow-lg hover:shadow-gray-500/20">
          <BellIcon className="mt-[2px]" />
          Notifications
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex-grow transform rounded-sm bg-teal-500 py-5 text-base font-normal text-white shadow-none transition-transform duration-300 hover:-translate-y-[2px] hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/20">
              <BanIcon className="mt-[2px]" />
              Ban Bettor
            </Button>
          </DialogTrigger>
          <DialogContent className="px-0 py-4 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="px-6 text-gray-700">
                Ban Bettor
              </DialogTitle>
            </DialogHeader>
            <Separator />
            <DialogDescription className="px-6 font-semibold text-gray-700">
              If you ban this bettor he/she won't able to access his/her
              dashboard.
            </DialogDescription>
            <div className="grid gap-4 px-6 pb-4">
              <div className="flex items-center">
                <Label htmlFor="remarks" className="text-right">
                  Remarks <span className="text-red-500">*</span>
                </Label>
              </div>
              <div>
                <Textarea
                  id="remarks"
                  rows="4"
                  required
                  placeholder="Enter remarks here"
                  className="w-full rounded-md border p-2 focus-visible:ring-0"
                />
              </div>
            </div>
            <Separator />
            <DialogFooter className="px-6">
              <Button
                type="submit"
                className="flex-grow bg-blue-700 py-5 hover:bg-blue-600"
              >
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="w-full rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-xl font-bold">Information of {id}</h2>

        <div className="mb-4 grid grid-cols-2 gap-4">
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

        <div className="mb-4 grid grid-cols-2 gap-4">
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
              <span className="flex h-9 items-center rounded-md rounded-r-none border border-gray-300 bg-gray-200 px-2">
                USD
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

        <div className="mb-4 grid grid-cols-4 gap-4">
          <Input
            id="city"
            placeholder="City"
            className="rounded-sm border border-gray-300 p-2"
          />
          <Input
            id="state"
            placeholder="State"
            className="rounded-sm border border-gray-300 p-2"
          />
          <Input
            id="zip"
            placeholder="Zip/Postal"
            className="rounded-sm border border-gray-300 p-2"
          />
          <SelectCountry />
        </div>

        <div className="mb-4 grid grid-cols-4 gap-4">
          <Button className="rounded-sm bg-green-500 text-white">
            Verified
          </Button>
          <Button className="rounded-sm bg-green-500 text-white">
            Verified
          </Button>
          <Button className="rounded-sm bg-red-500 text-white">Disable</Button>
          <Button className="rounded-sm bg-green-500 text-white">
            Verified
          </Button>
        </div>

        <Button className="w-full rounded-sm bg-blue-600 py-2 text-white">
          Submit
        </Button>
      </div>
    </div>
  );
}
