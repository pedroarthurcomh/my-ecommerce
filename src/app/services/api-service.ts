import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { eProductCategories } from '../enums/product-categories-enums';
import { iProduct } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);

  getProductsByCategory(category: eProductCategories): Observable<iProduct[]> {
    return this.httpClient.get<iProduct[]>('http://localhost:3000/products');
  }

  getProductById(id: string): Observable<iProduct> {
    return this.httpClient.get<iProduct>(`http://localhost:3000/products/${id}`);
  }
  
}
