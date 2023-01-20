import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
/* Defining the shape of the data that will be stored in the redux store. */
interface ProductType {
  products: {
    category: string;
    description: string;
    id: 1;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
  }[];
  searchRes: {
    category: string;
    image: string;
    price: number;
    rating: { rate: number; count: number };
  }[];
}
const initialState: ProductType = {
  products: [],
  searchRes: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    /* A reducer function. */
    getProducts: (
      /* A type of action.payload. */
      state,
      action: PayloadAction<
        {
          category: string;
          description: string;
          id: 1;
          image: string;
          price: number;
          rating: { rate: number; count: number };
          title: string;
        }[]
      >
    ) => {
      /* Checking if the payload is undefined. If it is, it returns. */
      if (action.payload == undefined) {
        return;
      }
      /* Pushing the data from the payload into the products array. */
      action.payload.map(
        (
          data: WritableDraft<{
            category: string;
            description: string;
            id: 1;
            image: string;
            price: number;
            rating: { rate: number; count: number };
            title: string;
          }>
        ) => {
          return state.products.push(data);
        }
      );
    },
    /* Filtering the products array and pushing the filtered data into the searchRes array. */
    getSearch: (state, action) => {
      const res = state.products.filter((item) => {
        return item.category
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });

      state.searchRes = res;
    },
  },
});
/* Exporting the actions and reducer. */
export const { getProducts, getSearch } = productSlice.actions;
export default productSlice.reducer;
