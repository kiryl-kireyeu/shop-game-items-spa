import type { Vehicle } from '../../model/types';
import VehicleCard from '../vehicle-card/vehicle-card';
import styles from './vehicle-card-list.module.css';

type VehicleCardListProps = {
    vehicles: Vehicle[];
};

const VehicleCardList = ({ vehicles }: VehicleCardListProps) => {
    if (vehicles.length === 0) {
        return <p className={styles.empty}>Техника не найдена</p>;
    }

    return (
        <ul className={styles.list}>
            {vehicles.map((vehicle) => (
                <li className={styles.item} key={vehicle.id}>
                    <VehicleCard vehicle={vehicle} />
                </li>
            ))}
        </ul>
    );
};

export default VehicleCardList;
