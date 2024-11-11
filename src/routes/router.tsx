import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { Login } from "../features/auth/pages/Login";
import Dashboard from "../features/dashboard/pages/Dashboard";
import { Register } from "../features/auth/pages/Register";

export const createAppRouter = () => {
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
          path: 'register',
          element: <PublicRoute />,
          children: [
            {
              index: true,
              element: <Register />,
            },
          ]
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: 'dashboard',
              element: <Dashboard />
            },
          ],
        },
      ],
    },
  ],
  );
};