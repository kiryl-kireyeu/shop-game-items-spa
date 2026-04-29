import { Outlet } from 'react-router';

import Container from '@/shared/ui/container/container';

import styles from './root-layout.module.css';

const RootLayout = () => {
    return (
        <main className={styles.root}>
            <Container>
                <Outlet />
            </Container>
        </main>
    );
};

export default RootLayout;
