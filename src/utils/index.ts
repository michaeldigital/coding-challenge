import { IAccount, CalcType } from "src/type";

export const sumArrayNumber = (arr: number[]) => {
  return arr.reduce((a, b) => a + b, 0);
};

export const formatNumberWithPerc = (num:number) => {
  const rate = Math.round(num * 100);
  return `${rate}%`;
};

export const formatNumberWithComma = (num: number) => {
  const numWithoutCents = Math.round(num)
  const commaFormatData =numWithoutCents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${commaFormatData}`
};

export const calcRevenue = (accountsData: IAccount[]) =>{

  const numberArray = accountsData.map(account=>{
    const {account_category, total_value} = account;
    if(account_category==="revenue"){
      return total_value
    } 
    return 0
  })

  const totalRevenue = sumArrayNumber(numberArray);
  return totalRevenue
}

export const calcExpense = (accountsData: IAccount[]) =>{

  const numberArray = accountsData.map(account=>{
    const {account_category, total_value} = account;
    if(account_category==="expense"){
      return total_value
    } 
    return 0
  })

  const totalRevenue = sumArrayNumber(numberArray);
  return totalRevenue
}

export const calcSales = (accountsData: IAccount[]) =>{

  const numberArray = accountsData.map(account=>{
    const {account_type, value_type,total_value} = account;
    if(account_type === "sales" && value_type==="debit"){
      return total_value
    } 
    return 0
  })

  const totalRevenue = sumArrayNumber(numberArray);
  return totalRevenue
}

export const calcAssets = (accountsData: IAccount[]) =>{

  const baseNumberArray = accountsData.map(account=>{
    const {account_type, account_category, value_type,total_value} = account;
    if(account_category ==="assets"&& value_type==="debit"&&(account_type==="bank"||"current"||"current_accounts_receivable")){
      return total_value
    } 
    return 0
  })

  const subsNumberArray = accountsData.map(account=>{
    const {account_type, account_category, value_type,total_value} = account;
    if(account_category ==="assets"&& value_type==="credit"&&account_type===("bank"||"current"||"current_accounts_receivable")){
      return total_value
    } 
    return 0
  })

  const totalValue = sumArrayNumber(baseNumberArray) - sumArrayNumber(subsNumberArray)
  return totalValue
}

export const calcLiabilities = (accountsData: IAccount[]) =>{

  const baseNumberArray = accountsData.map(account=>{
    const {account_type, account_category, value_type,total_value} = account;
    if(account_category ==="liability" && value_type==="credit" && account_type===("current"||"current_accounts_receivable")){
      return total_value
    } 
    return 0
  })

  const subsNumberArray = accountsData.map(account=>{
    const {account_type, account_category, value_type,total_value} = account;
    if(account_category ==="liability" && value_type==="debit" && account_type===("current"||"current_accounts_receivable")){
      return total_value
    } 
    return 0
  })

  const totalValue = sumArrayNumber(baseNumberArray) - sumArrayNumber(subsNumberArray)
  return totalValue
}
