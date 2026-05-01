import { NavLink } from 'react-router';

import { navigationItems, type NavigationT } from '../models/navigation-items';
import styles from './catalog-navigation.module.css';
import clsx from 'clsx';

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

export const TabNavigation = ({ to, title }: NavigationT) => {
    return (
        <NavLink to={to} className={({ isActive }) => clsx(styles.tab, isActive && styles.active)}>
            <span>{title}</span>
        </NavLink>
    );
};
