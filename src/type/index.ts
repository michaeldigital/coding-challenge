export interface IAccount {
  system_account: string;
  value_type: "debit" | "credit";
  total_value: number;
  account_status: "ACTIVE";
  account_type:
    | "overheads"
    | "sales"
    | "current_accounts_receivable"
    | "bank"
    | "fixed"
    | "current_accounts_payable"
    | "tax"
    | "current"
    | "payroll";
  account_type_bank: "" | "Bank";
  account_category: "expense" | "revenue" | "assets" | "liability";
  account_code: string;
  account_currency: "AUD";
  account_identifier: string;
  account_name: string;
}
