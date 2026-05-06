"use client";
import AddNewTable from "@/components/tenant/table/new-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import {
  TableBody,
  TableCaption,
  TableCell,
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, ListFilter, Search, Shield, Trash, UserPlus } from "lucide-react";

export default function StaffPage() {
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
                href="/tenant/staff"
                className="text-sm font-normal hover:text-secondary"
              >
                Staff & Roles
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between mt-4 mb-6">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold leading-10 tracking-normal">
            Staff & Roles Management
          </h2>
          <p className="text-sm leading-4 text-gray-500 tracking-wide">
            Manage access levels, staff performance, and team configuration
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-secondary px-4 py-4.5 cursor-pointer">
                <UserPlus />
                <span>Add Staff Member</span>
              </Button>
            </DialogTrigger>
            <AddNewTable />
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-4">
        <Card className="ring-0 px-6 gap-1">
          <p className="text-sm font-bold text-gray-400">TOTAL STAFF</p>
          <h3 className="text-3xl font-bold">
            24{" "}
            <span className="text-xs font-bold text-green-600 rounded-md">
              +2 this months
            </span>
          </h3>
        </Card>
        <Card className="ring-0 px-6 gap-1">
          <p className="text-[12px] font-bold text-gray-400">ACTIVE NOW</p>
          <h3 className="text-3xl font-bold text-green-600">
            12{" "}
            <span className="text-xs font-bold text-secondary rounded-md">
              Mid-shift
            </span>
          </h3>
        </Card>
        <Card className="ring-0 px-6 gap-1">
          <p className="text-[12px] font-bold text-gray-400">ROLES DEFINED</p>
          <h3 className="text-3xl font-bold text-red-600">
            6{" "}
            <span className="text-xs font-bold text-gray-600 rounded-md">
              Standard Set
            </span>
          </h3>
        </Card>
        <Card className="ring-0 px-6 gap-1">
          <p className="text-[12px] font-bold text-gray-400">
            PERMISSIONS ALERTS
          </p>
          <h3 className="text-3xl font-bold text-orange-600">
            3{" "}
            <span className="text-xs font-bold text-gray-600 rounded-md">
              Review Required
            </span>
          </h3>
        </Card>
      </div>
      <Card className="mt-4 rounded-md p-0 overflow-hidden border-gray-100 shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <div className="flex gap-4">
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search staff by name or role..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex gap-2 items-center text-gray-600 border-gray-200 h-[38px]"
                >
                  <ListFilter size={18} />
                  <span className="font-medium">Filters</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Status</DropdownMenuItem>
                <DropdownMenuItem>Role</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-xs font-bold text-gray-400 uppercase tracking-wider py-4 pl-6">Name</TableHead>
              <TableHead className="text-xs font-bold text-gray-400 uppercase tracking-wider py-4">Role</TableHead>
              <TableHead className="text-xs font-bold text-gray-400 uppercase tracking-wider py-4">Permissions</TableHead>
              <TableHead className="text-xs font-bold text-gray-400 uppercase tracking-wider py-4">Status</TableHead>
              <TableHead className="text-xs font-bold text-gray-400 uppercase tracking-wider py-4">Contact Info</TableHead>
              <TableHead className="text-xs font-bold text-gray-400 uppercase tracking-wider py-4 text-right pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="pl-6 py-4">
                <div className="flex gap-3 items-center">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src="https://i.pravatar.cc/150?u=marcus" />
                    <AvatarFallback className="rounded-lg bg-gray-100 text-gray-600">MT</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">Marcus Thorne</span>
                    <span className="text-xs text-gray-400">ID: STF-00124</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <span className="inline-flex flex-col text-xs font-bold text-orange-600 bg-orange-100 py-1 px-2.5 rounded-lg leading-tight">
                  <span>Executive</span>
                  <span>Chef</span>
                </span>
              </TableCell>
              <TableCell className="py-4">
                <div className="flex flex-wrap gap-1.5 max-w-40">
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Kitchen</span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Inventory</span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Menu</span>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-bold text-gray-700">Active</span>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">m.thorne@culinaryos.com</span>
                  <span className="text-xs text-gray-400">+1 (555) 012-3456</span>
                </div>
              </TableCell>
              <TableCell className="py-4 pr-6">
                <div className="flex gap-3 justify-end">
                  <Shield size={16} className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
                  <Edit size={16} className="text-gray-400 cursor-pointer hover:text-secondary transition-colors" />
                  <Trash size={16} className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="pl-6 py-4">
                <div className="flex gap-3 items-center">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src="https://i.pravatar.cc/150?u=elena" />
                    <AvatarFallback className="rounded-lg bg-gray-100 text-gray-600">ER</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">Elena Rodriguez</span>
                    <span className="text-xs text-gray-400">ID: STF-00125</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <span className="inline-flex flex-col text-xs font-bold text-blue-600 bg-blue-100 py-1 px-2.5 rounded-lg leading-tight">
                  <span>Floor</span>
                  <span>Manager</span>
                </span>
              </TableCell>
              <TableCell className="py-4">
                <div className="flex flex-wrap gap-1.5 max-w-40">
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Floor</span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">POS</span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Admin</span>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-bold text-gray-700">Active</span>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">e.rodriguez@culinaryos.com</span>
                  <span className="text-xs text-gray-400">+1 (555) 012-7890</span>
                </div>
              </TableCell>
              <TableCell className="py-4 pr-6">
                <div className="flex gap-3 justify-end">
                  <Shield size={16} className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
                  <Edit size={16} className="text-gray-400 cursor-pointer hover:text-secondary transition-colors" />
                  <Trash size={16} className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="pl-6 py-4">
                <div className="flex gap-3 items-center">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src="https://i.pravatar.cc/150?u=jordan" />
                    <AvatarFallback className="rounded-lg bg-gray-100 text-gray-600">JS</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">Jordan Smith</span>
                    <span className="text-xs text-gray-400">ID: STF-00128</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <span className="inline-flex text-xs font-bold text-green-700 bg-green-100 py-1 px-2.5 rounded-lg">
                  Waiter
                </span>
              </TableCell>
              <TableCell className="py-4">
                <div className="flex flex-wrap gap-1.5 max-w-[160px]">
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">POS</span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Tables</span>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                  <span className="text-sm font-bold text-gray-400 italic">Inactive</span>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">j.smith@culinaryos.com</span>
                  <span className="text-xs text-gray-400">+1 (555) 012-1122</span>
                </div>
              </TableCell>
              <TableCell className="py-4 pr-6">
                <div className="flex gap-3 justify-end">
                  <Shield size={16} className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
                  <Edit size={16} className="text-gray-400 cursor-pointer hover:text-secondary transition-colors" />
                  <Trash size={16} className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="pl-6 py-4 border-b-0">
                <div className="flex gap-3 items-center">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src="https://i.pravatar.cc/150?u=liam" />
                    <AvatarFallback className="rounded-lg bg-gray-100 text-gray-600">LW</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">Liam Wilson</span>
                    <span className="text-xs text-gray-400">ID: STF-00130</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-4 border-b-0">
                <span className="inline-flex flex-col text-xs font-bold text-orange-600 bg-orange-100 py-1 px-2.5 rounded-lg leading-tight">
                  <span>Line</span>
                  <span>Cook</span>
                </span>
              </TableCell>
              <TableCell className="py-4 border-b-0">
                <div className="flex flex-wrap gap-1.5 max-w-[160px]">
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Kitchen</span>
                </div>
              </TableCell>
              <TableCell className="py-4 border-b-0">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-bold text-gray-700">Active</span>
                </div>
              </TableCell>
              <TableCell className="py-4 border-b-0">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">l.wilson@culinaryos.com</span>
                  <span className="text-xs text-gray-400">+1 (555) 012-3344</span>
                </div>
              </TableCell>
              <TableCell className="py-4 pr-6 border-b-0">
                <div className="flex gap-3 justify-end">
                  <Shield size={16} className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
                  <Edit size={16} className="text-gray-400 cursor-pointer hover:text-secondary transition-colors" />
                  <Trash size={16} className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 p-4 bg-gray-50/50">
          <p className="text-sm text-gray-500">
            Showing <span className="font-bold text-gray-900">4</span> of <span className="font-bold text-gray-900">24</span> staff members
          </p>
          <div className="flex items-center gap-1.5">
            <Button variant="outline" size="sm" className="h-8 border-gray-200 text-gray-500 font-normal">Previous</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-secondary border-secondary text-white hover:bg-secondary/90 hover:text-white">1</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-gray-200 text-gray-600 hover:bg-gray-100">2</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-gray-200 text-gray-600 hover:bg-gray-100">3</Button>
            <Button variant="outline" size="sm" className="h-8 border-gray-200 text-gray-700 font-medium">Next</Button>
          </div>
        </div>
      </Card>
    </>
  );
}
