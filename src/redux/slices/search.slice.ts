import { createSlice } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};
export const searchSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    isSearch: (state) => {
      console.log("clicked");
      state.isShow = !state.isShow;
    },
  },
});
export const { isSearch } = searchSlice.actions;
export default searchSlice.reducer;
