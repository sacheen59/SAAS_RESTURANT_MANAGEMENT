import { getToken, handleUnauthorizedResponse } from "@/lib/auth";
import { API } from "@/utils/server-url";
import { CreateTenantData } from "../tenant-slice";
import { tenantActions } from "../tenant-slice";

const getAuthHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
  "Content-Type": "application/json",
});

const getErrorMessage = (error: unknown, fallback: string) => {
  if (error instanceof Error) return error.message;
  return fallback;
};

export const fetchTenants =
  ({ page = 1, status = "all" }: { page?: number; status?: string } = {}) =>
  async (dispatch: any) => {
    try {
      dispatch(tenantActions.tenantRequest());
      const query = new URLSearchParams({
        page: String(page),
        page_size: "8",
      });
      if (status !== "all") query.set("status", status);

      const response = await fetch(
        `${API}/api/tenant/list-create/?${query.toString()}`,
        {
          headers: getAuthHeaders(),
        },
      );
      handleUnauthorizedResponse(response);

      if (!response.ok) {
        throw new Error("Failed to fetch tenant data.");
      }

      const data = await response.json();
      console.log("Tenant list API response:", data);
      dispatch(tenantActions.tenantListSuccess(data));
    } catch (error) {
      dispatch(
        tenantActions.tenantFailure(
          getErrorMessage(
            error,
            "Something went wrong while fetching tenants.",
          ),
        ),
      );
    }
  };

export const createTenant =
  (payload: CreateTenantData) => async (dispatch: any) => {
    try {
      dispatch(tenantActions.tenantRequest());

      const response = await fetch(`${API}/api/tenant/list-create/`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          name: payload.clientName,
          status: payload.status,
          schema_name: payload.schema,
          slug: payload.slug,
          domain: payload.domain,
          is_primary: payload.isPrimary,
          username: payload.username,
          password: payload.password,
        }),
      });
      handleUnauthorizedResponse(response);

      if (!response.ok) {
        throw new Error("Failed to create tenant.");
      }

      const data = await response.json();
      dispatch(tenantActions.createTenantSuccess(data));
    } catch (error) {
      dispatch(
        tenantActions.tenantFailure(
          getErrorMessage(error, "Something went wrong while creating tenant."),
        ),
      );
    }
  };
