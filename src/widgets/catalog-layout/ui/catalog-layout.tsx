import { Outlet } from 'react-router';

import PageTitle from '@/shared/ui/page-title/page-title';
import CatalogNavigation from '@/widgets/catalog-navigation/ui/catalog-navigation';

import styles from './catalog-layout.module.css';

const CatalogLayout = () => {
    return (
        <section className={styles.root}>
            <PageTitle title="Техника" />
            <CatalogNavigation />

            <div className={styles.controls}>Catalog controls</div>

            <div className={styles.results}>
                <div className={styles.resultsContent}>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default CatalogLayout;
