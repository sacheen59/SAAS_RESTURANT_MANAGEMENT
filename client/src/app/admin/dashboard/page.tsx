"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "@/lib/auth";
import { House, LayoutDashboard, Settings } from "lucide-react";

// ----nav items
const NAV = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={24} strokeWidth={1.5} />,
  },
  {
    id: "tenants",
    label: "Tenants",
    icon: <House size={24} strokeWidth={1.5} />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings size={24} strokeWidth={1.5} />,
  },
];

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="text-center animate-[fadeIn_.4s_both]">
      <h1 className="text-5xl font-extrabold text-[#1e1e2e] tracking-tight">
        Dashboard
      </h1>
      <p className="mt-3 text-sm text-[#9898b8] font-medium">
        Content goes here
      </p>
    </div>
  );
}
