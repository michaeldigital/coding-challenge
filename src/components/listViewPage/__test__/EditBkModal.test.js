import EditBkModal from "../EditBkModal";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// modal render

// form render

const renderComponent = (showModal) => {
  const initialState = {
    showModal: showModal,
    bkForEdit: {},
  };

  const mockSlice = createSlice({
    name: "editBkModal",
    initialState,
    reducers: {},
  });

  const customStore = configureStore({
    reducer: {
      editBkModal: mockSlice.reducer,
    },
  });

  render(
    <Provider store={customStore}>
      <EditBkModal />
    </Provider>
  );
};

it("render properly if redux showmodal value is true", () => {
  renderComponent(true);
  const modal = screen.getByTestId("modal");
  const form = screen.getByTestId("bookmark-form");
  expect(modal).toBeInTheDocument();
  expect(form).toBeInTheDocument();
});

it("not render if redux showmodal value is false", () => {
  renderComponent(false);
  const modal = screen.queryByTestId("modal");
  const form = screen.queryByTestId("bookmark-form");
  expect(modal).not.toBeInTheDocument();
  expect(form).not.toBeInTheDocument();
});
