import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';

import { vehiclesApi } from '@/entities/vehicle/api/vehicles-api';
import { isCatalogType } from '@/entities/vehicle/model/guards';
import type { Vehicle, VehicleType } from '@/entities/vehicle/model/types';
import VehicleTypeFilter from '@/features/vehicle-type-filter/ui/vehicle-type-filter';
import PageTitle from '@/shared/ui/page-title/page-title';
import CatalogNavigation from '@/widgets/catalog-navigation/ui/catalog-navigation';

import styles from './catalog-page.module.css';

const CatalogPage = () => {
    const { catalogType } = useParams();
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<VehicleType[]>([]);

    const isValidCatalogType = isCatalogType(catalogType);

    const handleVehicleTypeToggle = (type: VehicleType) => {
        setSelectedVehicleTypes((currentTypes) => {
            if (currentTypes.includes(type)) {
                return currentTypes.filter((currentType) => currentType !== type);
            }

            return [...currentTypes, type];
        });
    };

    useEffect(() => {
        if (!isValidCatalogType) {
            return;
        }

        let shouldUpdateState = true;

        vehiclesApi
            .getByCatalogType(catalogType)
            .then((nextVehicles) => {
                if (shouldUpdateState) {
                    setVehicles(nextVehicles);
                }
            });

        return () => {
            shouldUpdateState = false;
        };
    }, [catalogType, isValidCatalogType]);

    const filteredVehicles = useMemo(() => {
        if (selectedVehicleTypes.length === 0) {
            return vehicles;
        }

        return vehicles.filter((vehicle) => selectedVehicleTypes.includes(vehicle.vehicle_type));
    }, [selectedVehicleTypes, vehicles]);

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
                <p className={styles.summary}>Найдено: {filteredVehicles.length}</p>
                <VehicleTypeFilter
                    selectedTypes={selectedVehicleTypes}
                    onToggle={handleVehicleTypeToggle}
                />
            </div>

            <div className={styles.results}>
                <div className={styles.resultsContent}>
                    {filteredVehicles.length === 0 ? (
                        <p className={styles.empty}>Техника не найдена</p>
                    ) : (
                        <ul className={styles.list}>
                            {filteredVehicles.map((vehicle) => (
                                <li className={styles.item} key={vehicle.id}>
                                    {vehicle.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CatalogPage;
