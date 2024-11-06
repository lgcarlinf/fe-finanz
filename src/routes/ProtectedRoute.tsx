
import { useAuth } from '../features/auth/hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'


export const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}