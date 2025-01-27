import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import manipulatorSlice from "./slices/manipulatorSlice"
import snackbarSlice from "./slices/snackBarSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    manipulator: manipulatorSlice,
    snackBar: snackbarSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
