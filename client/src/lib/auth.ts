const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

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
