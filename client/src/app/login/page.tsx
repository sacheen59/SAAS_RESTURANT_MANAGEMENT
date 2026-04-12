import { headers } from "next/headers";
import SuperAdminLogin from "@/components/SuperAdminLogin";
import TenantAdminLogin from "@/components/TenantAdminLogin";

export default async function LoginPage() {
  const h = headers();
  const isTenant = (await h).get("x-is-tenant") === "true";
  const subdomain = (await h).get("x-subdomain") || "";
  const host = (await h).get("x-host") || "";

  if (isTenant) {
    return <TenantAdminLogin host={host} tenantName={subdomain} />;
  }
  return <SuperAdminLogin />;
}
