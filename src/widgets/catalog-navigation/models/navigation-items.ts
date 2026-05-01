export type NavigationT = {
    title: string;
    to: string;
};

export const navigationItems = [
    {
        title: 'Премиальная',
        to: '/premium',
    },
    {
        title: 'Коллекционная',
        to: '/collection',
    },
] as const satisfies readonly NavigationT[];
