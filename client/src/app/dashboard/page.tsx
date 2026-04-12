"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "@/lib/auth";

export default function TenantDashboard() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/login");
      return;
    }
    setName(localStorage.getItem("username") || "");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-900 capitalize">
        {name} dashboard
      </h1>
    </main>
  );
}
