import type { CSSProperties } from 'react';
import type { Vehicle } from '../../model/types';
import VehicleCard from '../vehicle-card/vehicle-card';
import styles from './vehicle-card-list.module.css';

type VehicleCardListProps = {
    vehicles: Vehicle[];
};

type AnimatedItemStyle = CSSProperties & {
    '--card-enter-delay': string;
};

const getAnimatedItemStyle = (index: number): AnimatedItemStyle => ({
    '--card-enter-delay': `${Math.min(index * 45, 360)}ms`,
});

const VehicleCardList = ({ vehicles }: VehicleCardListProps) => {
    if (vehicles.length === 0) {
        return <p className={styles.empty}>Техника не найдена</p>;
    }

    const listAnimationKey = vehicles.map((vehicle) => vehicle.id).join(':');

    return (
        <ul className={styles.list} key={listAnimationKey}>
            {vehicles.map((vehicle, index) => (
                <li
                key={vehicle.id}
                    className={styles.item}
                    style={getAnimatedItemStyle(index)}
                >
                    <VehicleCard vehicle={vehicle} />
                </li>
            ))}
        </ul>
    );
};

export default VehicleCardList;
