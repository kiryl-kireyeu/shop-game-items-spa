import type { VehicleType } from '@/entities/vehicle/model/types';
import IconToggleButton from '@/shared/ui/icon-toggle-button/icon-toggle-button';

import { vehicleTypeFilterItems } from '../model/filter-items';
import styles from './vehicle-type-filter.module.css';

type VehicleTypeFilterProps = {
    isPending?: boolean;
    selectedTypes: VehicleType[];
    onToggle: (type: VehicleType) => void;
};

const VehicleTypeFilter = ({
    isPending = false,
    selectedTypes,
    onToggle,
}: VehicleTypeFilterProps) => {
    return (
        <div
            className={styles.root}
            role="group"
            aria-busy={isPending}
            aria-label="Фильтр по типу техники"
        >
            <span className={styles.label}>Показать:</span>

            <div className={styles.list}>
                {vehicleTypeFilterItems.map(({ id, iconSrc, label }) => (
                    <IconToggleButton
                        active={selectedTypes.includes(id)}
                        iconSrc={iconSrc}
                        key={id}
                        label={label}
                        onClick={() => onToggle(id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default VehicleTypeFilter;
