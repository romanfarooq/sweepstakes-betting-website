import { Button } from './ui/button'

export default function DepositWithDrawBtn() {
  return (
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
           <Button className="bg-sky-500 bg-opacity-60 transition-all hover:bg-sky-400 w-48 sm:w-auto">
          Deposit
        </Button>
        <Button className="bg-red-500 bg-opacity-70 transition-all hover:bg-red-600 w-48 sm:w-auto">
          Withdraw
        </Button>
    </div>
  )
}
