import {sumArrayNumber, formatNumberWithPerc, formatNumberWithComma, calcRevenue, calcExpense, calcAssets, calcLiabilities, calcSales} from "../";
import {testingAccountData} from "src/testingData"
import {IAccount} from "src/type"

it("sum function works - add array number", ()=>{

    const arr1 = [1, 3, 10, 0]
    const sum1 = sumArrayNumber(arr1)
    expect(sum1).toBe(14)
})

it("calPercRate function works - calculate change rate in percentage", ()=>{
    const rateInPercentage = formatNumberWithPerc(0.213)
    expect(rateInPercentage).toBe("21%")
})

it("formatNumberWithComma function works - format data with comma", ()=>{

    const num1 = 123456;
    const formatStr1 = formatNumberWithComma(num1);
    expect(formatStr1).toBe("$123,456")

    const num2 = 123456.333;
    const formatStr2 = formatNumberWithComma(num2);
    expect(formatStr2).toBe("$123,456")

    const num3 = 123456.533;
    const formatStr3 = formatNumberWithComma(num3);
    expect(formatStr3).toBe("$123,457")
})

it("calcRevenue function works = calculate total revenue", ()=>{
    const totalRevenueInNumber = calcRevenue(testingAccountData.data as IAccount[])
    expect(totalRevenueInNumber).toBe(32431)
})

it("calcExpense function works = calculate total expense", ()=>{
    const totalRevenueInNumber = calcExpense(testingAccountData.data as IAccount[])
    expect(totalRevenueInNumber).toBe(36529.68)
})

it("calcSales function works = calculate total sales", ()=>{
    const totalRevenueInNumber = calcSales(testingAccountData.data as IAccount[])
    expect(totalRevenueInNumber).toBe(36529.68)
})

it("calcAssets function works = calculate total assets", ()=>{
    const totalRevenueInNumber = calcAssets(testingAccountData.data as IAccount[])
    expect(totalRevenueInNumber).toBe(27646.58)
})

it("calcLiabilities function works = calculate total liabilities", ()=>{
    const totalRevenueInNumber = calcLiabilities(testingAccountData.data as IAccount[])
    expect(totalRevenueInNumber).toBe(19212.21)
})



