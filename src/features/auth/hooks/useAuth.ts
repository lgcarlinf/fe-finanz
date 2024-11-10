import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AUTH_KEY, authApi } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const hasToken = !!localStorage.getItem("token");

  const { data: auth, isLoading } = useQuery({
    queryKey: [AUTH_KEY],
    queryFn: authApi.checkAuth,
    retry: false,
    staleTime: Infinity,
    enabled: hasToken,
    throwOnError(error: AxiosError) {
      if (error.status === 401) {
        localStorage.removeItem("token");
        queryClient.setQueryData([AUTH_KEY], null);
        navigate("/login");
        return false;
      }
      return true;
    },
  });

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData([AUTH_KEY], data);
      navigate("/dashboard");
    },
  });

  const registerMutation = useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      queryClient.setQueryData(AUTH_KEY, data);
    },
  });

  /*   const checkTokenMutation = useMutation({
    mutationFn: authApi.checkAuth,
    onSuccess: (data) => {
      queryClient.setQueryData(AUTH_KEY, data);
    },
  }); */

  const logout = () => {
    localStorage.removeItem("token");
    queryClient.setQueryData([AUTH_KEY], null);
    queryClient.clear();
    navigate("/login");
  };

  return {
    user: auth,
    isLoading,
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    /*     checkAuth: checkTokenMutation.mutateAsync, */
    logout,
    isAuthenticated: !!auth,
  };
};
