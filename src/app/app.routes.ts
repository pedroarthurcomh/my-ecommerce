import { Routes } from '@angular/router';
import { Header } from './layout/header/header';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products/products';

export const routes: Routes = [
    {
        path: '',
        component: Header,
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
