"use client";
import MenuCategories from "@/components/tenant/menu/menu-categories";
import MenuList from "@/components/tenant/menu/menu-list";
import AddNewMenuItem from "@/components/tenant/menu/new-menu-item";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { MENUCATEGORY, MENUITEM } from "@/data/menu-data";
import { ListFilter, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";

export default function MenuPage() {
  const [activeCategoryId, setActiveCategoryId] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategoryId === "all") {
      return MENUITEM;
    }

    return MENUITEM.filter((item) =>
      item.categories.includes(activeCategoryId),
    );
  }, [activeCategoryId]);

  const activeCategoryName =
    activeCategoryId === "all"
      ? "All Items"
      : (MENUCATEGORY.find((item) => item.id === activeCategoryId)?.name ??
        "Items");

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
                href="/tenant/menu"
                className="text-sm font-normal hover:text-secondary"
              >
                Menu Management
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between mt-4 mb-6">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold leading-10 tracking-normal">
            Menu Catalog
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-secondary px-4 py-4.5 cursor-pointer">
                <Plus />
                <span>Add Menu Item</span>
              </Button>
            </DialogTrigger>
            <AddNewMenuItem />
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_4fr] gap-x-6 items-start h-[calc(100dvh-12rem)] overflow-hidden">
        <MenuCategories
          categories={MENUCATEGORY}
          activeCategoryId={activeCategoryId}
          onCategoryChange={setActiveCategoryId}
        />
        <div className="flex flex-col h-full min-h-0">
          <div className="flex items-center gap-4">
            <InputGroup className="flex-1 bg-white">
              <InputGroupInput placeholder="Search menu items ..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
            </InputGroup>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="py-5.5 px-8 flex gap-2 cursor-pointer"
                >
                  <ListFilter strokeWidth={2} className="text-gray-400" />
                  <span className="text-md text-gray-600 font-semibold tracking-wide">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Price</DropdownMenuItem>
                <DropdownMenuItem>Quantity</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="my-4">
            <h1 className="text-2xl font-bold tracking-normal leading-8 flex items-center">
              {activeCategoryName}{" "}
              <span className="text-xs font-normal ms-2 py-0.5 px-2 rounded-xl bg-[#fbe2d9] text-secondary ">
                {filteredItems.length} items
              </span>
            </h1>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <MenuList items={filteredItems} />
          </div>
        </div>
      </div>
    </>
  );
}
