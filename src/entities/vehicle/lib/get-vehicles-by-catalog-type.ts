import type { CatalogType, Vehicle } from '../model/types';

export const getVehiclesByCatalogType = (
    vehicles: Vehicle[],
    catalogType: CatalogType,
): Vehicle[] => {
    const isPremiumCatalog = catalogType === 'premium';

    return vehicles.filter((vehicle) => vehicle.premium === isPremiumCatalog);
};
