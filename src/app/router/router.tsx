import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './layouts/root-layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <div>Error Ellement</div>,
        children: [
            {
                path: 'premium',
                lazy: async () => {
                    const { default: Component } = { default: () => <div>Premium</div> };

                    return { Component };
                },
            },
            {
                path: 'collections',
                lazy: async () => {
                    const { default: Component } = { default: () => <div>Collections</div> }
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
