"use client";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { BetweenHorizontalEnd, TableRowsSplit, Wine } from "lucide-react";

export default function AddNewTable() {
  const fieldClassName =
    "h-12 rounded-lg border border-input px-3 focus-visible:ring-0 focus-visible:border-secondary focus-visible:border-2";

  return (
    <DialogContent className="sm:max-w-lg border-0">
      <DialogHeader>
        <div className="flex flex-col gap-1">
          <DialogTitle className="scroll-m-20 text-2xl font-semibold tracking-normal">
            Add New Table
          </DialogTitle>
          <p className="text-[12px] font-normal text-gray-400">
            Enter details for the new table
          </p>
        </div>
      </DialogHeader>
      <Separator />
      <form className="my-4">
        <div className="grid grid-cols-2 gap-x-4 my-3">
          {/* table number  */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="tableName"
              className="text-sm font-semibold text-gray-400"
            >
              Table Number
            </label>
            <Input
              type="text"
              placeholder="eg. 25"
              className={fieldClassName}
              id="tableName"
            />
          </div>
          {/* table capacity  */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="tableName"
              className="text-sm font-semibold text-gray-400"
            >
              Table Capacity
            </label>
            <Select>
              <SelectTrigger className={`w-full ${fieldClassName}`}>
                <SelectValue placeholder="Select Table Capacity" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectGroup>
                  <SelectLabel>Capacity</SelectLabel>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-3 my-6">
          <label
            htmlFor="tableName"
            className="text-sm font-semibold text-gray-400"
          >
            Table Type
          </label>
          <div className="grid grid-cols-3 gap-x-4">
            <div className="flex flex-col items-center gap-1 border-2 border-secondary rounded-xl py-4 cursor-pointer bg-[#faf4f2]">
              <BetweenHorizontalEnd
                size={20}
                strokeWidth={2}
                className="text-secondary"
              />
              <span className="text-secondary font-bold">Standard</span>
            </div>
            <div className="group flex flex-col items-center gap-1 border-2 border-gray-400 rounded-xl py-4 cursor-pointer hover:border-secondary hover:bg-[#faf4f2]">
              <TableRowsSplit
                size={20}
                strokeWidth={2}
                className="text-gray-600 group-hover:text-secondary"
              />
              <span className="text-gray-600 font-bold group-hover:text-secondary">
                Booth
              </span>
            </div>
            <div className="group flex flex-col items-center gap-1 border-2 border-gray-400 rounded-xl py-4 cursor-pointer hover:border-secondary hover:bg-[#faf4f2]">
              <Wine
                size={20}
                strokeWidth={2}
                className="text-gray-600 group-hover:text-secondary"
              />
              <span className="text-gray-600 group-hover:text-secondary font-bold">
                Bar
              </span>
            </div>
          </div>
        </div>
        {/* location zone */}
        <div className="flex flex-col gap-3 my-6">
          <label
            htmlFor="location-zone"
            className="text-sm font-semibold text-gray-400"
          >
            Location Zone
          </label>
          <Select>
            <SelectTrigger className={`w-full`}>
              <SelectValue placeholder="Select Location Zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Location Zone</SelectLabel>
                <SelectItem value="ground">Ground Floor</SelectItem>
                <SelectItem value="first">First Floor</SelectItem>
                <SelectItem value="second">Second Floor</SelectItem>
                <SelectItem value="third">Third Floor</SelectItem>
                <SelectItem value="fourth">Fourth Floor</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter className="flex justify-end gap-4 bg-transparent border-t-0">
          <DialogClose asChild>
            <Button
              variant={"outline"}
              className="cursor-pointer px-6 py-5 border border-secondary hover:bg-[#faf4f2] hover:text-secondary font-bold"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" className="bg-secondary text-white cursor-pointer px-6 py-5 font-bold">
            Create Table
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
