"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Plus, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import TableList from "@/components/tenant/table/table-list";
import { TABLE_DATA } from "@/data/table-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TablePage = () => {
  return (
    <>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/tenant/dashboard"
                className="text-sm font-normal hover:text-secondary"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/tenant/table"
                className="text-sm font-normal hover:text-secondary"
              >
                Table Management
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between mt-4 mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold leading-10 tracking-normal">
            Table Management
          </h2>
          <p className="text-sm leading-4 text-gray-500 tracking-wide">
            Real time floor plan and status overview
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Tabs
            defaultValue="all"
            className="w-90 bg-white border rounded-xl py-0.5"
          >
            <TabsList className=" px-2 py-4 gap-4 bg-white">
              {["all", "available", "occupied", "reserved"].map((item) => (
                <TabsTrigger
                  key={item}
                  value={item}
                  className="cursor-pointer px-2 py-3 data-active:text-secondary hover:text-secondary font-semibold"
                >
                  {item[0].toUpperCase() + item.slice(1, item.length)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-secondary px-4 py-4.5 cursor-pointer">
                <Plus />
                <span>Add new Table</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex flex-col gap-1">
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-normal">
                    Add New Table
                  </h3>
                  <p className="text-[12px] font-normal text-gray-400">
                    Enter details for the new table
                  </p>
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-4">
        <Card className="ring-0 px-6">
          <p className="text-[12px] font-bold text-gray-400">TOTAL TABLES</p>
          <h3 className="text-3xl font-bold">24</h3>
        </Card>
        <Card className="ring-0 px-6">
          <p className="text-[12px] font-bold text-gray-400">AVAILABLE NOW</p>
          <h3 className="text-3xl font-bold flex items-center gap-4 text-green-600">
            12{" "}
            <span className="text-[10px] font-normal bg-[#e9fce9] px-2 py-0.5 rounded-md">
              50%
            </span>
          </h3>
        </Card>
        <Card className="ring-0 px-6">
          <p className="text-[12px] font-bold text-gray-400">OCCUPIED</p>
          <h3 className="text-3xl font-bold flex items-center gap-4 text-red-600">
            8{" "}
            <span className="text-[10px] font-normal bg-[#fee5e5] px-2 py-0.5 rounded-md">
              30%
            </span>
          </h3>
        </Card>
        <Card className="ring-0 px-6">
          <p className="text-[12px] font-bold text-gray-400">RESERVED</p>
          <h3 className="text-3xl font-bold flex items-center gap-4 text-orange-600">
            4{" "}
            <span className="text-[10px] font-normal bg-[#fff0e8] px-2 py-0.5 rounded-md">
              20%
            </span>
          </h3>
        </Card>
      </div>
      {/* table details start */}
      <TableList tableData={TABLE_DATA} />
    </>
  );
};

export default TablePage;
