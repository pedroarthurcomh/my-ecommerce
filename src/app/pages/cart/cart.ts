import { Component, computed, inject } from '@angular/core';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { LucideAngularModule, ShoppingBag, Minus, Plus, Trash2, Truck, Tag } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzImageModule } from 'ng-zorro-antd/image';
import { ProductsService } from 'src/app/services/products-service';
import { NotificationService } from 'src/app/services/notification-service';
import { CartService } from 'src/app/services/cart-service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-cart',
  imports: [
    LucideAngularModule,
    NzTypographyModule,
    NzDividerModule,
    RouterLink,
    CommonModule,
    NzImageModule,
    ReactiveFormsModule,
    NgxMaskDirective,
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
  _cartService = inject(CartService);
  _notificationService = inject(NotificationService);
  _router = inject(Router);

  couponForm: FormGroup;
  shippingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.couponForm = this.fb.group({
      coupon: new FormControl<string>(''),
    });

    this.shippingForm = this.fb.group({
      shippingOption: this.fb.group({
        name: new FormControl<string>('sedex'),
        value: new FormControl<number>(25),
      }),
    });
  }

  cartItems = computed(() => {
    return this._cartService._cartItems();
  });

  clearCart() {
    this._cartService.clearCart();
  }

  updateShippingOption(option: 'sedex' | 'pac' | 'express') {
    this.shippingForm.patchValue({
      shippingOption: {
        name: `${option}`,
        value: option === 'sedex' ? 25 : option === 'pac' ? 15 : option === 'express' ? 35 : 0,
      },
    });
  }

  insertCoupon() {
    let coupon = this.couponForm.get('coupon')?.value;
    if (!coupon) return;

    this.couponForm.patchValue({ coupon: '' });
    this._notificationService.warn('Cupom inválido!');
  }

  calculateSubTotalOrder(): number {
    let storagedProducts = localStorage.getItem('cart') || '[]';
    let localProducts = JSON.parse(storagedProducts);
    let cartPrice = 0;

    for (let item of localProducts) {
      cartPrice = cartPrice + item.price * item.quantity;
    }
    return cartPrice;
  }

  calculateTotalOrder(): number {
    const shippingValue = this.shippingForm.get('shippingOption.value')?.value;
    const subtotal = this.calculateSubTotalOrder();
    return subtotal + shippingValue;
  }

  completeOrder() {
    this._notificationService.success('Pedido finalizado com sucesso!');
    this._cartService.clearCart();
    this._router.navigate(['/']);
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
