import TenantSidebar from "@/components/tenant/tenant-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";
import { BellIcon, HelpCircle, UserIcon } from "lucide-react";
import TenantHeader from "@/components/tenant/tenant-header";

const TenantLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <TenantSidebar />
      <div className="flex-1 flex flex-col bg-[#f4f5fb]">
        <TenantHeader />
        <main className="p-4 flex-1 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default TenantLayout;
