import clsx from 'clsx';
import { NavLink } from 'react-router';

import type { NavigationT } from '../models/navigation-items';
import styles from './catalog-navigation.module.css';

const TabNavigation = ({ to, title }: NavigationT) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => clsx(styles.tab, isActive && styles.active)}
        >
            <span className={styles.label}>{title}</span>
        </NavLink>
    );
};

export default TabNavigation;
