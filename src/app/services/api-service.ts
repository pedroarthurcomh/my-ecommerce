import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iProduct } from '../interfaces/product-interface';
import { eProductCategories } from '../enums/product-categories-enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly API_URL: string = environment.API_URL;

  getProductsByCategory(category?: eProductCategories): Observable<iProduct[]> {
    if (category === 'all') return this.httpClient.get<iProduct[]>(`${this.API_URL}`);

    return this.httpClient.get<iProduct[]>(`${this.API_URL}?category=${category}`);
  }

  getProductById(id: string): Observable<iProduct> {
    return this.httpClient.get<iProduct>(`${this.API_URL}/${id}`);
  }
}
