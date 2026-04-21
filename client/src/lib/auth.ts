import { API } from "@/utils/server-url";

export async function superAdminLogin(email: string, password: string) {
  const res = await fetch(`${API}/api/admin/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    throw new Error(
      (await res.json())?.non_field_errors?.[0] || "Login failed",
    );
  }
  return res.json();
}

export async function tenantLogin(
  domain: string,
  username: string,
  password: string,
) {
  const res = await fetch(`${API}/api/tenant/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ domain, username, password }),
  });
  if (!res.ok) {
    throw new Error(
      (await res.json())?.non_field_errors?.[0] || "Login failed",
    );
  }
  return res.json();
}

export const saveSession = (data: Record<string, string>) =>
  Object.entries(data).forEach(([key, value]) =>
    localStorage.setItem(key, value),
  );

export const clearSession = () => localStorage.clear();

export const getToken = () => localStorage.getItem("access");

const decodeJwtPayload = (token: string) => {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = atob(normalized);
    return JSON.parse(decoded) as { exp?: number };
  } catch {
    return null;
  }
};

export const isTokenExpired = (token: string | null) => {
  if (!token) return true;
  const payload = decodeJwtPayload(token);
  if (!payload?.exp) return false;
  return payload.exp * 1000 <= Date.now();
};

export const hasValidToken = () => !isTokenExpired(getToken());

export const logoutAndRedirect = (path = "/login") => {
  clearSession();
  if (typeof window !== "undefined") {
    window.location.href = path;
  }
};

export const handleUnauthorizedResponse = (response: Response) => {
  if (response.status === 401) {
    logoutAndRedirect();
    throw new Error("Session expired. Please login again.");
  }
};
