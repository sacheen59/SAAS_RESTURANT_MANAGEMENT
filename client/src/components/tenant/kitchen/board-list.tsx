import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, EllipsisVertical } from "lucide-react";
import BoardItem from "./board-item";
import { titleWord } from "@/utils/helper-function";
import { KitchenData } from "@/data/kitchen-data";

interface BoardListProps {
  title: string;
  data: KitchenData[];
  updateOrderStatus: (orderId: number, newStatus: string) => void;
}

export default function BoardList({
  title,
  data,
  updateOrderStatus,
}: BoardListProps) {
  let indicatorClass = "bg-gray-400";
  let counterBackgroundClass = "bg-gray-200";
  let buttonLabel = "start Prep";
  let buttonClass = "bg-[#f1ded3] hover:bg-[#f5dacb]";
  let tableCardClass = "border-[0.5px] border-secondary";
  let orderNumberClass = "bg-[#f1ded3] text-secondary";
  let isReady = false;

  let statusCheckerElement = (
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        <Clock strokeWidth={1.5} size={14} />
        <span className="text-xs">04:12</span>
      </div>
      <span className="text-[10px]">2 mins ago</span>
    </div>
  );

  if (title === "preparing") {
    indicatorClass = "bg-secondary";
    counterBackgroundClass = "bg-[#F1DED3]";
    buttonLabel = "Mark as Ready";
    buttonClass = "bg-secondary hover:bg-secondary text-white";
    orderNumberClass = "bg-secondary text-white";
  }

  if (title === "ready") {
    indicatorClass = "bg-green-400";
    counterBackgroundClass = "bg-green-200";
    buttonLabel = "Bump Order";
    buttonClass = "bg-green-600 hover:bg-green-600 text-white";
    tableCardClass = "border-[0.5px] border-green-600 bg-green-50";
    orderNumberClass = "bg-green-200 text-green-600";
    statusCheckerElement = <CheckCircle className="text-green-600" />;
    isReady = true;
  }

  return (
    <Card className="rounded-md overflow-y-scroll">
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-3 w-3 ${indicatorClass} rounded-full`}></span>
          <h3 className="text-lg font-semibold">{titleWord(title)}</h3>
          <span className={`${counterBackgroundClass} px-1.5 rounded-xs`}>
            4
          </span>
        </div>
        <div>
          <EllipsisVertical
            size={24}
            className="cursor-pointer hover:bg-gray-100 py-1 rounded-xs"
          />
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {data.map((item) => (
          <BoardItem
            key={item.id}
            orderId={item.id}
            status={item.status}
            orderNumber={item.orderNumber}
            tableNumber={item.tableNumber}
            orderItems={item.orderItems}
            buttonLabel={buttonLabel}
            buttonClass={buttonClass}
            tableCardClass={tableCardClass}
            orderNumberClass={orderNumberClass}
            statusChecker={statusCheckerElement}
            isReady={isReady}
            updateOrderStatus={updateOrderStatus}
          />
        ))}
      </CardContent>
    </Card>
  );
}
