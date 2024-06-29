"use client";
import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/baseApi";
// import userSlice from "./features/userAuth.ts";
import todoReducer from "./features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    // userSlice: userSlice,
    todos: todoReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  // * Middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
