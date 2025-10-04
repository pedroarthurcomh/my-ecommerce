import { eProductCategories } from "../enums/product-categories-enums";

export interface iProduct {
    id: string;
    name: string;
    description: string;
    image_url: string;
    category: eProductCategories;
    sizes: string[];
    colors: string[];
    price: number;
    originalPrice: number;
    created_at: string;
    sales: number;
}