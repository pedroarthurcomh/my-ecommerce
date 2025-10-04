import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { iProduct } from 'src/app/interfaces/product-interface';
import { ProductCategoryLabels } from 'src/app/enums/product-categories-enums';
import { ProductsService } from 'src/app/services/products-service';
import { CommonModule } from '@angular/common';
import { NotificationService } from 'src/app/services/notification-service';

@Component({
  selector: 'app-product-details',
  imports: [
    RouterLink,
    NzBreadCrumbModule,
    NzTypographyComponent,
    FormsModule,
    NzRadioModule,
    NzImageModule,
    NzDividerModule,
    LucideAngularModule,
    CommonModule,
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {
  readonly shoppingCart = ShoppingCart;
  route = inject(ActivatedRoute);
  _productsService = inject(ProductsService);
  _notificationService = inject(NotificationService);

  product: iProduct | null = null;
  public ProductCategoryLabels = ProductCategoryLabels;

  size: 'P' | 'M' | 'G' | 'GG' = 'P';
  quantity: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.route.data.subscribe(({ product }) => {
      this.product = product;
    });
  }

  changeSize(value: 'P' | 'M' | 'G' | 'GG'): void {
    this.size = value;
  }

  submit(): void {
    if (!this.product) return;

    this._notificationService.success('Produto adicionado ao carrinho')
    console.log(this.product, this.size);
  }
}
