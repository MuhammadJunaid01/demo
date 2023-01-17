import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
  }),
});
export const { useGetProductQuery } = productApi;
