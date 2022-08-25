import InputGroup from "../InputGroup";
import { screen, render } from "@testing-library/react";

const handleOnChange = jest.fn();

it("render properly", () => {
  render(
    <InputGroup
      value="value"
      inputType="text"
      placeholder="placeholder"
      label="title"
      id="testid"
      onChange={handleOnChange}
    />
  );
  const formControl = screen.getByRole("textbox");
  expect(formControl).toBeInTheDocument();
});
