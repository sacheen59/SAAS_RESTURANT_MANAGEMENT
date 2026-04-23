import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Image from "next/image";
import dineOslogo from "../../../public/dineos-logo.png";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  CookingPot,
  IdCardLanyard,
  LayoutDashboard,
  Settings,
  Users,
  UtensilsCrossed,
} from "lucide-react";

const NAV = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={24} strokeWidth={2} />,
    href: "/tenant/dashboard",
  },
  {
    id: "table-management",
    label: "Table Management",
    icon: <Settings size={24} strokeWidth={2} />,
    href: "/tenant/table",
  },
  {
    id: "menu-management",
    label: "Menu Management",
    icon: <UtensilsCrossed size={24} strokeWidth={2} />,
    href: "/tenant/menu",
  },
  {
    id: "kitchen",
    label: "Kitchen",
    icon: <CookingPot size={24} strokeWidth={2} />,
    href: "/tenant/kitchen",
  },
  {
    id: "staff-management",
    label: "Staff & Roles",
    icon: <IdCardLanyard size={24} strokeWidth={2} />,
    href: "/tenant/staff",
  },
  {
    id: "customers",
    label: "Customers",
    icon: <Users size={24} strokeWidth={2} />,
    href: "/tenant/customers",
  },
];

const TenantSidebar = () => (
  <Sidebar className="shadow-none">
    <SidebarHeader className="px-5 py-2 border-b-2 border-[#f0f0f8]">
      <div className="flex items-center gap-2">
        <Image src={dineOslogo} alt="dineOs-logo" width={30} height={30} />
        <div>
          <p className="text-[15px] font-extrabold text-[#1e1e2e] tracking-tight leading-none">
            <span className="text-primary">Dine</span>
            <span className="text-secondary">OS</span>
          </p>
        </div>
      </div>
    </SidebarHeader>
    <SidebarContent className="py-2">
      <SidebarMenu>
        {NAV.map((item) => (
          <SidebarMenuItem key={item.id}>
            <Link href={item.href} className="flex items-center gap-3">
              <SidebarMenuButton
                size={"lg"}
                className="hover:bg-[#ecc7b0] hover:rounded-none cursor-pointer px-5"
                key={item.id}
              >
                {item.icon}
                <span className="text-md">{item.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
    <SidebarFooter>
      <Button className="h-10 cursor-pointer bg-secondary">Logout</Button>
    </SidebarFooter>
  </Sidebar>
);

export default TenantSidebar;
