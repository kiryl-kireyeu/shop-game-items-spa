import { Navigate, createBrowserRouter } from 'react-router';

import RootLayout from './layouts/root-layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <div>Error Element</div>,
        children: [
            {
                index: true,
                element: <Navigate to="/premium" replace />,
            },
            {
                path: ':catalogType',
                lazy: async () => {
                    const { default: Component } = await import('@/pages/catalog/ui/catalog-page');

                    return { Component };
                },
            },
            {
                path: '*',
                element: <div>Page not found</div>,
            },
        ],
    },
]);

export default router;
