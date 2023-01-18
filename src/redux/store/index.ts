import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productApi } from "../api";
import productSlice from "../slices/product.slice";
import searchSlice from "./../slices/search.slice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    search: searchSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
export type RootStore = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
