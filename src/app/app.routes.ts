import { Routes } from '@angular/router';
import { Header } from './layout/header/header';

export const routes: Routes = [
    {
        path: '',
        component: Header,
        children: [
            
        ]
    }
];
