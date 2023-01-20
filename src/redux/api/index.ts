import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* Creating a reducer and a set of actions for the productApi. */
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  /* Used to create a tag for the query. */
  tagTypes: ["products"],
  /* Creating a function called getProduct that returns a query. */
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    /* Creating a function called getSingleProduct that returns a query. */
    getSingleProduct: builder.query({
      query: (id) => {
        console.log(`called${id}`);
        return `/products/${id}`;
      },
      providesTags: ["products"],
    }),
  }),
});
/* Exporting the useGetProductQuery and useGetSingleProductQuery functions from the productApi. */
export const { useGetProductQuery, useGetSingleProductQuery } = productApi;
