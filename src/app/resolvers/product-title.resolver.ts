import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiService } from '../services/api-service';
import { map } from 'rxjs';

export const productTitleResolver: ResolveFn<string> = (route, state) => {
  const productId = route.paramMap.get('id');

  const _apiService = inject(ApiService);

  if (!productId) {
    return 'Produto não encontrado';
  }

  return _apiService.getProductById(productId).pipe(
    map((product) => {
      if (product) return `E-commerce | ${product.name}`;

      return 'Produto não encontrado';
    }),
  );
};
