import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SnackbarState {
  isOpen: boolean;
  message: string;
  severity: "success" | "error" | "warning" | "info";
}

const initialState: SnackbarState = {
  isOpen: false,
  message: "",
  severity: "success",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (
      state,
      action: PayloadAction<{ message: string; severity: "success" | "error" | "warning" | "info" }>
    ) => {
      state.isOpen = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    closeSnackbar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showSnackbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
