import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, AsyncPipe } from '@angular/common';

import { NzTypographyComponent } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { LucideAngularModule, MoveRight, Heart } from 'lucide-angular';
import { eProductCategories, ProductCategoryLabels } from 'src/app/enums/product-categories-enums';
import { ApiService } from 'src/app/services/api-service';
import { Observable } from 'rxjs';
import { iProduct } from 'src/app/interfaces/product-interface';
import { ProductsService } from 'src/app/services/products-service';
import { NotificationService } from 'src/app/services/notification-service';

@Component({
  selector: 'app-products',
  imports: [
    NzTypographyComponent,
    LucideAngularModule,
    RouterLink,
    FormsModule,
    NzRadioModule,
    NzGridModule,
    CommonModule,
    AsyncPipe,
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  // Icons
  readonly moveRight = MoveRight;
  readonly heart = Heart;

  products$!: Observable<iProduct[]>;
  currentCategory: eProductCategories = eProductCategories.ALL;
  public ProductCategoryLabels = ProductCategoryLabels;
  public filterOptions: eProductCategories[] = [];

  private _apiService = inject(ApiService);
  _productsService = inject(ProductsService);
  _notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.filterOptions = Object.values(eProductCategories) as eProductCategories[];
    this.products$ = this._apiService.getProductsByCategory(this.currentCategory);
  }

  handleCategoryChange(category: eProductCategories): void {
    this.currentCategory = category;
    console.log(this.currentCategory);
  }

  addToFavorites(product: iProduct): void {
    //TODO: add product to Favorites List
    this._notificationService.success('Adicionado aos favoritos!');
  }
}
