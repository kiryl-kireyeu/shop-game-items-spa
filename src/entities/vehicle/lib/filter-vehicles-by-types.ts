import type { Vehicle, VehicleType } from '../model/types';

export const filterVehiclesByTypes = (
    vehicles: Vehicle[],
    selectedTypes: VehicleType[],
): Vehicle[] => {
    if (selectedTypes.length === 0) {
        return vehicles;
    }

    const selectedTypesSet = new Set<VehicleType>(selectedTypes);

    return vehicles.filter((vehicle) => selectedTypesSet.has(vehicle.vehicle_type));
};
