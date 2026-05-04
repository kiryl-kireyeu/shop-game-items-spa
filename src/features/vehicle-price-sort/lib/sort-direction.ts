import type { SortDirection } from '@/entities/vehicle/model/types';

export const DEFAULT_SORT_DIRECTION: SortDirection = 'asc';

export const isSortDirection = (value: string | null): value is SortDirection => {
    return value === 'asc' || value === 'desc';
};

export const getNextSortDirection = (direction: SortDirection): SortDirection => {
    return direction === 'asc' ? 'desc' : 'asc';
};

export const parseSortDirection = (value: string | null): SortDirection => {
    return isSortDirection(value) ? value : DEFAULT_SORT_DIRECTION;
};
