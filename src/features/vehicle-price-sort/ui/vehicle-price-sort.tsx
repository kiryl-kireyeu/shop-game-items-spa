import clsx from 'clsx';

import type { SortDirection } from '@/entities/vehicle/model/types';
import IconToggleButton from '@/shared/ui/icon-toggle-button/icon-toggle-button';

import styles from './vehicle-price-sort.module.css';

type VehiclePriceSortProps = {
    direction: SortDirection;
    isPending?: boolean;
    onToggle: () => void;
};

const VehiclePriceSort = ({ direction, isPending = false, onToggle }: VehiclePriceSortProps) => {
    return (
        <div className={styles.root}>
            <span className={styles.label}>Сортировать:</span>
            <IconToggleButton
                active={false}
                disableHover
                aria-busy={isPending}
                label={
                    direction === 'asc'
                        ? 'Сортировка по цене: по возрастанию'
                        : 'Сортировка по цене: по убыванию'
                }
                iconClassName={clsx(styles.icon, direction === 'desc' && styles.iconDesc)}
                iconSrc="/icons/arrow_down.svg"
                onClick={onToggle}
            />
        </div>
    );
};

export default VehiclePriceSort;
