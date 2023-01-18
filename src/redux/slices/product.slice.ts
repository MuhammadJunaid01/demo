import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
// import { createSlice } from "@reduxjs/toolkit";
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
    getProducts: (
      state,
      action: PayloadAction<{
        category: string;
        description: string;
        id: 1;
        image: string;
        price: number;
        rating: { rate: number; count: number };
        title: string;
      }>
    ) => {
      if (action.payload == undefined) {
        return;
      }
      const vSta = current(state);
      // const obj= Object.assign({}, ...array)
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
          state.products.push(data);
        }
      );
      console.log(vSta.products);
    },
    getSearch: (state, action) => {
      state.searchRes.splice(0, state.searchRes.length);
      const res = state.products.filter((item) => {
        return item.category
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });

      state.searchRes = res;
    },
  },
});
export const { getProducts, getSearch } = productSlice.actions;
export default productSlice.reducer;
