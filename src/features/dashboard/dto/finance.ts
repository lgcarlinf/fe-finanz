export interface FinanceResponse {
  expenses: Transaction[];
  incomes: Transaction[];
  profit: number;
  total: totalTransaction;
}

export interface Transaction {
  ammount: number;
  createdAt: Date;
  description: string;
  id: string;
  type: string;
  updatedAt: Date;
}

interface totalTransaction {
  totalIncome: number;
  totalExpense: number;
}
