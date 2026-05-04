import type { Vehicle } from '../../model/types';

import { memo } from 'react';
import clsx from 'clsx';

import styles from './vehicle-card.module.css';

type VehicleCardProps = {
    vehicle: Vehicle;
    currency?: string;
    className?: string;
};

const VehicleCard = ({ vehicle, currency = 'USD', className }: VehicleCardProps) => {
    const { image, price, title, discount, old_price, description } = vehicle;
    const imageSrc = `/vehicles/${image}`;

    return (
        <article className={clsx(styles.card, className)}>
            {discount > 0 && <span className={styles.discount}>-{discount}%</span>}

            <div className={styles.textContent}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.imageWrapper}>
                <img className={styles.image} src={imageSrc} alt={title} />
            </div>

            <p className={styles.priceRow}>
                {discount > 0 && <s className={styles.oldPrice}>{old_price}</s>}
                <span className={styles.price}>
                    {price} {currency}
                </span>
            </p>
        </article>
    );
};

export default memo(VehicleCard);
