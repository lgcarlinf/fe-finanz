import { useQuery } from "@tanstack/react-query";
import { financeApi } from "../api/finance";

const FINANCE_SUMMARY_KEY = "finance-summary";

export const useFinanceSummary = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [FINANCE_SUMMARY_KEY],
    queryFn: financeApi.getFinanceSummary,
  });

  return {
    financeSummary: data,
    isLoading,
    error,
  };
};
