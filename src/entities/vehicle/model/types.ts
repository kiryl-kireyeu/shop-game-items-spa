export type VehicleType = 'lightTank' | 'mediumTank' | 'heavyTank' | 'AT-SPG' | 'SPG';

export type SortDirection = 'asc' | 'desc';

export type CatalogType = 'premium' | 'collection';

export interface Vehicle {
    id: string;
    title: string;
    description: string;
    image: string;
    discount: number;
    price: number;
    old_price: number;
    vehicle_type: VehicleType;
    premium: boolean;
}
