import { createSlice } from "@reduxjs/toolkit";

export interface CreateTenantData {
  clientName: string;
  status: string;
  schema: string;
  slug: string;
  domain: string;
  isPrimary: boolean;
  username: string;
  password: string;
}

export interface AllTenantData {
  id: number;
  name: string;
  domain: string;
  status: string;
  created_at: string;
}

interface TenantState{
  allTenantData: Array<AllTenantData>;
  tenantData: AllTenantData | null;
  count: number;
  next: string | null;
  previous: string | null;
  loading: boolean;
  error: string | null;
}

const initialTenantState : TenantState = {
  allTenantData: [],
  tenantData: null,
  count: 0,
  next: null,
  previous: null,
  loading: true,
  error: null,
};

const tenantSlice = createSlice({
  name: "tenant",
  initialState: initialTenantState,
  reducers: {
    tenantRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    tenantListSuccess: (state,action) => {
      state.loading = false;
      state.allTenantData = action.payload.results;
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    createTenantSuccess: (state, action) => {
      state.loading = false;
      state.tenantData = action.payload;
    },
    tenantFailure: (state,action) => {
      state.loading = false;
      state.error = action.payload
    },
  },
});

export const tenantActions = tenantSlice.actions;

export default tenantSlice;
