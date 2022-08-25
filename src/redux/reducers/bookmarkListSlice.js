import { createSlice } from "@reduxjs/toolkit";

const sliceName = "bookmarkListSlice";

const sessionStorageValue =
  typeof window !== "undefined" && window.sessionStorage.getItem(sliceName);

const initialState = {
  bkList: sessionStorageValue ? JSON.parse(sessionStorageValue) : [],
};

export const bookmarkListSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    // add bookmark, action payload is new bookmark object
    addBookmark: (state, action) => {
      state.bkList = [action.payload, ...state.bkList];
      const serializedNewState = JSON.stringify(state.bkList);
      sessionStorage.setItem(sliceName, serializedNewState);
    },
    // remove bookmark, action payload is id of bookmark to be deleted.
    removeBookmark: (state, action) => {
      const bkIndex = state.bkList.findIndex((bk) => bk.id === action.payload);
      state.bkList.splice(bkIndex, 1);
      const serializedNewState = JSON.stringify(state.bkList);
      sessionStorage.setItem(sliceName, serializedNewState);
    },
    // edit bookmark, action payload is bookmark updated.
    editBookmark: (state, action) => {
      console.log(action.payload);
      const bkIndex = state.bkList.findIndex(
        (bk) => bk.id === action.payload.id
      );
      console.log(bkIndex);
      state.bkList[bkIndex].name = action.payload.name;
      state.bkList[bkIndex].url = action.payload.url;
      const serializedNewState = JSON.stringify(state.bkList);
      sessionStorage.setItem(sliceName, serializedNewState);
    },
  },
});

export const { addBookmark, removeBookmark, editBookmark } =
  bookmarkListSlice.actions;
export default bookmarkListSlice.reducer;
