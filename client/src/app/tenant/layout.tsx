"use client";
import TenantSidebar from "@/components/tenant/tenant-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import TenantHeader from "@/components/tenant/tenant-header";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const TenantLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { isToggleSidebarHeader } = useSelector(
    (state: RootState) => state.toggleSidebarAndHeader,
  );
  return (
    <SidebarProvider>
      {isToggleSidebarHeader && <TenantSidebar />}
      <div className="flex-1 flex flex-col bg-[#f4f5fb]">
        {isToggleSidebarHeader && <TenantHeader />}
        <main className="p-4 flex-1 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default TenantLayout;
