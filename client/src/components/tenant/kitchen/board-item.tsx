import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";

export default function BoardItem() {
  return (
    <Card className="rounded-md mb-2 px-6">
      <div className="flex items-center justify-between">
        <div className="bg-[#f1ded3] px-2 py-0.5 rounded-md">
          <span className="text-secondary font-bold">#{""}1024</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <Clock strokeWidth={1.5} size={14} />
            <span className="text-xs">04:12</span>
          </div>
          <span className="text-[10px]">2 mins ago</span>
        </div>
      </div>
      <h2 className="text-xl font-bold">Table 12</h2>
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <Input type="checkbox" className="w-4 h-4 mt-1" />
          <div className="flex flex-col">
            <span className="text-sm font-bold">2x Fried MO:MO</span>
            <span className="text-[10px] text-red-700 italic">
              Medium Rare, No onion
            </span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Input type="checkbox" className="w-4 h-4 mt-1" />
          <div className="flex flex-col">
            <span className="text-sm font-bold">1x Truffle Fries</span>
          </div>
        </div>
      </div>

      <Separator className="bg-[#f1ded3]" />
      <div className="grid">
        <Button className="rounded-md py-5 cursor-pointer text-secondary font-bold bg-[#f1ded3] hover:bg-[#f5dacb] ">
          Start Prep
        </Button>
      </div>
    </Card>
  );
}
