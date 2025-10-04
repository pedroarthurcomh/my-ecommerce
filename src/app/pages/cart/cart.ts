import { Component, inject } from '@angular/core';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { LucideAngularModule, ShoppingBag, Minus, Plus, Trash2, Truck, Tag } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';
import { iProduct } from 'src/app/interfaces/product-interface';
import { CommonModule } from '@angular/common';
import { NzImageModule } from 'ng-zorro-antd/image';
import { ProductsService } from 'src/app/services/products-service';
import { NotificationService } from 'src/app/services/notification-service';

@Component({
  selector: 'app-cart',
  imports: [
    LucideAngularModule,
    NzTypographyModule,
    NzDividerModule,
    RouterLink,
    CommonModule,
    NzImageModule,
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  readonly bag = ShoppingBag;
  readonly plus = Plus;
  readonly minus = Minus;
  readonly trash = Trash2;
  readonly truck = Truck;
  readonly tag = Tag;

  _productsService = inject(ProductsService);
  _notificationService = inject(NotificationService)
  _router = inject(Router)

  cartItems: iProduct[] = [
    {
      id: 'cbd6d9c9-8403-4c69-989f-42586118140b',
      name: 'Camisa Clássica E-commerce',
      description:
        'Camiseta de algodão premium com design exclusivo Vortex. Perfeita para o dia a dia, combina conforto e estilo. Material 100% algodão egípcio, respirável e durável.',
      image_url:
        'https://preview--vortex-store-ui.lovable.app/assets/product-tshirt-1-Bn3P9mCJ.jpg',
      category: 't-shirts',
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['#FFFFFF', '#000000', '#808080'],
      price: 89.9,
      originalPrice: 129.9,
      created_at: '2023-10-03',
      sales: 451,
    },
    {
      id: 'b881c2a1-0334-4c5e-b53f-228788f82bc6',
      name: 'Caneca Premium E-commerce',
      description:
        'Caneca de cerâmica premium com capacidade de 350ml. Design exclusivo e acabamento de alta qualidade.',
      image_url: 'https://preview--vortex-store-ui.lovable.app/assets/product-mug-1-y7egaSer.jpg',
      category: 'mugs',
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['#FFFFFF', '#000000', '#808080'],
      price: 49.9,
      originalPrice: 49.9,
      created_at: '2023-10-02',
      sales: 127,
    },
  ];

  insertCoupon(coupon: string) {
    if(!coupon) return

    this._notificationService.warn('Cupom inválido!')
  }

  completeOrder() {
    this._notificationService.success('Pedido finalizado com sucesso!')
    this._router.navigate(['/'])
  }
}
