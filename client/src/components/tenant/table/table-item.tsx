import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Table } from "@/data/table-data";
import { titleWord } from "@/utils/helper-function";
import { Calendar, EllipsisVertical, Users } from "lucide-react";

export default function TableItem({
  id,
  tableNo,
  tableType,
  status,
  activeTime,
  capacity,
  reservationTime,
}: Table) {
  let buttonClass = "bg-[#fff0e8] hover:bg-[#ffe4d6] text-secondary";
  let buttonLabel = "Assign Order";
  let statusClass = "bg-[#e9fce9]";
  let indicatorClass = "bg-green-600";
  let textClass = "text-green-600";

  if (status === "occupied") {
    buttonClass = "bg-[#f2f4f7] hover:bg-[] text-[#364150] hover:bg-[#e7e8ea]";
    buttonLabel = "Clear Table";
    statusClass = "bg-[#fce9e9]";
    indicatorClass = "bg-red-600";
    textClass = "text-red-600";
  }

  if (status === "reserved") {
    buttonClass = "bg-secondary text-white";
    buttonLabel = "Check-In";
    statusClass = "bg-[#fff0e8]";
    indicatorClass = "bg-orange-600";
    textClass = "text-orange-600";
  }

  return (
    <Card className="ring-0 px-6 py-8">
      <CardHeader className="flex items-start justify-between">
        <span className="h-8 w-8 bg-gray-100 flex items-center justify-center rounded-sm font-bold">
          {tableNo}
        </span>
        <div
          className={`flex items-center gap-1 ${statusClass} px-2 rounded-2xl`}
        >
          <div className={`h-1.5 w-1.5 rounded-full ${indicatorClass}`}></div>
          <span className={`text-[10px] ${textClass}`}>
            {status === "available"
              ? titleWord(status)
              : status === "occupied"
                ? titleWord(status)
                : titleWord(status)}
          </span>
        </div>
      </CardHeader>
      <CardContent className="my-2 flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-base leading-5">{tableType}</p>
          <div className="flex gap-1">
            <div className="flex items-center gap-1">
              {status === "reserved" ? (
                <>
                  <Calendar
                    size={14}
                    strokeWidth={2}
                    className="text-gray-400"
                  />
                  <p className="text-[12px] text-gray-400">{reservationTime}</p>
                </>
              ) : (
                <>
                  <Users size={14} strokeWidth={2} className="text-gray-400" />
                  <p className="text-[12px] text-gray-400">
                    {capacity} Persons Capacity
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <p
          className={`${status === "occupied" ? "block" : "hidden"} text-[10px] text-red-600 font-bold`}
        >
          {activeTime} Active
        </p>
      </CardContent>
      <CardFooter className="rounded-none border-none bg-transparent flex gap-4">
        <Button
          className={`flex-1 text-sm px-4 py-6 font-bold cursor-pointer ${buttonClass}`}
        >
          {buttonLabel}
        </Button>
        <Button variant={"outline"} className="px-4 py-6 cursor-pointer">
          <EllipsisVertical size={20} />
        </Button>
      </CardFooter>
    </Card>
  );
}
