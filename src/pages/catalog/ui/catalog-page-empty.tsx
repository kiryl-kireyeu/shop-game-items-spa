import PageTitle from '@/shared/ui/page-title/page-title';
import CatalogNavigation from '@/widgets/catalog-navigation/ui/catalog-navigation';

import styles from './catalog-page.module.css';

const CatalogPageEmpty = () => {
    return (
        <section className={styles.root}>
            <PageTitle title="Техника" />
            <CatalogNavigation />
            <p className={styles.notFound}>Такой страницы не существует</p>
        </section>
    );
};

export default CatalogPageEmpty;
