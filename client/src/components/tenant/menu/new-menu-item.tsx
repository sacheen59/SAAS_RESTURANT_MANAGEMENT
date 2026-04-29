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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { MENUCATEGORY } from "@/data/menu-data";
import { FileUp } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

export default function AddNewMenuItem() {
  const fieldClassName =
    "h-12 rounded-lg border border-input px-3 focus-visible:ring-0 focus-visible:border-secondary focus-visible:border-2";

  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: handle logic
    setPreview(null);
  };

  return (
    <DialogContent className="sm:max-w-lg border-0 max-h-[85vh] overflow-hidden flex flex-col">
      <DialogHeader>
        <div className="flex flex-col gap-1">
          <DialogTitle className="scroll-m-20 text-2xl font-semibold tracking-normal">
            Add New Menu Item
          </DialogTitle>
          <p className="text-[12px] font-normal text-gray-400">
            Enter details for the new menu item
          </p>
        </div>
      </DialogHeader>
      <Separator />
      <form
        onSubmit={submitHandler}
        className="my-4 flex min-h-0 flex-1 flex-col"
      >
        <div className="min-h-0 flex-1 overflow-y-auto pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-cols-2 gap-x-4 my-3">
            {/* table number  */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="itemName"
                className="text-sm font-semibold text-gray-400"
              >
                Item Name
              </label>
              <Input
                type="text"
                placeholder="eg. Grilled Chicken"
                className={fieldClassName}
                id="itemName"
              />
            </div>
            {/* price  */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="price"
                className="text-sm font-semibold text-gray-400"
              >
                Price (Rs)
              </label>
              <Input
                type="text"
                placeholder="0.00"
                className={fieldClassName}
                id="price"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 my-6">
            <label
              htmlFor="category"
              className="text-sm font-semibold text-gray-400"
            >
              Category
            </label>
            <div>
              <Select>
                <SelectTrigger className={`w-full ${fieldClassName}`}>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup>
                    {MENUCATEGORY.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Description  */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-sm font-semibold text-gray-400"
            >
              Description
            </label>

            <Textarea
              placeholder="eg. Describe the ingredients and preparation of the dish..."
              className={`${fieldClassName} h-32`}
              id="description"
              rows={10}
              cols={50}
            />
          </div>
          {/* image upload field  */}
          <div className="flex flex-col gap-2 my-4">
            <label
              htmlFor="image"
              className="text-sm font-semibold text-gray-400"
            >
              Image Upload
            </label>
            <label
              htmlFor="image"
              className="flex h-56 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 text-center hover:border-gray-400 transition-colors"
            >
              {preview ? (
                <div className="h-full w-full">
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <>
                  {" "}
                  <FileUp
                    className="h-8 w-8 text-gray-400"
                    strokeWidth={1.75}
                  />
                  <p className="mt-5 text-base leading-none font-semibold text-[#5f6675]">
                    Click to upload or drag & drop
                  </p>
                  <p className="mt-3 text-base font-semibold text-gray-400">
                    PNG, JPG (max. 2MB)
                  </p>
                </>
              )}
              <Input
                id="image"
                name="image"
                type="file"
                accept=".png,.jpg,.jpeg"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <DialogFooter className="mt-4 flex justify-end gap-4 bg-transparent border-t-0">
          <DialogClose asChild>
            <Button
              variant={"outline"}
              className="cursor-pointer px-6 py-5 border border-secondary hover:bg-[#faf4f2] hover:text-secondary font-bold"
            >
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="submit"
              className="bg-secondary text-white cursor-pointer px-6 py-5 font-bold"
            >
              Add Item
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
