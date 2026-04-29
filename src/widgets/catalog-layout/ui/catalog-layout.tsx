import { useState } from 'react';
import { Outlet } from 'react-router';

import type { VehicleType } from '@/entities/vehicle/model/types';
import VehicleTypeFilter from '@/features/vehicle-type-filter/ui/vehicle-type-filter';
import PageTitle from '@/shared/ui/page-title/page-title';
import CatalogNavigation from '@/widgets/catalog-navigation/ui/catalog-navigation';

import styles from './catalog-layout.module.css';

const CatalogLayout = () => {
    const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<VehicleType[]>([]);

    const handleVehicleTypeToggle = (type: VehicleType) => {
        setSelectedVehicleTypes((currentTypes) => {
            if (currentTypes.includes(type)) {
                return currentTypes.filter((currentType) => currentType !== type);
            }

            return [...currentTypes, type];
        });
    };

    return (
        <section className={styles.root}>
            <PageTitle title="Техника" />
            <CatalogNavigation />

            <div className={styles.controls}>
                <VehicleTypeFilter
                    selectedTypes={selectedVehicleTypes}
                    onToggle={handleVehicleTypeToggle}
                />
            </div>

            <div className={styles.results}>
                <div className={styles.resultsContent}>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default CatalogLayout;
