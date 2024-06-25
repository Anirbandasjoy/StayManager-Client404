import { configureStore } from "@reduxjs/toolkit";
import stayManagerApi from "../redux/baseAPi";

export const store = configureStore({
  reducer: {
    [stayManagerApi.reducerPath]: stayManagerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stayManagerApi.middleware),
});
