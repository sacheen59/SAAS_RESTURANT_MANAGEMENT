import { configureStore } from "@reduxjs/toolkit";
import tenantSlice from "./admin/tenant/tenant-slice";
import toggleSidebarAndHeaderSlice from "./theme/toggle-full-screen";

const store = configureStore({
  reducer: {
    tenant: tenantSlice.reducer,
    toggleSidebarAndHeader: toggleSidebarAndHeaderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
