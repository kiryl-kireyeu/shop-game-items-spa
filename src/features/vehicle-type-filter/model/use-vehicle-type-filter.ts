import { useMemo, useTransition } from 'react';
import { useSearchParams } from 'react-router';

import type { VehicleType } from '@/entities/vehicle/model/types';

import { parseVehicleTypesParams } from '../lib/vehicle-type-filter-params';

const VEHICLE_TYPES_PARAM_NAME = 'types';

export const useVehicleTypeFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const selectedTypes = useMemo(
        () => parseVehicleTypesParams(searchParams.getAll(VEHICLE_TYPES_PARAM_NAME)),
        [searchParams],
    );

    const handleVehicleTypeToggle = (type: VehicleType) => {
        const isSelected = selectedTypes.includes(type);

        startTransition(() => {
            setSearchParams(
                (currentSearchParams) => {
                    if (isSelected) {
                        currentSearchParams.delete(VEHICLE_TYPES_PARAM_NAME, type);
                    } else {
                        currentSearchParams.append(VEHICLE_TYPES_PARAM_NAME, type);
                    }

                    return currentSearchParams;
                },
                { replace: true },
            );
        });
    };

    return {
        isPending,
        selectedTypes,
        handleVehicleTypeToggle,
    };
};
