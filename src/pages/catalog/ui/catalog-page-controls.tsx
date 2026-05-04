import type { SortDirection, VehicleType } from '@/entities/vehicle/model/types';
import VehiclePriceSort from '@/features/vehicle-price-sort/ui/vehicle-price-sort';
import VehicleTypeFilter from '@/features/vehicle-type-filter/ui/vehicle-type-filter';

import styles from './catalog-page.module.css';

type CatalogPageControlsProps = {
    count: number;
    isFilterPending: boolean;
    isSortPending: boolean;
    selectedVehicleTypes: VehicleType[];
    sortDirection: SortDirection;
    onSortToggle: () => void;
    onVehicleTypeToggle: (type: VehicleType) => void;
};

const CatalogPageControls = ({
    count,
    isFilterPending,
    isSortPending,
    selectedVehicleTypes,
    sortDirection,
    onSortToggle,
    onVehicleTypeToggle,
}: CatalogPageControlsProps) => {
    return (
        <div className={styles.controls}>
            <p className={styles.summary}>
                Показано:
                <span>{count}</span>
            </p>
            <VehiclePriceSort
                direction={sortDirection}
                isPending={isSortPending}
                onToggle={onSortToggle}
            />
            <VehicleTypeFilter
                isPending={isFilterPending}
                selectedTypes={selectedVehicleTypes}
                onToggle={onVehicleTypeToggle}
            />
        </div>
    );
};

export default CatalogPageControls;
