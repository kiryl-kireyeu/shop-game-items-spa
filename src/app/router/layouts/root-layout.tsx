import { Outlet } from 'react-router';

import styles from './root-layout.module.css';

const RootLayout = () => {
    return (
        <main className={styles.root}>
            <Outlet />
        </main>
    );
};

export default RootLayout;
