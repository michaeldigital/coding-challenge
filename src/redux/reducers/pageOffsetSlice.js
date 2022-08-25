import { createSlice } from "@reduxjs/toolkit";

const sliceName = "pageOffsetSlice";

const initialState = {
  pageOffset: 0,
};

export const pageOffsetSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    // update page offset, when clicking paginate page.
    updatePageOffset: (state, action) => {
      state.pageOffset = action.payload;
    },
  },
});

export const { updatePageOffset } = pageOffsetSlice.actions;
export default pageOffsetSlice.reducer;
