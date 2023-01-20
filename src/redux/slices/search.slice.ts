import { createSlice } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};
/* Creating a slice of the state. */
export const searchSlice = createSlice({
  /* Creating a slice of the state. */
  name: "products",
  initialState,
  reducers: {
    /* A reducer. */
    isSearch: (state) => {
      console.log("clicked");

      /* Toggling the state. */
      state.isShow = !state.isShow;
    },
  },
});
export const { isSearch } = searchSlice.actions;
export default searchSlice.reducer;
