import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggleSidebarHeader: true,
};

const toggleSidebarAndHeaderSlice = createSlice({
  name: "toggleFullScreen",
  initialState: initialState,
  reducers: {
    toggleSidebarAndHeaderAction: (state) => {
      state.isToggleSidebarHeader = !state.isToggleSidebarHeader;
    },
  },
});

export const { toggleSidebarAndHeaderAction } =
  toggleSidebarAndHeaderSlice.actions;
export default toggleSidebarAndHeaderSlice;
