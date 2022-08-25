import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  bkForEdit: {},
};

export const editBkModalSlice = createSlice({
  name: "editBkModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
    // edit bookmark is using a modal, and setBkforEdit decides which bookmark to edit.
    setBkForEdit: (state, action) => {
      state.bkForEdit = action.payload;
    },
  },
});

export const { openModal, closeModal, setBkForEdit } = editBkModalSlice.actions;

export default editBkModalSlice.reducer;
