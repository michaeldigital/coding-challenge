import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../Modal";

const handleModalClose = jest.fn();

it("render properly with mandatory props", async () => {
  render(
    <Modal handleClose={handleModalClose} show={true}>
      <div>test</div>
    </Modal>
  );
  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByTestId("modal")).toBeInTheDocument();
  const closeButton = screen.getByRole("button", { name: "Close" });
  await userEvent.click(closeButton);
  expect(handleModalClose).toBeCalledTimes(1);
});

it("render properly with all props", async () => {
  render(
    <Modal
      handleClose={handleModalClose}
      show={true}
      size="sm"
      modalHeader="modal header"
    >
      {<div>test</div>}
    </Modal>
  );

  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByTestId("modal")).toBeInTheDocument();
  expect(screen.getByText("modal header")).toBeInTheDocument();
  const closeButton = screen.getByRole("button", { name: "Close" });
  await userEvent.click(closeButton);
  expect(handleModalClose).toBeCalledTimes(1);
});
