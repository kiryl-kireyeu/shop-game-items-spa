import { useMemo } from 'react';

import { filterVehiclesByTypes } from '@/entities/vehicle/lib/filter-vehicles-by-types';
import type { Vehicle, VehicleType } from '@/entities/vehicle/model/types';

export const useFilteredVehicles = (
    vehicles: Vehicle[],
    selectedTypes: VehicleType[],
): Vehicle[] => {
    // useMemo keeps the URL-driven filter from recomputing unless source data or selected types change.
    return useMemo(
        () => filterVehiclesByTypes(vehicles, selectedTypes),
        [selectedTypes, vehicles],
    );
};
