import TenantSidebar from "@/components/tenant/tenant-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

const TenantLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <TenantSidebar />
      <div>
        <header>
          <p>Header</p>
        </header>
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default TenantLayout;
