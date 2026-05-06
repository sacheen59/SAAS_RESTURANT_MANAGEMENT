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
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KITCHENDATA } from "@/data/kitchen-data";
import { AppDispatch } from "@/store";
import { Maximize, Minimize } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarAndHeaderAction } from "@/store/theme/toggle-full-screen";
import { RootState } from "@/store";

export default function KitchenPage() {
  const { isToggleSidebarHeader } = useSelector(
    (state: RootState) => state.toggleSidebarAndHeader,
  );
  const [orders, setOrders] = useState(KITCHENDATA);
  const dispatch = useDispatch<AppDispatch>();

  function updateOrderStatus(orderId: number, newStatus: string) {
    setOrders((prev) => {
      const updatedOrder = prev.find((o) => o.id === orderId);
      if (!updatedOrder) return prev;
      const remainingOrders = prev.filter((o) => o.id !== orderId);
      return [...remainingOrders, { ...updatedOrder, status: newStatus }];
    });
  }

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
              <Button
                onClick={() => dispatch(toggleSidebarAndHeaderAction())}
                className="bg-secondary px-4 py-4.5 cursor-pointer"
              >
                {isToggleSidebarHeader ? (
                  <>
                    <Maximize />
                    <span>Full Screen</span>
                  </>
                ) : (
                  <>
                    <Minimize />
                    <span>Exit Full Screen</span>
                  </>
                )}
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
      <div
        className={`grid grid-cols-3 gap-x-10 ${
          isToggleSidebarHeader ? "h-[75vh]" : "h-[85vh]"
        }`}
      >
        {["pending", "preparing", "ready"].map((status, index) => {
          const filterOrders = orders.filter(
            (order) => order.status === status,
          );
          return (
            <BoardList
              key={index}
              title={status}
              data={filterOrders}
              updateOrderStatus={updateOrderStatus}
            />
          );
        })}
      </div>
    </>
  );
}
