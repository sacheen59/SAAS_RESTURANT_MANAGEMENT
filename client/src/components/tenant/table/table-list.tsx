import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Table } from "@/data/table-data";
import { EllipsisVertical, Users } from "lucide-react";
import TableItem from "./table-item";

interface props {
  tableData: Array<Table>;
}

export default function TableList({ tableData }: props) {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-4 my-8">
      {tableData.map((data) => (
        <TableItem
          key={data.id}
          id={data.id}
          tableNo={data.tableNo}
          tableType={data.tableType}
          capacity={data.capacity}
          activeTime={data.activeTime}
          reservationTime={data.reservationTime}
          status={data.status}
        />
      ))}
    </div>
  );
}
