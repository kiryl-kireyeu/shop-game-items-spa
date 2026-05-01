import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { vehiclesApi } from '@/entities/vehicle/api/vehicles-api';
import { isCatalogType } from '@/entities/vehicle/model/guards';
import type { CatalogType, Vehicle } from '@/entities/vehicle/model/types';
import { useSortedVehicles } from '@/features/vehicle-price-sort/model/use-sorted-vehicles';
import { useVehiclePriceSort } from '@/features/vehicle-price-sort/model/use-vehicle-price-sort';
import { useFilteredVehicles } from '@/features/vehicle-type-filter/model/use-filtered-vehicles';
import { useVehicleTypeFilter } from '@/features/vehicle-type-filter/model/use-vehicle-type-filter';

type CatalogVehiclesState = {
    catalogType: CatalogType | null;
    vehicles: Vehicle[];
};

export const useCatalogPage = () => {
    const { catalogType } = useParams();
    const [vehiclesState, setVehiclesState] = useState<CatalogVehiclesState>({
        catalogType: null,
        vehicles: [],
    });
    const {
        direction: sortDirection,
        isPending: isSortPending,
        handleToggleDirection,
    } = useVehiclePriceSort();
    const {
        selectedTypes: selectedVehicleTypes,
        isPending: isFilterPending,
        handleVehicleTypeToggle,
    } = useVehicleTypeFilter();

    const isValidCatalogType = isCatalogType(catalogType);
    const isLoading = isValidCatalogType && vehiclesState.catalogType !== catalogType;
    const vehicles = isLoading ? [] : vehiclesState.vehicles;

    useEffect(() => {
        if (!isValidCatalogType) {
            return;
        }

        let shouldUpdateState = true;

        vehiclesApi.getByCatalogType(catalogType).then((nextVehicles) => {
            if (shouldUpdateState) {
                setVehiclesState({
                    catalogType,
                    vehicles: nextVehicles,
                });
            }
        });

        return () => {
            shouldUpdateState = false;
        };
    }, [catalogType, isValidCatalogType]);

    const filteredVehicles = useFilteredVehicles(vehicles, selectedVehicleTypes);
    const sortedVehicles = useSortedVehicles(filteredVehicles, sortDirection);

    return {
        isFilterPending,
        isLoading,
        isSortPending,
        isValidCatalogType,
        selectedVehicleTypes,
        sortDirection,
        sortedVehicles,
        handleToggleDirection,
        handleVehicleTypeToggle,
    };
};
