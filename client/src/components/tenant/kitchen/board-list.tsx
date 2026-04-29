import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Clock, EllipsisVertical } from "lucide-react";
import BoardItem from "./board-item";
import { titleWord } from "@/utils/helper-function";

interface BoardListProps {
  title: string;
}

export default function BoardList({ title }: BoardListProps) {
  let indicatorClass = "bg-gray-400";
  let counterBackgroundClass = "bg-gray-200";

  if (title === "preparing") {
    indicatorClass = "bg-secondary";
    counterBackgroundClass = "bg-[#F1DED3]";
  }

  if(title === "ready"){
    indicatorClass = "bg-green-400";
    counterBackgroundClass = "bg-green-200";
  }

  return (
    <Card className="rounded-md">
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
      <CardContent>
        <BoardItem />
      </CardContent>
    </Card>
  );
}
