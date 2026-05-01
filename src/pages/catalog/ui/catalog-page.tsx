import VehicleCardList from '@/entities/vehicle/ui/vehicle-card-list/vehicle-card-list';
import PageTitle from '@/shared/ui/page-title/page-title';
import CatalogNavigation from '@/widgets/catalog-navigation/ui/catalog-navigation';

import { useCatalogPage } from '../model/use-catalog-page';
import CatalogPageControls from './catalog-page-controls';
import CatalogPageEmpty from './catalog-page-empty';
import styles from './catalog-page.module.css';

const CatalogPage = () => {
    const {
        isFilterPending,
        isLoading,
        isSortPending,
        isValidCatalogType,
        selectedVehicleTypes,
        sortDirection,
        sortedVehicles,
        handleToggleDirection,
        handleVehicleTypeToggle,
    } = useCatalogPage();

    if (!isValidCatalogType) {
        return <CatalogPageEmpty />;
    }

    return (
        <section className={styles.root}>
            <PageTitle title="Техника" />
            <CatalogNavigation />

            <CatalogPageControls
                count={sortedVehicles.length}
                isFilterPending={isFilterPending}
                isSortPending={isSortPending}
                selectedVehicleTypes={selectedVehicleTypes}
                sortDirection={sortDirection}
                onSortToggle={handleToggleDirection}
                onVehicleTypeToggle={handleVehicleTypeToggle}
            />

            <div className={styles.results}>
                <div className={styles.resultsContent}>
                    {isLoading ? (
                        <p className={styles.loading}>Loading....</p>
                    ) : (
                        <VehicleCardList vehicles={sortedVehicles} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default CatalogPage;
