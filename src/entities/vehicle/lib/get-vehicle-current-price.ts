import type { Vehicle } from '../model/types';

export const getVehicleCurrentPrice = (vehicle: Vehicle): number => {
    return vehicle.discount > 0 ? vehicle.price : vehicle.old_price;
};
