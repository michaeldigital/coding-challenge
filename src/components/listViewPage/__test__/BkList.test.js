import BkList from "../BkList";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import ReduxProvider from "../../common/ReduxProvider";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const renderComponent = (withReduxValue) => {
  const initialState = {
    bkList: withReduxValue
      ? [
          {
            id: "id",
            name: "google",
            url: "https://www.google.com",
          },
        ]
      : [],
  };

  const mockSlice = createSlice({
    name: "bookmarkListSlice",
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
      <BkList />
    </Provider>
  );
};

it("render properly if there is bookmark in redux", () => {
  renderComponent(true);
  const theaderExample = screen.getByText("Name");
  expect(theaderExample).toBeInTheDocument();
});

it("no render if there is no bookmark in redux", () => {
  renderComponent(false);
  const theaderExample = screen.queryByText("Name");
  expect(theaderExample).not.toBeInTheDocument();
});
