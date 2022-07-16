import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../slices";

export const store = configureStore({
  reducer: {
    userState: userReducer,
  },
});

setupListeners(store.dispatch);
