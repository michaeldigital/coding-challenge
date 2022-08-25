import BookmarkForm from "../BookmarkForm";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import axios from "axios";

jest.mock("axios");

// render name input;
// render url input;
// render submit button;
// render title

// submit logic
// if empty error;
// if url not valid, error;
// if url not effective, error;
// if effective, redux data update;

const mockHandleSubmitSuccess = jest.fn();

const renderComponent = () => {
  render(<BookmarkForm handleSubmitSuccess={mockHandleSubmitSuccess} />);
};

it("render properly", () => {
  renderComponent();
  const form = screen.getByTestId("bookmark-form");
  const button = screen.getByRole("button", { name: /Submit/i });
  const nameInput = screen.getByPlaceholderText("Name");
  const urlInput = screen.getByPlaceholderText("Url");

  expect(form).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(urlInput).toBeInTheDocument();
});

// form validation works
it("form validate - empty input", async () => {
  renderComponent();
  const button = screen.getByRole("button", { name: /Submit/i });
  const nameInput = screen.getByPlaceholderText("Name");
  const urlInput = screen.getByPlaceholderText("Url");

  // if input is empty and user clicks submit button, show error;
  await user.click(button);
  const errorInfo1 = await screen.findAllByText("This field is required.");
  expect(errorInfo1).toHaveLength(2);

  await user.type(nameInput, "bk1");
  await user.click(button);

  const errorInfo2 = await screen.findAllByText("This field is required.");
  expect(errorInfo2).toHaveLength(1);
});

it("form validate - url format", async () => {
  renderComponent();
  const button = screen.getByRole("button", { name: /Submit/i });
  const nameInput = screen.getByPlaceholderText("Name");
  const urlInput = screen.getByPlaceholderText("Url");

  // if input is empty and user clicks submit button, show error;

  await user.type(nameInput, "bk1");
  await user.type(urlInput, "abc");
  await user.click(button);

  const errorInfo1 = await screen.findByText("Url format is wrong.");
  expect(errorInfo1).toBeInTheDocument();
});

it("form validate - url exits", async () => {
  axios.post.mockResolvedValue({
    status: 200,
  });
  renderComponent();
  const button = screen.getByRole("button", { name: /Submit/i });
  const nameInput = screen.getByPlaceholderText("Name");
  const urlInput = screen.getByPlaceholderText("Url");

  // if input is empty and user clicks submit button, show error;

  await user.type(nameInput, "bk1");
  await user.type(urlInput, "https://www.pluralsightfwegaefwfang.com/");
  await user.click(button);
  expect(mockHandleSubmitSuccess).toBeCalledTimes(1);
});
