import { useState } from 'react';
import clsx from 'clsx';

import type { SortDirection } from '@/entities/vehicle/model/types';
import IconToggleButton from '@/shared/ui/icon-toggle-button/icon-toggle-button';

import styles from './vehicle-price-sort.module.css';

const VehiclePriceSort = () => {
    const [direction, setDirection] = useState<SortDirection>('asc');

    const handleToggleDirection = () => {
        setDirection((currentDirection) => (currentDirection === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <div className={styles.root}>
            <span className={styles.label}>Сортировать:</span>
            <IconToggleButton
                active={false}
                disableHover
                label={
                    direction === 'asc'
                        ? 'Сортировка по цене: по возрастанию'
                        : 'Сортировка по цене: по убыванию'
                }
                iconClassName={clsx(styles.icon, direction === 'desc' && styles.iconDesc)}
                iconSrc="/icons/arrow_down.svg"
                onClick={handleToggleDirection}
            />
        </div>
    );
};

export default VehiclePriceSort;
