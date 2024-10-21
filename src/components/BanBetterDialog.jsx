import { useState } from "react";
import { BanIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function BanBetterDialog() {
  const [isOpen, setIsOpen] = useState(false);

  function handleBanUser() {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex-grow transform rounded-sm bg-teal-500 py-5 text-base font-normal text-white shadow-none transition-transform duration-300 hover:-translate-y-[2px] hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/20">
          <BanIcon className="mt-[2px]" />
          Ban Bettor
        </Button>
      </DialogTrigger>
      <DialogContent className="px-0 py-4 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="px-6 text-gray-700">Ban Bettor</DialogTitle>
        </DialogHeader>
        <Separator />
        <DialogDescription className="px-6 font-semibold text-gray-700">
          If you ban this bettor he/she won't able to access his/her dashboard.
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
            onClick={handleBanUser}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
