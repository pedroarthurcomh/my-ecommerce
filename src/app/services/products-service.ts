import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
    
  calculateDiscount(originalPrice: number, price: number): number {
    if (originalPrice <= price) return 0;

    const discount = ((originalPrice - price) / originalPrice) * 100;
    return Math.round(discount);
  }
}
