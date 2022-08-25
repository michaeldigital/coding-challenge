import { screen, render } from "@testing-library/react";
import Paginate from "../Paginate";
import ReduxProvider from "../../common/ReduxProvider";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const renderComponent = (withData) => {
  const sliceName = "bookmarkListSlice";
  const mockBk = {
    id: "id",
    name: "bookmark",
    url: "https://www.google.com",
  };
  const initialState = {
    bkList: withData ? [mockBk] : [],
  };

  const mockSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
  });

  const customStore = configureStore({
    reducer: {
      bkList: mockSlice.reducer,
    },
  });

  render(
    <Provider store={customStore}>
      <Paginate />
    </Provider>
  );
};

it("render properly if there is existing bookmark", () => {
  renderComponent(true);

  const page1 = screen.getByText("1");
  expect(page1).toBeInTheDocument();
});

it("not render if there is not existing bookmark", () => {
  renderComponent(false);

  const page1 = screen.queryByText("1");
  expect(page1).not.toBeInTheDocument();
});
