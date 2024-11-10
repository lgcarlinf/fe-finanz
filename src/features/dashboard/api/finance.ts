import { api } from "../../auth/api/auth";
import { FinanceResponse } from "../dto/finance";

class FinanceApi {
  async getFinanceSummary(): Promise<FinanceResponse> {
    const { data } = await api.get("/transaction/list");
    return data;
  }
}

export const financeApi = new FinanceApi();
