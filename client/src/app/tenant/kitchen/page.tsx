"use client";
import BoardList from "@/components/tenant/kitchen/board-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, EllipsisVertical, Plus } from "lucide-react";

export default function KitchenPage() {
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
                href="/tenant/kitchen"
                className="text-sm font-normal hover:text-secondary"
              >
                Kitchen (KDS)
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between mt-2 mb-6">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold leading-10 tracking-normal">
            Kitchen Display System
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Tabs
            defaultValue="board"
            className=" bg-white border rounded-xl py-0.5"
          >
            <TabsList className=" px-2 py-4 gap-4 bg-white">
              <TabsTrigger
                value="board"
                className="cursor-pointer px-2 py-3 data-active:text-secondary hover:text-secondary font-semibold"
              >
                Board
              </TabsTrigger>
              <TabsTrigger
                value="list"
                className="cursor-pointer px-2 py-3 data-active:text-secondary hover:text-secondary font-semibold"
              >
                List
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-secondary px-4 py-4.5 cursor-pointer">
                <Plus />
                <span>Add Kitchen Item</span>
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-10">
        {["pending", "preparing", "ready"].map((item, index) => (
          <BoardList key={index} title={item} />
        ))}
      </div>
    </>
  );
}
