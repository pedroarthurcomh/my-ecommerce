import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { eProductCategories } from '../enums/product-categories-enums';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);

  getProductsByCategory(category: eProductCategories): Observable<any> {
    return this.httpClient.get('http://localhost:3000/products');
  }
  
}
