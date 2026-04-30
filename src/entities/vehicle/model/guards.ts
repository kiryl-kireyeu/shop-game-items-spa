import type { CatalogType } from './types';

const catalogTypes: CatalogType[] = ['premium', 'collection'];

export const isCatalogType = (value: string | undefined): value is CatalogType => {
    return catalogTypes.includes(value as CatalogType);
};
