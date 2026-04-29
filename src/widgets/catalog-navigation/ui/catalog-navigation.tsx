import { NavLink } from 'react-router';

import { navigationItems } from '../models/navigation-items';
import styles from './catalog-navigation.module.css';

const CatalogNavigation = () => {
    return (
        <nav className={styles.root} aria-label="Разделы каталога">
            {navigationItems.map(({ title, to }) => (
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                    key={to}
                    to={to}
                >
                    <span className={styles.label}>{title}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default CatalogNavigation;
