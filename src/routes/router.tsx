import { createBrowserRouter, Navigate } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { ProtectedRoute } from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { Login } from "../features/auth/pages/Login";

export const createAppRouter = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      path: '/',
      index: false,
      children: [
        {
          path: '/',
          element: <Navigate to="login" replace />,
        },
        {
          path: 'login',
          element: <PublicRoute />,
          children: [
            {
              index: true,
              element: <Login />,
            },
          ]
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: 'dashboard',
              element: <div>Autenticado</div>,
            },
          ],
        },
      ],
    },
  ],
  );
};