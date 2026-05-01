import type { Vehicle } from '@/entities/vehicle/model/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { vehiclesApi } from '@/entities/vehicle/api/vehicles-api';
import { isCatalogType } from '@/entities/vehicle/model/guards';
import VehicleCardList from '@/entities/vehicle/ui/vehicle-card-list/vehicle-card-list';

import { useSortedVehicles } from '@/features/vehicle-price-sort/model/use-sorted-vehicles';
import { useVehiclePriceSort } from '@/features/vehicle-price-sort/model/use-vehicle-price-sort';
import VehiclePriceSort from '@/features/vehicle-price-sort/ui/vehicle-price-sort';

import { useFilteredVehicles } from '@/features/vehicle-type-filter/model/use-filtered-vehicles';
import { useVehicleTypeFilter } from '@/features/vehicle-type-filter/model/use-vehicle-type-filter';
import VehicleTypeFilter from '@/features/vehicle-type-filter/ui/vehicle-type-filter';

import PageTitle from '@/shared/ui/page-title/page-title';
import CatalogNavigation from '@/widgets/catalog-navigation/ui/catalog-navigation';

import styles from './catalog-page.module.css';

const CatalogPage = () => {
    const { catalogType } = useParams();
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

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

    useEffect(() => {
        if (!isValidCatalogType) {
            return;
        }

        let shouldUpdateState = true;

        vehiclesApi.getByCatalogType(catalogType).then((nextVehicles) => {
            if (shouldUpdateState) {
                setVehicles(nextVehicles);
            }
        });

        return () => {
            shouldUpdateState = false;
        };
    }, [catalogType, isValidCatalogType]);

    const filteredVehicles = useFilteredVehicles(vehicles, selectedVehicleTypes);
    const sortedVehicles = useSortedVehicles(filteredVehicles, sortDirection);

    if (!isValidCatalogType) {
        return (
            <section className={styles.root}>
                <PageTitle title="Техника" />
                <CatalogNavigation />
                <p className={styles.notFound}>Такой страницы не существует</p>
            </section>
        );
    }

    return (
        <section className={styles.root}>
            <PageTitle title="Техника" />
            <CatalogNavigation />

            <div className={styles.controls}>
                <p className={styles.summary}>
                    Показано:
                    <span>{sortedVehicles.length}</span>
                </p>
                <VehiclePriceSort
                    direction={sortDirection}
                    isPending={isSortPending}
                    onToggle={handleToggleDirection}
                />
                <VehicleTypeFilter
                    isPending={isFilterPending}
                    selectedTypes={selectedVehicleTypes}
                    onToggle={handleVehicleTypeToggle}
                />
            </div>

            <div className={styles.results}>
                <div className={styles.resultsContent}>
                    {sortedVehicles.length === 0 ? (
                        <p className={styles.empty}>Техника не найдена</p>
                    ) : (
                        <VehicleCardList vehicles={sortedVehicles} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default CatalogPage;
