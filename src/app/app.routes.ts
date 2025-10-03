import { Routes } from '@angular/router';
import { Header } from './layout/header/header';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
    {
        path: '',
        component: Header,
        children: [
            {
                path: 'cart',
                component: Cart
            }
        ]
    }
];
