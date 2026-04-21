"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { hasValidToken, logoutAndRedirect } from "@/lib/auth";
import {
  BellIcon,
  HelpCircle,
  House,
  LayoutDashboard,
  Settings,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dineOsLogo from "@/../public/dineos.svg";

// ----nav items
const NAV = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={24} strokeWidth={1.5} />,
    href: "/admin/dashboard",
  },
  {
    id: "clients",
    label: "Clients",
    icon: <House size={24} strokeWidth={1.5} />,
    href: "/admin/clients",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings size={24} strokeWidth={1.5} />,
    href: "/admin/settings",
  },
];

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [active, setActive] = useState("dashboard");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!hasValidToken()) {
      logoutAndRedirect("/login");
      return;
    }
  }, [router]);

  return (
    <div className="flex h-screen bg-[#f4f5fb] font-sans text-sm text-[#1e1e2e] overflow-hidden">
      {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
      <aside className="w-60 bg-white border-r border-[#ebebf5] flex flex-col shrink-0 h-screen sticky top-0">
        {/* Logo */}
        <div className="px-5 py-5.5 border-b border-[#f0f0f8]">
          <div className="flex items-center gap-3">
            <Image src={dineOsLogo} alt="dineOS logo" width={50} height={50} />
            <div>
              <p className="text-[15px] font-extrabold text-[#1e1e2e] tracking-tight leading-none">
                <span className="text-primary">Dine</span>
                <span className="text-[#BD6027]">OS</span>
              </p>
              <p className="text-[11px] text-[#9898b8] font-medium mt-0.5">
                Enterprise Admin
              </p>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-2.5 py-3 overflow-y-auto">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                onClick={() => setActive(item.id)}
                href={item.href}
                className={`group w-full flex items-center gap-2.5 px-3 py-2.25 rounded-[9px] mb-0.5 text-[14px] font-medium text-left transition-all duration-150 cursor-pointer border-none
                  ${
                    isActive
                      ? "bg-primary text-white font-bold"
                      : "bg-transparent text-[#6b6b8a] hover:bg-[#f0f0ff] hover:text-indigo-600"
                  }`}
              >
                <span
                  className={`shrink-0 transition-colors duration-150 ${isActive ? "text-white" : "text-[#9898b8] group-hover:text-primary"}`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Admin chip */}
        <div className="px-4 py-3.5 border-t border-[#f0f0f8]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[10px] bg-linear-to-br from-[#BD6027] to-primary flex items-center justify-center text-white text-[12px] font-extrabold shrink-0">
              DOS
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-bold text-[#1e1e2e] truncate">
                DineOS
              </p>
              <p className="text-[11px] text-[#9898b8] font-medium">
                Super Admin
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── MAIN ────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* ── TOPBAR ──────────────────────────────────────────────── */}
        <header className="h-15 bg-white border-b border-[#ebebf5] flex items-center gap-4 px-6 sticky top-0 z-50 shrink-0">
          {/* Search bar */}
          <div className="flex items-center gap-2.5 flex-1 max-w-105 bg-[#f6f6fc] border border-[#ebebf5] rounded-[10px] px-3.5 h-9.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b0b0cc"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search tenants, users, or data points..."
              className="flex-1 bg-transparent border-none outline-none text-[13px] text-[#1e1e2e] placeholder-[#b0b0cc] font-medium"
            />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Bell */}
            <button className="relative w-9 h-9 rounded-[9px] border border-[#ebebf5] bg-white flex items-center justify-center text-[#6b6b8a] hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-all duration-150 cursor-pointer">
              <BellIcon />
              <span className="absolute top-1.75 right-2 w-1.75 h-1.75 rounded-full bg-red-500 border-2 border-white" />
            </button>

            {/* Help */}
            <button className="w-9 h-9 rounded-[9px] border border-[#ebebf5] bg-white flex items-center justify-center text-[#6b6b8a] hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-all duration-150 cursor-pointer">
              <HelpCircle />
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-[#ebebf5] mx-1.5" />

            {/* Admin profile */}
            <button className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity border-none bg-transparent">
              <span className="text-[13px] font-semibold text-[#1e1e2e]">
                Admin Profile
              </span>
              <div className="w-8.5 h-8.5 rounded-full bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white shrink-0">
                <UserIcon />
              </div>
            </button>
          </div>
        </header>

        {/* ── CONTENT ─────────────────────────────────────────────── */}
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
