
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppRouter } from './routes/router';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutos
            gcTime: 1000 * 60 * 60, // 1 hora
            retry: 1,
        },
    },
});

const App = () => {
    const router = createAppRouter(queryClient);

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App