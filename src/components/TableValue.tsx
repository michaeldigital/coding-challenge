import Table from "react-bootstrap/Table";
import {
    formatNumberWithPerc,
    formatNumberWithComma,
  } from "src/utils";

interface ITableValueProps {
  revenue: number;
  expense: number;
  grossProfitMargin: number;
  netProfitMargin: number;
  workingCapitalRatio: number;
}
const TableValue = ({
  revenue,
  expense,
  grossProfitMargin,
  netProfitMargin,
  workingCapitalRatio,
}: ITableValueProps) => {

    // if value is 0, just render 0 without formatting

    const formattedRevenue = revenue!==0? formatNumberWithComma(revenue):0;
    const formattedExpense = expense!==0? formatNumberWithComma(expense):0;
    const formattedGrossProfitMargin = grossProfitMargin!==0? formatNumberWithPerc(
        grossProfitMargin
    ):0;
    const formattedNetProfitMargin = netProfitMargin!==0? formatNumberWithPerc(
        netProfitMargin
    ):0;
    const formattedWorkingCapitalRatio = workingCapitalRatio!==0? formatNumberWithPerc(
        workingCapitalRatio
    ):0;
  return (
    <Table striped bordered responsive="sm">
      <thead>
        <tr>
          <th>Item</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Revenue</td>
          <td>{formattedRevenue}</td>
        </tr>
        <tr>
          <td>Expense</td>
          <td>{formattedExpense}</td>
        </tr>
        <tr>
          <td>Gross profit margin</td>
          <td>{formattedGrossProfitMargin}</td>
        </tr>
        <tr>
          <td>Net profit margin</td>
          <td>{formattedNetProfitMargin}</td>
        </tr>

        <tr>
          <td>Working capital ratio</td>
          <td>{formattedWorkingCapitalRatio}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableValue;
