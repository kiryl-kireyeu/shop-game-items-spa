import vehiclesData from '@/data/data.json';
import { wait } from '@/shared/lib/wait';

import { getVehiclesByCatalogType } from '../lib/get-vehicles-by-catalog-type';
import type { CatalogType, Vehicle } from '../model/types';

const MOCK_API_DELAY_MS = 1000;
const vehicles = vehiclesData.data as Vehicle[];

export const vehiclesApi = {
    async getByCatalogType(catalogType: CatalogType): Promise<Vehicle[]> {
        await wait(MOCK_API_DELAY_MS);

        return getVehiclesByCatalogType(vehicles, catalogType);
    },
};
