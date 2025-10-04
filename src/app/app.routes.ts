import { Routes } from '@angular/router';
import { DefaultLayout } from './layout/default/header';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products/products';
import { ProductDetails } from './pages/products/product-details/product-details';

export const routes: Routes = [
    {
        path: '',
        component: DefaultLayout,
        children: [
            {
                path: '',
                component: Products
            },
            {
                path: 'products/:id',
                component: ProductDetails
            },
            {
                path: 'cart',
                component: Cart
            }
        ]
    }
];
