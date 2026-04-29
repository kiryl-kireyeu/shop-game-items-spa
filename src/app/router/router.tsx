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
                path: 'premium',
                lazy: async () => {
                    const { default: Component } = { default: () => <div>Premium</div> };

                    return { Component };
                },
            },
            {
                path: 'collection',
                lazy: async () => {
                    const { default: Component } = { default: () => <div>Collection</div> };

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
