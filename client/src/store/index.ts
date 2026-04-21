import { configureStore } from "@reduxjs/toolkit";
import tenantSlice from "./admin/tenant/tenant-slice";

const store = configureStore({
  reducer: {
    tenant: tenantSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
