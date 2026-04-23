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

  return <div>something {name}</div>;
}
