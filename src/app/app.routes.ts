import { Routes } from '@angular/router';
import { DefaultLayout } from './layout/default/default-layout';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products/products';
import { ProductDetails } from './pages/products/product-details/product-details';
import { productDetailResolver } from './resolvers/product-detail.resolver';
import { Favorites } from './pages/favorites/favorites';
import { productTitleResolver } from './resolvers/product-title.resolver';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: Products,
        title: 'E-commerce | Página Inicial',
      },
      {
        path: 'product/:id',
        component: ProductDetails,
        title: productTitleResolver,
        resolve: { product: productDetailResolver },
      },
      {
        path: 'favorites',
        component: Favorites,
        title: 'E-commerce | Favoritos',
      },
      {
        path: 'cart',
        component: Cart,
        title: 'E-commerce | Carrinho',
      },
    ],
  },
];
