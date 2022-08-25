import AddBkForm from "../AddBkForm";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import ReduxProvider from "../../common/ReduxProvider";

// render title and form;
//

const renderComponent = () => {
  render(
    <ReduxProvider>
      <AddBkForm />
    </ReduxProvider>
  );
};

it("render properly", () => {
  renderComponent();
  const title = screen.getByRole("heading", {
    level: 1,
    name: "Add Bookmarks",
  });
  const form = screen.getByTestId("bookmark-form");
  expect(title).toBeInTheDocument();
  expect(form).toBeInTheDocument();
});
