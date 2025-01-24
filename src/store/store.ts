import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import manipulatorSlice from "./slices/manipulatorSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    manipulator: manipulatorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
