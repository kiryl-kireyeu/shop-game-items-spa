import { useMemo } from 'react';

import { sortVehiclesByCurrentPrice } from '@/entities/vehicle/lib/sort-vehicles-by-current-price';
import type { SortDirection, Vehicle } from '@/entities/vehicle/model/types';

export const useSortedVehicles = (
    vehicles: Vehicle[],
    direction: SortDirection,
): Vehicle[] => {
    // useMemo avoids sorting the same filtered list again until data or direction changes.
    return useMemo(() => sortVehiclesByCurrentPrice(vehicles, direction), [direction, vehicles]);
};
