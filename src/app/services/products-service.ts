import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
    
  calculateDiscount(originalPrice: number, price: number): number {
    if (originalPrice <= price) return 0;

    const discount = ((originalPrice - price) / originalPrice) * 100;
    return Math.round(discount);
  }
}
