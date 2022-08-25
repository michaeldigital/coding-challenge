import bookmarkListReducer from "./reducers/bookmarkListSlice";
import editBkModalReducer from "./reducers/editBkModalSlice";
import pageOffsetReducer from "./reducers/pageOffsetSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    bkList: bookmarkListReducer,
    editBkModal: editBkModalReducer,
    pageOffset: pageOffsetReducer,
  },

  middleware: [],
});
