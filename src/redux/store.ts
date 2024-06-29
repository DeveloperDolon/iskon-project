"use client";
import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/baseApi";
// import userSlice from "./features/userAuth.ts";

export const store = configureStore({
  reducer: {
    // userSlice: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  // * Middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
