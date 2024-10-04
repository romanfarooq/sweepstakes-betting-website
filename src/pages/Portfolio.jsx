import AmountPortfolioWallet from "@/components/AmountPortfolioWallet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Portfolio() {
  return (
    <div className="mx-40 py-10">
      <AmountPortfolioWallet />
      <div className="flex gap-6 w-4/6 justify-between mx-auto items-center  py-12">
        <Tabs defaultValue="positions" className="">
          <TabsList>
            <TabsTrigger value="positions">Positions</TabsTrigger>
            <TabsTrigger value="openOrders">Open Orders</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
