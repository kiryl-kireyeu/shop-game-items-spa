import { navigationItems } from '../models/navigation-items';
import styles from './catalog-navigation.module.css';
import TabNavigation from './tab-navigation';

const CatalogNavigation = () => {
    return (
        <nav className={styles.root} aria-label="Разделы каталога">
            {navigationItems.map(({ to, title }) => (
                <TabNavigation key={to} title={title} to={to} />
            ))}
        </nav>
    );
};

export default CatalogNavigation;
