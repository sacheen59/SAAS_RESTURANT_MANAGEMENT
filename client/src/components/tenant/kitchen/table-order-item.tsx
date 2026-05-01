import { Input } from "@/components/ui/input";
import { CheckCheck } from "lucide-react";

interface TableOrderItemProps {
  isReady: boolean;
  isChecked: boolean;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  itemName: string;
  quantity: number;
  excludeIngredients?: string;
}

export default function TableOrderItem({
  isReady,
  isChecked,
  handleCheck,
  itemName,
  quantity,
  excludeIngredients
}: TableOrderItemProps) {
  return (
    <div className="flex items-start gap-2">
      {isReady ? (
        <CheckCheck className="text-green-600" size={18} />
      ) : (
        <Input
          type="checkbox"
          className="w-4 h-4 mt-1 accent-secondary"
          onChange={handleCheck}
        />
      )}
      <div className="flex flex-col">
        <span
          className={`text-sm font-bold ${isChecked ? "line-through text-gray-400" : ""} ${isReady ? "text-green-600 font-normal" : ""}`}
        >
          {quantity}x {itemName}
        </span>
        <span
          className={`text-[10px] italic ${isReady ? "text-green-600" : "text-red-700"}`}
        >
          {excludeIngredients}
        </span>
      </div>
    </div>
  );
}
