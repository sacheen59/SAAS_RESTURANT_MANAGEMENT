import { createSlice } from "@reduxjs/toolkit";

export interface TenantData {
  clientName: string;
  status: string;
  schema: string;
  slug: string;
  domain: string;
  isPrimary: boolean;
  username: string;
  password: string;
}

const initialTenantState = {
  tenantData: <TenantData>{},
  loading: true,
  error: null,
};

const tenantSlice = createSlice({
    name: 'tenant',
    initialState: initialTenantState,
    reducers:{

    }
});
