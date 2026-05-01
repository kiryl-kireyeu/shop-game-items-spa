import IconToggleButton from '@/shared/ui/icon-toggle-button/icon-toggle-button';
import styles from './vehicle-price-sort.module.css';

const VehiclePriceSort = () => {
    return (
        <div className={styles.root}>
            <span className={styles.label}>Сортировать:</span>
            <IconToggleButton
                active={false} 
                label='Сортировка по цене'
                iconSrc='/icons/lightTank.svg'
                onClick={() => {}}
            />
        </div>
    );
}

export default VehiclePriceSort;