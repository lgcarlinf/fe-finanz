
import { useAuth } from '../features/auth/hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import { Spinner } from '../features/shared/components/Spinner';


export const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <Spinner />
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}