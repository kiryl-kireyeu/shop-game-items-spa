export type NavigationT = {
    title: string;
    to: string;
};

export const navigationItems: NavigationT[] = [
    {
        title: 'Премиальная',
        to: '/premium',
    },
    {
        title: 'Коллекционная',
        to: '/collection',
    },
];
