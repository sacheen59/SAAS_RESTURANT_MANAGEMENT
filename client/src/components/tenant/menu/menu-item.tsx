import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { Edit2Icon, Trash2 } from "lucide-react";

interface MenuItemProps {
  id: string;
  name: string;
  imageUrl: string;
  isAvailable: boolean;
  tag: string;
  description: string;
  price: number;
  categories: string[];
}

export default function MenuItem({
  name,
  imageUrl,
  isAvailable,
  tag,
  description,
  price,
}: MenuItemProps) {
  return (
    <Card className="rounded-sm py-0 flex flex-col">
      <div className="flex-1 relative">
        <div>
          <img
            src={imageUrl}
            alt="momo image"
            className="w-full h-50 object-cover rounded-t-sm"
          />
        </div>
        <div className="flex items-center space-x-2 py-1 px-1 bg-[#eae8e7ed] absolute top-2 right-2 rounded-sm">
          <Label htmlFor="available" className="text-xs text-gray-600">
            {isAvailable ? "Available" : "Sold Out"}
          </Label>
          <Switch
            id="available"
            className="data-checked:bg-secondary cursor-pointer"
            size="sm"
            checked={isAvailable}
          />
        </div>
      </div>
      <div className="flex-1">
        <CardContent>
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-bold">{name}</h2>
            <h3 className="text-base font-bold text-red-500">
              Rs. {price.toFixed(2)}
            </h3>
          </div>
          <CardDescription className="my-2 line-clamp-2">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="bg-transparent flex justify-between">
          <div className="flex gap-4">
            <Trash2 size={18} className="text-red-400 cursor-pointer" />
            <Edit2Icon size={18} className="text-primary cursor-pointer" />
          </div>
          <p className="text-xs bg-[#fbebe6] px-2 py-1 rounded-xl text-secondary">
            {tag}
          </p>
        </CardFooter>
      </div>
    </Card>
  );
}
