/* This is importing the redux store, redux-query, the api, and the redux slices. */
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productApi } from "../api";
import productSlice from "../slices/product.slice";
import searchSlice from "./../slices/search.slice";

/* Creating a store with the reducers and middleware. */
export const store = configureStore({
  reducer: {
    /* Adding the reducers to the store. */
    product: productSlice,
    search: searchSlice,

    [productApi.reducerPath]: productApi.reducer,
  },
  /* Adding the middleware to the store. */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
export type RootStore = ReturnType<typeof store.getState>;
/* A function that is used to setup listeners for the redux-query middleware. */
setupListeners(store.dispatch);
