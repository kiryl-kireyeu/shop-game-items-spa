import type { VehicleType } from '@/entities/vehicle/model/types';

import { vehicleTypeFilterItems } from '../model/filter-items';

const supportedVehicleTypes = new Set<VehicleType>(
    vehicleTypeFilterItems.map(({ id }) => id),
);

export const isVehicleType = (value: string): value is VehicleType => {
    return supportedVehicleTypes.has(value as VehicleType);
};

export const parseVehicleTypesParams = (values: string[]): VehicleType[] => {
    const uniqueTypes = new Set<VehicleType>();

    values.forEach((type) => {
        if (isVehicleType(type)) {
            uniqueTypes.add(type);
        }
    });

    return [...uniqueTypes];
};
