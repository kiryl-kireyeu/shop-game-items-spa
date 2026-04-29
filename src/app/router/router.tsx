import { Navigate, createBrowserRouter } from 'react-router';

import CatalogLayout from '@/widgets/catalog-layout/ui/catalog-layout';

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
                element: <CatalogLayout />,
                children: [
                    {
                        path: 'premium',
                        lazy: async () => {
                            const { default: Component } = await import(
                                '@/pages/premium/ui/premium-page'
                            );

                            return { Component };
                        },
                    },
                    {
                        path: 'collection',
                        lazy: async () => {
                            const { default: Component } = await import(
                                '@/pages/collection/ui/collection-page'
                            );

                            return { Component };
                        },
                    },
                ],
            },
            {
                path: '*',
                element: <div>Page not found</div>,
            },
        ],
    },
]);

export default router;
