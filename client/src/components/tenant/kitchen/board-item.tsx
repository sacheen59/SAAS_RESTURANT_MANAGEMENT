import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import TableOrderItem from "./table-order-item";
import { OrderData } from "@/data/kitchen-data";

interface BoardItemProps {
  buttonLabel: string;
  buttonClass: string;
  tableCardClass: string;
  orderNumberClass: string;
  statusChecker: React.ReactNode;
  isReady: boolean;
  orderNumber: number;
  tableNumber: number;
  orderItems: OrderData[];
  orderId: number;
  status: string;
  updateOrderStatus: (orderId: number, newStatus: string) => void;
}

export default function BoardItem({
  buttonLabel,
  buttonClass,
  tableCardClass,
  orderNumberClass,
  statusChecker,
  isReady,
  orderNumber,
  tableNumber,
  orderItems,
  updateOrderStatus,
  orderId,
  status,
}: BoardItemProps) {
  const [checkedItems, setIsCheckedItems] = useState<Record<number, boolean>>(
    {},
  );

  let newStatus = "";
  if (status === "pending") {
    newStatus = "preparing";
  }
  if (status == "preparing") {
    newStatus = "ready";
  }

  function handleCheck(index: number, checked: boolean) {
    setIsCheckedItems((prev) => ({
      ...prev,
      [index]: checked,
    }));
  }
  return (
    <Card className={`rounded-md mb-2 px-6 ${tableCardClass}`}>
      <div className="flex items-center justify-between">
        <div className={`${orderNumberClass} px-2 py-0.5 font-bold rounded-md`}>
          <span className="">
            #{""}
            {orderNumber}
          </span>
        </div>
        {statusChecker}
      </div>
      <h2 className="text-xl font-bold -mt-2">Table {tableNumber}</h2>
      <div className="flex gap-3">
        {orderItems.map((item) => (
          <TableOrderItem
            key={item.id}
            isChecked={checkedItems[item.id] || false}
            handleCheck={(e) => handleCheck(item.id, e.target.checked)}
            isReady={isReady}
            itemName={item.itemName}
            quantity={item.quantity}
            excludeIngredients={item.excludedIngredients}
          />
        ))}
      </div>

      <Separator className="bg-[#f1ded3]" />
      <div className="grid">
        <Button
          onClick={() => updateOrderStatus(orderId, newStatus)}
          className={`rounded-md py-5 cursor-pointer text-secondary font-bold ${buttonClass}`}
        >
          {buttonLabel}
        </Button>
      </div>
    </Card>
  );
}
