import type { VehicleType } from '@/entities/vehicle/model/types';

type VehicleTypeFilterItem = {
    id: VehicleType;
    iconSrc: string;
    label: string;
};

export const vehicleTypeFilterItems: VehicleTypeFilterItem[] = [
    {
        id: 'lightTank',
        iconSrc: '/icons/lightTank.svg',
        label: 'Лёгкие танки',
    },
    {
        id: 'mediumTank',
        iconSrc: '/icons/mediumTank.svg',
        label: 'Средние танки',
    },
    {
        id: 'heavyTank',
        iconSrc: '/icons/heavyTank.svg',
        label: 'Тяжёлые танки',
    },
    {
        id: 'AT-SPG',
        iconSrc: '/icons/AT-SPG.svg',
        label: 'ПТ-САУ',
    },
    {
        id: 'SPG',
        iconSrc: '/icons/SPG.svg',
        label: 'САУ',
    },
];
