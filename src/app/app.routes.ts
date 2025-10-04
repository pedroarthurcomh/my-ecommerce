import { Routes } from '@angular/router';
import { DefaultLayout } from './layout/default/header';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products/products';

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
                path: 'cart',
                component: Cart
            }
        ]
    }
];
