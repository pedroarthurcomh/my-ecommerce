import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiService } from '../services/api-service';
import { iProduct } from '../interfaces/product-interface';

export const productDetailResolver: ResolveFn<iProduct | null> = (route, state) => {
  const apiService = inject(ApiService);
  const productId = route.paramMap.get('id'); // Pega o ID da URL

  if (!productId) {
    return null;
  }
  
  return apiService.getProductById(productId);
};