import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import TableValue from "src/components/TableValue";
import { get } from "src/services/api";
import { apiPath } from "src/const";
import {
  calcAssets,
  calcExpense,
  calcLiabilities,
  formatNumberWithPerc,
  calcRevenue,
  calcSales,
  formatNumberWithComma,
} from "src/utils";
import styled from "styled-components";

export default function Home() {
  const [revenue, setRevenue] = useState(0);
  const [expense, setExpense] = useState(0);
  const [workingCapitalRatio, setWorkingCapitalRatio] = useState(0);
  const [grossProfitMargin, setGrossProfitMargin] = useState(0);
  const [netProfitMargin, setNetProfitMargin] = useState(0);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // fetch external json data
      const accountList = await get(apiPath as string);

      // calcuate total values of revenue, expense, sales, assets, liabitities
      const totalRevenueNumber = calcRevenue(accountList);
      const totalExpenseNumber = calcExpense(accountList);
      const totalSalesNumber = calcSales(accountList);
      const totalAssetsNumber = calcAssets(accountList);
      const totalLiabilitiesNumber = calcLiabilities(accountList);

      // calculate margin and ratio
      const grossProfitMarginNumber = totalSalesNumber / totalRevenueNumber;
      const netProfitMarginNumber =
        (totalRevenueNumber - totalExpenseNumber) / totalRevenueNumber;
      const workingCapitalRatioNumber =
        totalAssetsNumber / totalLiabilitiesNumber;

      // set state
      setRevenue(totalRevenueNumber);
      setExpense(totalExpenseNumber);
      setGrossProfitMargin(grossProfitMarginNumber);
      setNetProfitMargin(netProfitMarginNumber);
      setWorkingCapitalRatio(workingCapitalRatioNumber);
    };

    fetchData();
  }, []);

  const handleClick = () => {
    setShowTable(true);
  };
  return (
    <PageContainer>
      <Head>
        <title>Code challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Account Calculator</h1>
        <div>
          Please click the button below, and see the values after calcuation.
        </div>
        <Button onClick={handleClick} disabled={showTable}>
          Print values
        </Button>

        {showTable && (
          <TableValue
            revenue={revenue}
            expense={expense}
            netProfitMargin={netProfitMargin}
            grossProfitMargin={grossProfitMargin}
            workingCapitalRatio={workingCapitalRatio}
          />
        )}
      </Main>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 40rem;
  max-width: 90%;
  margin: auto;
  padding: 3rem 0rem;
`;
const Main = styled.main`
  & > h1,
  table,
  button,
  div {
    margin-top: 1.5rem;
  }
`;
