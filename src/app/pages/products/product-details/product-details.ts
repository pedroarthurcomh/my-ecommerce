import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image';
import { LucideAngularModule, ShoppingCart, Plus, Minus } from 'lucide-angular';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { iProduct } from 'src/app/interfaces/product-interface';
import { ProductCategoryLabels } from 'src/app/enums/product-categories-enum';
import { ProductsService } from 'src/app/services/products-service';
import { CommonModule } from '@angular/common';
import { NotificationService } from 'src/app/services/notification-service';
import { iCartProduct } from 'src/app/interfaces/cart-product-interface';
import { CartService } from 'src/app/services/cart-service';

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
export class ProductDetails {
  readonly shoppingCart = ShoppingCart;
  readonly plus = Plus;
  readonly minus = Minus;

  route = inject(ActivatedRoute);
  _productsService = inject(ProductsService);
  _cartService = inject(CartService);
  _notificationService = inject(NotificationService);

  product: iProduct | null = null;
  public ProductCategoryLabels = ProductCategoryLabels;

  size: 'P' | 'M' | 'G' | 'GG' = 'P';
  currentColor: string = '';
  quantity: number = 1;

  constructor() {
    this.route.data.subscribe(({ product }) => {
      this.product = product;
      this.currentColor = this.product!.colors[0];
    });
  }

  updateQuantity(operator: string) {
    if (operator === '+') this.quantity += 1;
    else if (operator === '-') this.quantity -= 1;
  }

  selectSize(size: 'P' | 'M' | 'G' | 'GG'): void {
    this.size = size;
  }

  selectColor(color: string) {
    this.currentColor = color;
  }

  public isSelectedColorEquals(loopColor: string, selectedColor: string): boolean {
    const Lcolor = loopColor.toLowerCase();
    const Scolor = selectedColor.toLocaleLowerCase();
    return Lcolor === Scolor;
  }

  submit(): void {
    if (!this.product) return;

    const { description, colors, created_at, sales, sizes, originalPrice, ...currentProduct } =
      this.product;

    let product: iCartProduct = {
      ...currentProduct,
      size: this.size,
      color: this.currentColor,
      quantity: this.quantity,
    };
    this._cartService.addToCart(product);
    this._notificationService.success('Produto adicionado ao carrinho');
  }
}
