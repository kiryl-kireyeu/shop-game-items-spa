import { useMemo } from 'react';

import { sortVehiclesByCurrentPrice } from '@/entities/vehicle/lib/sort-vehicles-by-current-price';
import type { SortDirection, Vehicle } from '@/entities/vehicle/model/types';

export const useSortedVehicles = (
    vehicles: Vehicle[],
    direction: SortDirection,
): Vehicle[] => {
    return useMemo(() => sortVehiclesByCurrentPrice(vehicles, direction), [direction, vehicles]);
};
