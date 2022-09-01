import { screen, render } from "@testing-library/react";
import TableValue from "../TableValue";

const renderComponent = () => {
  render(
    <TableValue
      revenue={12345}
      expense={22345.22}
      netProfitMargin={0.132}
      grossProfitMargin={-0.513232}
      workingCapitalRatio={0}
    />
  );
};

it("render properly with props", () => {
  renderComponent();
  const itemHeader = screen.getByRole("columnheader", { name: /item/i });
  const valueHeader = screen.getByRole("columnheader", { name: /value/i });
  const revenueNumber = screen.getByText("$12,345");
  // test with decimal
  const expenseNumber = screen.getByText("$22,345");
  const netProfitMarginNumber = screen.getByText("13%");
  // test with negative value
  const grossProfitMarginNumber = screen.getByText("-51%");
  // test with 0
  const workingCapitalRatio = screen.getByText("0");
  expect(itemHeader).toBeInTheDocument();
  expect(valueHeader).toBeInTheDocument();
  expect(revenueNumber).toBeInTheDocument();
  expect(expenseNumber).toBeInTheDocument();
  expect(netProfitMarginNumber).toBeInTheDocument();
  expect(grossProfitMarginNumber).toBeInTheDocument();
  expect(workingCapitalRatio).toBeInTheDocument();
});
