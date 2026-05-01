import { useTransition } from 'react';
import { useSearchParams } from 'react-router';

import {
    getNextSortDirection,
    parseSortDirection,
} from '../lib/sort-direction';

const SORT_PARAM_NAME = 'sort';

export const useVehiclePriceSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const searchParamDirection = searchParams.get(SORT_PARAM_NAME);
    const direction = parseSortDirection(searchParamDirection);

    const handleToggleDirection = () => {
        const nextDirection = getNextSortDirection(direction);

        startTransition(() => {
            setSearchParams(
                (currentSearchParams) => {
                    const nextSearchParams = new URLSearchParams(currentSearchParams);
                    nextSearchParams.set(SORT_PARAM_NAME, nextDirection);

                    return nextSearchParams;
                },
                { replace: true },
            );
        });
    };

    return {
        direction,
        isPending,
        handleToggleDirection,
    };
};
