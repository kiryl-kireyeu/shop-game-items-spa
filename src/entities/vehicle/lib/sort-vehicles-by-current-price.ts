import type { SortDirection, Vehicle } from '../model/types';
import { getVehicleCurrentPrice } from './get-vehicle-current-price';

const SORT_DIRECTION_MULTIPLIER: Record<SortDirection, number> = {
    asc: 1,
    desc: -1,
};

export const sortVehiclesByCurrentPrice = (
    vehicles: Vehicle[],
    direction: SortDirection,
): Vehicle[] => {
    const multiplier = SORT_DIRECTION_MULTIPLIER[direction];

    return [...vehicles].sort((leftVehicle, rightVehicle) => {
        return (
            (getVehicleCurrentPrice(leftVehicle) - getVehicleCurrentPrice(rightVehicle)) *
            multiplier
        );
    });
};
